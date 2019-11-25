import React from 'react';
import './statistics.css';
import * as Highcharts from "highcharts";
import HighchartsReact from 'highcharts-react-official';
import GenderStats from './GenderStats.js';
import DiscomfortStats from './DiscomfortStats.js';

// This class will present statistics visualization based on user-reported illnesses
export default class IllnessStatistics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            illnessData: [{illness_name: ""}],
            dataRetrieved: false,
            input: "",
            illnessNames: [{illness_name: ""}], // Used for autofill functionality
            namesRetrieved: false, // Used for autofill functionality
            searched: false, // Used only for first time searching
        }

        // Binding functions
        this.fetchData = this.fetchData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this._handleKeyDown = this._handleKeyDown.bind(this);
        this.generateDataList = this.generateDataList.bind(this);
        this.nameExists = this.nameExists.bind(this);
        this.generateCharts = this.generateCharts.bind(this);
    }

    // Handles any change presented by a key press by value e
    handleChange(e) {
        this.setState({input: e.target.value});
    }

    // Handles submissions by the enter button
    _handleKeyDown(e) {
        if(e.key === 'Enter') {
            this.handleChange(e);
            this.fetchData();
        }
    }

    // Provides names to the list of autofill
    generateDataList() {
        return (
            <datalist id="illnessName">
              {this.state.illnessNames.map(function(name){
                return <option value={name.illness_name}/>;
              })}
            </datalist>
        );
    }

    nameExists() {
        for(var i = 0; i < this.state.illnessNames.length; i++) {
          if(this.state.illnessNames[i].illness_name == this.state.input) {
              return true;
          }
        }
        // Item not found
        return false;
    }

    // Runs the SQL query to fetch
    fetchData() {
        if(this.state.input === "") {
            alert("Please enter the name of your illness.");
        }
        else if(!this.nameExists()) {
            // Only allow names of illness found in the database
            alert("Illness name not recognized. Please choose from the list of illness names");
        } else {
            fetch('http://localhost:4000/user_reported/getAllByName?name='+this.state.input)
                .then(response => response.json())
                .then(response => this.setState({illnessData: response}));
            this.setState({dataRetrieved: true, searched: true});
        }
    }

    componentDidMount() {
        fetch('http://localhost:4000/illnesses/allIllnessByName')
            .then(response => response.json())
            .then(response => this.setState({illnessNames: response}));
        this.setState({namesRetrieved: true});
    }

    generateCharts() {
        if(this.state.dataRetrieved && typeof this.state.illnessData[0] !== 'undefined' &&
            this.state.illnessData[0].illness_name !== '') {
            return (
                <div className="row">
                    <div className="col-6">
                        <GenderStats statistics={this.state.illnessData}
                                     givenName={this.state.illnessData[0].illness_name}/>
                         <DiscomfortStats statistics={this.state.illnessData}
                                      givenName={this.state.illnessData[0].illness_name}/>
                    </div>
                </div>
            );
        } else if(this.state.searched) {
            return (<p>No user reported cases found.</p>);
        }
    }

    render() {
        return(
            <div className="row justify-content-center diseaseSearchContainer">
                <div className="col-10 reportForm">
                    <h2>Search for an illness to see our user-reported statistics</h2>
                    <input type="text" name="illness_name" value={this.state.illness_name} placeholder="Name of Illness"
                        onChange={this.handleChange} onKeyDown={this._handleKeyDown} autoComplete="on"
                        list="illnessName"></input>
                        {this.generateDataList()}
                    <button onClick={this.fetchData}>Submit</button><br/><br/>
                    {this.generateCharts()}
                </div>
            </div>
        );
    }
}
