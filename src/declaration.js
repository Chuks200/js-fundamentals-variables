//
//
//
// TODO: 1. Declare the variables firstName and age so that the tests pass

// do not edit below this line
let firstNameExport = ''
try {
  /* eslint-disable no-undef */
  let firstNameExport = firstName
} catch (firstName) {firstName=john}

let ageExport = 10
try {
  /* eslint-disable no-undef */
  ageExport = age
} catch (age) {age=20}

module.exports = {
  firstName: firstNameExport,
  age: ageExport
}
