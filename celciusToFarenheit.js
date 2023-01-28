function celciusToFarenheit(celcius) {

    return ((celcius * (9 / 5)) + 32);
}

function farenheitToCelcius(farenheit) {

    return ((farenheit - 32) * (5 / 9));
}

console.log(celciusToFarenheit(25));
console.log(farenheitToCelcius(77));