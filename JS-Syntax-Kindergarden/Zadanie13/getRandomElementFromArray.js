const getRandomElement = (arr) => {
	checkIfArray(arr);
	return arr[Math.floor(Math.random() * arr.length)]
}
const checkIfArray = (input) => {
    if (!Array.isArray(input)){
        throw new Error('First argument must be an array.')
    }
}
