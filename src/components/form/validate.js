const validate = (value, rules) => {
    let isValid = 1;

    for(let key in rules){
        if(key == 'minlength'){
            isValid = (isValid && value.length >= rules[key]) ? 1 : 0;
        }
    }
    return isValid;
}

export default validate;