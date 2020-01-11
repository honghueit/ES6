//Write a simple function that returns a boolean indicating whether or not a string is apalindrome.
//Write a simple function that returns a boolean indicating whether or not a string is apalindrome.
const patter = /(\w)(\w)\2\1/;
console.log(patter.test('12344321'));  // true
console.log(patter.test('123404321')); //False