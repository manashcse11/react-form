import React, {Component} from 'react';
import TextInput from './TextInput';
import validate from './validate';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            formIsValid: 0
            , formControls: {
                name: {
                    label: 'Name'
                    , value: ''
                    , placeholder: 'What is your name'
                    , valid: 0
                    , touched: 0
                    , validationRules: {
                        minlength: 3
                    }
                }
                , email: {
                    label: 'Email'
                    , value: ''
                    , placeholder: 'Email please'
                    , valid: 0
                    , touched: 0
                    , validationRules: {
                        minlength: 5
                    }
                }
            }
        }
    }

    changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;

        const oldData = this.state.formControls;
        const updatedField = oldData[name];
        updatedField.value = value;
        updatedField.touched = 1;
        updatedField.valid = validate(value, this.state.formControls[name].validationRules);
        oldData[name] = updatedField;
        
        let formIsValid = 1;
        for(let field in oldData){
            formIsValid = formIsValid && oldData[field].valid;
        }

        this.setState({
            formIsValid: formIsValid
            , formControls: oldData
        });
    }

    formSubmitHandler = () => {
        console.dir(this.state.formControls);
    }

    render() {
        return (
            <div>
                <TextInput name="name" 
                    label={this.state.formControls.name.label}
                    placeholder= {this.state.formControls.name.placeholder} 
                    value={this.state.formControls.name.value} 
                    onChange={this.changeHandler}
                    touched={this.state.formControls.name.touched}
                    valid={this.state.formControls.name.valid}/>
                <TextInput name="email" 
                    label={this.state.formControls.email.label} 
                    placeholder= {this.state.formControls.email.placeholder} 
                    value={this.state.formControls.email.value} 
                    onChange={this.changeHandler}
                    touched={this.state.formControls.email.touched}
                    valid={this.state.formControls.email.valid}/>

                <button type="button" className="btn btn-info" onClick={this.formSubmitHandler} disabled={!this.state.formIsValid}>Submit</button>
            </div>
        );
    }
}

export default Form;