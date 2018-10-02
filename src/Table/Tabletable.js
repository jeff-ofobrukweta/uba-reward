import React, { Component } from 'react';
import './table.css';

class Tabletable extends Component {
  
  render() {
    return (
      <div className="table">
        <table className="table-main">
            <tr>
                <th className="th"><small>First Point Conversion Rate</small></th>
                <th className="th"><small>Max Bank Accounts Per User</small></th>
                <th className="th"><small>Max UBA Policies Per User</small></th>
                <th className="th"><small>Created At</small></th>
                <th className="th"><small>Updated At</small></th>
                <th className="th"></th>
            </tr>
            <tr className="card-table">
            <td className="td-main">0.2</td>
            <td className="td-main">3</td>
            <td className="td-main">1</td>
            <td className="td-main">26 Oct 2017</td>
            <td className="td-main">26 Oct 2017</td>
            <td className="td-main"><b>...</b></td>
            </tr>
            <tr className="card-table">
            <td className="td-main">0.2</td>
            <td className="td-main">3</td>
            <td className="td-main">1</td>
            <td className="td-main">26 Oct 2017</td>
            <td className="td-main">26 Oct 2017</td>
            <td className="td-main"><b>...</b></td>
            </tr>
        </table>
      </div>
    );
  }
}

export default Tabletable;
