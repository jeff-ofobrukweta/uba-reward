import React, { Component } from 'react';
import './table.css';

class Table extends Component {
  
  render() {
    return (
      <div className="table">
        <table className="table-main">
            <tr>
                <th className="th">ID</th>
                <th className="th">Firstname</th>
                <th className="th">Lastname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Joined</th>
                <th className="th"></th>
            </tr>
            <tr className="card-table">
            <td className="td">10</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td"><b>...</b></td>
            </tr>
            <tr className="card-table">
            <td className="td">10</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td"><b>...</b></td>
            </tr>
            <tr className="card-table">
            <td className="td">10</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td"><b>...</b></td>
            </tr>
            <tr className="card-table">
            <td className="td">10</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td"><b>...</b></td>
            </tr>
            <tr className="card-table">
            <td className="td">10</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td"><b>...</b></td>
            </tr>
            <tr className="card-table">
            <td className="td">10</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td"><b>...</b></td>
            </tr>
            <tr className="card-table">
            <td className="td">10</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td">item</td>
            <td className="td"><b>...</b></td>
            </tr>
        </table>
      </div>
    );
  }
}

export default Table;
