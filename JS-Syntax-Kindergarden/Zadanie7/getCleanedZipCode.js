const getCleanedZipCode = (value) => {
    validate(value);
    const valueReg = /^[0-9]{2}(\-| )?[0-9]{3}$/;
    let cleanedZipCode = "";
    if (valueReg.test(value)){
        cleanedZipCode += /^[0-9]{2}/.exec(value) + "-" + /[0-9]{3}$/.exec(value);
    }
return cleanedZipCode;
}

const validate = (input) =>{
    if (typeof input !== 'number' && typeof input !== 'string')
        throw new Error('Value must be a number or a string.')
}


