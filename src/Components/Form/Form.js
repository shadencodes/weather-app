import React from 'react';
import './Form.css'

class Form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            City: "Nazareth"
        }

        this.handleCityChange = this.handleCityChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    handleCityChange(event){
        this.setState({City: event.target.value});
    }

    onClick(){
        this.props.getForecast(this.state.City);
    }

    render(){
        return (
            <div className="form">
                <input placeholder="city" type="text" onChange={this.handleCityChange}></input>
                <button className="forecastButton" onClick={this.onClick}>Get Forecast</button>
            </div>
        );
    }
}

export default Form;