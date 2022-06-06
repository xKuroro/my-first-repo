import React from 'react'
import './Navbar.css'
import {FaTimes,FaChrome,FaFacebook, FaTwitter } from 'react-icons/fa'

const Navlogin = ({theme, showLogin}) => {
  return (
    <div className='overlay'>
    <div className='Login-container' dark-theme={theme}>
      <div className='modal-header'>
      <div className='modal-header-close'>
        <FaTimes onClick={showLogin}/>
      </div>
      <div className='modal-header-title'>
      <h1>Log in</h1>
      </div>
      </div>
        <div className='login-social-icons-container'>
            <div className='signup-social-list'>
              <a className='signup-social-button-list'><FaFacebook className='social-icon-svg'/>Facebook</a>
              <a className='signup-social-button-list'><FaChrome className='social-icon-svg'/>Google</a>
              <a className='signup-social-button-list'><FaTwitter className='social-icon-svg'/>Pornhub</a>
            </div>
            <p className='login-divider'>or</p>
            <div className='ui-input'>
              <input type='text' placeholder='Username or email address'></input>
            </div>
            <div className='ui-input'>
              <input type='password' placeholder='Password'></input>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navlogin