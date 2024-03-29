// Callback function
function victoryMessage(character, callback) {
    var message = "Mission accomplished, " + character + "!";
    return callback(message);
}

function celebrate(message) {
    return message + " Celebrate with your team!";
}

console.log(victoryMessage("Master Chief", celebrate)); // Output: Mission accomplished, Master Chief! Celebrate with your team!
