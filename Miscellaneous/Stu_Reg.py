import tkinter as tk
from tkinter import messagebox

class StudentRegistrationForm:
    def __init__(self, root):
        self.root = root
        self.root.title("Student Registration Form")
        
        self.name_label = tk.Label(root, text="Name:")
        self.name_label.grid(row=0, column=0)
        self.name_entry = tk.Entry(root)
        self.name_entry.grid(row=0, column=1)
        
        self.email_label = tk.Label(root, text="Email:")
        self.email_label.grid(row=1, column=0)
        self.email_entry = tk.Entry(root)
        self.email_entry.grid(row=1, column=1)
        
        self.phone_label = tk.Label(root, text="Phone:")
        self.phone_label.grid(row=2, column=0)
        self.phone_entry = tk.Entry(root)
        self.phone_entry.grid(row=2, column=1)
        
        self.course_label = tk.Label(root, text="Course:")
        self.course_label.grid(row=3, column=0)
        self.course_entry = tk.Entry(root)
        self.course_entry.grid(row=3, column=1)
        
        self.submit_button = tk.Button(root, text="Submit", command=self.submit_form)
        self.submit_button.grid(row=4, columnspan=2)
        
    def submit_form(self):
        name = self.name_entry.get()
        email = self.email_entry.get()
        phone = self.phone_entry.get()
        course = self.course_entry.get()
        
        if not name:
            messagebox.showerror("Error", "Please enter your name")
            return
        if not email or not self.validate_email(email):
            messagebox.showerror("Error", "Please enter a valid email")
            return
        if not phone or not self.validate_phone(phone):
            messagebox.showerror("Error", "Please enter a valid phone number")
            return
        if not course:
            messagebox.showerror("Error", "Please enter your chosen course of study")
            return
        
        # If all fields are valid, proceed with registration
        # For now, let's just print the information
        print("Name:", name)
        print("Email:", email)
        print("Phone:", phone)
        print("Course:", course)
        
    def validate_email(self, email):
        # Simple email validation
        if "@" in email and "." in email:
            return True
        return False
    
    def validate_phone(self, phone):
        # Simple phone number validation
        if phone.isdigit() and len(phone) == 10:
            return True
        return False

root = tk.Tk()
app = StudentRegistrationForm(root)
root.mainloop()

def submit_form(self):
    name = self.name_entry.get()
    email = self.email_entry.get()
    phone = self.phone_entry.get()
    course = self.course_entry.get()
    
    if not name:
        messagebox.showerror("Error", "Please enter your name")
        return
    if not email or not self.validate_email(email):
        messagebox.showerror("Error", "Please enter a valid email")
        return
    if not phone or not self.validate_phone(phone):
        messagebox.showerror("Error", "Please enter a valid phone number")
        return
    if not course:
        messagebox.showerror("Error", "Please enter your chosen course of study")
        return
    
    # If all fields are valid, proceed with registration
    # For now, let's just print the information
    print("Name:", name)
    print("Email:", email)
    print("Phone:", phone)
    print("Course:", course)
    
    # Clear the form fields after submission
    self.name_entry.delete(0, tk.END)
    self.email_entry.delete(0, tk.END)
    self.phone_entry.delete(0, tk.END)
    self.course_entry.delete(0, tk.END)
