function simpleInterest(principleAmount) {
    return (principleAmount * (1 + (0.3875 * 7.5)));
}

function compoundInterest(principleAmount, rate, perTimePeriod) {
    return (principleAmount * (Math.pow((1 + rate / perTimePeriod), (perTimePeriod * 7.5))));
}

var principleAmount = 100000;
console.log('Total Amount: ' + simpleInterest(principleAmount));
console.log('Simple Interest: ' + (simpleInterest(principleAmount) - principleAmount));
console.log('---------------------------');
console.log('Total Amount: ' + compoundInterest(principleAmount, 0.03875, 4));
console.log('Compound Interest: ' + (compoundInterest(principleAmount, 0.03875, 4) - principleAmount));
