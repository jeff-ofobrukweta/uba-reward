import React, { Component } from 'react';
import Logo from '../img/logo.png';
import './form.css';

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <div className="parent-flex-container">
            <div className="form-main-container">
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
                            <button className="button-1">
                                <div className="inner-login-text-in-button">Login</div>
                                <div className="inner-login-text-in-button">icon</div>
                            </button>
                            <small className="signin-header">Dont have an account?</small>
                            <button className="button-2">
                                <div className="inner-login-text-in-button-2-long">Request for Access</div>
                                <div className="inner-login-text-in-button-2-icon">icon</div>
                            </button>
                        </div>
               </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Form;
