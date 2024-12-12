


let score = 0;
let clickValue = 1;
let upgradeCost = 10;
let autoClickerCount = 0; // For autoclicker logic
let autoClickerCost = 500;
const autoClickerInterval = 1000; // 1-second interval

const scoreDisplay = document.getElementById("score");
const clickButton = document.getElementById("clickButton");
const upgradeButton = document.getElementById("upgrade");
const autoClickerButton = document.getElementById("Tryhard");

// Update score display initially
updateDisplay();

// Button click logic
clickButton.addEventListener("click", () => {
    score += clickValue;
    updateDisplay();
});

upgradeButton.addEventListener("click", () => {
    if (score >= upgradeCost) {
        score -= upgradeCost; // Deduct cost
        clickValue++; // Increase click value
        upgradeCost *= 2; // Double the upgrade cost
        upgradeButton.textContent = `Mihai multiplier (Cost: ${upgradeCost})`;
        updateDisplay();
    }
});

autoClickerButton.addEventListener("click", () => {
    if (score >= autoClickerCost) {
        score -= autoClickerCost; // Deduct cost
        autoClickerCount++; // Increment autoclicker count
        autoClickerCost = Math.floor(autoClickerCost * 1.5); // Increase cost
        autoClickerButton.textContent = `Tryhard Mihai (Cost: ${autoClickerCost})`;
        if (autoClickerCount === 1) {
            startAutoClicker(); // Start autoclicker if first one
        }
        updateDisplay();
    }
});

// Function to update the score and button states
function updateDisplay() {
    scoreDisplay.textContent = score;
    updateButtonAvailability();
}

function updateButtonAvailability() {
    console.log(`Score: ${score}, Upgrade Cost: ${upgradeCost}, AutoClicker Cost: ${autoClickerCost}`);
    upgradeButton.disabled = score < upgradeCost;
    autoClickerButton.disabled = score < autoClickerCost;
}

// Function to start the autoclicker
function startAutoClicker() {
    setInterval(() => {
        score += autoClickerCount; // Add score based on autoclicker count
        updateDisplay();
    }, autoClickerInterval);
}

// Initial display update
updateDisplay();
