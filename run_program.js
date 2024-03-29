// ES5 syntax
function shootEnemyES5(enemy) {
    return "Shooting " + enemy + " with assault rifle!";
}

var meleeAttackES5 = function(enemy) {
    return "Performing melee attack on " + enemy + "!";
};

// ES6 syntax
const shootEnemyES6 = (enemy) => {
    return `Shooting ${enemy} with assault rifle!`;
};

const meleeAttackES6 = (enemy) => `Performing melee attack on ${enemy}!`;

// Function to pick up a weapon
function pickUpWeapon(character, weapon) {
    return `${character} picked up ${weapon}!`;
}

// Function to display victory message
function victoryMessage(character, callback) {
    var message = "Mission accomplished, " + character + "!";
    return callback(message);
}

// Function to celebrate victory
function celebrate(message) {
    return message + " Celebrate with your team!";
}

// Main function
function main() {
    var enemy1 = "Covenant Elite";
    var enemy2 = "Promethean Soldier";
    var character = "Master Chief";
    var weapon = "Rocket Launcher";

    // Using functions with ES5 syntax
    console.log(shootEnemyES5(enemy1));
    console.log(meleeAttackES5(enemy2));

    // Using functions with ES6 syntax
    console.log(shootEnemyES6(enemy1));
    console.log(meleeAttackES6(enemy2));

    // Pick up a weapon
    console.log(pickUpWeapon(character, weapon));

    // Display victory message and celebrate
    console.log(victoryMessage(character, celebrate));
}

// Run the main function
main();
