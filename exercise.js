/*------hasOddNumber------*/
//Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

function hasOddNumber(arr) {
  return arr.some(function (num) {
    return num % 2 !== 0;
  });
}

/*------hasAZero------*/
//Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false
function hasAZero(num) {
  return num
    .toString()
    .split("")
    .some(function (val) {
      return val === "0";
    });
}

function hasAOne(num) {
  return num
    .toString()
    .split("")
    .some(function (val) {
      return val === "1";
    });
}

/*------hasOnlyOddNumbers------*/
// Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false.

function hasOnlyOddNumbers(arr) {
  return arr.every(function (num) {
    return num % 2 !== 0;
  });
}

/*------hasNoDuplicates------*/
// Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.
function hasNoDuplicates(arr) {
  return arr.every(function (searchValue) {});
}

/*------hasCertainKey------*/
// Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

function hasCertainKey(arrObj, key) {
  return arrObj.every(function (element) {
    return key in element;
  });
}

let arr = [
  { title: "Instructor", first: "Elie", last: "Schoppik" },
  { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
  { title: "Instructor", first: "Matt", last: "Lane" },
  { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true },
];

/*------hasCertainValue------*/
//Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

function hasCertainValue(arrObj, key, value) {
  return arrObj.every(function (val) {
    return val[key] === value;
  });
}
