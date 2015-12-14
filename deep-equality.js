// Deep Equality
// Write a function that, given two objects, returns whether or not the two are deeply equivalent–meaning the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.

// DO NOT use JSON.stringify.

deepEquals = function(obj1, obj2) {
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) { return false; }
    for (var key in obj1) {
        if (!obj2.hasOwnProperty(key)) {
            return false;
        }
        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            return deepEquals(obj1[key], obj2[key]);
        }
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
};