import React from "react";
import {Component} from 'react';
import "./clock.css";

class Clock extends Component {
  constructor(props){
      super(props);
      this.state = {
          days:'00',
          hrs:'00',
          min:'00',
          sec:'00'
      }
  }
  componentDidMount(){
      this.timerId = setInterval(
          ()=>this.setTimer(),
          1000
      );
  }
  componentWillUnmount(){
      clearInterval(this.timerId);
  }
  render() { 
      return ( 
          <React.Fragment>
            <div className="Clock">
        <h1 id="heading">Solasta ETA</h1>
        <div className="time">
          <h1 id="value">{this.state.days}</h1>
          <h4 id="notation">days</h4>
        </div>
        <div className="time">
          <h1 id="value">{this.state.hrs}</h1>
          <h4 id="notation">hours</h4>
        </div>
        <div className="time">
          <h1 id="value">{this.state.min}</h1>
          <h4 id="notation">minutes</h4>
        </div>
        <div className="time">
          <h1 id="value">{this.state.sec}</h1>
          <h4 id="notation">seconds</h4>
        </div>
      </div>
            </React.Fragment>
        );
    }

  setTimer = ()=>{
      let countDownDate = new Date("Mar 13, 2020 23:59:59").getTime();
      //todays time
      let now = new Date().getTime();
      var differ = countDownDate - now ;

      if(differ > 0){
          const days = Math.floor(differ/(1000 * 60 * 60 * 24));
          const hrs= Math.floor(differ%(1000 * 60 * 60 * 24)/ (1000 * 60 * 60));
          const min= Math.floor(differ%(1000 * 60 * 60 )/ (1000 * 60 ));
          const sec= Math.floor(differ%(1000 * 60 )/ (1000 ));
          this.setState({days,hrs,min,sec});
      }
      else{
          this.setState({days:'00',hrs:'00',min:'00',sec:'00'});
      }
  }
}

export default Clock;