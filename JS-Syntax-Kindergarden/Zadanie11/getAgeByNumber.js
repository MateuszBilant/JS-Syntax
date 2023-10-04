const getAgeByNumber = (number) => {
	checkIfNumber(number);
	if (number <= 10) {
		return "young"
	} else if (number > 50) { 
		return "old"
	}
	return "adult"
}
const checkIfNumber = (input) => {
    if (typeof input !== 'number' || isNaN(input)) {
        throw new Error('Initial value must be a number.');
    }
}


