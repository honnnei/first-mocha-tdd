let array = [1, 2, 3];
let you = "hey";
console.log(typeof(array));

exports.addTogether = function(array) {

  if (array.isArray() === false) {
    return 'Numbers must be an array of numbers';
  }

  for(i = 0; i < array.length; i++) {
    if (typeof(array[i]) !== "number") {
        return 'Numbers must be an array of numbers';
      } else {
        return 'hi';
      }


}


return array[0] + array[1];


if (Array.isArray(array) === false) {
  return 'Numbers must be an array of numbers';
}
let arrayIsNumbers = true;

for(i = 0; i < array.length; i++) {
  if (typeof(array[i]) !== "number") {
    arrayIsNumbers = false;
  }

if (arrayIsNumbers === false) {
  return 'Numbers must be an array of numbers';
}
