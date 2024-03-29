// Global variable
var globalVariable = "I am a global variable.";

function demonstrateScope() {
    // Local variable
    var localVariable = "I am a local variable.";

    console.log(globalVariable); // Output: I am a global variable.
    console.log(localVariable); // Output: I am a local variable.
}

demonstrateScope();
