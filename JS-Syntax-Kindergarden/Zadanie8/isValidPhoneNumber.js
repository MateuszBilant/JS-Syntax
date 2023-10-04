const isValidPhoneNumber = (value) => {
    validate(value);
    const regValidNumber = /^([0-9]{3})(?<link>(\-| ))?([0-9]{3})(\k<link>)([0-9]{3})$/g;
    return regValidNumber.test(value)
}
const validate = (input) =>{
    if ((typeof input !== 'number')){
        if ((typeof input !== 'string'))
        throw new Error('Value must be a number or a string.')
    }
}
