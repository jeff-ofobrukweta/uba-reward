import React, { Component } from 'react';
import Logo from '../img/logo.png';
import Right from '../img/right.png';
import Rightarrowblack from '../img/arrowblack.svg';
import './form.css';

class Form extends Component {
    constructor(){
        super();
        this.state ={

        }
    }
    handleLogin=(event)=>{
        event.preventDefault();
        this.props.history.replace("/dashboard");
    }
  render() {
    return (
      <div className="Form">
        <div className="parent-flex-container">
            <div className="form-main-container">
    <div className="image-container">
               <div className="card-filter">
                        <div className="flex-container-row-header">
                            <h2 className="signin-header">Sign In</h2>
                            <small className="signin-header-logo">
                                <img src={Logo} alt="uba-logo"/>
                            </small>
                        </div>
                        <div className="main-forms-section">
                            <div className="Email">Email</div>
                            <input type="text"/>
                            <br/>
                            <div className="Password">Password</div>
                            <input type="text"/>
                            <br/>
                            <small className="forgot-password">forgot your password?</small>
                            <button className="button-1" onClick={this.handleLogin}>
                                <div className="inner-login-text-in-button">Login</div>
                                <span className="inner-login-text-in-button"><img src={Right} alt="icon-right"/></span>
                            </button>
                            <small className="signin-header">Dont have an account?</small>
                            <button className="button-2">
                                <div className="inner-login-text-in-button-2-long">Request for Access</div>
                                <div className="inner-login-text-in-button-2-icon"><img src={Rightarrowblack} alt="icon-right"/></div>
                            </button>
                        </div>
               </div>
        </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Form;
