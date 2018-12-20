import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
    
    static defaultProps={  
        name:'kiwdwdm',
        number:0,
        func: ()=>{
            console.log('this')
        }
    };
    
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}

App.propTypes = {
    number:PropTypes.number,
    name:PropTypes.func.isRequired
};

export default App;