name = input("What is your name? ")
print("Welcome", name, "to this adventure! And get ready for the adventure of your life. You will be playing as a knight. Good luck and have fun!")

answer = input("You are on a dirt road, it has come to an end and you can go left or right. Which way would you like to go? ").lower()

if answer == "left":
    answer = input("You come to a river, you can walk around or swim accross. Type walk to walk around and swim to swim accross. ").lower()

    if answer == "walk":
        print("While you were walking you were attacked by bunch of wild birds and got hurt badly. You Lose!")
    elif answer == "swim":
        print("You swam across the river and got to the other side and found the treasure. You Win!")
    else:
        print("Not a valid option. You lose.")

elif answer == "right":
    answer = input("You come to a bridge, it looks wobbly, do you want to cross it or head back (cross/back)? ").lower()

    if answer == "back":
        print("You go back and lose.")

    elif answer == "cross":
        answer = input("You cross the bridge and meet a stranger, do you talk to them (yes/no)? ").lower()

        if answer == "yes":
            print("You talk to the stranger and they give you gold. You WIN!")

        elif answer == "no":
            print("You ignored the stranger and they attacked you. You LOSE!")

        else:
            print("Not a valid option. You lose.")

    else:
        print("Not a valid option. You lose.")

else:
    print("Not a valid option. You lose.")


print("Thanks for playing", name)