import React, { Component } from 'react';
import { 
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';


const image1 = require("../res/carousel/car1.JPG");
const image2 = require("../res/carousel/car2.JPG");
const image3 = require("../res/carousel/car3.JPG");
const image4 = require("../res/carousel/car4.JPG");
const image5 = require("../res/carousel/5328.png");
const items = [
  {
    src:image1,
    altText: '',
    caption: ''
  },
  {
    src:image2,
    altText: '',
    caption: ''
  },
  {
    src:image3,
    altText: '',
    caption: ''
  },
  {
    src:image4,
    altText: '',
    caption: ''
  },
  {
    src:image5,
    altText: '',
    caption: ''
  }
];

class MyCarousel extends Component{
  constructor(props){
    super(props);
    this.state = {activeIndex: 0};
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  onExiting(){
    this.animating = true;
  }

  onExited(){
    this.animating = false;
  }

  next(){
    if(this.animating) return;
    const nextIndex = this.state.activeIndex === items.length -1 ? 0 : this.state.activeIndex + 1;
    this.setState({activeIndex:nextIndex});
  }
  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex){
    if(this.animating) return ;
    this.setState({activeIndex: newIndex});
  }

  render(){
    const {activeIndex} = this.state;
    const slides = items.map((item) =>{
      return(
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          >
            <img  src={item.src} alt={item.altText} style={{width:'100%',height:'35rem'}}/>
            <CarouselCaption captionText={item.caption} captionHeader={item.caption}/>
          </CarouselItem>
      );
    })
    return(
      <Carousel 
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex}/>
          {slides}
          <CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous}/>
          <CarouselControl direction='next' directionText='next' onClickHandler={this.next}/>
        </Carousel>
    );
  }

}
// const Carousel= () => <UncontrolledCarousel items={items} controls={false} style={{height:'400px'}}/>;

export default MyCarousel;
