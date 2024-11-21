#Ask user for their name
# name = input("What's your name? ") #input function takes input from user

# Say hello to user
# print("Hello", end="///") #end = end of line defaultly it is set to end="\n"
# print(name)
# print("Hello",name, sep="???") #sep = seperator which seperates the elements
# print("hello \"Friend\"") #to use quotes inside a string

#Remove unnecessary spaces at the start and end
# name = name.strip() #Assisgnment operator but it also updates the variable

# name = name.capitalize() #to capitalize the very first letter

# name = name.title() #to capitalize the first letter of each word after space

# name = name.strip().title() #in python chaining of functions is possible
# name = input("What's your name? ").strip().title() #the function chaining can be directly added to the input itself

#Split user name into first and last name
# first, last = name.split(' ') #split function returns a list of strings and can be assigned to the variables written in an ascending which needs to be assigned first and at the last

# print(f"Hello {first}") #f string
# print(f"Hi {last}") #f string
