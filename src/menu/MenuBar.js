import React from 'react';
import './menu.css';

// In this class we can add buttons in the future, as we come up with ideas

export default class MenuBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="row menuBar justify-content-center">
                <div className="col-4">
                    <button onClick={() => {this.props.selectionHandler(1)}}>Illness Search</button>
                    <button onClick={() => {this.props.selectionHandler(2)}}>Symptom Search</button>
                    <button onClick={() => {this.props.selectionHandler(3)}}>Report Illness</button>
                </div>
            </div>
        );
    }
}
