import React, { Component } from 'react';
import PropTypes from 'prop-types';
const propTypes={
    number: PropTypes.number.isRequired,
};



export default class Value extends Component {

    static defaultProps={
        number:-1 // 아직 값을 못가져 옴
    
    };
    
    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        )
    }
}

Value.propTypes = {
    number: PropTypes.number.isRequired,
};

