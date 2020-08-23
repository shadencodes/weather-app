import React from 'react';
import './WeeklyBoard.css'
import DailyBoard from '../DailyBoard/DailyBoard'

class WeeklyBoard extends React.Component{

    render(){
        return (
            <div className="weekly-board">
                <DailyBoard day={0} temp={this.props.dailyTempArr[0]} imageDescription={this.props.dailyImage[0]} />
                <DailyBoard day={1} temp={this.props.dailyTempArr[1]} imageDescription={this.props.dailyImage[1]} />
                <DailyBoard day={2} temp={this.props.dailyTempArr[2]} imageDescription={this.props.dailyImage[2]} />
                <DailyBoard day={3} temp={this.props.dailyTempArr[3]} imageDescription={this.props.dailyImage[3]} />
                <DailyBoard day={4} temp={this.props.dailyTempArr[4]} imageDescription={this.props.dailyImage[4]} />
            </div>
        );
    }
}

export default WeeklyBoard;