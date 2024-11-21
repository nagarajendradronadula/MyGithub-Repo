x =  float(input("What's x? ")) #it takes everythoing as string
y =  float(input("What's y? ")) #typecasting directly during input

# z = int(x) + int(y) #typecasting is done here

# print(round(x + y)) #round function rounds off to the nearest integer
# z = round(x + y)
# z = x / y
z = round(x / y, 2) #here the numbr 2 says the round function to round it off to 2 digits after the decimal

# print(z)
print(f"{z:.2f}") #the number .2f says to round it off to 2 decimals

# print(f"{z:,}") #it puts a comma after every 3rd digit
# print(int(input("What's x? ")) + int(input("What's y? "))) #nesting the functions