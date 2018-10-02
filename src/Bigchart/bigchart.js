import React, { Component } from 'react';
import Bigimage from '../img/biggraph.png';
import './bigchart.css';

class Bigchart extends Component {
  render() {
    return (
      <div className="Bigchart">
       <div className="main-flex-container">
        <div class="flex-big-container">
            <div>
                     <div className="card-big-1">
                     <div className="header-nav-region">
                        <small className="summary"><b>Summary</b></small>
                        <small className="month"><b>Month</b><small className="span-inner-button"><button className="header-bigcard-button">All Time</button></small></small>
                     </div>
                     <section>
                           <small className="head-header">
                           <div className="flex-main-first">
                            <div className="flex-main-first-item1">
                                
                            </div>
                            <div className="flex-main-first-item1"></div>
                          </div>
                           </small>
                       </section>
                        <img src={Bigimage} alt="big-card-image" className="big-card-image"/>
                     </div>
            </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Bigchart;
