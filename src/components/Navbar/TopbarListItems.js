import React,{ useState, useEffect} from 'react';
import { MdNightlightRound } from "react-icons/md"; 
import './Navbar.css'

const TopbarListItems = ({themeToggler, toggleText, theme}) => {
    const [text, setText] = useState(toggleText);

    // console.log(theme);
   
    
    return (
        <div className='topbar-container' dark-theme={theme}>
            <ul>
                <li><span>{toggleText} <MdNightlightRound onClick={themeToggler} /> </span></li>
                <li><a>Download app</a></li>
                <li><a>Help center</a></li>
                <li><a>Report problems</a></li>
            </ul>
        </div>
    );
}
export default TopbarListItems;