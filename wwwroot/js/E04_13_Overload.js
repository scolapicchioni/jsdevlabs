//that throws a TypeError if both function have the same number of parameters,
//and otherwise, returns an function that:
//when called with n parameters forwards the call to function_with_n_parameters,
//when called with m parameters forwards the call to function_with_m_parameters,
//when called otherwise throws a TypeError
function overload(function_with_n_parameters, function_with_m_parameters) {
    if (!function_with_n_parameters || typeof function_with_n_parameters !== "function") {
        throw new TypeError("function_with_n_parameters missing or of wrong type");
    }
    if (!function_with_m_parameters || typeof function_with_m_parameters !== "function") {
        throw new TypeError("function_with_m_parameters missing or of wrong type");
    }
    if (function_with_n_parameters.length === function_with_m_parameters.length) {
        throw new TypeError("same number of parameters!");
    }
    var retfunction = function () {    
        var num_params = arguments.length;
        if (function_with_n_parameters.length == num_params) {
            return function_with_n_parameters.apply(this,arguments);
        }
        if (function_with_m_parameters.length == num_params) {
            return function_with_m_parameters.apply(this,arguments);
        }
    }
    return retfunction;
}
