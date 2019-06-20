import React, {Component} from 'react';
import TextInput from './TextInput';
import validate from './validate';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            formControls: {
                name: {
                    label: 'Name'
                    , value: ''
                    , placeholder: 'What is your name'
                    , valid: false
                    , touched: false
                    , validationRules: {
                        minlength: 3
                    }
                }
                , email: {
                    label: 'Email'
                    , value: ''
                    , placeholder: 'Email please'
                    , valid: false
                    , touched: false
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
        updatedField.touched = true;
        updatedField.valid = validate(value, this.state.formControls[name].validationRules);
        oldData[name] = updatedField;
        this.setState({
            formControls: oldData
        });
    }

    render() {
        return (
            <div>
                <TextInput label={this.state.formControls.name.label} name="name" placeholder= {this.state.formControls.name.placeholder} value={this.state.formControls.name.value} onChange={this.changeHandler}/>
                <TextInput label={this.state.formControls.email.label} name="email" placeholder= {this.state.formControls.email.placeholder} value={this.state.formControls.email.value} onChange={this.changeHandler}/>
            </div>
        );
    }
}

export default Form;