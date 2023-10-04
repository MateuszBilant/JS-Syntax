const removeFirstAndLastLetter1 = (value) => { 
    const validatedValue = validateVale(value)
    let newString = "";
    for (let i=1; i<validatedValue.length -1; i++){
        newString += validatedValue.charAt(i)
        }
    return newString;
}
const removeFirstAndLastLetter2 = (value) => { 
    checkIfString(value);
    checkLength(value);
    let removedLetters = value.slice(1,-1)
    return removedLetters;
}
const removeFirstAndLastLetter3 = (value) =>{
    checkIfString(value);
    checkLength(value);
    let removedLetters = "";
    removedLetters += value.replace(/^.(.*).$/, "$1");
    return removedLetters;
}

const validatedValue = (input) => {
    checkIfString(value);
    const trimedValue = value.trim()
    checkLength(trimedValue);
    return trimedValue
}

const checkIfString = (input) => {
    if (typeof input !== 'string') {
        throw new Error('Sentence must be a string.');
    }
}
const checkLength = (input) => {
    if (input.trim().length < 2) {
        throw new Error('Sentence must contain at least 2 characters.');
    }
}
