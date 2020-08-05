import React, { useState, useEffect } from 'react';

import ChartLineTemplate from './ChartLineTemplate';
import ChartBarTemplate from './ChartBarTemplate';
import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

const Chart = ({ data , country }) => {
	const [dailyData,setDailyData] = useState([]);

	useEffect(() => {
		const fetchApi = async () => {
			setDailyData(await fetchDailyData());
		}
		fetchApi();
	},[]);

	const lineChart = ( dailyData.length ? <ChartLineTemplate data={dailyData}/> : 'Not Data Found');
	const barChart = ( data.confirmed ? <ChartBarTemplate data={data} country={country} /> : 'Not Data Found')

	return (
			<div className={styles.container}>
				{country ? barChart : lineChart}
			</div>
		)
}

export default Chart; 