# # import nltk
# # import sys
# # from nltk.tokenize import word_tokenize
# # from nltk.sentiment.util import mark_negation
# # import csv

# # # Download necessary NLTK resources
# # nltk.download('punkt')

# # # Load words and their sentiments from the CSV file
# # def load_sentiment_words(filename):
# #     with open(filename, 'r', encoding='utf-8') as file:
# #         reader = csv.DictReader(file)
# #         return {row['word']: row['sentiment'] for row in reader}

# # # Load your dataset
# # sentiment_words = load_sentiment_words('words_sentiment.csv')  # Replace with your actual filename

# # # Function to determine sentiment of a word
# # def get_word_sentiment(word):
# #     return sentiment_words.get(word, 'undefined')  # Default to 'undefined' if word is not found

# # # Function to analyze sentiment of a sentence
# # def analyze_sentiment(sentence):
# #     words = word_tokenize(sentence.lower())
# #     words = mark_negation(words)
# #     sentiment = [(word, get_word_sentiment(word)) for word in words]
# #     return sentiment

# # # Example usage
# # print("Enter text (press Enter to exit):")
# # while True:
# #     text = input().strip()
# #     if not text:
# #         break
# #     sentiment_analysis = analyze_sentiment(text)
# #     print("Word\t\tSentiment")
# #     for word, sentiment in sentiment_analysis:
# #         print(f"{word}\t\t{sentiment}")

# import nltk
# from nltk.tokenize import word_tokenize
# from nltk.sentiment.util import mark_negation
# import csv

# # Download necessary NLTK resources
# nltk.download('punkt')

# # Load words and their sentiments from the CSV file
# def load_sentiment_words(filename):
#     with open(filename, 'r', encoding='utf-8') as file:
#         reader = csv.DictReader(file)
#         return {row['word']: row['sentiment'] for row in reader}

# # Load your sentiment dataset
# sentiment_words = load_sentiment_words('word_sentiment.csv')

# # Function to analyze sentiment of a sentence
# def analyze_sentiment(sentence):
#     words = word_tokenize(sentence.lower())
#     words = mark_negation(words)
#     sentiment = []
#     for word in words:
#         if word in sentiment_words:
#             sentiment.append((word, sentiment_words[word]))
#         else:
#             sentiment.append((word, 'Neutral'))
#     return sentiment

# # Example usage
# print("Enter text (press Enter to exit):")
# while True:
#     text = input().strip()
#     if not text:
#         break
#     sentiment_analysis = analyze_sentiment(text)
#     print("Word\t\tSentiment")
#     for word, sentiment in sentiment_analysis:
#         print(f"{word}\t\t{sentiment}")

# import nltk
# from nltk.tokenize import word_tokenize
# from nltk.sentiment.util import mark_negation
# import csv

# # Download necessary NLTK resources
# nltk.download('punkt')

# # Load words and their sentiments from the CSV file
# def load_sentiment_words(filename):
#     try:
#         with open(filename, 'r', encoding='utf-8') as file:
#             reader = csv.DictReader(file)
#             sentiment_words = {row['word']: row['sentiment'] for row in reader}
#             print("Sentiment words loaded successfully!")
#             return sentiment_words
#     except FileNotFoundError:
#         print(f"Error: File '{filename}' not found.")
#         return None

# # Load your sentiment dataset
# # sentiment_words = load_sentiment_words(r'G:\MyGithub-Repo\Miscellaneous\Yash1\word_sentiment.csv')
# sentiment_words = load_sentiment_words('G:\\MyGithub-Repo\\Miscellaneous\\Yash1\\word_sentiment.csv')

# # Function to analyze sentiment of a sentence
# def analyze_sentiment(sentence):
#     words = word_tokenize(sentence.lower())
#     words = mark_negation(words)
#     sentiment = []
#     for word in words:
#         if word in sentiment_words:
#             sentiment.append((word, sentiment_words[word]))
#         else:
#             sentiment.append((word, 'Neutral'))
#     return sentiment

# # Example usage
# print("Enter text (press Enter to exit):")
# while True:
#     text = input().strip()
#     if not text:
#         break
#     sentiment_analysis = analyze_sentiment(text)
#     print("Word\t\tSentiment")
#     for word, sentiment in sentiment_analysis:
#         print(f"{word}\t\t{sentiment}")



# import pandas as pd
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.model_selection import train_test_split
# from sklearn.svm import SVC
# from sklearn.metrics import classification_report

# # Load the dataset
# df = pd.read_csv('G:\\MyGithub-Repo\\Miscellaneous\\Yash1\\sentence_sentiment.csv')  # Replace 'your_dataset.csv' with your actual filename

# # Preprocessing
# X = df['sentence']
# y = df['sentiment']

# # Feature extraction
# vectorizer = TfidfVectorizer()
# X_vectorized = vectorizer.fit_transform(X)

# # Split the data into training and testing sets
# X_train, X_test, y_train, y_test = train_test_split(X_vectorized, y, test_size=0.2, random_state=42)

# # Training the model
# model = SVC(kernel='linear')
# model.fit(X_train, y_train)

# # Evaluation
# y_pred = model.predict(X_test)
# print(classification_report(y_test, y_pred))

# # Example prediction
# new_sentence = "I had a wonderful day"
# new_sentence_vectorized = vectorizer.transform([new_sentence])
# prediction = model.predict(new_sentence_vectorized)
# print("Predicted sentiment:", prediction[0])

# import pandas as pd
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.svm import SVC

# # Load the dataset
# df = pd.read_csv('G:\\MyGithub-Repo\\Miscellaneous\\Yash1\\sentence_sentiment.csv')  # Replace 'your_dataset.csv' with your actual filename

# # Preprocessing
# X = df['sentence']
# y = df['sentiment']

# # Feature extraction
# vectorizer = TfidfVectorizer()
# X_vectorized = vectorizer.fit_transform(X)

# # Train the model
# model = SVC(kernel='linear')
# model.fit(X_vectorized, y)

# # Function to predict sentiment
# def predict_sentiment(sentence):
#     sentence_vectorized = vectorizer.transform([sentence])
#     prediction = model.predict(sentence_vectorized)
#     return prediction[0]

# # User input loop
# while True:
#     user_input = input("Enter a sentence (press Enter to exit): ").strip()
#     if not user_input:
#         break
#     sentiment = predict_sentiment(user_input)
#     print("Predicted sentiment:", sentiment)
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import SVC
import numpy as np

# Load the dataset
df = pd.read_csv('G:\\MyGithub-Repo\\Miscellaneous\\Yash1\\sentence_sentiment.csv')  # Replace 'your_dataset.csv' with your actual filename

# Preprocessing
X = df['sentence']
y = df['sentiment']

# Feature extraction
vectorizer = TfidfVectorizer()
X_vectorized = vectorizer.fit_transform(X)

# Train the model
model = SVC(kernel='linear')
model.fit(X_vectorized, y)

# Function to predict sentiment
def predict_sentiment(sentence):
    sentence_vectorized = vectorizer.transform([sentence])
    prediction = model.predict(sentence_vectorized)
    return prediction[0]

# Function to calculate sentiment of each unique word and the overall sentiment of the sentence
def calculate_sentiments(sentence):
    words = sentence.split()
    unique_words = set(words)
    word_sentiments = {}
    for word in unique_words:
        word_sentiments[word] = predict_sentiment(word)
    overall_sentiment = predict_sentiment(sentence)
    return word_sentiments, overall_sentiment

# User input loop
while True:
    user_input = input("Enter a sentence (press Enter to exit): ").strip()
    if not user_input:
        break
    word_sentiments, overall_sentiment = calculate_sentiments(user_input)
    print("Sentiment of each unique word:")
    for word, sentiment in word_sentiments.items():
        print(f"{word}: {sentiment}")
    print("Overall sentiment of the sentence:", overall_sentiment)