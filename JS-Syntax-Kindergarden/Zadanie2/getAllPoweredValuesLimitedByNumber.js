const getAllPoweredValuesLimitedByNumber = (value) => {
    checkIfNumber(value);
    const sqNrArr = [];
    for (let i = 1; (Math.pow(i, 2)) < value; i++) {
        sqNrArr.push(Math.pow(i, 2));
    }
    return sqNrArr;
}

const checkIfNumber = (value) => {
    if (typeof value !== 'number' || isNaN(value)) {
        throw new Error('Value is not a number');
    }
}