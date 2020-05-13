import React, { Component } from 'react';
import './App.css';
import Login from '../Login/Login'
import Header from '../Header/Header'
import AreaContainer from "../AreaContainer/AreaContainer"

import { NavLink, Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: '',
    }
  }

  addUser = (person) => {
    this.setState({user: person})
  }

  removeUser = () => {
    this.setState({user: ''})
  }

  //updates state to include current user's name and purpose

  render() {
 
  return (
    <section className="App">
      
      <Switch>
        <Route path="/" exact render={ () => <Login addUser={this.addUser}/>}/>
        {/* {this.state.user !== '' &&} */}
        <Route path="/area"  render={ () => <> <Header removeUser={this.removeUser}/> <AreaContainer /> </>}/>
      </Switch>
    </section>
  )
 }
}

export default App;
