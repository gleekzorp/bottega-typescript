// This will run because of hoisting
console.log(fullName('Daniel', 'Floyd'))

// These will not run, I would need to call these below
// console.log(otherFullName('Daniel', 'Floyd'))
// console.log(thirdFullName('Daniel', 'Floyd'))

// Function Declaration
function fullName(first: string, last: string) : string {
  return first + " " + last;
}

// Function Expression
var otherFullName : (first: string, last: string) => string;

otherFullName = function (first: string, last: string) {
  return first + " " + last;
}

var thirdFullName : (first: string, last: string) => string = function (first: string, last: string) {
  return first + " " + last;
}