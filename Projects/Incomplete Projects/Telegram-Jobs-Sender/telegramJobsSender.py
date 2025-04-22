import logging
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes
import requests
import json

TELEGRAM_BOT_TOKEN = "8132735672:AAFSoMuJKh9VKnU69S-nAHp-NnVKrEg1eHY"

# Enable logging
logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    level=logging.INFO
)

# Define the API URL and key
JOBS_API_URL = "https://api.example.com/jobs"
JOBS_API_KEY = "YOUR_API_KEY_HERE"

# Define the Telegram bot token
TELEGRAM_BOT_TOKEN = "YOUR_BOT_TOKEN_HERE"

# Define the keywords file
KEYWORDS_FILE = "keywords.json"

# Load the keywords from the file
def load_keywords():
    try:
        with open(KEYWORDS_FILE, "r") as f:
            return json.load(f)
    except FileNotFoundError:
        return []

# Save the keywords to the file
def save_keywords(keywords):
    with open(KEYWORDS_FILE, "w") as f:
        json.dump(keywords, f)

# Define the commands
def start(update, context):
    context.bot.send_message(chat_id=update.effective_chat.id, text="Welcome to the job scraper bot!")
    context.bot.send_message(chat_id=update.effective_chat.id, text="Type /help to see the available commands.")

def help(update, context):
    context.bot.send_message(chat_id=update.effective_chat.id, text="Available commands:")
    context.bot.send_message(chat_id=update.effective_chat.id, text="/list_keywords - List all available keywords")
    context.bot.send_message(chat_id=update.effective_chat.id, text="/add_keyword <keyword> - Add a new keyword to the list")
    context.bot.send_message(chat_id=update.effective_chat.id, text="/delete_keyword <keyword> - Delete a keyword from the list")
    context.bot.send_message(chat_id=update.effective_chat.id, text="/check_location - Check the current location")
    context.bot.send_message(chat_id=update.effective_chat.id, text="/edit_location <location> - Edit the current location")
    context.bot.send_message(chat_id=update.effective_chat.id, text="/list_jobs - List the latest job listings")

def list_keywords(update, context):
    keywords = load_keywords()
    context.bot.send_message(chat_id=update.effective_chat.id, text="Available keywords:")
    for keyword in keywords:
        context.bot.send_message(chat_id=update.effective_chat.id, text=keyword)

def add_keyword(update, context):
    keyword = context.args[0]
    keywords = load_keywords()
    if keyword not in keywords:
        keywords.append(keyword)
        save_keywords(keywords)
        context.bot.send_message(chat_id=update.effective_chat.id, text=f"Keyword '{keyword}' added successfully!")
    else:
        context.bot.send_message(chat_id=update.effective_chat.id, text=f"Keyword '{keyword}' already exists!")

def delete_keyword(update, context):
    keyword = context.args[0]
    keywords = load_keywords()
    if keyword in keywords:
        keywords.remove(keyword)
        save_keywords(keywords)
        context.bot.send_message(chat_id=update.effective_chat.id, text=f"Keyword '{keyword}' deleted successfully!")
    else:
        context.bot.send_message(chat_id=update.effective_chat.id, text=f"Keyword '{keyword}' does not exist!")

def check_location(update, context):
    location = context.bot.get_chat(update.effective_chat.id).location
    context.bot.send_message(chat_id=update.effective_chat.id, text=f"Current location: {location}")

def edit_location(update, context):
    location = context.args[0]
    context.bot.set_chat_location(update.effective_chat.id, location)
    context.bot.send_message(chat_id=update.effective_chat.id, text=f"Location updated to {location}")

def list_jobs(update, context):
    keywords = load_keywords()
    location = context.bot.get_chat(update.effective_chat.id).location
    jobs = fetch_jobs(keywords, location)
    for job in jobs:
        context.bot.send_message(chat_id=update.effective_chat.id, text=job["title"])
        context.bot.send_message(chat_id=update.effective_chat.id, text=job["link"])

# def fetch_jobs(keywords, location):
#     params = {
#         "keywords": keywords,
#         "location": location
#     }
#     headers = {
#         "Authorization": f"Bearer {JOBS_API_KEY}"
#     }
#     response = requests.get(JOBS_API_URL, params=params, headers=headers)
#     return response.json()
import requests

# Define the APIs and their corresponding functions
def fetch_jobs_from_api(api_name, params):
    """Fetch job listings from a given API."""
    url = f"https://{api_name}.example.com/jobs"
    headers = {"Authorization": f"Bearer {os.environ[api_name]}"}
    response = requests.get(url, params=params, headers=headers)
    response.raise_for_status()
    return response.json()


def fetch_jobs(params):
    """Fetch job listings from all APIs and combine the results."""
    jobs = []
    for api_name in APIs:
        jobs.extend(fetch_jobs_from_api(api_name, params))
    return jobs


APIs = {
    "API1",
    "API2",
    "API3",
}


def list_jobs(update, context):
    """Handle the /list_jobs command by fetching job listings and sending them to the user."""
    params = {"keywords": ["python", "developer"], "location": "New York"}
    jobs = fetch_jobs(params)
    for job in jobs:
        context.bot.send_message(chat_id=update.effective_chat.id, text=job["title"])
        context.bot.send_message(chat_id=update.effective_chat.id, text=job["link"])

def main():
    application = ApplicationBuilder().token(TELEGRAM_BOT_TOKEN).build()

    start_handler = CommandHandler("start", start)
    help_handler = CommandHandler("help", help)
    list_keywords_handler = CommandHandler("list_keywords", list_keywords)
    add_keyword_handler = CommandHandler("add_keyword", add_keyword)
    delete_keyword_handler = CommandHandler("delete_keyword", delete_keyword)
    check_location_handler = CommandHandler("check_location", check_location)
    edit_location_handler = CommandHandler("edit_location", edit_location)
    list_jobs_handler = CommandHandler("list_jobs", list_jobs)

    application.add_handler(start_handler)
    application.add_handler(help_handler)
    application.add_handler(list_keywords_handler)
    application.add_handler(add_keyword_handler)
    application.add_handler(delete_keyword_handler)
    application.add_handler(check_location_handler)
    application.add_handler(edit_location_handler)
    application.add_handler(list_jobs_handler)

    application.run_polling()
    
if __name__ == "__main__":
    main()