import styles from "../styles";
import Forecast from "./Forecast";


const DetailedWeather = ({city, weather}) => {
    return (
      <div style={styles.dayDetailContainer}>
        <Forecast forecastData={weather} />
        <h2>{city}</h2>
        <p>{weather.weather[0].description}</p>
        <p>min temp: {weather.main.temp_min} C</p>
        <p>max temp: {weather.main.temp_max} C</p>
        <p>humidity: {weather.main.humidity}</p>
     </div>
    )
  };

export default DetailedWeather;
