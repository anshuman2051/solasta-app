import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top border shadow" style={{backgroundColor:"#3f51b5"}}>
                <a className="navbar-brand b-1 text-dark" href=".particles">SOLASTA</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#info1">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#info2">Link</a>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Register</button>
                    </form>
                </div>
            </nav> 
         );
    }
}
 
export default NavBar;