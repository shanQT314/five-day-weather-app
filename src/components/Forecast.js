import timeStampToDate from "./timestampToDate";
import styles from "../styles";


const Forecast = ({forecastData, handleClick}) => {
    let date = timeStampToDate(forecastData.dt);
    let icon = forecastData.weather[0].icon; 

    return (
        <div style={styles.dayForecastContainer} onClick={handleClick}>
          <img src={'./weather-icons/' + icon + '.svg' }/>
          <h2 style={styles.dayForecastHeader}>{date}</h2>
        </div>
    )
};

export default Forecast;
