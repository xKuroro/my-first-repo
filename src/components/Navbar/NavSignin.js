import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const NavSignin = ({toggleSignup}) => {
  return (
    <div className='Signin-button' onClick={toggleSignup}><Link to='/'>Sign up</Link></div>
  )
}

export default NavSignin