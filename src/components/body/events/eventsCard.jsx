// style text below cards
import React, { Component } from 'react';
import './eventsCard.css';

class Card extends Component {
    constructor(props){
        super(props);
        this.showDialog = this.showDialog.bind(this);
        this.toggleClick= this.toggleClick.bind(this);
    }

    state = {
        isClicked : false,
    }

    render() { 
        return ( 
            <React.Fragment>
            {this.showDialog(0)}
            <div className="container-fluid col-sm-12 col-md-6 col-lg-3 " onClick={()=>{this.toggleClick()}}>
                <div className="text-center container-fluid px-1 my-3 event_card" style={{position:"relative" ,height: "300px" }}>
                    <img src={this.props.category.image} alt="random pic " height="300" width="100%"/>
                        <span  className='mt-1' style={{fontSize:'20px',color:'#000000',cursor:'pointer'}}>{this.props.category.name}</span>
                </div>                
            </div>
            </React.Fragment>
         );
    }

   //this fun generates event details when clicked on event img 
    showDialog(status){
        if(this.state.isClicked === true){
            return (
                <div className="container-fluid border bg-light shadow" style={{position:'absolute',height:'500px',zIndex:'5',maxWidth:"80%",left:"10%",overflowY:"scroll"}}>
                <h3 style={{fontFamily:'Exo'}}>
                    {this.props.category.name}
                    <span className="fa fa-xs fa-close text-dark float-right mt-1 p-1 border rounded" 
                    onClick={this.toggleClick} style={{cursor:"pointer"}}/>
                </h3>
                <hr/>
                <p style={{fontFamily:'Exo'}}>
                    {this.props.category.desc}
                </p>
                <h4 style={{fontFamily:'Exo'}}>Prizes :<span className="text-light" style={{backgroundColor:'#478c9e'}}>{this.props.category.price}</span></h4>
                <h3 style={{fontFamily:'Exo'}}>Rules</h3>
                <ul style={{fontFamily:'Exo'}}>
                    {this.props.category.rules.map((rule)=><li>{rule}</li>)}
                </ul>
                <input style={{fontFamily:'Exo'}} type='submit' className='btn btn-outline-success my-2 my-sm-0 '  value='Register'
                onClick={()=>document.location.href = this.props.category.reg_link}  />
                <h3 style={{fontFamily:'Exo'}}>Contact Information</h3>
                <ul style={{fontFamily:'Exo'}}>{this.props.category.contact.map((cont)=><li>{cont}</li>)}</ul>
            </div>
            );
        }
        else return;
    }

    // specially for android workshop
    // checkForDisable(){
    //     if(this.props.category.name != 'Android App Development'){
    //         return (
    //         );
    //     }
    //     else{
    //         return(
    //             <input style={{fontFamily:'Exo'}} type='submit' className='btn btn-outline-success my-2 my-sm-0 disabled'  value='Register'
    //             onClick={()=>alert('registration for this event is over')} />
    //         );
    //     }
    
    // }

    //updates the state of event image clicked
    toggleClick(){
        const isClicked = !this.state.isClicked;
        this.setState({isClicked});
    }
}
 
export default Card;