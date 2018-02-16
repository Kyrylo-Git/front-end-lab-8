function isSmaller(firstArg, secondArg) {
    function isBigger() {
        return firstArg > secondArg || firstArg == secondArg;
    }
    return !isBigger();
}
