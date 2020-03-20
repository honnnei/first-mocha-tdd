
exports.addTogether = function(array) {
  let arrayIsNumbers = true;
  if (Array.isArray(array) === false) {
    return 'Numbers must be an array of numbers';
  } else {
    for(i = 0; i < array.length; i++) {
      if (typeof(array[i]) !== "number") {
        arrayIsNumbers = false;
      }
  }}


  if (arrayIsNumbers === true) {
    let sum = 0
    for(i = 0; i < array.length; i++) {
      sum = sum + array[i];
      }
    return sum;
  } else {
    return 'Numbers must be an array of numbers';
  }

}
