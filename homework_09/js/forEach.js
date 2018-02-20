function forEach(arr, callback) {
    for(var i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

forEach([3, 5 ,2], function(el) {
    console.log(el);
});

/*
// вариант 2 (в завданні був вивід: 3 5 2)
function forEach(arr = [], callback) {
    var str = "";
    for(var i = 0; i < arr.length; i++) {
        if (i == 0) {
            str = str + arr[i];
        } else {
            str = str + " " + arr[i];
        }
    }
    callback(str);
}
*/