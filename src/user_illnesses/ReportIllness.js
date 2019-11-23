import React from 'react';
import './user.css';
import IllnessReportForm from './IllnessReportForm.js';

// This class will handle self-reported illnesses by the user

export default class ReportIllness extends React.Component {
    constructor(props) {
        super(props);

        // Binding functions
        this.insertData = this.insertData.bind(this);
    }

    insertData(illnessName, duration, timeOfYear, gender, discomfort) {
        // insertData has access to all elements in the IllnessReportForm form
        fetch('http://localhost:4000/illnesses/insertUserReportedIllnessData?name='+illnessName+'&dur='+duration+'&time_of='+timeOfYear+'&gender='+gender+'&discomf='+discomfort)
            .then(response => response.json());
    }

    render() {
        return(
            <div className="row justify-content-center diseaseSearchContainer">
                <div className="col-10 reportForm">
                    <h2>Reporting Your Illness</h2>
                    <h4>Provide some information about your current condition</h4>
                    <IllnessReportForm  pushData={this.insertData}/>
                </div>
            </div>
        );
    }
}
