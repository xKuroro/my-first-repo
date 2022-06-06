import React, { useState } from 'react'
import { NavContainer, NavcontainerElements,NavLogosContainer,
SearchText, SidebarArrow, TopbarContainer, NavIconContainers, Loginlink} from './Navbar/Navbar.styled'
import { MdNightlightRound } from "react-icons/md";
import  { FaAngleDoubleRight, FaAngleDoubleLeft, FaGratipay } from "react-icons/fa";
import * as io from 'react-icons/io';
import Sidebar from './SidebarContainer';
import NavSignup from './Navbar/NavSignup';
import TopbarListItems from './Navbar/TopbarListItems';
import Navlogin from './Navbar/Navlogin';
import NavSignin from './Navbar/NavSignin';


const NavbarContainer = ({themeToggler, toggleText, theme}) => {

const [searchText,setSearchText] = useState("");
const [showSideNav, setShowSideNav] = useState(false);
const [dropItem, setDropItem] = useState(false);
const [showSignIn, setShowSignIn] = useState(false);
const [showLogin, setShowLogin] = useState(false);
const [showSignup, setShowSignup] = useState(false);

const showNav = () => setShowSideNav(!showSideNav);
const showItem = () =>{
    console.log(showSignIn);
     setDropItem(!dropItem)
    setShowSignIn(!showSignIn)
    setShowLogin(false);
};
const toggleLogin = () => {
    setShowLogin(true);
    setShowSignIn(false);
    setDropItem(false)
    setShowSignup(false)
};

 const toggleSignInNav = () => {
     console.log('Show');
     setShowSignIn(!showSignIn)
     
 }
 const toggleSignup = () => {
     console.log('shit')
    setShowSignup(true);
    setShowLogin(false);
    setDropItem(false);
 }
    return (
        <>
       <NavContainer>
           
           <SidebarArrow >    
        {!showSideNav ?  <FaAngleDoubleRight  className='active'
           onClick={ showNav }/> : <FaAngleDoubleLeft  onClick={ showNav }/>}
           </SidebarArrow>
          <NavLogosContainer> 
              <NavIconContainers>
                <Loginlink onClick={toggleLogin}>
                    Log in
                </Loginlink>
             {showLogin && <Navlogin theme={theme} showLogin={() => setShowLogin(false)}/> }
             <NavSignin toggleSignup={toggleSignup}/>
              {showSignup && <NavSignup theme={theme}  hideSignup={() => setShowSignup(false)}/> }
              {!dropItem ? <io.IoMdArrowDropdown onClick={showItem} style={iconStyle}/> : <io.IoMdArrowDropup className='active' style={iconStyle} onClick={showItem}/>}
                 {showSignIn  && <TopbarContainer> <TopbarListItems theme={theme} themeToggler={themeToggler} toggleText={toggleText} /> </TopbarContainer> } 
                </NavIconContainers>
              </NavLogosContainer>
               
           </NavContainer>

          <Sidebar show={showSideNav} theme={theme}/>
            </>
    )

}
const iconStyle = {
    width: '30px',
    fontSize: "1.2rem",
    borderRadius: "50px",
    height: "60%",
    padding: "3px",

    "&:hover": {
    backgroundColor:"gray",
    },
};
 

export default NavbarContainer
