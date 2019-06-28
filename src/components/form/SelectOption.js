import React from 'react';

const SelectOption = (props) => {
    return(
        <div className="form-group">
            <label>{props.label}</label>
            <select className="form-control" value={props.value} onChange={props.onChange} name={props.name}>
                {props.options.map(option => (
                    <option key={option.value} value={option.value}> {option.displayValue} </option>
                ))}
            </select>
        </div>
    );
}

export default SelectOption;