import React, {Component} from 'react';
import './top-header.css';
import Particle from './particle';

class TopHeader extends Component {
  constructor() {
    super();
    this.state = {
      style: {
        transform : 'translate(0px,0px)'
      }
    };
  }

  scroll = (evt)=>{
   const image = document.getElementById('moon');
   let scrollDist = window.scrollY;
   this.setState({style: {
        transform : `translate(0px,${scrollDist*0.5}px)`
      }})
  //  console.log(evt.wheelDelta);
   image.style.transform = this.state.style;
 }
  render() {
    const image = require('../res/solasta-logo.png');
    return (
      <div onWheel={this.scroll} id='root-header'>
          <img id="solasta-img" src={image} alt="solasta-img"/>
          <Particle/>
          <div className="background" >  
          <div id='moon' style={this.state.style}>
            <img src="https://c.staticblitz.com/assets/189d8ea65a5c873c6c6738f0890e0bcc.svg"/>
          </div>
          <div id="base-land-front" >
            <img src="https://c.staticblitz.com/assets/7a28ad01dd450ded120c55dfe3defa80.svg"/>
          </div>
          <div id="base-land-back">
          <img src="data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 2476.2 582' style='enable-background:new 0 0 2476.2 582;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:%231F1B4B;%7D .st1%7Bfill:%232F2B69;%7D .st2%7Bfill:%23373277;%7D %3C/style%3E %3Cpath class='st0' d='M2573.3,231.3L2517,624l-1386-14c-451.8,37.1-734.3-19.3-837.8-39.5C85.4,530,72.9,429.1,48.2,345.9 c-9.8-33-21.5-63.2-48-85.8C202.6,213.3,349.9,9,501.1,32.5c11.4,1.8,22.8,4.8,34.3,9.4C624,76.9,702,90.4,762,94.9 c155.5,11.6,211.7-51.5,204.7-81.7C958.6,2,945.6,0.9,945.6,0.9c36.3-1.1,86.2,13.1,143.9,30.8c90.1,27.7,377.5,189.1,747.5,164 C2035.2,182.3,2663,76,2573.3,231.3z'/%3E %3Cpath class='st1' d='M501.1,32.5c-19.7-1-42.6,4.6-68.6,16.8c-66,30.9-188.7,153-159.5,251.7c15.3,51.7-59.6,66.7-224.8,44.9 c-9.8-33-21.5-63.2-48-85.8C202.6,213.3,349.9,9,501.1,32.5z'/%3E %3Cpath id='Path-5' class='st2' d='M754.5,95.4C752.1,96,882.5,8.3,942.4,1S970.4,139.6,754.5,95.4z'/%3E %3C/svg%3E"/>
          </div>
        </div>
      </div>
      
    );
  }
}

export default TopHeader;