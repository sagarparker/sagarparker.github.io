"""Simple sentiment analyzer for a text string.

The program uses TextBlob when it is installed. If TextBlob is unavailable,
it falls back to a small transparent word-score analyzer so the assignment can
still run in a clean Python environment.
"""

from __future__ import annotations

import argparse
import re
from dataclasses import dataclass


POSITIVE_WORDS = {
    "amazing",
    "awesome",
    "beautiful",
    "best",
    "calm",
    "delightful",
    "enjoy",
    "excellent",
    "fantastic",
    "good",
    "great",
    "happy",
    "helpful",
    "impressive",
    "love",
    "loved",
    "nice",
    "perfect",
    "pleasant",
    "positive",
    "recommend",
    "smooth",
    "success",
    "wonderful",
}

NEGATIVE_WORDS = {
    "angry",
    "awful",
    "bad",
    "broken",
    "confusing",
    "disappointing",
    "dislike",
    "fail",
    "failed",
    "hate",
    "hated",
    "horrible",
    "negative",
    "poor",
    "problem",
    "sad",
    "terrible",
    "unhappy",
    "unpleasant",
    "worst",
}


@dataclass(frozen=True)
class SentimentResult:
    text: str
    sentiment: str
    polarity: float
    method: str


def _fallback_polarity(text: str) -> float:
    words = re.findall(r"[a-z']+", text.lower())
    if not words:
        return 0.0

    positive_count = sum(word in POSITIVE_WORDS for word in words)
    negative_count = sum(word in NEGATIVE_WORDS for word in words)
    scored_words = positive_count + negative_count

    if scored_words == 0:
        return 0.0
    return (positive_count - negative_count) / scored_words


def _classify_polarity(polarity: float) -> str:
    if polarity > 0.05:
        return "Positive"
    if polarity < -0.05:
        return "Negative"
    return "Neutral"


def analyze_sentiment(text: str) -> SentimentResult:
    """Return Positive, Negative, or Neutral for the supplied text."""
    try:
        from textblob import TextBlob  # type: ignore

        polarity = float(TextBlob(text).sentiment.polarity)
        method = "TextBlob"
    except Exception:
        polarity = _fallback_polarity(text)
        method = "Fallback lexicon"

    return SentimentResult(
        text=text,
        sentiment=_classify_polarity(polarity),
        polarity=polarity,
        method=method,
    )


def build_message(result: SentimentResult) -> str:
    return (
        f'Sentiment: {result.sentiment} '
        f'(polarity={result.polarity:.2f}, method={result.method})'
    )


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Classify a text string as Positive, Negative, or Neutral."
    )
    parser.add_argument("text", help="Text string to analyze")
    args = parser.parse_args()

    result = analyze_sentiment(args.text)
    print(f"Input: {result.text}")
    print(build_message(result))


if __name__ == "__main__":
    main()
