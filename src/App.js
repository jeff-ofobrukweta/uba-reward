import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Index from './Form/form.js';
import Dashboard from './Dashboard/Rewardporter';
import Redemption from './Redemption/redemption';
import Report from './RedemptionReport/RedemptionReport';
import Systems from './Systems/Systems';
import Admin from './Admin/Admin';
import Usercompo from './User/user';
import './App.css';

class App extends Component {
  
  componentDidMount(){
    console.log(this.props.history);
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/registered" component={Redemption}/>
          <Route exact path="/admin" component={Admin}/>
          <Route exact path="/users" component={Usercompo}/>
          <Route exact path="/systems" component={Systems}/>
          <Route exact path="/report" component={Report}/>
      </Switch>
      </div>
    );
  }
}

export default App;
