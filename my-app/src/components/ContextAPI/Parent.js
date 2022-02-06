import React, { Component } from 'react';
//import Child from './Child';
import UserContext from './UserContext';

class Parent extends Component {
    static contextType = UserContext;

    render() {
        return (
            <div>
                <h1>Parent Welcome - {this.context}</h1>
            </div>
        );
    }
}

export default Parent;