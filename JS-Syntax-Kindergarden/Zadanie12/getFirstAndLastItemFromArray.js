const getFirstAndLastItemFromArray = (array) => {
	checkIfArray(array);
	const firstItem = array.slice(0, 1) 
	const lastItem = array.slice(-1)    

	return "FirstItem:" + firstItem + " LastItem:" + lastItem
}
const checkIfArray = (input) => {
    if (!Array.isArray(input)){
        throw new Error('First argument must be an array.')
    }
}


