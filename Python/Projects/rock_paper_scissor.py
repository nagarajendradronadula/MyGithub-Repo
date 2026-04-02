import random

user_wins = 0
computer_wins = 0
options = ["rock", "paper", "scissors"]

while True:
    user_input = input("Type Rock/Paper/Scissors or Q to quit: ").lower()
    if user_input == "q":
        break
    if user_input not in options:
        print("Please type Rock/Paper/Scissors")
        continue
    random_number = random.randint(0, 2)
    # rock: 0, paper: 1, scissor: 2
    computer_pick = options[random_number]
    print("Computer picked", computer_pick + ".")

    if user_input == "rock" and computer_pick == "scissors":
        print("You won! +1 point")
        user_wins += 1
    elif user_input == "paper" and computer_pick == "rock":
        print("You won! +1 point")
        user_wins += 1
    elif user_input == "scissors" and computer_pick == "paper":
        print("You won! +1 point")
        user_wins += 1
    else:
        print("You lost!")
        computer_wins += 1

print("You won", user_wins, "times.")
print("The computer won", computer_wins, "times.")

if user_wins > computer_wins:
    print("You beat computer!")
elif computer_wins > user_wins:
    print("Computer beat you!")
else:
    print("It's a tie!")

print("Goodbye!!")