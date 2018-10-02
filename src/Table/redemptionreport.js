import React, { Component } from 'react';
import './table.css';

class Table extends Component {
  
  render() {
    return (
      <div className="table">
        <table className="table-main">
            <tr>
                <th className="th"><small>Product</small></th>
                <th className="th"><small>Value(Points)</small></th>
                <th className="th"><small>Value(Naira)</small></th>
                <th className="th"><small>Portal Partner</small></th>
                <th className="th"><small>Status</small></th>
                <th className="th"><small>Created At</small></th>
                <th className="th"></th>
            </tr>
            <tr className="card-table">
            <td className="td-main">Airtime</td>
            <td className="td-main">500</td>
            <td className="td-main">100</td>
            <td className="td-main">interswitch</td>
            <td className="td-main">Incomplete</td>
            <td className="td-main">26 Oct 2017</td>
            <td className="td-main"><b>...</b></td>
            </tr>
            <tr className="card-table">
            <td className="td-main">Airtime</td>
            <td className="td-main">500</td>
            <td className="td-main">100</td>
            <td className="td-main">interswitch</td>
            <td className="td-main">Incomplete</td>
            <td className="td-main">26 Oct 2017</td>
            <td className="td-main"><b>...</b></td>
            </tr>
            <tr className="card-table">
            <td className="td-main">Airtime</td>
            <td className="td-main">500</td>
            <td className="td-main">100</td>
            <td className="td-main">interswitch</td>
            <td className="td-main">Incomplete</td>
            <td className="td-main">26 Oct 2017</td>
            <td className="td-main"><b>...</b></td>
            </tr>
            <tr className="card-table">
            <td className="td-main">Voucher</td>
            <td className="td-main">5000</td>
            <td className="td-main">1000</td>
            <td className="td-main">Shoprite</td>
            <td className="td-main">Pending</td>
            <td className="td-main">26 Oct 2017</td>
            <td className="td-main"><b>...</b></td>
            </tr>
        </table>
      </div>
    );
  }
}

export default Table;
