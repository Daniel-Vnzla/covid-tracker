import React from 'react';

import { Line } from 'react-chartjs-2';


const ChartLineTemplate = ({ data }) => {

	const lineChartData = {
		labels: data.map(({ date }) => date),
		datasets: [{
			data: data.map(({ confirmed }) => confirmed),
			label: 'Infected',
			borderColor: 'rgba(0,0,255,.5)',
			fill: true,
		},{
			data: data.map(({ deaths }) => deaths),
			label: 'Deaths',
			borderColor: 'rgba(255,0,0,.5)',
			fill: true,
		}],
	}

	return <Line data={lineChartData}/>
}

export default ChartLineTemplate;