import axios from "axios";

const BaseUrl = "https://api.openweathermap.org/data/2.5/";
const ApiKey = "6b1564e226bd5a7217a02a38f242ca40";
const numberOfTimeStamps  = "40";


export default function Get5dayWeather(city) { 
  return axios
    .get(
      `${BaseUrl}forecast/?q=${city}&type=accurate&APPID=${ApiKey}&cnt=${numberOfTimeStamps}&units=metric`
    )
    .then(function(weather) { 
      let filteredData = weather.data.list.filter(function(value, index, Arr) {
        return index % 8 === 0
      });
      weather.data.list = filteredData;

      return weather.data;
    });
}

