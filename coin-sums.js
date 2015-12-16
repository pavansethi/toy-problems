function coinSums (total) {
    var coins = [1,2,5,10,20,50,100,200];
    var count = 0;

    function makeChange(remaining, value) {
        var current = remaining.pop();
        if (remaining.length === 0) {
            count++;
            return;
        }


        while (value >= 0) {
            makeChange(remaining.slice(), value);
            value -= current;
        }

    }
    makeChange(coins, total);
    return count;
}