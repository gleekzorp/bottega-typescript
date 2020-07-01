// Start mowing -> Pending
// Complete mowing process -> Resolve
// Did not complete mowing process -> Reject
"use strict";
var performUpload = function (imageStatus) {
    return new Promise(function (resolve) {
        console.log("Status: " + imageStatus);
        setTimeout(function () {
            resolve({ imageStatus: imageStatus });
        }, 1000);
    });
};
var upload;
var compress;
var transfer;
performUpload('uploading...')
    .then(function (res) {
    upload = res;
    return performUpload('compressing...');
})
    .then(function (res) {
    compress = res;
    return performUpload('transferring...');
})
    .then(function (res) {
    transfer = res;
    return performUpload('Image upload completed.');
});
//# sourceMappingURL=029_promises.js.map