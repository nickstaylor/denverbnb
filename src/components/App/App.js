import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <section className="App">
    <nav>
    <h1>denverbnb</h1>
       <NavLink to='/areas' className='nav'> All Neighborhoods </NavLink>
       <NavLink to='/favorites' className='nav'> Favorites </NavLink>
       <NavLink to='/' className='nav'> Sign Out </NavLink>
     </nav>
    </section>
  );
}

export default App;
