import React, { Component } from 'react';
import './table.css';

class Table extends Component {
  
  render() {
    return (
      <div className="table">
        <table className="table-main">
            <tr>
                <th className="th"><small>Email</small></th>
                <th className="th"><small>Role</small></th>
                <th className="th"><small>Current Sign In At</small></th>
                <th className="th"><small>Last Sign In At</small></th>
                <th className="th"><small>Status</small></th>
                <th className="th"></th>
            </tr>
            <tr className="card-table">
            <td className="td-main">iswtester@yahoo.com</td>
            <td className="td-main">Super Admin</td>
            <td className="td-main">April 26,2018 15:18</td>
            <td className="td-main">April 26,2018 15:17</td>
            <td className="td-main">Active</td>
            <td className="td-main"><b>...</b></td>
            </tr>
            <tr className="card-table">
            <td className="td-main">iswtester@yahoo.com</td>
            <td className="td-main">Super Admin</td>
            <td className="td-main">April 26,2018 15:18</td>
            <td className="td-main">April 26,2018 15:17</td>
            <td className="td-main">Active</td>
            <td className="td-main"><b>...</b></td>
            </tr>
            <tr className="card-table">
            <td className="td-main">iswtester@yahoo.com</td>
            <td className="td-main">Super Admin</td>
            <td className="td-main">April 26,2018 15:18</td>
            <td className="td-main">April 26,2018 15:17</td>
            <td className="td-main">Active</td>
            <td className="td-main"><b>...</b></td>
            </tr>
            <tr className="card-table">
            <td className="td-main">iswtester@yahoo.com</td>
            <td className="td-main">Super Admin</td>
            <td className="td-main">April 26,2018 15:18</td>
            <td className="td-main">April 26,2018 15:17</td>
            <td className="td-main">Active</td>
            <td className="td-main"><b>...</b></td>
            </tr>
            <tr className="card-table">
            <td className="td-main">iswtester@yahoo.com</td>
            <td className="td-main">Super Admin</td>
            <td className="td-main">April 26,2018 15:18</td>
            <td className="td-main">April 26,2018 15:17</td>
            <td className="td-main">Active</td>
            <td className="td-main"><b>...</b></td>
            </tr>
            <tr className="card-table">
            <td className="td-main">iswtester@yahoo.com</td>
            <td className="td-main">Super Admin</td>
            <td className="td-main">April 26,2018 15:18</td>
            <td className="td-main">April 26,2018 15:17</td>
            <td className="td-main">Active</td>
            <td className="td-main"><b>...</b></td>
            </tr>
            <tr className="card-table">
            <td className="td-main">iswtester@yahoo.com</td>
            <td className="td-main">Super Admin</td>
            <td className="td-main">April 26,2018 15:18</td>
            <td className="td-main">April 26,2018 15:17</td>
            <td className="td-main">Active</td>
            <td className="td-main"><b>...</b></td>
            </tr>
        </table>
      </div>
    );
  }
}

export default Table;
