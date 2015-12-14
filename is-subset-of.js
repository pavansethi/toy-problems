// Is Subset Of
// Make an array method that can return whether or not a context array is a subset of an input array. To simplify the problem, you can assume that both arrays will contain only strings.

Array.prototype.isSubsetOf = function(haystack) {
    var found = 0;
    for (var i = 0; i < this.length; i++) {
        if (haystack.indexOf(this[i]) > -1) { found++; }
    }
return found === this.length
}