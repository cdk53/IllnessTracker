import React from 'react';
import './user.css';
import IllnessReportForm from './IllnessReportForm.js';

// This class will handle self-reported illnesses by the user

export default class ReportIllness extends React.Component {
    constructor(props) {
        super(props);
    }

    insertData(illnessName, duration, timeOfYear, gender, levelOfDiscomfort) {

    }

    render() {
        return(
            <div className="row justify-content-center diseaseSearchContainer">
                <div className="col-10">
                    <h2>Report Your Illness</h2>
                    <h4>How are you feeling?</h4>
                    <IllnessReportForm/>
                </div>
            </div>
        );
    }
}
