import React from 'react';
import './user.css';

// Incorporates the search functionality

export default class IllnessReportForm extends React.Component {
    constructor(props) {
        super(props);

        // State including input forms (default values set as state)
        this.state = {
            textInput: "",
            illness_name: "",
            duration: "days",
            timeOfYear: "spring",
            gender: "m",
            discomfort: 1,
        }

        // Bind functions
        this.handleChange = this.handleChange.bind(this);
        this._handleKeyDown = this._handleKeyDown.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        this.setState({
            [e.target.name]: value
        });

    }

    _handleKeyDown(e) {
        if(e.key === 'Enter') {
            this.handleChange(e);
            this.handleSubmit();
        }
    }

    handleSubmit() {
        if(this.state.illness_name === "") {
            alert("Please enter the name of your illness.");
        }
        else {
            this.props.fetchData(this.state.input);
        }
    }

    render() {
        return(
            <div className="row">
                <div className="col-12 search_bar">
                    <input type="text" name="illness_name" value={this.state.illness_name} placeholder="Name of Illness"
                        onChange={this.handleChange} onKeyDown={this._handleKeyDown}></input><br/>
                    Duration:<br/>
                    <select name="duration" onChange={this.handleChange}>
                        <option value="days">Days</option>
                        <option value="weeks">Weeks</option>
                        <option value="months">Months</option>
                        <option value="years">Years</option>
                    </select><br/>
                    Time Of Year:<br/>
                    <select name="timeOfYear" onChange={this.handleChange}>
                        <option value="spring">Spring</option>
                        <option value="summer">Summer</option>
                        <option value="fall">Fall</option>
                        <option value="winter">Winter</option>
                    </select><br/>
                    Gender:<br/>
                    <select name="gender" onChange={this.handleChange}>
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                    </select><br/>
                    Discomfort Level:<br/>
                    <select name="discomfort" onChange={this.handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select><br/>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        );
    }
}
