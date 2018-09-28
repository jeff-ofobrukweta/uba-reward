import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Index from './Form/form.js';
import Dashboard from './Dashboard/Rewardporter';
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
      </Switch>
      </div>
    );
  }
}

export default App;
