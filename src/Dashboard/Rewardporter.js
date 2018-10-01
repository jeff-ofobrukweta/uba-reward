import React, { Component } from 'react';
import Profile from '../img/profile_pic.jpg';
import Chart from '../Chart/chart.js';
import Bigchart from '../Bigchart/bigchart';
import Table from '../Table/table';
import './Rewardporter.css';

class Reward extends Component {
  render() {
    return (
      <div className="Reward">
        <div className="nav-main-header">
          <div className="nav-branch-item-1">
              <div className="left-header"><b>Rewards</b>Portal</div>
          </div>
          <div className="nav-branch-item-2">
            <div className="bell-icon-branch">
              <div>icon</div>
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
                <span className="dashboard">icon</span><span>Dashboard</span>
                <ul>
                  <li>tommy</li>
                  <li>tommy</li>
                  <li>tommy</li>
                </ul>
                </div>
                <div className="item-left-flex">
                  <span className="content-management"><i>icon</i></span>Content Management
                  <ul>
                  <li>tommy</li>
                  <li>tommy</li>
                  <li>tommy</li>
                </ul>
                  </div>
                <div className="item-left-flex">
                <span className="content-management"><i>icon</i></span>User Management
                  <ul>
                  <li>tommy</li>
                  <li>tommy</li>
                  <li>tommy</li>
                </ul>
                </div>
                <div className="item-left-flex">
                <span className="content-management"><i>icon</i></span>Reporting<span className="shape">></span>
                  <ul>
                  <li>tommy</li>
                  <li>tommy</li>
                  <li>tommy</li>
                  </ul>
                  </div>
                <div className="item-left-flex">
                <span className="content-management"><i>icon</i></span>System setting
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
                  <div><b style={{fontSize:'18px'}}>Admin Users</b></div>
                  <div className="parent-circular-icon-toogle-wrapper">
                  <div className="drop-down-menu">
                    <div className="drop-down-content">
          <table className="dropdown-main">
            <tr>
                <th></th> 
            </tr>
            <tr>
                <td className="list-hover">Today</td>
            </tr>
            <tr>
                <td className="list-hover">Yesterday</td>
            </tr>
            <tr>
                <td className="list-hover">Last 7 days</td>
            </tr>
            <tr>
                <td className="list-hover">Last 7 days</td>
            </tr>
            <tr>
                <td className="list-hover">Last 7 days</td>
            </tr>
            <tr>
                <td className="list-hover-button">
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
                    <div className="circular-icon-toogle"></div>
                      <input type="text" className="input-toogler-form"/>
                  </div>
                  </div>
                </div>
                <div className="sub-header-section-B">
                  <div className="sub-header-button-wrapper">
                    <button>New Admin User</button>
                  </div>
                  <div>
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
