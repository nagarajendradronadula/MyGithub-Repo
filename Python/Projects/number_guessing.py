import random

top_of_range = input("Enter the limit number: ")
num_guess = 0

if top_of_range.isdigit():
    top_of_range = int(top_of_range)

    if(top_of_range <= 0):
        print("Please type a number larger than 0 next time")
        quit()
    else:
        print("You have chosen: ", top_of_range)

else: print("please type a number next time")

# print(random.randrange(start, stop))
random_number = random.randint(0, top_of_range)

while True:
    num_guess += 1
    guess = input("Make a guess: ")
    if guess.isdigit():
        guess = int(guess)
    else:
        print("please type a number next time")
        continue

    if guess == random_number:
        print("You got it right!")
        break
    elif guess > random_number:
        print("You were above the number!")
    else:
        print("You were below the number!")

print("You got it in", num_guess, "guesses")
