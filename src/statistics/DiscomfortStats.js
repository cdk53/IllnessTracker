import React from 'react';
import './statistics.css';
import * as Highcharts from "highcharts";
import HighchartsReact from 'highcharts-react-official';

// This class will present statistics visualization based on user-reported illnesses
export default class DiscomfortStats extends React.Component {
    constructor(props) {
        super(props);

        const chartName = this.props.givenName + " by Discomfort";

        // Counter for each discomfort value (Don't judge this code please)
        let discomfortValue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for(var i = 0; i < this.props.statistics.length; i++) {
            discomfortValue[this.props.statistics[i].discomfort - 1]++;
        }

        this.state = {
            chart: {
                type: 'column',
                backgroundColor: '#F4F4F9',
                borderColor: '#111111',
                borderWidth: 1
            },
            title: {
                text: chartName
            },
            xAxis: {
                type: 'category',
                title: {
                    enabled: true,
                    text: 'Discomfort Level',
                },
                categories: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9',
                    '10',
                ],
            },
            yAxis: {
                title: {
                    text: 'Number reported'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                }
            },
            tooltip: {
                headerFormat: 'Discomfort Level of {point.key}:<br/> ',
                pointFormat: '{point.y} Reported Cases'
            },
            credits: {
                enabled: false
            },
            series: [{
                colorByPoint: true,
                data: [
                        discomfortValue[0],
                        discomfortValue[1],
                        discomfortValue[2],
                        discomfortValue[3],
                        discomfortValue[4],
                        discomfortValue[5],
                        discomfortValue[6],
                        discomfortValue[7],
                        discomfortValue[8],
                        discomfortValue[9]
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
