import React from 'react';
import './statistics.css';
import * as Highcharts from "highcharts";
import HighchartsReact from 'highcharts-react-official';

// This class will present statistics visualization based on user-reported illnesses
export default class DurationStats extends React.Component {
    constructor(props) {
        super(props);

        const chartName = this.props.givenName + " by Duration";

        // Find the total number per duration
        let days = 0;
        let weeks = 0;
        let months = 0;
        let years = 0;

        for(var i = 0; i < this.props.statistics.length; i++) {
            if(this.props.statistics[i].duration === "days") {
                days++;
            }
            else if(this.props.statistics[i].duration === "weeks") {
                weeks++;
            }
            else if(this.props.statistics[i].duration === "months") {
                months++;
            }
            else if(this.props.statistics[i].duration === "years") {
                years++;
            }
        }

        this.state = {
            chart: {
                type: 'pie',
                backgroundColor: '#F4F4F9',
                borderColor: '#111111',
                borderWidth: 1
            },
            title: {
                text: chartName
            },
            credits: {
                enabled: false
            },
            tooltip: {
                pointFormat: '{point.y} Cases'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        style: {
                            fontWeight: 'bold',
                            color: 'white'
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    },
                    size: '75%'
                }
            },
            series: [{
                data: [
                    ["Days", days],
                    ["Weeks", weeks],
                    ["Months", months],
                    ["Years", years]
                ]
            }]
        }
    }

    componentDidMount() {
        fetch('http://localhost:4000/illnesses/allIllnessByName')
            .then(response => response.json())
            .then(response => this.setState({illnessNames: response}));
        this.setState({namesRetrieved: true});
    }

    render() {
        return(<HighchartsReact highcharts={Highcharts} options={this.state} />);
    }
}
