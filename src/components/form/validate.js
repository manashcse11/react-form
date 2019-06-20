const validate = (value, rules) => {
    let isValid = true;

    for(let key in rules){
        if(key == 'minlength'){
            isValid = isValid && value.length >= rules[key];
        }
    }
    return isValid;
}

export default validate;