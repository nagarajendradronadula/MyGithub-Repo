import logging
# from telegram import Bot
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes
import requests
from bs4 import BeautifulSoup
import json
import asyncio
import re
import os
import datetime
import threading
import aiohttp

# Enable logging
logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    level=logging.INFO
)

# Define a list of keywords to scrape
if(not os.path.exists('keywords.json')):
    keywords = [
        "mean-stack",
        "web-development",
        "software-engineering",
        "data-science",
        "machine-learning",
        "mern-stack",
        "full-stack-development",
        "backend-development",
        "frontend-development"
    ] 
else : keywords = json.load(open('keywords.json'))

# Define a list of websites to scrape
websites = [
    {"name": "LinkedIn", "url": "https://www.linkedin.com/jobs/internship-web-development-jobs", "selector": ".job-card-container", "location_support": True},
    {"name": "Indeed", "url": "https://www.indeed.com/jobs", "selector": ".jobTitle", "location_support": True},
    {"name": "Glassdoor", "url": "https://www.glassdoor.com/Jobs", "selector": ".jobLink", "location_support": True},
    {"name": "Monster", "url": "https://www.monster.com/jobs", "selector": ".job-title", "location_support": True},
    {"name": "CareerBuilder", "url": "https://www.careerbuilder.com/jobs", "selector": ".job-title", "location_support": True},
    {"name": "SimplyHired", "url": "https://www.simplyhired.com/search", "selector": ".job", "location_support": True},
    {"name": "ZipRecruiter", "url": "https://www.ziprecruiter.com/Jobs", "selector": ".job", "location_support": True},
    {"name": "Jooble", "url": "https://jooble.org/jobs-web-development", "selector": ".job", "location_support": True},
    {"name": "JobisJob", "url": "https://www.jobisjob.com/web-development-jobs", "selector": ".job", "location_support": True},
    {"name": "Adzuna", "url": "https://www.adzuna.com/jobs/web-development", "selector": ".job", "location_support": True},
    {"name": "Neuvoo", "url": "https://neuvoo.com/jobs/web-development", "selector": ".job", "location_support": True},
    {"name": "Naukri", "url": "https://www.naukri.com/web-development-jobs", "selector": ".job", "location_support": True},
    {"name": "Cutshort", "url": "https://cutshort.io/web-development-jobs", "selector": ".job", "location_support": True},
    {"name": "Remotejobsfinder", "url": "https://remotejobsfinder.co/web-development-jobs", "selector": ".job", "location_support": True}
]


# Telegram bot token
TOKEN = "8132735672:AAFSoMuJKh9VKnU69S-nAHp-NnVKrEg1eHY"

location = "India"

# Function to format URL with keyword
# def format_url(website, keyword, location):
#     if website["name"] == "LinkedIn":
#         url = website["url"].replace("internship-web-development-jobs", f"jobs/{keyword}-jobs")
#     elif website["name"] == "Indeed":
#         url = website["url"] + f"?q={keyword}&l={location}"
#     elif website["name"] == "Glassdoor":
#         url = website["url"] + f"?keyword={keyword}&location={location}"
#     elif website["name"] == "SimplyHired":
#         url = website["url"] + f"?q={keyword}&l={location}"
#     elif website["name"] == "CareerBuilder":
#         url = website["url"] + f"?q={keyword}&l={location}"
#     elif website["name"] == "ZipRecruiter":
#         url = website["url"] + f"?q={keyword}&l={location}"
#     elif website["name"] == "Jooble":
#         url = website["url"] + f"?q={keyword}&l={location}"
#     elif website["name"] == "JobisJob":
#         url = website["url"] + f"?q={keyword}&l={location}"
#     elif website["name"] == "Adzuna":
#         url = website["url"] + f"?q={keyword}&l={location}"
#     elif website["name"] == "Neuvoo":
#         url = website["url"] + f"?q={keyword}&l={location}"
#     elif website["name"] == "Naukri.com":
#         url = website["url"] + f"?q={keyword}&l={location}"
#     elif website["name"] == "Cutshort.io":
#         url = website["url"] + f"?q={keyword}&l={location}"
#     elif website["name"] == "Remotejobsfinder.co":
#         url = website["url"] + f"?q={keyword}&l={location}"
#     else:
#         url = website["url"] + f"?keyword={keyword}&location={location}"
#     return url
def format_url(website: dict, keyword: str, location: str) -> str:
    """
    Format a URL for a given website, keyword, and location.
    """
    base_url = website.get("url")
    if not base_url:
        return ""

    if website["name"] == "LinkedIn":
        url = f"{base_url}/{keyword}-jobs-in-{location}"
    elif website["name"] == "Indeed":
        url = f"{base_url}?q={keyword}&l={location}"
    elif website["name"] == "Glassdoor":
        url = f"{base_url}/{keyword}-jobs-in-{location}"
    elif website["name"] == "Monster":
        url = f"{base_url}/jobs/search/?q={keyword}&where={location}"
    elif website["name"] == "CareerBuilder":
        url = f"{base_url}/jobs-{keyword}-{location}"
    elif website["name"] == "SimplyHired":
        url = f"{base_url}/search?q={keyword}&l={location}"
    elif website["name"] == "ZipRecruiter":
        url = f"{base_url}/Jobs/{keyword}-{location}"
    elif website["name"] == "Jooble":
        url = f"{base_url}/jobs-{keyword}-{location}"
    elif website["name"] == "JobisJob":
        url = f"{base_url}/{keyword}-jobs-in-{location}"
    elif website["name"] == "Adzuna":
        url = f"{base_url}/jobs/{keyword}-{location}"
    elif website["name"] == "Neuvoo":
        url = f"{base_url}/jobs/{keyword}-{location}"
    elif website["name"] == "Naukri":
        url = f"{base_url}/{keyword}-jobs-in-{location}"
    elif website["name"] == "Cutshort":
        url = f"{base_url}/{keyword}-jobs-in-{location}"
    elif website["name"] == "Remotejobsfinder":
        url = f"{base_url}/{keyword}-jobs-in-{location}"
    else:
        url = f"{base_url}?keyword={keyword}&location={location}"

    return url

def load_keywords():
    global keywords
    try:
        with open('keywords.json', 'r') as f:
            keywords = json.load(f)
    except FileNotFoundError:
        pass

# Function to handle Telegram bot commands
async def start(update, context):
    await context.bot.send_message(chat_id=update.effective_chat.id, text="Welcome to the job scraper bot!")
    await context.bot.send_message(chat_id=update.effective_chat.id, text="Type /help to see the available commands.")

async def help(update, context):
    await context.bot.send_message(chat_id=update.effective_chat.id, text="Available commands:")
    await context.bot.send_message(chat_id=update.effective_chat.id, text="/start_scrape <keyword> - Scrape job listings for a specific keyword")
    # await context.bot.send_message(chat_id=update.effective_chat.id, text="/stop_scraping - Stop scraping for jobs")
    await context.bot.send_message(chat_id=update.effective_chat.id, text="/list_keywords - List all available keywords")
    await context.bot.send_message(chat_id=update.effective_chat.id, text="/list_websites - List all available websites")
    await context.bot.send_message(chat_id=update.effective_chat.id, text="/add_keyword <keyword> - Add a new keyword to the list")
    await context.bot.send_message(chat_id=update.effective_chat.id, text="/add_website <website_name> <website_url> <website_selector> - Add a new website to the list")
    await context.bot.send_message(chat_id=update.effective_chat.id, text="/delete_keyword <keyword> - Delete a keyword from the list")
    await context.bot.send_message(chat_id=update.effective_chat.id, text="/delete_website <website_name> - Delete a website from the list")
    await context.bot.send_message(chat_id=update.effective_chat.id, text="/check_location - Check the current location")
    await context.bot.send_message(chat_id=update.effective_chat.id, text="/edit_location - Edit the current location")

async def list_keywords(update, context):
    await context.bot.send_message(chat_id=update.effective_chat.id, text="Available keywords:")
    for keyword in keywords:
        await context.bot.send_message(chat_id=update.effective_chat.id, text=keyword)
    
    

async def list_websites(update, context):
    await context.bot.send_message(chat_id=update.effective_chat.id, text="Available websites:")
    for website in websites:
        await context.bot.send_message(chat_id=update.effective_chat.id, text=website["name"] + " - " + website["url"])

def save_keywords():
    global keywords
    with open('keywords.json', 'w') as f:
        json.dump(keywords, f)

async def add_keyword(update, context):
    if context.args:
        keyword = context.args[0]
        if keyword not in keywords:
            keywords.append(keyword)  # Update the keywords array
            save_keywords()  # Save the keywords to the file
            await context.bot.send_message(chat_id=update.effective_chat.id, text=f"Keyword '{keyword}' added successfully!")
        else:
            await context.bot.send_message(chat_id=update.effective_chat.id, text=f"Keyword '{keyword}' already exists!")
    else:
        await context.bot.send_message(chat_id=update.effective_chat.id, text="Please provide a keyword to add! Use /add_keyword <keyword>")

load_keywords()  # Load the keywords from the file when the bot starts

async def add_website(update, context):
    if context.args:
        website_name = context.args[0]
        website_url = context.args[1]
        website_selector = context.args[2]
        if website_name not in [w["name"] for w in websites]:
            websites.append({
                "name": website_name,
                "url": website_url,
                "selector": website_selector
            })
            await context.bot.send_message(chat_id=update.effective_chat.id, text=f"Website '{website_name}' added successfully!")
        else:
            await context.bot.send_message(chat_id=update.effective_chat.id, text=f"Website '{website_name}' already exists!")
    else:
        await context.bot.send_message(chat_id=update.effective_chat.id, text="Please provide a website name, URL, and selector to add! Use /add_website <website_name> <website_url> <website_selector>")

async def delete_keyword(update, context):
    if context.args:
        keyword = context.args[0]
        if keyword in keywords:
            keywords.remove(keyword)
            await context.bot.send_message(chat_id=update.effective_chat.id, text=f"Keyword '{keyword}' deleted successfully!")
        else:
            await context.bot.send_message(chat_id=update.effective_chat.id, text=f"Keyword '{keyword}' does not exist!")
    else:
        await context.bot.send_message(chat_id=update.effective_chat.id, text="Please provide a keyword to delete! Use /delete_keyword <keyword>")

async def delete_website(update, context):
    if context.args:
        website_name = context.args[0]
        for website in websites:
            if website["name"] == website_name:
                websites.remove(website)
                await context.bot.send_message(chat_id=update.effective_chat.id, text=f"Website '{website_name}' deleted successfully!")
                break
        else:
            await context.bot.send_message(chat_id=update.effective_chat.id, text=f"Website '{website_name}' does not exist!")
    else:
        await context.bot.send_message(chat_id=update.effective_chat.id, text="Please provide a website name to delete! Use /delete_website <website_name>")

async def check_location(update, context):
    global location
    await context.bot.send_message(chat_id=update.effective_chat.id, text=f"Current location: {location}")

async def edit_location(update, context):
    global location
    args = context.args
    if len(args) != 1:
        await context.bot.send_message(chat_id=update.effective_chat.id, text="Usage: /edit_location <location>")
        return
    location = args[0]
    await context.bot.send_message(chat_id=update.effective_chat.id, text=f"Location updated to {location}")
    
scraping_flag = True

# async def scrape(update, context):
#     global keywords
#     global websites
#     global location
#     # global scraping_flag


#     await context.bot.send_message(chat_id=update.effective_chat.id, text="Scraping job listings...")
    
#     for keyword in keywords:
#         for website in websites:
#             # while True:
#             # if scraping_flag is False:
#             #     break
#             print(website)
#             try:
#                 url = format_url(website, keyword, location)
#                 response = requests.get(url)
#                 soup = BeautifulSoup(response.content, 'html.parser')
#                 job_listings = soup.select(website["selector"])
#                 print(job_listings)
#                 # Filter job listings by publication date
#                 today = datetime.date.today()
#                 three_days_ago = today - datetime.timedelta(days=3)
#                 filtered_job_listings = []
#                 for listing in job_listings:
#                     print(listing)
#                     try:
#                         publication_date = listing.find('time')['datetime']
#                         publication_date = datetime.datetime.strptime(publication_date, '%Y-%m-%d').date()
#                         if publication_date >= three_days_ago:
#                             filtered_job_listings.append(listing)
#                             print(filtered_job_listings)
#                     except Exception as e:
#                         await context.bot.send_message(chat_id=update.effective_chat.id, text=f"Error parsing publication date: {str(e)}")
#                 # Sort job listings by date
#                 filtered_job_listings.sort(key=lambda x: x.find('time')['datetime'] if x.find('time') else '', reverse=True)
#                 if filtered_job_listings:
#                     await context.bot.send_message(chat_id=update.effective_chat.id, text=f"Found {len(filtered_job_listings)} job listings for '{keyword}' on {website['name']} in {location}:")
#                     for listing in filtered_job_listings:
#                         job_text = re.sub(r'\s+', ' ', listing.text.strip())
#                         print(job_text)
#                         job_link = listing.find('a')
#                         if job_link and job_link.has_attr('href'):
#                             job_link = job_link['href']
#                             print(job_link)
#                         else:
#                             job_link = "No link available"
#                         await context.bot.send_message(chat_id=update.effective_chat.id, text=f"{job_text}\nLink: {job_link}")
#                         await asyncio.sleep(1)  # 1 second delay
#                 else:
#                     await context.bot.send_message(chat_id=update.effective_chat.id, text=f"No job listings found for '{keyword}' on {website['name']} in {location}")
#                 await context.bot.send_message(chat_id=update.effective_chat.id, text=f"Finished searching for '{keyword}' on {website['name']}")
#             except requests.exceptions.RequestException as e:
#                 await context.bot.send_message(chat_id=update.effective_chat.id, text=f"Error searching {website['name']}: {str(e)}\nSorry, we couldn't connect to the website. Please try again later." + e)
#             except Exception as e:
#                 if "selector" in str(e):
#                     await context.bot.send_message(chat_id=update.effective_chat.id, text=f"Error searching {website['name']}: {str(e)}\nPlease check the selector for this website and try again.")
#                 elif "keyword" in str(e):
#                     await context.bot.send_message(chat_id=update.effective_chat.id, text=f"Error searching {website['name']}: {str(e)}\nPlease check the keyword and try again.")
#                 else:
#                     await context.bot.send_message(chat_id=update.effective_chat.id, text=f"An unexpected error occurred: {str(e)}\nPlease try again later.")
#     await context.bot.send_message(chat_id=update.effective_chat.id, text="Scraping complete!")


async def scrape(update, context):
    global keywords
    global websites
    global location
    # global scraping_flag


    await context.bot.send_message(chat_id=update.effective_chat.id, text="Scraping job listings...")
    
    for keyword in keywords:
        for website in websites:
            # while True:
            # if scraping_flag is False:
            #     break
            print(website)
            try:
                url = format_url(website, keyword, location)
                print(url)
                async with aiohttp.ClientSession() as session:
                    async with session.get(url) as response:
                        html = await response.text()
                        print(html)
                        soup = BeautifulSoup(html, 'html.parser')
                        print(soup)
                        job_listings = soup.select(website["selector"])
                        print(job_listings)
                        # Filter job listings by publication date
                        today = datetime.date.today()
                        three_days_ago = today - datetime.timedelta(days=3)
                        filtered_job_listings = []
                        for listing in job_listings:
                            print(listing)
                            try:
                                publication_date = listing.find('time')['datetime']
                                publication_date = datetime.datetime.strptime(publication_date, '%Y-%m-%d').date()
                                if publication_date >= three_days_ago:
                                    filtered_job_listings.append(listing)
                                    print(filtered_job_listings)
                            except Exception as e:
                                await context.bot.send_message(chat_id=update.effective_chat.id, text=f"Error parsing publication date: {str(e)}")
                        # Sort job listings by date
                        filtered_job_listings.sort(key=lambda x: x.find('time')['datetime'] if x.find('time') else '', reverse=True)
                        if filtered_job_listings:
                            await context.bot.send_message(chat_id=update.effective_chat.id, text=f"Found {len(filtered_job_listings)} job listings for '{keyword}' on {website['name']} in {location}:")
                            for listing in filtered_job_listings:
                                job_text = re.sub(r'\s+', ' ', listing.text.strip())
                                print(job_text)
                                job_link = listing.find('a')
                                if job_link and job_link.has_attr('href'):
                                    job_link = job_link['href']
                                    print(job_link)
                                else:
                                    job_link = "No link available"
                                await context.bot.send_message(chat_id=update.effective_chat.id, text=f"{job_text}\nLink: {job_link}")
                                await asyncio.sleep(1)  # 1 second delay
                        else:
                            await context.bot.send_message(chat_id=update.effective_chat.id, text=f"No job listings found for '{keyword}' on {website['name']} in {location}")
                        await context.bot.send_message(chat_id=update.effective_chat.id, text=f"Finished searching for '{keyword}' on {website['name']}")
            except aiohttp.ClientError as e:
                await context.bot.send_message(chat_id=update.effective_chat.id, text=f"Error searching {website['name']}: {str(e)}\nSorry, we couldn't connect to the website. Please try again later.")
            except Exception as e:
                if "selector" in str(e):
                    await context.bot.send_message(chat_id=update.effective_chat.id, text=f"Error searching {website['name']}: {str(e)}\nPlease check the selector for this website and try again.")
                elif "keyword" in str(e):
                    await context.bot.send_message(chat_id=update.effective_chat.id, text=f"Error searching {website['name']}: {str(e)}\nPlease check the keyword and try again.")
                else:
                    await context.bot.send_message(chat_id=update.effective_chat.id, text=f"An unexpected error occurred: {str(e)}\nPlease try again later.")
    await context.bot.send_message(chat_id=update.effective_chat.id, text="Scraping complete!")


def run_scrape(update, context):
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    loop.run_until_complete(scrape(update, context))

async def start_scrape(update, context):
    global scraping_flag
    scraping_flag = True
    threading.Thread(target=run_scrape, args=(update, context)).start()

async def stop_scraping(update, context):
    global scraping_flag
    scraping_flag = False

# Define Telegram bot handlers
def main():
    application = ApplicationBuilder().token(TOKEN).build()

    start_handler = CommandHandler("start", start)
    help_handler = CommandHandler("help", help)
    start_scrape_handler = CommandHandler("start_scrape", scrape)
    list_keywords_handler = CommandHandler("list_keywords", list_keywords)
    list_websites_handler = CommandHandler("list_websites", list_websites)
    add_keyword_handler = CommandHandler("add_keyword", add_keyword)
    add_website_handler = CommandHandler("add_website", add_website)
    delete_keyword_handler = CommandHandler("delete_keyword", delete_keyword)
    delete_website_handler = CommandHandler("delete_website", delete_website)
    check_locations_handler = (CommandHandler("check_location", check_location))
    edit_location_handler = (CommandHandler("edit_location", edit_location))
    # stop_scraping_handler = (CommandHandler("stop_scraping", stop_scraping))

    application.add_handler(start_handler)
    application.add_handler(help_handler)
    application.add_handler(start_scrape_handler)
    application.add_handler(list_keywords_handler)
    application.add_handler(list_websites_handler)
    application.add_handler(add_keyword_handler)
    application.add_handler(add_website_handler)
    application.add_handler(delete_keyword_handler)
    application.add_handler(delete_website_handler)
    application.add_handler(check_locations_handler)
    application.add_handler(edit_location_handler)
    # application.add_handler(stop_scraping_handler)

    application.run_polling()

if __name__ == "__main__":
    main()