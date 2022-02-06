import React, { Component } from 'react';
import { UserConsumer } from './UserContext';

class Child extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {user => {
                        return (
                            <div>
                                <h1>Child Component</h1>
                                <h3>Hello {user}</h3>
                            </div>
                        )
                    }}
                </UserConsumer>
            </div>
        );
    }
}

export default Child;