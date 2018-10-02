import React, { Component } from 'react';
import './table.css';

class Table extends Component {
  
  render() {
    return (
      <div className="table">
        <table className="table-main">
            <tr>
                <th className="th"><small>ID</small></th>
                <th className="th"><small>Firstname</small></th>
                <th className="th"><small>Lastname</small></th>
                <th className="th"><small>Email</small></th>
                <th className="th"><small>Phone</small></th>
                <th className="th"><small>Last Login Date</small></th>
                <th className="th"></th>
            </tr>
            <tr className="card-table">
            <td className="td-main">10</td>
            <td className="td-main">Remilekun</td>
            <td className="td-main">Chibundu</td>
            <td className="td-main">iswtester@yahoo.com</td>
            <td className="td-main">09098767654</td>
            <td className="td-main">26 Oct 2017</td>
            <td className="td-main"><b>...</b></td>
            </tr>
            <tr className="card-table">
            <td className="td-main">10</td>
            <td className="td-main">Remilekun</td>
            <td className="td-main">Chibundu</td>
            <td className="td-main">iswtester@yahoo.com</td>
            <td className="td-main">09098767654</td>
            <td className="td-main">26 Oct 2017</td>
            <td className="td-main"><b>...</b></td>
            </tr>
            <tr className="card-table">
            <td className="td-main">10</td>
            <td className="td-main">Remilekun</td>
            <td className="td-main">Chibundu</td>
            <td className="td-main">iswtester@yahoo.com</td>
            <td className="td-main">09098767654</td>
            <td className="td-main">26 Oct 2017</td>
            <td className="td-main"><b>...</b></td>
            </tr>
            <tr className="card-table">
            <td className="td-main">10</td>
            <td className="td-main">Remilekun</td>
            <td className="td-main">Chibundu</td>
            <td className="td-main">iswtester@yahoo.com</td>
            <td className="td-main">09098767654</td>
            <td className="td-main">26 Oct 2017</td>
            <td className="td-main"><b>...</b></td>
            </tr>
            <tr className="card-table">
            <td className="td-main">10</td>
            <td className="td-main">Remilekun</td>
            <td className="td-main">Chibundu</td>
            <td className="td-main">iswtester@yahoo.com</td>
            <td className="td-main">09098767654</td>
            <td className="td-main">26 Oct 2017</td>
            <td className="td-main"><b>...</b></td>
            </tr>
            <tr className="card-table">
            <td className="td-main">10</td>
            <td className="td-main">Remilekun</td>
            <td className="td-main">Chibundu</td>
            <td className="td-main">iswtester@yahoo.com</td>
            <td className="td-main">09098767654</td>
            <td className="td-main">26 Oct 2017</td>
            <td className="td-main"><b>...</b></td>
            </tr>
            <tr className="card-table">
            <td className="td-main">10</td>
            <td className="td-main">Remilekun</td>
            <td className="td-main">Chibundu</td>
            <td className="td-main">iswtester@yahoo.com</td>
            <td className="td-main">09098767654</td>
            <td className="td-main">26 Oct 2017</td>
            <td className="td-main"><b>...</b></td>
            </tr>
        </table>
      </div>
    );
  }
}

export default Table;
