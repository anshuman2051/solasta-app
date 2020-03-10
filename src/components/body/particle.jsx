import React, { Component } from "react";
import Particles from "react-particles-js";
import './particle.css'

class Particle extends Component {

  render() {
    return (
    <div style={{position:'relative'}}>
      <Particles
        className="particles "
        canvasClassName="canvas "
        width="100%"
        height="300px"
        params={{
            "particles": {
                "number": {
                    "value": 90,
                    "density":{
                        "enable":true,
                        "value_area": 1500
                    }
                },
                "size": {
                    "value": 2
                },
                "color":{
                    "value":'#ffffff'
                },
                "line_linked":{
                    "enable":true,
                    "color":'#0763ba',
                    "opacity":0.02
                },
                "move":{
                    "direction":"right",
                    "speed":0.05
                },
                "opacity":{
                    "anim":{
                        "enable":true,
                        "speed":1,
                        "opacity_min":0.05
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    }
                },
                "modes":{
                    "push":{
                        "particles_nb":1
                    }
                }
            },
            "retina_detect":true
        }} 
      /> 
    </div>
    );
  }
}

export default Particle;
