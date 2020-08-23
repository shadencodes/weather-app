import React from 'react';
import './DailyBoard.css';
import Moment from "react-moment";

import cloudy from "../images/cloudy.png";
import partlycloudy from "../images/partlycloudy.png";
import rain from "../images/rain.png";
import snow from "../images/snow.png";
import fog from "../images/fog.png";
import storm from "../images/storms.png";
import sunny from "../images/sunny.png";

class DailyBoard extends React.Component{

    getImage(){
        /*
            Here you can find a clear documentaion for all the possible conditions
            https://openweathermap.org/weather-conditions
        */
        let mainDescription = this.props.imageDescription;
        if (mainDescription === "Rain") return rain;
        if (mainDescription === "Drizzle") return rain;
        if (mainDescription === "Thunderstorm") return storm;
        if (mainDescription === "Snow") return snow;
        if (mainDescription === "Atmosphere") return fog;
        if (mainDescription === "Clear") return sunny;
        if (mainDescription === "Clouds") return cloudy;

        return partlycloudy;
    }

    render(){
        return (
            <div className="daily-board">
                <Moment add={{ days: this.props.day }} format="ddd" />
                <div className="image" style={{backgroundImage: `url(${this.getImage()})`, backgroundSize: '100%'}}></div>
                <div className="tempreture">{this.props.temp + "°"}</div>
            </div>
        );
    }
}

export default DailyBoard;