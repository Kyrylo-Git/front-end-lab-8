var naturalNumber = Number(prompt("Please enter natural number N (0 < N <= 20)"));

if (!isNaN(naturalNumber && isFinite(naturalNumber)) &&
    Math.sign(naturalNumber) == 1 && naturalNumber !== 0 &&
    naturalNumber % 1 === 0 && naturalNumber <= 20) {

        var str = "", k = 0, space, rows = naturalNumber;
        for(var i = 1; i <= rows; i++) {

            for (space = 1; space <= (rows - i); space++) {
                str += "   ";
            }
            while(k != (2 * i - 1)) {
                str += "[~]";
                k++;
            }
            k = 0;
            str += "\n";
        }

        console.log(str);
    
} else {
    console.log("Incorrect!");
}
