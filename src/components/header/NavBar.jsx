import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import fire from '../../config/fire';
import 'firebase/auth';
import './nav.css';


class NavBar extends Component {
    constructor(props) {
        super(props);
    
        // this.toggle = this.toggle.bind(this);
        this.authListener = this.authListener.bind(this);
        this.state = {
          isOpen: false,
          user:{},
        };
      }

      componentDidMount(){
        this.authListener();
      }
      authListener(){
        fire.auth().onAuthStateChanged((user)=>{
          if(user){
            this.setState({user});
          }
          else{
            this.setState({user:null});
          }
        });
      }

    //logout function
    logout = ()=>{
        fire.auth().signOut();
        alert('logged out successfully');
    }

      // toggle() {
      //   this.setState({
      //     isOpen: !this.state.isOpen
      //   });
      // }
      toggle(){
        const item = document.getElementById("nav-items");  
        document.getElementById("side-nav").classList.toggle('show');
        const bar1 = document.getElementsByClassName("bar")[0];
        const bar2 = document.getElementsByClassName("bar")[1];
        const bar3 = document.getElementsByClassName("bar")[2];
        bar1.id = bar1.id === "" ? "bar1" : "";
        bar2.id = bar2.id === "" ? "bar2" : "";
        bar3.id = bar3.id === "" ? "bar3" : "";
    
      //   setting delay for displaying the text
        setTimeout(()=>{
          item.style['display'] = item.style['display'] ==='block'? 'none' : 'block';
        },300);
      
    }


      //handling click for either login or logout
      handleClick = ()=>{
        if(this.state.user)
          fire.auth().signOut();
      }

    render() { 
        return ( 
            <div>
            {/* // other navbar */}
            <div id = "side-nav">
              <span id="toogle" onClick={this.toggle}>
                <span className="bar" id=""></span>
                <span className="bar" id=""></span>
                <span className="bar" id=""></span>
              </span>
              <ul id="nav-items">
                <li>
                  <a className="nav-link text-light" style={{fontFamily:'Exo'}} href="/">Home<span className="sr-only">(current)</span></a>
                </li>
                <li>
                  <a className="nav-link text-light" style={{fontFamily:'Exo'}} href="http://www.solasta.org.in/#about-us">About Us<span className="sr-only">(current)</span></a>
                </li>
                <li>
                    <Link className="nav-link text-light" style={{fontFamily:'Exo'}} to="/events">Events</Link>
                </li>
                <li className="nav-item navigatbar">
                    <Link className="nav-link text-light" style={{fontFamily:'Exo'}} to="/our-team">Team</Link>
                </li>
                <li className='nav-item '>
                    <Link className='nav-link text-light' style={{fontFamily:'Exo'}} to={this.state.user?'/':'/login'} onClick={this.state.user?this.logout:null}>
                      {this.state.user?'Logout':'Login'}
                      </Link>
                </li>
              </ul>
            </div>
            </div>
         );
    }

}
 
export default NavBar;