import React, {Component} from 'react';
import Form from './components/form/Form';

class App extends Component {
    render(){
        return(
            <div className="container">
                <h1>Hello Form</h1>
                <Form />
            </div>
        );
    }
}

export default App;
