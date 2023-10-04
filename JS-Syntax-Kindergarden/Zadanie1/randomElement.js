const getRandomElement = (array) => {
    checkIfArray(array);
    const randomElement = Math.floor(Math.random()*array.length);
    return array[randomElement];
}

const checkIfArray = (input) => {
    if(!Array.isArray(input)){
        throw new Error("Parameter is not an array")
    }
}