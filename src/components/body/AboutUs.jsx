import React from "react";
import './about-us.css'

let width = window.innerWidth;
let difference = 5;
let intervalId = 0;

function increase() {
  clearInterval(intervalId);
  intervalId = setInterval(zoomIn, 20);
}
function zoomIn() {
  if (width < 280) {
    width = width + difference;
    document.getElementById("about-img").style.width = width;
  } else {
    clearInterval(intervalId);
  }
}
function decrease() {
  clearInterval(intervalId);
  intervalId = setInterval(zoomOut, 20);
}
function zoomOut() {
  if (width > 250) {
    width = width - difference;
    document.getElementById("about-img").style.width = width;
  } else {
    clearInterval(intervalId);
  }
}

function AboutUs() {
  // const image = require('../res/solasta-logo2.png');
  const image = require('../res/transparent-glow.png');
  return (
    <div id="about-us">

      <div className="logo">
        <img
          onMouseOver={increase}
          onMouseOut={decrease}
          id="about-img"
          src={image}
          alt="logo"
        />
      </div>
      <div className="out">
        <div className="out1">
          <div className="textt">
            <p>
              Solasta is a techno-cultural fest organized by the student
              community of IIITDM Kurnool and is aimed to develop the leadership and
              organizational skills in students. The annual fest includes many
              technical and cultural events with participants and audience from
              various colleges.
            </p>
          </div>
          <div className="button">
            <button className="btext">View More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
