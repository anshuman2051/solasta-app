//todo going to main page(body ) when login is successfull
import React, { Component } from 'react';
import fire from '../../config/fire';
import 'firebase/auth';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            authType:'signup',
        }
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup= this.signup.bind(this);
    }

    login(e){
        const spinner = document.getElementById('login-wait-spinner');
        spinner.style['display']='inline';
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        window.location.href='../';
        spinner.style['display']='none';
        }).catch((error)=>{
            alert(error);
            spinner.style['display']='none';
        });
    }

    signup(e){
        const spinner = document.getElementById('signup-wait-spinner');
        spinner.style['display']='inline';
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            alert('signup successfull');
            spinner.style['display']='none';
        }).catch((error)=>{
            alert(error);
            console.log(error);
            spinner.style['display']='none';
        })
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }
    updateUser= ()=>{
        if(this.state.authType === 'login')
            this.setState({authType:'signup'});
        else
            this.setState({authType:'login'})
    }

    renderButton= ()=>{
      const loader = require('../res/spinner.gif');
      if(this.state.authType === 'login'){
        //   for signup page
            return (
                <div>
                <form>
                    <div className='form-group'>
                        <label style={{fontFamily:'Exo'}}>First name</label>
                        <input style={{fontFamily:'Exo'}} className='form-control' placeholder='Enter Your First Name'/>
                    </div>
                    <div className='form-group'>
                        <label style={{fontFamily:'Exo'}}>Last name</label>
                        <input style={{fontFamily:'Exo'}} className='form-control' placeholder='Enter Your Last Name'/>
                    </div>
                    <div className='form-group'>
                        <label style={{fontFamily:'Exo'}}  htmlFor='exampleInputEmail'>Email address</label>
                        <input style={{fontFamily:'Exo'}} value={this.state.email} onChange={this.handleChange} type='email' name='email'
                        className='form-control' id='exampleInputEmail' aria-describedby='emailHelp'
                        placeholder='Enter Email'/>
                    </div>
                    <div className='form-group'>
                        <label style={{fontFamily:'Exo'}} htmlFor='exampleInputPassword'>Password</label>
                        <input style={{fontFamily:'Exo'}} value={this.state.password} onChange={this.handleChange} type='password'
                        name='password'  className='form-control' id='exampleInputPassword1' placeholder='Password'/>
                    </div>
                    <div className='form-group'>
                        <label style={{fontFamily:'Exo'}}>College Name</label>
                        <input style={{fontFamily:'Exo'}} className='form-control ' placeholder='Enter Your College Name' required/>
                    </div>
                    <small style={{fontFamily:'Exo'}}> Registered User? <span className='text-primary' style={{cursor:'pointer'}}
                    onClick={this.updateUser}>{this.state.authType}</span><br/></small>
                    <button style={{fontFamily:'Exo'}} onClick={this.signup}  className='btn btn-success'>Signup</button>

                    {/* spinner for waiting */}
                    <img src={loader} alt='please wait' id='signup-wait-spinner' height='30px' style={{display:'none'}}/>
                </form>
                </div>
                )
        }
        else{
            // for login page
            return (
                <form>
                    <div className='form-group' style={{fontFamily:'Exo'}}>
                        <label  htmlFor='exampleInputEmail'>Email Address</label>
                        <input value={this.state.email} onChange={this.handleChange} type='email' name='email'
                        className='form-control' id='exampleInputEmail' aria-describedby='emailHelp'
                        placeholder='Enter Email'/>
                    </div>
                    <div className='form-group' style={{fontFamily:'Exo'}}>
                        <label htmlFor='exampleInputPassword'>Password</label>
                        <input value={this.state.password} onChange={this.handleChange} type='password'
                        name='password'  className='form-control' id='exampleInputPassword1' placeholder='Password'/>
                    </div>
                    <small style={{fontFamily:'Exo'}}> New user? <span className='text-primary' style={{cursor:'pointer'}}
                    onClick={this.updateUser}>{this.state.authType}</span><br/></small>
                <button style={{fontFamily:'Exo'}} type='submit' onClick={this.login} className='btn btn-primary' >Login</button>
                 {/* spinner for waiting */}
                 <img src={loader} alt='please wait' id='login-wait-spinner' height='30px' style={{display:'none'}}/>
                </form>
                )
        } 

    }
    render() { 
        return ( 
            <div className='container-fluid row'>
            <div className='col-md-6 mt-5 pt-5 container-fluid' style={{minHeight:'700px'}}>
                {this.renderButton()}
            </div>
            </div>
         );
    }
}
 
export default Login;