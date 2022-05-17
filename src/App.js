import React, { Component } from "react";
import SearchBox from "./components/searchBox";
import Weather from "./components/Weather";
import SearchBar from "./components/SearchBar";
import Get5dayWeather from "./components/WeatherApiCall";
import styles from "./styles";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      weatherData: {
        weather: {},
        city: "",
      },
      searchDone: false,
      errorMessage: "" 
    }
  
    this.callWeatherData = this.callWeatherData.bind(this)
  }

  callWeatherData(city) {
    if (this.state.searchDone) {
      this.setState({
        searchDone: false
      })
    }
    Get5dayWeather(city).then(items => { 
      console.log(items);
      this.setState({
        weatherData: {weather: items, city: city, temp: 0},
        searchDone: true,
        errorMessage: ""
      })
    }).catch((error) => {
      if (error.response) {
          this.setState({ errorMessage: error.response })
          console.log(error.response.data);
      } else if (error.request) {
          this.setState({ errorMessage: error.request })
          console.log(error.request);
      } else {
          console.log('Error', error.message);
      }
      console.log(error.config);
    });
  }

    render() {
      const {
        searchDone,
        weatherData,
        errorMessage,
      } = this.state

    return ( 
      
      <div className="App">
          <SearchBar
              callBackFromParent={this.callWeatherData}
              error={errorMessage}
          />

          {!searchDone && (
            <div style={styles.mainPage}>
          <SearchBox callBackFromParent={this.callWeatherData} error={errorMessage}
          />
          </div>
          )}    

          {searchDone && (
            <Weather
                weatherData={weatherData} 
            />
          )}
  
      </div>
      
    )
  }
}

export default App;

