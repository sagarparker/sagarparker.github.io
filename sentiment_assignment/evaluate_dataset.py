"""Evaluate the sentiment analyzer on a CSV dataset with text and label columns."""

from __future__ import annotations

import csv
from pathlib import Path

from sentiment_analyzer import analyze_sentiment


def evaluate(path: Path) -> tuple[int, int]:
    correct = 0
    total = 0

    with path.open(newline="", encoding="utf-8") as handle:
        reader = csv.DictReader(handle)
        for row in reader:
            expected = row["label"]
            predicted = analyze_sentiment(row["text"]).sentiment
            total += 1
            correct += predicted == expected
            print(
                f'{total}. expected={expected:<8} predicted={predicted:<8} '
                f'text="{row["text"]}"'
            )

    return correct, total


def main() -> None:
    dataset_path = Path("sample_sentiment_dataset.csv")
    correct, total = evaluate(dataset_path)
    accuracy = correct / total if total else 0
    print(f"\nAccuracy: {correct}/{total} = {accuracy:.1%}")


if __name__ == "__main__":
    main()
