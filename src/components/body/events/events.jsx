//todo : event details div should come to center of the screen even for large no of events
import React, { Component } from 'react';
import Card from './eventsCard';
import './events.css';
import event_det from './events_details';

class Events extends Component {
    state = {
        cat_window_status: true,
        event_details : event_det,
        categories: ['Art','Coding','Drama','Dance','Photography','Music','EMC','Mech','Workshops','Miscellaneous'],
        event_cat:'Art',
    };
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
                    <p className='text-center'>For Complete Schedule visit <a href='https://docs.google.com/spreadsheets/d/1borCwvgv9Gr6L3mV-lb0EgjcQvO-nrZr7dwd-q1lJ_w/edit?usp=sharing'> this link</a></p>
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
                const art_events = this.state.event_details[0].art;
                const coding_events = this.state.event_details[1].coding;
                const dance_events = this.state.event_details[2].dance;
                const photography_events = this.state.event_details[3].photography;
                const music_events = this.state.event_details[4].music;
                const drama_events= this.state.event_details[5].drama;
                const misc_events = this.state.event_details[6].misc; 
                const EMC_events = this.state.event_details[7].emc;
                const Mech_events = this.state.event_details[8].mech;
                const Workshops = this.state.event_details[9].Workshop;

                if(cat === 'Art')
                    return art_events.map(evt => <Card category={evt} key={evt.name} />);
                if(cat === 'Drama')
                    return drama_events.map(evt => <Card category={evt} key={evt.name} />);
                if(cat === 'Coding')
                    return coding_events.map(evt => <Card category={evt} key={evt.name}/>);
                if(cat === 'Dance')
                    return dance_events.map(evt => <Card category={evt} key={evt.name}/>);
                if(cat === 'Photography')
                    return photography_events.map(evt => <Card category={evt} />);
                if(cat === 'Music')
                    return music_events.map(evt => <Card category={evt} key={evt.name}/>);
                if(cat ==='Miscellaneous')
                    return misc_events.map(evt => <Card category={evt} key={evt.name}/>);
                if(cat === 'EMC')
                    return EMC_events.map(evt => <Card category={evt} key={evt.name}/>);
                if(cat === 'Mech')
                    return Mech_events.map(evt => <Card category={evt} key={evt.name}/>);
                if(cat === 'Workshops')
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