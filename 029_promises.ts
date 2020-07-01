// Start mowing -> Pending
// Complete mowing process -> Resolve
// Did not complete mowing process -> Reject

"use strict";

let performUpload = function(imageStatus : string) : Promise<{imageStatus : string}> {
	return new Promise((resolve) => {
		console.log(`Status: ${imageStatus}`);
		setTimeout(() => {
			resolve({imageStatus: imageStatus})
		}, 1000)
	});
}

var upload;
var compress;
var transfer;

performUpload('uploading...')
.then((res) => {
	upload = res
	return performUpload('compressing...');
})
.then((res) => {
	compress = res
	return performUpload('transferring...');
})
.then((res) => {
	transfer = res
	return performUpload('Image upload completed.');
});