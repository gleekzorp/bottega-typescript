// Boolean
var paidAccount = false;
// Number
var age = 33;
var taxRate = 7.5;
// String
var fullName = "Daniel Floyd";
// Array
var ages = [33, 28, 11];
// Tuple
var player;
player = [3, 'Corerra', .333, 33];
// Enum
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["Approved"] = 0] = "Approved";
    ApprovalStatus[ApprovalStatus["Pending"] = 1] = "Pending";
    ApprovalStatus[ApprovalStatus["Rejected"] = 2] = "Rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
;
var job = ApprovalStatus.Pending;
console.log(job);
// Any
var apiData = [123, 'Daniel', false];
// Void
function printOut(msg) {
    console.log(msg);
}
// ??? Objects?
//# sourceMappingURL=007_types.js.map