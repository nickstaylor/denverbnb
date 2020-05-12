import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { NavLink, Redirect } from 'react-router-dom';

function App() {
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
    </section>
  );
}

export default App;
