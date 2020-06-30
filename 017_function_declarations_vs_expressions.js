// Function Declaration
function fullName(first, last) {
    return first + " " + last;
}
// Function Expression
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Daniel', 'Floyd'));
console.log(otherFullName('Daniel', 'Floyd'));
console.log(thirdFullName('Daniel', 'Floyd'));
//# sourceMappingURL=017_function_declarations_vs_expressions.js.map