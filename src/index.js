module.exports = function reverse(n) {
    if (n < 0) {
        let MinusToPlusDigit = String(n).split('').reverse();
        let minusHolder = MinusToPlusDigit.pop();
        return MinusToPlusDigit.join('');
    } else return String(n).split('').reverse().join('');

}
