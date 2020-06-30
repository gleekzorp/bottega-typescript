// Function Expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Daniel', 'Floyd'));
// Immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})('Daniel', 'Floyd');
//# sourceMappingURL=018_5_immediately_invoked_arguments.js.map