import unittest

from sentiment_analyzer import analyze_sentiment, build_message


class SentimentAnalyzerTests(unittest.TestCase):
    def test_positive_sentiment(self):
        result = analyze_sentiment("I love this excellent and wonderful project.")

        self.assertEqual(result.sentiment, "Positive")
        self.assertIn("Sentiment: Positive", build_message(result))

    def test_negative_sentiment(self):
        result = analyze_sentiment("This was a terrible and disappointing problem.")

        self.assertEqual(result.sentiment, "Negative")
        self.assertIn("Sentiment: Negative", build_message(result))

    def test_neutral_sentiment(self):
        result = analyze_sentiment("The package is on the table.")

        self.assertEqual(result.sentiment, "Neutral")
        self.assertIn("Sentiment: Neutral", build_message(result))


if __name__ == "__main__":
    unittest.main()
