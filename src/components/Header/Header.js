import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return (
        <header>
        <h1>denverbnb</h1>
        <nav className="nav-container">
          <NavLink to='/areas' className='nav'> All Neighborhoods </NavLink>
          <NavLink to='/favorites' className='nav'> Favorites </NavLink>
          <NavLink to='/' exact className='nav' onClick={props.removeUser}> Sign Out </NavLink>
        </nav>
      </header>
    )
}

export default Header;
