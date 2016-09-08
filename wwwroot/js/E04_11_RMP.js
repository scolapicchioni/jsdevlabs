var reflection = (function (undefined) {
    // returns the name of the function as a string if the function has a name,
    // returns the empty string if it is an anonymous function, 
    // returns undefined otherwise
    //(hint: try using regular expressions)
    function functionName(funct) {
        if (typeof funct === "function") {
            var code = funct.toString();
            var functionPosition = code.search(/\bfunction\b/);
            var openParenthesisPosition = code.search(/\(/);
            var value = code.substring(functionPosition + 8, openParenthesisPosition).trim();
            return value.length > 0 ? value : undefined;
        }
        return undefined;
    }

    // returns true if the object has the propery with that name
    // returns false otherwise
    // (hint: try using the in operator)	
    function hasProperty(object, propertyName) {
        return propertyName in object;
    }

    // returns true if the object has all listed properties
    // returns false otherwise
    // (hint: this function has one or more arguments)
    //hasProperties(object, "aa", "rr"); 
    function hasProperties(object) {
        //return Array.prototype.every.call(Array.prototype.slice.call(arguments,1),(function (x) { return x in object}));
        for (var i = 1; i < arguments.length; i++) {
            if(!(arguments[i] in object))
                return false;
        }
        return true;
    }

    return {
        functionName: functionName,
        hasProperty: hasProperty,
        hasProperties : hasProperties
    };
})();