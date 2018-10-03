import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../img/profile_pic.jpg';
import Chart from '../Chart/chart.js';
import Bigchart from '../Bigchart/bigchart';
import Desktop from '../img/desktop.png';
import Userman from '../img/userman.png';
import Reporting from '../img/reporting.png';
import Systems from '../img/systems.png';
import Content from '../img/content_management.png';
import Downsmall from '../img/down.png';
import Table from '../Table/table';
import Bell from '../img/bell.png';
import Rightdropdown from '../img/right.png';
import './Rewardporter.css';

class Reward extends Component {
  constructor(props){
    super(props);
    this.state ={
      toogleData:'false',
      cm:'false',
      um:'false',
      rp:'false'
    }
  }
  handleToogledata=()=>{
     this.setState(prevState3 => ({
      toogleData: !prevState3.toogleData
  }));
  }

  handlemanagementtoogle=()=>{
    console.log('just clicked cm');
    this.setState(prevState3 => ({
     cm: !prevState3.cm
 }));
 }
 handleusermanagementtoogle=()=>{
  console.log('just clicked cm');
  this.setState(prevState3 => ({
   um: !prevState3.um
}));
}
handlereportingtoogle=()=>{
  console.log('just clicked cm');
  this.setState(prevState3 => ({
   rp: !prevState3.rp
}));
};


  render() {
    const {toogleData,cm,um,rp} = this.state;
    const datetoogleArray = [];
    const cmArray = [];
    const rpArray = [];
    const umArray = [];
    if(cm ==false){cmArray.push('');}else{cmArray.push('cm-display');}
    if(um ==false){umArray.push('');}else{umArray.push('cm-display');}
    if(rp ==false){rpArray.push('');}else{rpArray.push('cm-display');}
    if(toogleData==false){datetoogleArray.push('');}else{datetoogleArray.push('no-display');}
    return (
      <div className="Reward">
        <div className="nav-main-header">
          <div className="nav-branch-item-1">
              <div className="left-header"><b>Rewards</b>Portal</div>
          </div>
          <div className="nav-branch-item-2">
            <div className="bell-icon-branch">
              <div><img src={Bell} alt="bell-icon" className="bell-icon"/></div>
            </div>
            <div className="Person-profile-branch">
              <div>
                  <div className="picture-container">
                    <img src={Profile} alt="profile-pics"/>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-container-main-parent-layout">
            <div className="flex-item-1">
            <div className="flex-container-left-hand-side">
                <div className="item-left-flex">
                <span className="dashboard"><img src={Desktop} alt="desktop" className="dashboard-img"/></span><span><Link to="/dashboard" className="Link">Dashboard</Link></span>
                </div>
                <div className="item-left-flex">
                <span className="dashboard"><img src={Content} alt="desktop" className="dashboard-img"/></span><span>Content Management<small><img src={Rightdropdown} alt="icon-dropdown" className="rightdowndrop-cm" onClick={this.handlemanagementtoogle}/></small></span>
                <ul className={cmArray}>
                  <li><Link to="/merchant" className="Link">Merchant Partners</Link></li>
                </ul>
                  </div>
                <div className="item-left-flex">
                <span className="dashboard"><img src={Userman} alt="desktop" className="dashboard-img"/></span><span>User Management<small><img src={Rightdropdown} alt="icon-dropdown"  className="rightdowndrop-cm" onClick={this.handleusermanagementtoogle}/></small></span>
                  <ul className={umArray}>
                  <li><Link to="/users" className="Link">Users</Link></li>
                  <li><Link to="/admin" className="Link">Admin Users</Link></li>
                </ul>
                </div>
                <div className="item-left-flex">
                <span className="dashboard"><img src={Reporting} alt="desktop" className="dashboard-img"/></span><span>Reporting<small><img src={Rightdropdown} alt="icon-dropdown" className="rightdowndrop-cm" onClick={this.handlereportingtoogle}/></small></span>
                  <ul className={rpArray}>
                  <li><Link to="/registered" className="Link">Portal Report</Link></li>
                  <li><Link to="/report" className="Link">Redemption Report</Link></li>
                  <li>BI</li>
                  </ul>
                  </div>
                <div className="item-left-flex">
                <span className="dashboard"><img src={Systems} alt="desktop" className="dashboard-img"/></span><span><Link to="systems" className="Link">Systems settings</Link></span>
                </div>
            </div>
        </div>
            <div className="flex-item-2">
              <div className="sub-navbar-main-nav">
                <div className="sub-header-section-A">
                  <div><b style={{fontSize:'19px'}}>Dashboard</b></div>
                  <div className="parent-circular-icon-toogle-wrapper" onClick={this.handleToogledata}>
                  <div className="drop-down-menu" id={datetoogleArray}>
                    <div className="drop-down-content">
          <table className="dropdown-main">
            <tr>
                <th></th> 
            </tr>
            <tr>
                <td className="td list-hover">Today</td>
            </tr>
            <tr>
                <td className="td list-hover">Yesterday</td>
            </tr>
            <tr>
                <td className="td list-hover">Last 7 days</td>
            </tr>
            <tr>
                <td className="td list-hover">Last 7 days</td>
            </tr>
            <tr>
                <td className="td list-hover">Last 7 days</td>
            </tr>
            <tr>
                <td className="td list-hover-button">
                <div className="flex-container-buttons">
                  <button className="right-dropdown-button">Apply</button>
                  <button className="left-dropdown-button">Cancel</button>
                </div>
                </td>
            </tr>
        </table>
                    </div>
                  </div>
                  <div className="input-toogle-scaler">
                    <div className="circular-icon-toogle">
                      <img src={Downsmall} alt="down-arrow" className="down-arrow"/>
                    </div>
                      <input type="text" className="input-toogler-form"/>
                  </div>
                  </div>
                </div>
                <div className="sub-header-section-B">
                  {/* <div className="sub-header-button-wrapper">
                    <button className="notshow">New Admin User</button>
                  </div> */}
                  <div className="search-list">
                        <input type="text" className="sub-nav-header-search-input" placeholder="Search"/>
                  </div>
                </div>
              </div>
              <div class="wrapper">
                  <div class="one">
                      <Chart/>
                  </div>
                  <div class="two">
                    <Bigchart/>
                  </div>
              </div>
             {/* <Table/> */}
            </div>
        </div>
      </div>
    );
  }
}

export default Reward;
