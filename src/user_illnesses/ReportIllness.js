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

    insertData(illnessName, duration, timeOfYear, gender, levelOfDiscomfort) {
        // insertData has access to all elements in the IllnessReportForm form
    }

    render() {
        return(
            <div className="row justify-content-center diseaseSearchContainer">
                <div className="col-10">
                    <h2>Report Your Illness</h2>
                    <h4>How are you feeling?</h4>
                    <IllnessReportForm  pushData={this.insertData}/>
                </div>
            </div>
        );
    }
}
