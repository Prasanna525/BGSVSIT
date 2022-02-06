import React, { Component } from 'react';

class DemoForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            comment: '',
            gender: '',
            language: 'vue',
            batch: ''
        }
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleGenderChange = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value
        })
    }

    handleCheckboxChange = (event) => {
        this.setState({
            batch: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" value={this.state.email} onChange={this.handleEmailChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="sex">Sex: </label>
                    <input type="radio" value="Male" name="gender"
                        checked={this.state.gender === 'Male'}
                        onChange={this.handleGenderChange} /> Male
                    <input type="radio" value="Female" name="gender"
                        checked={this.state.gender === 'Female'}
                        onChange={this.handleGenderChange} /> Female
                    <input type="radio" value="Other" name="gender"
                        checked={this.state.gender === 'Other'}
                        onChange={this.handleGenderChange} /> Other
                </div>
                <br />
                <div>
                    <label htmlFor="language">Language: </label>
                    <select id="language" value={this.state.language} onChange={this.handleLanguageChange}>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                        <option value="angular">Angular</option>
                    </select>
                </div>
                <br />
                <div>
                    <label htmlFor='batch'>Batch: </label>
                    <input type="checkbox" id='batch' name='batch' value='Regular'
                        checked={this.state.batch === 'Regular'}
                        onChange={this.handleCheckboxChange} /> Regular
                    <input type="checkbox" id='batch' name='batch' value='Weekend'
                        checked={this.state.batch === 'Weekend'}
                        onChange={this.handleCheckboxChange} /> Weekend
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comments</label>
                    <textarea id="comment" value={this.state.comment} onChange={this.handleCommentChange} />
                </div>
                <br />
                <button type='submit'>Submit</button>
            </form>
        );
    }
}
export default DemoForm;