import React, { Component } from 'react';
import Card from './teamMember';
import team_det from './team_details';
import NavBar from '../../header/NavBar';
import './ourTeam.css'

class ourTeam extends Component {
    constructor(props){
        super(props);
        this.state={
            info:team_det
        }
    }
    render() {
        let data = this.state.info;
        return (
            <div id = "our-team-heading" className='mt-1 pt-3 pb-5' style={{backgroundColor:'#f2f2f2'}}>
                <NavBar/>
                <div style={{margin: '0', backgroundColor: '#1c1656', padding: '1rem'}}>
                <h1 className=' ml-5 font-weight-bold centrehold' style={{fontFamily:'Exo', color: 'white'}}>Our Team</h1>
                </div>
        
                <div className='container-fluid px-0  row '>
                    {data.map(inf => <Card key={inf.name} info={inf} />)}
                </div>
            </div>
        );
    }
}
 
export default ourTeam;
