// Higher-order function
function usePower(character, action) {
    return action(character);
}

console.log(usePower("Spartan-087", shootEnemy)); // Output: Shooting Spartan-087 with assault rifle!
console.log(usePower("Spartan-117", meleeAttack)); // Output: Performing melee attack on Spartan-117!
