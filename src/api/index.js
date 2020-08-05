import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableCountry = url;
  if (country) {
    changeableCountry = `${url}/countries/${country}`
  }
  try {
    const { data: { confirmed, deaths, recovered, lastUpdate } } = await axios.get(changeableCountry);
    return { confirmed, deaths, recovered, lastUpdate };
  } catch (err) {
    console.log(err);
  }
};


export const fetchDailyData = async () => {
	try {
		const { data } = await axios.get(`${url}/daily`);

		const modifiedDailyData = data.map(dailydata => ({
      confirmed: dailydata.confirmed.total,
      deaths: dailydata.deaths.total,
      date: dailydata.reportDate,
    }))
    return modifiedDailyData;
	}catch(err){
		console.log(err)
	}
}


export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);
    return countries.map(country => country.name);
  }
  catch(err){
    console.log(err);
  }
}
