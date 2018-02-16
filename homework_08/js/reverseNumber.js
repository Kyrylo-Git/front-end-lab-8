function reverseNumber(number) {
    if (Number.isInteger(number)) {
        if (number < 0) return -reverseNumber(-number);
        var reverseNum = number.toString().split("").reverse().join("");
        return Number(reverseNum);
    } else {
        return "Value is not type of integer";
    }
}