const getArraySum = (numbersArray, initialValue) => {
   validate(numbersArray, initialValue);
   if (numbersArray.length === 0){
    return initialValue;
   }
   if (numbersArray.length > 0){
    if (Array.isArray(numbersArray[numbersArray.length - 1])){
        initialValue += numbersArray.pop().reduce((acc, value) => acc = acc + value)
    }
    initialValue += numbersArray.pop()
    return getArraySum(numbersArray, initialValue)
   }
}

const validate = (array, number) =>{
    checkIfArray(array);
    checkIfNumber(number);
}

const checkIfArray = (input) => {
    if (Array.isArray(input) === 'false'){
        throw new Error('First argument must be an array.')
    }
}

const checkIfNumber = (input) => {
    if (typeof input !== 'number' || isNaN(input)) {
        throw new Error('Initial value must be a number.');
    }
}
