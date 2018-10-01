import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Graph from '../img/bg.jpg';
import './chart.css';

class Chart extends Component {
  render() {
    return (
      <div className="Chart">
        <div className="main-flex-container">
            <div class="flex-four-container">
                <div>
                    <div className="card-1">
                       <section>
                           <small className="head-header">123,000</small>
                           <div className="sub-header">Registered Customers</div>
                           <img src={Graph} alt="img-desc." className="img-desc"/>
                       </section>
                    </div>
                </div>
                <div>
                    <div className="card-2">
                        <section>
                           <small className="head-header">123,000</small>
                           <div className="sub-header">Value of Redemptions</div>
                           <img src={Graph} alt="img-desc." className="img-desc"/>
                       </section>
                    </div>
                    </div>
            </div>
            <div class="flex-container">
                <div>
                     <div className="card-3">
                     <section>
                           <small className="head-header">123,000</small>
                           <div className="sub-header">Points Redeemed</div>
                           <img src={Graph} alt="img-desc." className="img-desc"/>
                       </section>
                     </div>
                </div>  
                <div>
                    <div className="card-4">
                    <section>
                           <small className="head-header">123,000</small>
                           <div className="sub-header">Cash Speed (Debit Card)</div>
                           <img src={Graph} alt="img-desc." className="img-desc"/>
                       </section>
                     </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Chart;
