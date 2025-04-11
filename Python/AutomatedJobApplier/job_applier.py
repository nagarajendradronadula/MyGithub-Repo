# import requests
# import time
# import PyPDF2
# import schedule
# import smtplib
# from email.mime.text import MIMEText
# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.chrome.service import Service
# from selenium.webdriver.common.keys import Keys
# from webdriver_manager.chrome import ChromeDriverManager

# def send_email(subject, body):
#     sender_email = "your_email@example.com"
#     receiver_email = applicant_details["email"]
#     password = "your_email_password"
    
#     msg = MIMEText(body)
#     msg["Subject"] = subject
#     msg["From"] = sender_email
#     msg["To"] = receiver_email
    
#     try:
#         server = smtplib.SMTP("smtp.gmail.com", 587)
#         server.starttls()
#         server.login(sender_email, password)
#         server.sendmail(sender_email, receiver_email, msg.as_string())
#         server.quit()
#         print("Email sent successfully!")
#     except Exception as e:
#         print(f"Failed to send email: {e}")

# def fetch_jobs():
#     job_listings = []
    
#     apis = [
#         "https://remotive.io/api/remote-jobs",
#         "https://www.themuse.com/api/public/jobs?page=1"
#     ]
    
#     for api in apis:
#         try:
#             response = requests.get(api)
#             if response.status_code == 200:
#                 data = response.json()
#                 if "jobs" in data:
#                     for job in data['jobs']:
#                         job_listings.append({
#                             "title": job.get("title", "Unknown"),
#                             "company": job.get("company_name", job.get("company", {}).get("name", "Unknown")),
#                             "location": job.get("candidate_required_location", job.get("locations", [{}])[0].get("name", "Unknown")),
#                             "url": job.get("url", job.get("refs", {}).get("landing_page", "")),
#                             "category": job.get("category", "Unknown"),
#                             "skills": job.get("tags", []) or job.get("skills", [])
#                         })
#         except Exception as e:
#             print(f"Error fetching jobs from {api}: {e}")
    
#     return job_listings

# def parse_resume(resume_path):
#     with open(resume_path, "rb") as file:
#         pdf_reader = PyPDF2.PdfReader(file)
#         text = " ".join([page.extract_text() for page in pdf_reader.pages if page.extract_text()])
#     return text.lower()

# def calculate_match(job_skills, resume_text):
#     if not job_skills:
#         return 0
#     matched_skills = [skill.lower() for skill in job_skills if skill.lower() in resume_text]
#     return (len(matched_skills) / len(job_skills)) * 100

# def filter_jobs(jobs, resume_text, min_match=60, location_preference="Remote"):
#     filtered_jobs = []
#     for job in jobs:
#         match_percentage = calculate_match(job["skills"], resume_text)
#         if match_percentage >= min_match and (location_preference.lower() in job["location"].lower() or location_preference.lower() == "any"):
#             job["match_percentage"] = match_percentage
#             filtered_jobs.append(job)
#     return sorted(filtered_jobs, key=lambda x: x["match_percentage"], reverse=True)

# def auto_fill_application(driver, applicant_details, custom_fields):
#     try:
#         for field, xpath in custom_fields.items():
#             try:
#                 element = driver.find_element(By.XPATH, xpath)
#                 if field == "resume":
#                     element.send_keys(applicant_details[field])
#                 else:
#                     element.clear()
#                     element.send_keys(applicant_details[field])
#             except:
#                 print(f"Field {field} not found.")
#                 continue
        
#         submit_button = driver.find_element(By.XPATH, "//button[contains(text(),'Submit')]")
#         submit_button.click()
#         print("Application submitted successfully!")
#     except Exception as e:
#         print(f"Error filling application: {e}")

# def auto_apply(job):
#     driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
#     driver.get(job["url"])
#     time.sleep(3)
    
#     auto_fill_application(driver, applicant_details, custom_fields)
#     driver.quit()
    
#     send_email(
#         subject=f"Application Submitted: {job['title']} at {job['company']}",
#         body=f"Your application for {job['title']} at {job['company']} has been submitted.\n\nJob URL: {job['url']}"
#     )

# def job_application_process():
#     print("Parsing resume...")
#     resume_text = parse_resume(applicant_details["resume"])
    
#     print("Fetching job listings from multiple sources...")
#     jobs = fetch_jobs()
    
#     print("Filtering jobs...")
#     relevant_jobs = filter_jobs(jobs, resume_text)
    
#     for job in relevant_jobs:
#         print(f"Applying to: {job['title']} at {job['company']} with match {job['match_percentage']:.2f}%")
#         auto_apply(job)
    
#     print("Job application process completed!")

# # Configuration
# location_preference = "Remote"
# applicant_details = {
#     "name": "NAGA RAJENDRA DRONADULA",
#     "email": "nagarajendra432@gmail.com",
#     "phone": "8886117290",
#     "resume": "Python/AutomatedJobApplier/DNR-RESUME.pdf"
# }

# # Define custom fields and their XPaths
# custom_fields = {
#     "name": "//input[@name='NAGA RAJENDRA DRONADULA']",
#     "email": "//input[@name='nagarajendra432@gmail.com']",
#     "phone": "//input[@name='8886117290']",
#     "resume": "//input[@type='Python/AutomatedJobApplier/DNR-RESUME.pdf']",
#     "linkedin": "//input[@name='https://www.linkedin.com/in/nagarajendradronadula/']",  # Example field
#     "github": "//input[@name='https://github.com/nagarajendradronadula']",  # Example field
#     "langauges": "//input[]"
# }

# # Schedule job applications to run continuously
# schedule.every(6).hours.do(job_application_process)
# print("Job application bot is running on the server...")
# while True:
#     schedule.run_pending()
#     time.sleep(60)









# import requests
# import time
# import PyPDF2
# import schedule
# import smtplib
# from email.mime.text import MIMEText
# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.chrome.service import Service
# from selenium.webdriver.common.keys import Keys
# from webdriver_manager.chrome import ChromeDriverManager

# # Email configuration (use app password for Gmail if needed)
# EMAIL_SENDER = "your_email@example.com"
# EMAIL_PASSWORD = "your_email_password"

# # Applicant details
# applicant_details = {
#     "name": "NAGA RAJENDRA DRONADULA",
#     "email": "nagarajendra432@gmail.com",
#     "phone": "8886117290",
#     "resume": "/path/to/DNR-RESUME.pdf",
#     "linkedin": "https://www.linkedin.com/in/nagarajendradronadula/",
#     "github": "https://github.com/nagarajendradronadula",
# }

# # Custom field mapping (XPath for auto-filling applications)
# custom_fields = {
#     "name": "//input[@name='name']",
#     "email": "//input[@name='email']",
#     "phone": "//input[@name='phone']",
#     "resume": "//input[@type='file']",
#     "linkedin": "//input[@name='linkedin']",
#     "github": "//input[@name='github']",
# }

# def send_email(subject, body):
#     """Send an email notification after applying to a job."""
#     msg = MIMEText(body)
#     msg["Subject"] = subject
#     msg["From"] = EMAIL_SENDER
#     msg["To"] = applicant_details["email"]

#     try:
#         server = smtplib.SMTP("smtp.gmail.com", 587)
#         server.starttls()
#         server.login(EMAIL_SENDER, EMAIL_PASSWORD)
#         server.sendmail(EMAIL_SENDER, applicant_details["email"], msg.as_string())
#         server.quit()
#         print("✅ Email sent successfully!")
#     except Exception as e:
#         print(f"❌ Failed to send email: {e}")

# def fetch_jobs():
#     """Fetch job listings from multiple APIs."""
#     job_listings = []
#     apis = [
#         "https://remotive.io/api/remote-jobs",
#         "https://www.themuse.com/api/public/jobs?page=1"
#     ]

#     for api in apis:
#         try:
#             response = requests.get(api)
#             if response.status_code == 200:
#                 data = response.json()
#                 for job in data.get("jobs", []):
#                     job_listings.append({
#                         "title": job.get("title", "Unknown"),
#                         "company": job.get("company_name", "Unknown"),
#                         "location": job.get("candidate_required_location", "Unknown"),
#                         "url": job.get("url", ""),
#                         "skills": job.get("tags", [])
#                     })
#         except Exception as e:
#             print(f"❌ Error fetching jobs from {api}: {e}")

#     return job_listings

# def parse_resume(resume_path):
#     """Extract text from a PDF resume."""
#     try:
#         with open(resume_path, "rb") as file:
#             pdf_reader = PyPDF2.PdfReader(file)
#             return " ".join([page.extract_text() for page in pdf_reader.pages if page.extract_text()]).lower()
#     except Exception as e:
#         print(f"❌ Error reading resume: {e}")
#         return ""

# def calculate_match(job_skills, resume_text):
#     """Calculate skill match percentage."""
#     if not job_skills:
#         return 0
#     matched_skills = [skill.lower() for skill in job_skills if skill.lower() in resume_text]
#     return (len(matched_skills) / len(job_skills)) * 100

# def filter_jobs(jobs, resume_text, min_match=60, location_preference="Remote"):
#     """Filter jobs based on skill match and location."""
#     filtered_jobs = []
#     for job in jobs:
#         match_percentage = calculate_match(job["skills"], resume_text)
#         if match_percentage >= min_match and (location_preference.lower() in job["location"].lower() or location_preference.lower() == "any"):
#             job["match_percentage"] = match_percentage
#             filtered_jobs.append(job)

#     return sorted(filtered_jobs, key=lambda x: x["match_percentage"], reverse=True)

# def auto_fill_application(driver, custom_fields):
#     """Automatically fill job application fields."""
#     try:
#         for field, xpath in custom_fields.items():
#             try:
#                 element = driver.find_element(By.XPATH, xpath)
#                 if field == "resume":
#                     element.send_keys(applicant_details["resume"])
#                 else:
#                     element.clear()
#                     element.send_keys(applicant_details[field])
#             except:
#                 print(f"⚠️ Field {field} not found.")
        
#         while True:
#             try:
#                 next_button = driver.find_element(By.XPATH, "//button[contains(text(),'Next')]")
#                 next_button.click()
#                 time.sleep(2)
#             except:
#                 break  # No more "Next" buttons
        
#         try:
#             submit_button = driver.find_element(By.XPATH, "//button[contains(text(),'Submit')]")
#             submit_button.click()
#             print("✅ Application submitted successfully!")
#         except:
#             print("⚠️ Submit button not found.")

#     except Exception as e:
#         print(f"❌ Error filling application: {e}")

# def auto_apply(job):
#     """Apply to a job using Selenium."""
#     try:
#         driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
#         driver.get(job["url"])
#         time.sleep(3)

#         auto_fill_application(driver, custom_fields)
#         driver.quit()

#         send_email(
#             subject=f"Application Submitted: {job['title']} at {job['company']}",
#             body=f"Your application for {job['title']} at {job['company']} has been submitted.\n\nJob URL: {job['url']}"
#         )
#     except Exception as e:
#         print(f"❌ Error applying to job: {e}")

# def job_application_process():
#     """Main job application workflow."""
#     print("📄 Parsing resume...")
#     resume_text = parse_resume(applicant_details["resume"])

#     print("🔍 Fetching job listings...")
#     jobs = fetch_jobs()

#     print("🛠️ Filtering jobs...")
#     relevant_jobs = filter_jobs(jobs, resume_text)

#     for job in relevant_jobs:
#         print(f"🚀 Applying to: {job['title']} at {job['company']} (Match: {job['match_percentage']:.2f}%)")
#         auto_apply(job)

#     print("✅ Job application process completed!")

# # **Run continuously every 6 hours**
# schedule.every(6).hours.do(job_application_process)
# print("🤖 Job application bot is running...")

# while True:
    # schedule.run_pending()
    # time.sleep(60)
   









import os
import requests
import time
import PyPDF2
import schedule
import smtplib
from dotenv import load_dotenv
from email.mime.text import MIMEText
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager

# Load environment variables
load_dotenv()

# Fetch sensitive credentials from .env file
EMAIL = os.getenv("EMAIL")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")
RESUME_PATH = os.getenv("RESUME_PATH")

# User details
applicant_details = {
    "name": "NAGA RAJENDRA DRONADULA",
    "email": EMAIL,
    "phone": "8886117290",
    "resume": RESUME_PATH
}

# Custom fields mapping (Update based on real job application fields)
custom_fields = {
    "name": "//input[@name='full_name']",
    "email": "//input[@name='email']",
    "phone": "//input[@name='phone']",
    "resume": "//input[@type='file']",
    "linkedin": "//input[@name='linkedin']",
    "github": "//input[@name='github']"
}

def send_email(subject, body):
    """Send email notification after submitting applications."""
    msg = MIMEText(body)
    msg["Subject"] = subject
    msg["From"] = EMAIL
    msg["To"] = applicant_details["email"]

    try:
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(EMAIL, EMAIL_PASSWORD)
        server.sendmail(EMAIL, applicant_details["email"], msg.as_string())
        server.quit()
        print("✅ Email sent successfully!")
    except Exception as e:
        print(f"❌ Failed to send email: {e}")

def fetch_jobs():
    """Fetch jobs from multiple APIs."""
    job_listings = []
    apis = [
        "https://remotive.io/api/remote-jobs",
        "https://www.themuse.com/api/public/jobs?page=1"
    ]
    
    for api in apis:
        try:
            response = requests.get(api)
            if response.status_code == 200:
                data = response.json()
                if "jobs" in data:
                    for job in data['jobs']:
                        job_listings.append({
                            "title": job.get("title", "Unknown"),
                            "company": job.get("company_name", job.get("company", {}).get("name", "Unknown")),
                            "location": job.get("candidate_required_location", job.get("locations", [{}])[0].get("name", "Unknown")),
                            "url": job.get("url", job.get("refs", {}).get("landing_page", "")),
                            "category": job.get("category", "Unknown"),
                            "skills": job.get("tags", []) or job.get("skills", [])
                        })
        except Exception as e:
            print(f"⚠️ Error fetching jobs from {api}: {e}")

    return job_listings

def parse_resume(resume_path):
    """Extract text from the resume PDF for skill matching."""
    with open(resume_path, "rb") as file:
        pdf_reader = PyPDF2.PdfReader(file)
        text = " ".join([page.extract_text() for page in pdf_reader.pages if page.extract_text()])
    return text.lower()

def calculate_match(job_skills, resume_text):
    """Calculate skill match percentage."""
    if not job_skills:
        return 0
    matched_skills = [skill.lower() for skill in job_skills if skill.lower() in resume_text]
    return (len(matched_skills) / len(job_skills)) * 100

def filter_jobs(jobs, resume_text, min_match=60, location_preference="Remote"):
    """Filter jobs that match the resume by at least 60%."""
    filtered_jobs = []
    for job in jobs:
        match_percentage = calculate_match(job["skills"], resume_text)
        if match_percentage >= min_match and (location_preference.lower() in job["location"].lower() or location_preference.lower() == "any"):
            job["match_percentage"] = match_percentage
            filtered_jobs.append(job)
    return sorted(filtered_jobs, key=lambda x: x["match_percentage"], reverse=True)

def auto_fill_application(driver, applicant_details, custom_fields):
    """Automatically fill job application forms."""
    try:
        for field, xpath in custom_fields.items():
            try:
                element = driver.find_element(By.XPATH, xpath)
                if field == "resume":
                    element.send_keys(applicant_details[field])
                else:
                    element.clear()
                    element.send_keys(applicant_details[field])
            except:
                print(f"⚠️ Field {field} not found. Skipping...")
                continue

        # Click the next or submit button if present
        next_buttons = driver.find_elements(By.XPATH, "//button[contains(text(),'Next') or contains(text(),'Continue')]")
        if next_buttons:
            for button in next_buttons:
                button.click()
                time.sleep(2)

        submit_button = driver.find_elements(By.XPATH, "//button[contains(text(),'Submit')]")
        if submit_button:
            submit_button[0].click()
            print("✅ Application submitted successfully!")
    except Exception as e:
        print(f"❌ Error filling application: {e}")

def auto_apply(job):
    """Open job application, fill details, and submit."""
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    driver.get(job["url"])
    time.sleep(3)

    auto_fill_application(driver, applicant_details, custom_fields)
    driver.quit()

    send_email(
        subject=f"📩 Application Submitted: {job['title']} at {job['company']}",
        body=f"Your application for {job['title']} at {job['company']} has been submitted.\n\nJob URL: {job['url']}"
    )

def job_application_process():
    """Fetch, filter, and apply for jobs automatically."""
    print("🔍 Parsing resume...")
    resume_text = parse_resume(applicant_details["resume"])

    print("🌍 Fetching job listings from multiple sources...")
    jobs = fetch_jobs()

    print("📋 Filtering relevant jobs...")
    relevant_jobs = filter_jobs(jobs, resume_text)

    for job in relevant_jobs:
        print(f"🚀 Applying to: {job['title']} at {job['company']} (Match: {job['match_percentage']:.2f}%)")
        auto_apply(job)

    print("✅ Job application process completed!")

# Schedule the job application process to run continuously every 6 hours
schedule.every(6).hours.do(job_application_process)
print("🚀 Job application bot is running on the server...")
while True:
    schedule.run_pending()
    time.sleep(60)