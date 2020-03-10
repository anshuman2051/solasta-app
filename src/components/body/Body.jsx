import React, { Component } from 'react';
import MyCarousel from './carousel';
import './body.css'
import NavBar from '../header/NavBar';
import Footer from '../footer/Footer';
import TopHeader from './topHeader';
import Clock from './Clock';
import AboutUs from './AboutUs';

class Body extends Component {

    //to be used later in class title
    festNameStyle = {
        fontFamily: 'Archivo',
        fontWeight: "bold",
        color: "wheat",
    };


    render() { 
        return ( 

            <div className="root-body " style={{position:'relative'}}>
                <NavBar/>
                <TopHeader/>
                <Clock/>


                {/* about us */}
                    <AboutUs/>
            

        {/* div for using carousel for past events */}
        <div id="past-events" className="container-fluid px-0 row mx-0"  style={{backgroundColor:'#0f3942', position:'relative', top:'480px',zIndex:'1'}}>
            <div className='col-md-1 col-sm-0'></div>
            <div className='col-md-10 col-sm-12 '>
                <h2 className='text-center text-light' style={{position:'absolute',width:'90%',zIndex:'4',fontFamily:'Exo', top:'2rem'}}>Past Events</h2>
                <div className='mx-auto shadow' style={{width:'100%'}}><MyCarousel/> </div>
            </div>
            <div className='col-md-1 col-sm-0'></div>
        </div>
                    <Footer/>
        </div>

         );
    }
}
 
export default Body;
