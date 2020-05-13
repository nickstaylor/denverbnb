import React, { Component } from 'react';
import './App.css';

import Login from '../Login/Login'
import Header from '../Header/Header'
import { NavLink, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userName: null,
    }
  }

  //updates state to include current user's name and purpose

  render() {
  return (
    <section className="App">
      
      <Switch>
        <Route path="/" exact render={ () => <Login />}/>
      </Switch>
    </section>
  )
 }
}

export default App;
