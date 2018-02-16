function getClosestToZero(...values) {
    var absValues = values.map(function(value) {
         return Math.abs(value);
    });
    return Math.min.apply(null, absValues);
}
