import React from 'react';
import './App.css';
import ForecastBoard from './Components/ForecastBoard/ForecastBoard';
import WeeklyBoard from './Components/WeeklyBoard/WeeklyBoard';
import Form from './Components/Form/Form';

const apiKey = '82cb111bc649e69ecb5600c098ef47fb'

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      city: "",
      dailyTempreture: [],
      dailyMaxTemreture: [],
      dailyWindSpeed: [],
      dailyImageName: [],
      description: ""
    }

    this.getForecast = this.getForecast.bind(this);
  }

  getForecast(cityName){
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${apiKey}`).then(response => {
        return response.json();
    }).then(jsonResponse => {
        if (jsonResponse.list){

          // save the city name
          this.setState({city: cityName});

          // save the daily tempreture
          let dailyTempArr = [];
          dailyTempArr.push(jsonResponse.list[0].main.temp);
          dailyTempArr.push(jsonResponse.list[8].main.temp);
          dailyTempArr.push(jsonResponse.list[16].main.temp);
          dailyTempArr.push(jsonResponse.list[24].main.temp);
          dailyTempArr.push(jsonResponse.list[32].main.temp);
          // round all the values of the array
          dailyTempArr = dailyTempArr.map(temp => {
            return Math.round(parseFloat(temp)).toString();
          });
          this.setState({dailyTempreture: dailyTempArr});

          // save the daily max tepreture - for now we only use the current max tempreture (0)
          let dailyMaxTempArr = [];
          dailyMaxTempArr.push(jsonResponse.list[0].main.temp_max);
          dailyMaxTempArr.push(jsonResponse.list[8].main.temp_max);
          dailyMaxTempArr.push(jsonResponse.list[16].main.temp_max);
          dailyMaxTempArr.push(jsonResponse.list[24].main.temp_max);
          dailyMaxTempArr.push(jsonResponse.list[32].main.temp_max);
          dailyMaxTempArr = dailyMaxTempArr.map(temp => {
            return Math.round(parseFloat(temp)).toString();
          });
          this.setState({dailyMaxTemreture: dailyMaxTempArr});

          // save the daily wind speed - for now we only use the current wind speed (0)
          let dailyWindSpeedArr = [];
          dailyWindSpeedArr.push(jsonResponse.list[0].wind.speed);
          dailyWindSpeedArr.push(jsonResponse.list[8].wind.speed);
          dailyWindSpeedArr.push(jsonResponse.list[16].wind.speed);
          dailyWindSpeedArr.push(jsonResponse.list[24].wind.speed);
          dailyWindSpeedArr.push(jsonResponse.list[32].wind.speed);
          this.setState({dailyWindSpeed: dailyWindSpeedArr});
         
          // save the main description in order to determine the image
          let dailyImageNameArr = [];
          dailyImageNameArr.push(jsonResponse.list[0].weather[0].main);
          dailyImageNameArr.push(jsonResponse.list[8].weather[0].main);
          dailyImageNameArr.push(jsonResponse.list[16].weather[0].main);
          dailyImageNameArr.push(jsonResponse.list[24].weather[0].main);
          dailyImageNameArr.push(jsonResponse.list[32].weather[0].main);
          this.setState({dailyImageName: dailyImageNameArr});

          // save the current 
          this.setState({description: jsonResponse.list[0].weather[0].description});
        }
    })
  }

  componentWillMount() {
    this.getForecast("Nazareth");
  }

  render(){
    return (
      <div className="App">
        <Form getForecast={this.getForecast} />
        <ForecastBoard tempreture={this.state.dailyTempreture[0]} maxTempreture={this.state.dailyMaxTemreture[0]}
                       description={this.state.description} city={this.state.city} windSpeed={this.state.dailyWindSpeed[0]}/>
        <WeeklyBoard dailyTempArr={this.state.dailyTempreture} dailyImage={this.state.dailyImageName}/>
      </div>
    );
  }
}

export default App;
