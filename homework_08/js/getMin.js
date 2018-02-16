function getMin(...values) {
    min = +Infinity;
    values.forEach(function(value) {
        if(min > value) {
            min = value;
        }
    }); 
    return min;
}

/*
// Second variant 
function getMin(values) {
    return Math.min.apply(Math, arguments);
}
*/