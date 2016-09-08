// returns the sum of all parameters
function sum(/*arbitrary number of parameters*/) {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

// writes ‘Hello’ to the console,
// or ‘Hello <name>’ if a name is provided
// (hint: try using the || operator)
function sayHello(name) {
    name = name || "";
    console.log("Hello " + name);
}
