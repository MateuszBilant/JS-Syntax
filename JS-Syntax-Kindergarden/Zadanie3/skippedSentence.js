const getSkippedSentence = (sentence, skip) => {
    checkIfString(sentence);
    checkIfNumber(skip); 
    checkIfIndex(skip); 
    let newSentence = "";
    for (let i = 0; i < sentence.length; i++){
        if (i % skip === 0){
        newSentence += sentence.charAt(i);
    }
    }
    return newSentence;
}

const checkIfString = (input) => {
    if (typeof input !== 'string') {
        throw new Error('Sentence must be a string.');
    }
}

const checkIfNumber = (input) => {
    if (typeof input !== 'number' || isNaN(input)) {
        throw new Error('Skip must be a number.');
    }
}

const checkIfIndex = (input) => {
    if (!(Number.isInteger(input)) || input < 0) {
        throw new Error('Skip must be an integer higer than 0.');
    }
}
