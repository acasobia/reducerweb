//smart component'

import React, { Component } from 'react';
import Value from './Value';
import Control from './Control';


export default class Counter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
               <Value/>
               <Control/>
            </div>
        )
    }
}
