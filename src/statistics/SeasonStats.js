import React from 'react';
import './statistics.css';
import * as Highcharts from "highcharts";
import HighchartsReact from 'highcharts-react-official';

// This class will present statistics visualization based on user-reported illnesses
export default class SeasonStats extends React.Component {
    constructor(props) {
        super(props);

        const chartName = this.props.givenName + " by Season";
        var springCount = 0;
        var summerCount = 0;
        var fallCount = 0;
        var winterCount = 0;

        for(var i = 0; i < this.props.statistics.length; i++) {
            if(this.props.statistics[i].time_of_year === "spring") {
                springCount++;
            }
            else if(this.props.statistics[i].time_of_year === "summer") {
                summerCount++;
            }
            else if(this.props.statistics[i].time_of_year === "fall") {
                fallCount++;
            }
            else if(this.props.statistics[i].time_of_year === "winter") {
                winterCount++;
            }
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
                    text: 'Season',
                },
                categories: [
                    'Spring',
                    'Summer',
                    'Fall',
                    'Winter'
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
                headerFormat: '{point.key}:<br/> ',
                pointFormat: '{point.y} Reported Cases'
            },
            credits: {
                enabled: false
            },
            series: [{
                colorByPoint: true,
                data: [
                    springCount,
                    summerCount,
                    fallCount,
                    winterCount,
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
