# Sentiment Analysis Assignment

This small Python program takes a text string as input and prints whether the
sentiment is `Positive`, `Negative`, or `Neutral`.

## Files

- `sentiment_analyzer.py`: command-line sentiment analyzer.
- `test_sentiment_analyzer.py`: tests for all three sentiment classes.

## Run the Program

```bash
python3 sentiment_analyzer.py "I love this excellent project."
```

## Run Tests

```bash
python3 -m unittest test_sentiment_analyzer.py
```

## Try a Dataset-Style CSV

```bash
python3 evaluate_dataset.py
```

## Notes

The assignment hint suggests TextBlob. This program uses TextBlob automatically
when it is installed. If TextBlob is not installed, it uses a small fallback
lexicon so the program and tests still run.
