

const name = 'alex'
const middleName = 'DDDDDDD'
const surname = 'CCCCCC'

function hash(name, middleName, surname) {
    return name.charAt(0) + middleName.charAt(0) + surname.charAt(0)
}
console.log(hash(name, middleName, surname))


///// turn string to number 
const newName = 'iamcracked'

function stringToNumber(string) {
    let hashCode = 0
    for (let stringLetter = 0; stringLetter < string.length; stringLetter++) {
        hashCode += string.charCodeAt(stringLetter)
    }
    return hashCode
        
}
function newHash(newName) {
    return stringToNumber(newName)
}
console.log(newHash(newName))