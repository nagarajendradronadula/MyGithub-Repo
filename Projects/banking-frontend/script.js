let amount = document.getElementById("amount");
let deposit = document.getElementById("deposit");
let withdraw = document.getElementById("withdraw");
let balanceEl = document.getElementById("balance");

let balance = 1000;
balanceEl.innerText = balance;

// Deposit button click event
deposit.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default action (e.g., form submission)
    let amountValue = parseInt(amount.value);

    if (isNaN(amountValue) || amountValue <= 0) {
        // console.log("Please enter a valid positive number for deposit.");
        alert("Please enter a valid number for deposit.");
    } else {
        // console.log("Deposit button clicked");
        // console.log(`Current balance: ${balance}`);
        // console.log(`Adding ${amountValue} to balance`);
        balance += amountValue;
        balanceEl.innerText = balance;
        // console.log(`New balance: ${balance}`);
    }
});

// Withdraw button click event
withdraw.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default action (e.g., form submission)
    let amountValue = parseInt(amount.value);

    if (isNaN(amountValue) || amountValue <= 0) {
        // console.log("Please enter a valid positive number for withdrawal.");
        alert("Please enter a valid number for withdrawal.");
    } else if (amountValue > balance) {
        // console.log("Insufficient funds for this withdrawal.");
        alert("Insufficient funds for this withdrawal.");
    } else {
        // console.log("Withdraw button clicked");
        // console.log(`Current balance: ${balance}`);
        // console.log(`Subtracting ${amountValue} from balance`);
        balance -= amountValue;
        balanceEl.innerText = balance;
        // console.log(`New balance: ${balance}`);
    }
});
