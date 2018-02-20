function forEach(arr, callback) {
    for(var i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

function predicateFunction(num) {
    return num > 3;
}

function getFilteredArray(arr, predFunc) {
    var filteredArray = [];
    forEach(arr, function(num) {
        if(predFunc(num)) {
            filteredArray.push(num);
        }
    });
    return filteredArray; 
} 


console.log(getFilteredArray([1, 7, 20], predicateFunction));