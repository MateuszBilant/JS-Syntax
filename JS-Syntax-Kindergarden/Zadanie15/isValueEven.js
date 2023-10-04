function isEvenValue(number) {
	checkIfNumber(number);
	if (number % 2 === 0) {
		return true
	}
	return false
}
const checkIfNumber = (input) => {
    if (typeof input !== 'number' || isNaN(input)) {
        throw new Error('Input must be a number.');
    }
}
