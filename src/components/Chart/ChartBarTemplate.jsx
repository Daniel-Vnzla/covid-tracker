import React from 'react';

import { Bar } from 'react-chartjs-2';

const ChartBarTemplate = ({ data: {confirmed, recovered, deaths }, country }) => {

	const barChartData = {
		labels: ['Infected', 'Recovered', 'Deaths'],
		datasets: [{
			label: 'People',
			data: [confirmed.value, recovered.value, deaths.value],
			backgroundColor: [ 'rgba(0,0,255,0.5)', 'rgba(0,255,0,0.5)', 'rgba(255,0,0,0.5)'],
		}]
	}

	const barChartDataOptions = {
		legend: { display: false },
		title: { display: true, text: `Current state in ${country}`},
	}

	return <Bar data={barChartData} options={barChartDataOptions}/>
}


export default ChartBarTemplate;