function forEach(arr, callback) {
    for(var i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

function increment(num) {
    return num + 1;
}

function getTransformedArray(arr, func) {
    var newArr = [];
    forEach(arr, function(num) {
        newArr.push(func(num));
    });
    console.log(newArr);
}

getTransformedArray([1, 7, 20], increment);