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
            // This blank value is required so null values aren't pulled
            illnessNames: [{illness_name: ""}],
            dataRetrieved: false
        };

        // Bind functions
        this.handleChange = this.handleChange.bind(this);
        this._handleKeyDown = this._handleKeyDown.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.generateDataList = this.generateDataList.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:4000/illnesses/allIllnessByName')
            .then(response => response.json())
            .then(response => this.setState({illnessNames: response}));
        this.setState({dataRetrieved: true});
    }

    // Manages any changes made in the form, and updates the objects state
    handleChange(e) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        this.setState({
            [e.target.name]: value
        });

    }

    // Checks for if the user presses enter while using the form
    _handleKeyDown(e) {
        if(e.key === 'Enter') {
            this.handleChange(e);
            this.handleSubmit();
        }
    }

    // Submits the data in the form for inserting into the database
    handleSubmit() {
        if(this.state.illness_name === "") {
            alert("Please enter the name of your illness.");
        }
        else {
            this.props.pushData(this.state.illness_name, this.state.duration,
                this.state.timeOfYear, this.state.gender, this.state.discomfort);
            alert("Your entry has been recorded.");
        }
    }

    generateDataList() {
        return (
            <datalist id="illnessName">
              {this.state.illnessNames.map(function(name){
                return <option value={name.illness_name}/>;
              })}
            </datalist>
        );
    }

    render() {
        return(
            <div className="row">
                <div className="col-12 search_bar">
                    <div className="formItemWrapper">
                    <br/>
                    Illness Name:<br/>
                        <input type="text" name="illness_name" value={this.state.illness_name} placeholder="Name of Illness"
                            onChange={this.handleChange} onKeyDown={this._handleKeyDown} autoComplete="on"
                            list="illnessName" className="form-control"></input>
                            {this.generateDataList()}
                        <datalist id="illnessName">
                            <option value="Common Cold"/>
                            <option value="Flu"/>
                        </datalist>
                        <br/>
                    </div>
                    <div className="formItemWrapper">
                        Duration:<br/>
                        <select name="duration" className="form-control" onChange={this.handleChange}>
                            <option value="days">Days</option>
                            <option value="weeks">Weeks</option>
                            <option value="months">Months</option>
                            <option value="years">Years</option>
                        </select><br/>
                    </div>
                    <div className="formItemWrapper">
                        Time Of Year:<br/>
                        <select name="timeOfYear" className="form-control" onChange={this.handleChange}>
                            <option value="spring">Spring</option>
                            <option value="summer">Summer</option>
                            <option value="fall">Fall</option>
                            <option value="winter">Winter</option>
                        </select><br/>
                    </div>
                    <div className="formItemWrapper">
                        Gender:<br/>
                        <select name="gender" className="form-control" onChange={this.handleChange}>
                            <option value="m">Male</option>
                            <option value="f">Female</option>
                        </select><br/>
                    </div>
                    <div className="formItemWrapper">
                        Discomfort Level:<br/>
                        <select name="discomfort" className="form-control" onChange={this.handleChange}>
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
                        </select>
                    </div><br/><br/>
                    <button className="btn btn-primary submitButton" onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        );
    }
}
