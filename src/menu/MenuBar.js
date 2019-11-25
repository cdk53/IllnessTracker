import React from 'react';
import './menu.css';

// In this class we can add buttons in the future, as we come up with ideas

export default class MenuBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="row menuBar">
                <div className="col-12 text-center">
                    <button className="navButton" onClick={() => {this.props.selectionHandler(1)}}>Illness Search</button>
                    <button className="navButton" onClick={() => {this.props.selectionHandler(2)}}>Symptom Search</button>
                    <button className="navButton" onClick={() => {this.props.selectionHandler(3)}}>Report Illness</button>
                    <button className="navButton" onClick={() => {this.props.selectionHandler(4)}}>Illness Statistics</button>
                </div>
            </div>
        );
    }
}
