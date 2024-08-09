// Initialize bank balances
const banks = {
    UBA: 5000,
    Access: 3000,
    FCMB: 4000,
    Moniepoint: 2000,
    Opay: 1000,
};

// Set initial PIN (you can customize this)
let pin = "1234";

// Display welcome message
console.log("Welcome, Dear User!");

// Prompt user to change PIN
const changePin = confirm("Welcome, Dear User! Would you like to change your PIN?");
if (changePin) {
    const newPin = prompt("Enter your new PIN:");
    pin = newPin;
    console.log("PIN changed successfully!");
}
// Display available banks
console.log("Available banks:");
for (const bankName in banks) {
    console.log(`- ${bankName}`);
}

// Prompt user to select a bank
const selectedBank = prompt("Enter the bank name (e.g., UBA, Access, FCMB):");

// Validate bank selection
if (!banks[selectedBank]) {
    console.error("Invalid bank selection. Please choose a valid bank.");
} else {
    // Prompt user for PIN
    const enteredPin = prompt("Enter your PIN:");
    if (enteredPin !== pin) {
        console.error("Incorrect PIN. Access denied.");
    } else {
        // Display menu options
        console.log("Menu Options:");
        console.log("1. Deposit");
        console.log("2. Withdraw");
        console.log("3. Check Balance");
        console.log("4. Change PIN");

        // Prompt user for menu choice
        const choice = parseInt(prompt("Enter your choice (1-4):"));

        switch (choice) {
            case 1:
                // Deposit
                const depositAmount = parseFloat(prompt("Enter the deposit amount:"));
                banks[selectedBank] += depositAmount;
                console.log(`Deposit successful! New balance: $${banks[selectedBank]}`);
                break;
            case 2:
                // Withdraw
                const withdrawAmount = parseFloat(prompt("Enter the withdrawal amount:"));
                if (withdrawAmount > banks[selectedBank]) {
                    console.error("Insufficient balance.");
                } else {
                    banks[selectedBank] -= withdrawAmount;
                    console.log(`Withdrawal successful! New balance: $${banks[selectedBank]}`);
                }
                break;
            case 3:
                // Check balance
                console.log(`Current balance: $${banks[selectedBank]}`);
                break;
            case 4:
                // Change PIN
                const newPin = prompt("Enter your new PIN:");
                pin = newPin;
                console.log("PIN changed successfully!");
                break;
            default:
                console.error("Invalid choice. Please select a valid option.");
        }
    }
}

