import React, { Component } from 'react';
import './Rewardporter.css';

class Reward extends Component {
  render() {
    return (
      <div className="Reward">
        <div className="nav-main-header">
        </div>
        <div className="flex-container-main-parent-layout">
            <div className="flex-item-1">
            <div className="flex-container-left-hand-side">
                <div>Dashboard</div>
                <div>Content Management</div>
                <div>User Management</div>
                <div>Reporting</div>
                <div>System setting</div>
            </div>
        </div>
            <div className="flex-item-2">right-side</div>
        </div>
      </div>
    );
  }
}

export default Reward;
