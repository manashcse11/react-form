import React, {Component} from 'react';
import TextInput from './TextInput';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            formControls: {
                name: {
                    label: 'Name'
                    , value: ''
                    , placeholder: 'What is your name'
                }
                , amount: {
                    label: 'Amount'
                    , value: ''
                    , placeholder: 'How much do you want'
                }
            }
        }
    }

    changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState(
            {
                formControls: {
                    ...this.state.formControls
                    , [name]: {
                        ...this.state.formControls[name]
                        , value
                    }
                }
            }
        );
    }

    render() {
        return (
            <div>
                <TextInput label={this.state.formControls.name.label} name="name" placeholder= {this.state.formControls.name.placeholder} value={this.state.formControls.name.value} onChange={this.changeHandler}/>
                <TextInput label={this.state.formControls.amount.label} name="amount" placeholder= {this.state.formControls.amount.placeholder} value={this.state.formControls.amount.value} onChange={this.changeHandler}/>
            </div>
        );
    }
}

export default Form;