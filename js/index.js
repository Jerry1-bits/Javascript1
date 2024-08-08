// Initialize balances
let bankA = 1000;
let bankB = 2000;

// Display initial balances
console.log(`Initial balances:\nBank A: $${bankA}\nBank B: $${bankB}`);

// Prompt user for transfer amount
const transferAmount = parseFloat(prompt("Enter the amount to transfer:"));

// Validate input
if (isNaN(transferAmount) || transferAmount <= 0) {
    console.error("Invalid input. Please enter a valid positive number.");
} else if (transferAmount > bankA) {
    console.error("Insufficient balance in Bank A.");
} else {
    // Confirm transfer
    const confirmTransfer = confirm(`Transfer $${transferAmount} from Bank A to Bank B?`);
    if (confirmTransfer) {
        // Update balances
        bankA -= transferAmount;
        bankB += transferAmount;
        console.log(`Transfer successful!\nNew balances:\nBank A: $${bankA}\nBank B: $${bankB}`);
    } else {
        console.warn("Transfer canceled.");
    }
}

