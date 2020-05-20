import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = (props) => {
    return (
        <header>
        <h1 className="logo">denverbnb</h1>
        <nav className="nav-container">
          <NavLink to='/areas' className='nav'> All Neighborhoods </NavLink>
          <NavLink to='/favorites' className='nav' onClick={props.loadFavorites}>Favorites ({!props.numberofFavorites.length ? "0" : `${props.numberofFavorites.length}`}) </NavLink>
          <NavLink to='/' exact className='nav' onClick={props.removeUser}> Sign Out </NavLink>
        </nav>
      </header>
    )
}

export default Header;
