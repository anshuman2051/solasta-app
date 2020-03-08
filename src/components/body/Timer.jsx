import React, { Component } from 'react';
import './timer.css';
class Timer extends Component {
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
            <div className='clock-body  shadow badge ' style={{position:"absolute",bottom:'5px',zIndex:'7',maxWidth:'270px',right:'20px'}}>
                <span className='clock'>{this.state.days}</span>D <span className='clock'>{this.state.hrs}</span>H <span className='clock'>{this.state.min}</span>M <span className='clock'>{this.state.sec}</span>S 
            </div>
            </React.Fragment>
         );
    }

    setTimer = ()=>{
        let countDownDate = new Date("Mar 7, 2019 23:59:59").getTime();
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

export default Timer;