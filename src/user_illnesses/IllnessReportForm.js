import React from 'react';
import './user.css';

// Incorporates the search functionality

export default class IllnessReportForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            illness_name: "",
            duration: "",
            timeOfYear: "",
            gender: "",
            discomfort: -1,
        }
    }
    handleChange(e) {
        this.setState({input: e.target.value});
    }

    _handleKeyDown(e) {
        if(e.key === 'Enter') {
            this.handleChange(e);
            this.handleSubmit();
        }
    }

    handleSubmit() {
        this.props.fetchData(this.state.input);
    }

    render() {
        return(
            <div className="row">
                <div className="col-12 search_bar">
                    <input type="text" name="search" placeholder="Name of Illness"
                        onChange={this.handleChange} onKeyDown={this._handleKeyDown}></input><br/>
                    Duration:<br/>
                    <select>
                        <option value="days">Days</option>
                        <option value="weeks">Weeks</option>
                        <option value="months">Months</option>
                        <option value="years">Years</option>
                    </select><br/>
                    Time Of Year:<br/>
                    <select>
                        <option value="spring">Spring</option>
                        <option value="summer">Summer</option>
                        <option value="fall">Fall</option>
                        <option value="winter">Winter</option>
                    </select><br/>
                    Gender:<br/>
                    <select>
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                    </select><br/>
                    Discomfort Level:<br/>
                    <select>
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
