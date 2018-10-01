import React, { Component } from 'react';
import Bigimage from '../img/bg.jpg';
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
                        <small className="summary">Summary</small>
                        <small className="month">Month<small className="span-inner-button"><button>submit</button></small></small>
                     </div>
                     <section>
                           <small className="head-header">
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
