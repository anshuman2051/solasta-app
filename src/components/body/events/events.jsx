//todo : add reg_link for each evt
import React, { Component } from 'react';
import Card from './eventsCard';
import './events.css';
import event_det from './events_details';

class Events extends Component {
    constructor(props){
        super(props);
        this.state={
            cat_window_status: true,
            event_details : event_det,
            categories: ['Fun','Drama','Music','ThugDancers','DataScience','Coding','mech-an-idea','Workshop'],
            // categories: ['Art','Coding','Drama','Dance','Photography','Music','EMC','Mech','Workshops','Miscellaneous'],
            event_cat:'Coding',
        };
    }
    // state = {
    //     cat_window_status: true,
    //     event_details : event_det,
    //     categories: ['Art','Coding','Drama','Dance','Photography','Music','EMC','Mech','Workshops','Miscellaneous'],
    //     event_cat:'Art',
    // };

    // componentDidMount(){
    //     const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //     const apiurl = "https://solastaback.herokuapp.com/event_details/0/coding";

    //     fetch(proxyurl+apiurl)
    //     .then(function(response){
    //         return response.json();
    //     })
    //     .then((myJson)=>{
    //         console.log(myJson);
    //     })
    // }
    render() { 
        return ( 
                <div className="container-fluid row mx-0 px-0 " style={{position:'relative'}}>
                    {/* icon for opening sidenav on small screen */}
                    <span className='fa fa-lg fa-angle-right mt-3 px-2 py-1 rounded-circle text-light' id='angle-right' style={{position:'absolute',top:'85px',left:'5%',zIndex:'7',backgroundColor:'blue'}} onClick={this.toggleWindow}/>

                    {/*side nav for choosing event type  */}
                    <div className="col-md-3 col-lg-2 shadow-lg border " id='category-chooser' style={{marginTop:"0px",backgroundColor:"#012549"}}>
                        <h2 className="text-light mt-5 mb-3  mx-0 categorycss" style={{fontFamily:'Exo'}}>CATEGORY 
                            <span className="fa fa-xs fa-close text-light float-right mt-1" style={{cursor:"pointer"}} onClick={this.toggleWindow}/>
                        </h2>
                        {/* <ul className="text-light" style={{listStyleType:'none'}}> */}
                            {this.renderEventCategory()}
                        {/* </ul> */}
                    </div>

                    {/*contains list of all events in form of an array event_cards  */}
                    <div className="col-md-9 col-lg-10 "style={{marginTop:"5px",backgroundColor:'#f2f2f2'}}>
                    <h1 className="text-center text-dark" style={{fontFamily:'Exo'}} ><strong>Events</strong></h1>
                    <hr/>
                    {/* <p className='text-center'>For Complete Schedule visit <a href='https://docs.google.com/spreadsheets/d/1borCwvgv9Gr6L3mV-lb0EgjcQvO-nrZr7dwd-q1lJ_w/edit?usp=sharing'> this link</a></p> */}
                    <div className="row mb-5" style={{minHeight:'600px'}}>
                        {this.showEvent(this.state.event_cat)}
                    </div>
                </div>
                </div>
         );
    }
    renderEventCategory(){
        return (
            <ul style={{listStyleType:'none'}}>
                {this.state.categories.map((cat)=> (
                <li className="listt " key={cat}
                style={{fontFamily:'Exo',fontSize:'20px',color:'white',cursor:'pointer'}}  onClick={()=>this.setState({event_cat:cat})}>{cat}
                </li> ))}
             </ul>
        );
    }

    //shows the events based on the event selected in side nav
    showEvent=(cat)=>{
                console.log(this.state.event_details);
                const fun_events = this.state.event_details[0].Fun;
                const drama_events = this.state.event_details[1].Drama;
                const music_events = this.state.event_details[2].Music;
                const thug_dancers= this.state.event_details[3].ThugDancers;
                const data_science= this.state.event_details[4].DataScience;
                const coding_events = this.state.event_details[5].coding;
                const mech_events= this.state.event_details[6]['mech-an-idea'];
                const Workshops = this.state.event_details[7].Workshop;

                if(cat === 'Fun')
                    return fun_events.map(evt => <Card category={evt} key={evt.name} />);
                if(cat === 'Drama')
                    return drama_events.map(evt => <Card category={evt} key={evt.name} />);
                if(cat === 'Music')
                    return music_events.map(evt => <Card category={evt} key={evt.name} />);
                if(cat === 'Coding')
                    return coding_events.map(evt => <Card category={evt} key={evt.name}/>);
                if(cat === 'ThugDancers')
                    return thug_dancers.map(evt => <Card category={evt} key={evt.name}/>);
                if(cat === 'DataScience')
                    return data_science.map(evt => <Card category={evt} />);
                if(cat === 'Music')
                    return music_events.map(evt => <Card category={evt} key={evt.name}/>);
                if(cat === 'mech-an-idea')
                    return mech_events.map(evt => <Card category={evt} key={evt.name}/>);
                if(cat === 'Workshop')
                    return Workshops.map(evt => <Card category={evt} key={evt.name} />);

    }

    toggleWindow = ()=>{
        this.setState({cat_window_status: !this.state.cat_window_status});

         // hides cat window for size less than 768px
        let element = document.getElementById('category-chooser');
        let angleRight = document.getElementById('angle-right');
        if(window.screen.availWidth <= 768 ){
            if(this.state.cat_window_status){
                element.style['display']='block';
                angleRight.style['display']='none';
            }
            else{
                element.style['display']='none';
                angleRight.style['display']='block';
            }
        }
    }
}
 
export default Events;
