function isPrime(value) {
    if (value == 1) {
        return false;
    }
    for(var i = 2; i * i <= value; i++) {
        if(value % i == 0) {
            return false;
        }
    }
    return true;
}