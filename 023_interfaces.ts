// ? is if you want a value to be optional
interface User {
  email : string;
  firstName?: string;
  lastName?: string;
}

function profile(user: User) : string {
  return `Welcome, ${user.firstName} ${user.lastName}`

  // Object Deconstruction
  // const {firstName, lastName} = user
  // return `Welcome, ${firstName} ${lastName}`
}

var realUser = {
  email: 'test@test.com',
  firstName: 'Jordan',
  lastName: 'Hudgens'
};

var optionalUser = {
  email: 'test@test.com',
  firstName: 'Jordan'
};

console.log(profile(realUser))
console.log(profile(optionalUser))