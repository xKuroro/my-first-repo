import React from 'react';
import { FaTimes } from 'react-icons/fa';
import'./Signup.css';
const NavSignup = ({theme, hideSignup}) => {
  return (
    <div className='overlay'>
    <div className='Signup-container' dark-theme={theme}>
      <div className='modal-header'>
        <div className='modal-header-close'>
            <FaTimes onClick={hideSignup}/>
        </div>
        <div className='modal-header-title'>
        <h1>Sign up</h1>
        </div>
      </div>
     <div className='Signup-view'>

     </div>
    </div>
    </div>
  )
}

export default NavSignup