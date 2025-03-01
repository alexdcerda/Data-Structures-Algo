
const capacity = 16
const load_factor = 0.75



function hash(key) {
    let hashCode = 0

    const primeNumber = 31
    for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i)
    }
    return hashCode
}