// returns true if the array contains the item
// returns false otherwise
function contains(array, item) {
    //for (var i = 0; i < array.length; i++) {
    //    if (array[i] === item)
    //        return true;
    //}
    //return false;
    return (array && array.indexOf(item)!= -1);
}

// adds the item to the array, if it is not yet included
// does nothing, otherwise
function add(array, item) {
    if (array && array.indexOf(item) === -1) {
        //array[array.length] = item;
        array.push(item);
    }
}

// removes the item from the array, if it is included
// does nothing, otherwise
function remove(array, item) {
    if(array && array.indexOf(item)!==-1)
        array.splice(array.indexOf(item), 1);
}

// returns the sum of all elements
function sum(array) {
    if (array)
        return array.reduce(function (pre, curr, index, arr) {
            curr = pre + arr[index];
            return curr;
        }, 0)
    else return 0;
}

