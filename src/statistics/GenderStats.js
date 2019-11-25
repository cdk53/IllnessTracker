import React from 'react';
import './statistics.css';
import * as Highcharts from "highcharts";
import HighchartsReact from 'highcharts-react-official';

// This class will present statistics visualization based on user-reported illnesses
export default class GenderStats extends React.Component {
    constructor(props) {
        super(props);

        const chartName = this.props.givenName + " by Gender";

        // Find the total number of male and female
        let males = 0;
        let females = 0;
        for(var i = 0; i < this.props.statistics.length; i++) {
            console.log(this.props.statistics[i].gender);
            if(this.props.statistics[i].gender === "m") {
                males++;
            }
            else {
                females++;
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
                pointFormat: '{point.percentage:.1f}%</b>'
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
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '75%'],
                    size: '110%'
                }
            },
            series: [{
                innerSize: '20%',
                data: [
                    ["Males", males],
                    ["Females", females]
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
