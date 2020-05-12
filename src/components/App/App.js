import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

import Login from '../Login/Login'

import { NavLink, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
  return (
    <section className="App">
      <header>
        <h1>denverbnb</h1>
        <nav className="nav-container">
          <NavLink to='/areas' className='nav'> All Neighborhoods </NavLink>
          <NavLink to='/favorites' className='nav'> Favorites </NavLink>
          <NavLink to='/' exact className='nav'> Sign Out </NavLink>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact component={ Login }/>
      </Switch>
    </section>
  )
 }
}

export default App;
