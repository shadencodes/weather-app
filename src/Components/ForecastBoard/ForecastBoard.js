import React from 'react';
import './ForecastBoard.css'
import Moment from "react-moment";

class ForecastBoard extends React.Component{

    render(){
        return (
            <div className="forecast-board">
                <p className="date">
                    <Moment format="dddd, DD MMMM" />
                </p>
                <h2 className="city">{this.props.city}</h2>
                <div className="description">
                    <h1 className="tempreture">{this.props.tempreture + "°"}</h1>
                    <div className="caption">
                        <h2>{this.props.description}</h2>
                        <p>{`The high today will be ${this.props.maxTempreture}° 
                            with winds speed ${this.props.windSpeed} m/s`}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ForecastBoard;


