const firstName = 'Jane'
const age = 35
let firstNameExport = firstName
let ageExport = 10

firstNameExport = firstName

try {
  ageExport = age
} catch (error) {
  console.log('Error assigning age:', error)
}

console.log(firstNameExport)

module.exports = {
  firstName: firstNameExport,
  age: ageExport
}
