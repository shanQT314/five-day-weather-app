import React, { Component } from "react"
import styles from "../styles"
import Forecast from "./Forecast"
import DetailedWeather from "./DetailedWeather"


class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      daySelected: false,
      weatherSelected: null
    }
  }

  imageClick = (weather) => {
    this.setState({
      daySelected: true,
      weatherSelected: weather
    })
  } 

  render() {
    const {
      city,
      weather
    } = this.props.weatherData

    const {
      daySelected,
      weatherSelected
    } = this.state

    const Forecast5Days = ({city, forecastData, handleClick}) => (
      <div>
        <h1 style={styles.forecastHeader}>{city}</h1>
        <div style={styles.forecastContainer}>
           {forecastData.list.map((forecastItem) => {
             return(
              <Forecast key={forecastItem.dt} id={forecastItem.dt} forecastData={forecastItem} handleClick={handleClick.bind(null, forecastItem)}/>
             )
           })}
        </div>
      </div>
    );
    
    return ( 
      <div>        
      {
        !daySelected && (
        <Forecast5Days city={city} forecastData={weather} handleClick={(weather) => this.imageClick(weather)}/>
      )}

        {daySelected && (
          <DetailedWeather
              city={city} weather={weatherSelected}
          />
        )}
      </div>
      
    )
  }
}

export default Weather
