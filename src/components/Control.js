import React, { Component } from 'react';
import PropTypes from 'prop-types';

function createWarning(funcName) {
    return ()=>console.log(funcName + 'is not difined')
}

class Control extends Component {

    static defaultProps={
        onPlus:()=>createWarning('onPlus'),
        onSubtrack:()=>createWarning('onSubtract'),
        onRamdomizeColor:()=>createWarning('onSubtract'),
    }
 

render() {
     return (
        <div>
                <button onClick={this.props.onPlus}></button>
                <button onClick={this.props.onPlus}></button>
                <button onClick={this.props.onPlus}>RandomColorSize</button>
        </div>
        );
    }
}

Control.PropTypes = {
         onPlus:PropTypes.func,
         onSubtrack:PropTypes.func,
         onRamdomizeColor:PropTypes.func       
            };

export default Control;