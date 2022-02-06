import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
        this.incrementCount = this.incrementCount.bind(this)
        this.incrementFiveTimes = this.incrementFiveTimes.bind(this)
    }

    // incrementCount() {
    //     this.setState({
    //         count: this.state.count + 1
    //     }, () => console.log(this.state.count))
    // }

    incrementCount() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    incrementFiveTimes() {
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
    }

    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={this.incrementCount}>Increment</button>
                <button onClick={this.incrementFiveTimes}>Increment Five</button>
            </div>
        );
    }
}

export default Counter;