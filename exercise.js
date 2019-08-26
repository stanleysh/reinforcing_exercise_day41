function luckCheck(numString) {
    if (numString.length % 2 == 0) {
        var firstHalf = numString.slice(0, numString.length/2);
        var secondHalf = numString.slice(numString.length/2, numString.length);
    } else {
        var firstHalf = numString.slice(0, numString.length/2);
        var secondHalf = numString.slice(numString.length/2 + 1, numString.length);
    }
    if (!isNaN(numString)){
        let firstSum = 0;
        let secondSum = 0;
        for (let char of firstHalf) {
            firstSum += +char;
        };
        for (let char of secondHalf) {
            secondSum += +char;
        };
        if (firstSum == secondSum) {
            return ('You got a lucky ticket!');
        } else {
            return ('That\'s just a regular ticket');
        };
    } else {
        return 'The string is invalid'
    }
}

// console.log(luckCheck('003111'))

console.log(luckCheck('003111'))
console.log(luckCheck('813372'))
console.log(luckCheck('17935'))
console.log(luckCheck('12345'))