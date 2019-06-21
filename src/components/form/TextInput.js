import React from 'react';

const TextInput = (props) => {
    let textFieldClass = "form-control";
    // if(props.touched && !props.valid){
    //     textFieldClass += " is-invalid"
    // }

    textFieldClass += (props.touched && !props.valid) ? " is-invalid" : "";
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input type="text" className={textFieldClass} {...props} />
        </div>
    );
}

export default TextInput;