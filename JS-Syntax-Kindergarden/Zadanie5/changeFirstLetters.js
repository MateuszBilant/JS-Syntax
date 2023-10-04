
const changeFirstLetters = (text) => {
    checkIfString(text);
    const textArray = text.split(" ");
    const result = textArray.reduce((resultText, word) => {
       if (/^[A-Z]/.test(word)){
        return resultText + (word.charAt(0).toLowerCase() + word.substring(1) + " ")
       } 
        return resultText + (word.charAt(0).toUpperCase() + word.substring(1) + " ")
       }, "")
return result
}

const checkIfString = (text) => {
    if (typeof text !== 'string') {
        throw new Error('Text must be a string.');
    }
} 
