let email : string = "test@test.com"
let password : string = 'asdfasdf';

// AND
// if(password == 'asdfasdf' && email == 'test@test.com') {
//   console.log('You are authorized');
// } else {
//   console.log('Sorry, permission denied');
// }

// OR
// if(password == 'asdfasdf' || password == 'zxcvzxcv') {
//   console.log('You are authorized');
// } else {
//   console.log('Sorry, permission denied');
// }

// NOT
if (!(email == 'test@test.com')) {
  console.log('You are authorized')
}