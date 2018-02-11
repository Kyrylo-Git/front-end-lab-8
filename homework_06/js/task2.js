const courseEuro = 33.2324;
const courseUsd = 27.1240;

function init() {
    var amountEuro, amountUsd;
    amountEuro = parseFloat(prompt("Please enter amount of EURO:"));
    amountUsd = parseFloat(prompt("Please enter amount of USD:"));
    
    if(isCorrectInputValue(amountEuro) && isCorrectInputValue(amountUsd)) {
        convector(amountEuro, amountUsd);
    } else {
        console.log("Something go wrong! Try to enter again.")
    }
}

function isCorrectInputValue(inputValue) {
    return !isNaN(inputValue && isFinite(inputValue)) && Math.sign(inputValue) == 1;
}

function convector(euroVal, usdVal) {
    var convectEuroUah = euroVal * courseEuro;
    var convectUsdUah = usdVal * courseUsd;
    var convectEuroUsd = courseEuro / courseUsd;

    console.log(euroVal + " euros are equal " +  convectEuroUah.toFixed(2) + " UAH, " + usdVal + " dollars are equal " + 
                convectUsdUah.toFixed(2) + " UAH," + " one euro is equal " + convectEuroUsd.toFixed(2) + " dollars.");
}

window.onload = init();