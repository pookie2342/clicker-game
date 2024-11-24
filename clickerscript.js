let score = 0;
let clickValue = 1;
let upgradeCost = 10;


const scoreDisplay = document.getElementById
const clickButton = document.getElementById
const upgradeButton = document.getElementById

clickButton.addEventListener("click", () => {
score += clickValue;
scoreDisplay.textContent = score;
checkUpgradeAvailibility();
});


upgradeButton.addEventListener("click", () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        clickValue ++ ;
        upgradeCost *= 2;
        upgradeButton.textContent = 'Upgrade click (cost: ${upgradeCost})';
        scoreDisplay.textContent = score;
        checkUpgradeAvailibility();
    }
});


function checkUpgradeAvailibility() {
upgradeButton.disabled = score < upgradeCost;
}