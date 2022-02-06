import React, { Component } from 'react';

class ChildLifeCycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'ChildLifeCycle'
        }
        console.log('ChildLifeCycle Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('ChildLifeCycle getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('ChildLifeCycle componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('ChildLifeCycle shouldCOmponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('ChildLifeCycle getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('ChildLifeCycle componentDidUpdate');
    }

    render() {
        console.log('ChildLifeCycle render');
        return <div>{this.state.name}</div>;
    }
}

export default ChildLifeCycle;