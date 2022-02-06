import React, { Component } from 'react';
import ChildLifeCycle from './ChildLifeCycle';

class ParentLifeCyle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'ParentLifeCycle'
        }
        console.log('ParentLifeCycle constuctor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('ParentLifeCycle getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('ParentLifeCycle componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('ParentLifeCycle shouldCOmponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('ParentLifeCycle getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('ParentLifeCycle componentDidUpdate');
    }

    render() {
        console.log('ParentLifeCycle render');
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={() => this.setState({ name: 'Prasanna' })}>Change State</button>
                <br /><br /><ChildLifeCycle />
            </div>
        );
    }
}

export default ParentLifeCyle;