
const areTheyEqual = (firstValue, secondValue) => { 
    if (typeof firstValue === 'object' && typeof secondValue === 'object'){
        return testObjects(firstValue, secondValue);
    }
    if (typeof firstValue !== typeof secondValue){
        return false;
    }
    return firstValue === secondValue;
}
const testObjects = (input1, input2) =>{
    const keys1 = Object.keys(input1).sort();
    const keys2 = Object.keys(input2).sort();
    console.log('keys:'+ keys1)
    if (keys1.length !== keys2.length){
        console.log('nierowne keys')
        return false;
    }

    for (let key1 of keys1){
        console.log(input1[key1])
        if (typeof input1[key1] !== 'object' && typeof input2[key1] !== 'object'){
            if (input1[key1] !== input2[key1]){
                return false;
            }
        }
        if (!areTheyEqual(input1[key1], input2[key1])){
            return false;
        }
    }
    console.log('test objects end')
    return true
}
