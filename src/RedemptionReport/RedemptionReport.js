import React, { Component } from 'react';
import Profile from '../img/profile_pic.jpg';
import Desktop from '../img/desktop.png';
import Userman from '../img/userman.png';
import Reporting from '../img/reporting.png';
import Systems from '../img/systems.png';
import Content from '../img/content_management.png';
import Rightdropdown from '../img/right.png';
import Downsmall from '../img/down.png';
import Table from '../Table/redemptionreport';
import Bell from '../img/bell.png';

class Report extends Component {
    constructor(props){
        super(props);
        this.state ={
          toogleData:'true'
        }
      }
      handleToogledata=()=>{
         this.setState(prevState3 => ({
          toogleData: !prevState3.toogleData
      }));
      }
  render() {
    const {toogleData} = this.state;
    const datetoogleArray = [];
    if(toogleData==true){
      datetoogleArray.push('no-display');
    }else
    {
      datetoogleArray.push('');
    }
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
                <span className="dashboard"><img src={Desktop} alt="desktop" className="dashboard-img"/></span><span>Dashboard</span>
                <ul>
                  <li>tommy</li>
                  <li>tommy</li>
                  <li>tommy</li>
                </ul>
                </div>
                <div className="item-left-flex">
                <span className="dashboard"><img src={Content} alt="desktop" className="dashboard-img"/></span><span>Content Management<small><img src={Rightdropdown} alt="icon-dropdown" className="rightdowndrop-cm"/></small></span>
                  <ul>
                  <li>tommy</li>
                  <li>tommy</li>
                  <li>tommy</li>
                </ul>
                  </div>
                <div className="item-left-flex">
                <span className="dashboard"><img src={Userman} alt="desktop" className="dashboard-img"/></span><span>User Management<small><img src={Rightdropdown} alt="icon-dropdown" className="rightdowndrop-cm"/></small></span>
                  <ul>
                  <li>tommy</li>
                  <li>tommy</li>
                  <li>tommy</li>
                </ul>
                </div>
                <div className="item-left-flex">
                <span className="dashboard"><img src={Reporting} alt="desktop" className="dashboard-img"/></span><span>Reporting<small><img src={Rightdropdown} alt="icon-dropdown" className="rightdowndrop-cm"/></small></span>
                  <ul>
                  <li>tommy</li>
                  <li>tommy</li>
                  <li>tommy</li>
                  </ul>
                  </div>
                <div className="item-left-flex">
                <span className="dashboard"><img src={Systems} alt="desktop" className="dashboard-img"/></span><span>Systems settings</span>
                  <ul>
                    <li>tommy</li>
                    <li>tommy</li>
                    <li>tommy</li>
                    </ul>
                </div>
            </div>
        </div>
            <div className="flex-item-2">
              <div className="sub-navbar-main-nav">
                <div className="sub-header-section-A">
                  <div><b style={{fontSize:'18px'}}>Redemption Report</b></div>
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
                  <div className="sub-header-button-wrapper">
                    {/* {<button>New Admin User</button>} */}
                  </div>
                  <div>
                        <input type="text" className="sub-nav-header-search-input" placeholder="Search"/>
                  </div>
                </div>
              </div>
             <Table/>
            </div>
        </div>
      </div>
    );
  }
}

export default Report;
