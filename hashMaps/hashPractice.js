

const name = 'alex'
const middleName = 'DDDDDDD'
const surname = 'CCCCCC'



// hash function
function hash(name, middleName, surname) {
    return name.charAt(0) + middleName.charAt(0) + surname.charAt(0)
}
console.log("hash:", hash(name, middleName, surname))




///// turn string to number 
const newName = 'Iamcracked'

function stringToNumber(string) {
    let hashCode = 0
    for (let stringLetter = 0; stringLetter < string.length; stringLetter++) {
        hashCode += string.charCodeAt(stringLetter)
    }
    return hashCode      
}
console.log("newName:", stringToNumber(newName))





// avoid collisions when hashing: iamcracked and amicracked
// will now have different hashes
const newName2 = 'amIcracked'

function stringToNumber2(string) {
    let hashCode = 0
    primeNumber = 10
    for (let stringLetter = 0; stringLetter < string.length; stringLetter++) {
        hashCode = primeNumber * hashCode + string.charCodeAt(stringLetter)
    }
    return hashCode
}
console.log("newName2:", stringToNumber2(newName2));
console.log("newName:", stringToNumber2(newName));

