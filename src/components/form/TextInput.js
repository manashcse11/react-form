import React from 'react';

const TextInput = (props) => {
    return (
        <div className="form-group">
            <label for={props.name}>{props.label}</label>
            <input type="text" className="form-control" {...props} />
        </div>
    );
}

export default TextInput;