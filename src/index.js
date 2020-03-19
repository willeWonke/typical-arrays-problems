
exports.min = function min (array) {
  if (!array || array.length == 0 ) return 0;
    let min = 1;
    array.forEach(el => {
        if (el < min) {
            min = el;
        }
    });
    return min;
}

exports.max = function max (array) {
  if (!array || array.length == 0 ) return 0;
    let max = 1;
    array.forEach(el => {
        if (el > max) {
            max = el;
        }
    });
    return max;
}

exports.avg = function avg (array) {
  if (!array || array.length == 0 ) return 0;
    let sum = 0;
    array.forEach(element => sum += element);
    return sum / array.length;
}
