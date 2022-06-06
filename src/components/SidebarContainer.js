import React,{useEffect} from 'react';
import './Sidebar.css';
import { GoArrowSmallDown } from 'react-icons/go'; 
import Pepe from '../pictures/pepe.jpg';
import Hen from '../pictures/qq.jpg';
import Sad from '../pictures/sad.jpg';
import About from '../pictures/R.png';
import { Link } from 'react-router-dom';     
import 'boxicons';
const Sidebar = ({show,theme}) => {


   useEffect(() => {
       console.log('tae')
       return () =>{
           console.log('out')
       }
   },[]) 
    return (
        <>
        <div className={show ? 'sideNav open' : 'sideNav'} dark-theme={theme}> 
        <div className="homeNav"><Link to='/'>
                <i class='bx bx-home' ></i> Home </Link>
            </div>
            <ul className="sidenav-links"> 
                <li>
                <div className='collection-main'>
                <i class='bx bx-collection bx-spin bx-flip-horizontal' ></i>
                    <span className="link-name"> Collection </span> <GoArrowSmallDown />
                     </div>
                     <ul className="collection-items">
                         <li><Link to='/memes'><img src={Pepe} alt='/pepe'/><span>Memes</span></Link></li>
                         <li><Link to='/hentai'><img src={Hen} alt='/hen'/><span>Hentai</span></Link></li>
                         <li><Link to='/depressing'><img src={Sad} alt='/sad'/><span> Depressing</span></Link></li>            
                     </ul>
                </li>   
                <li><Link to='/about-me'><img src={About} alt='/about-me'/><span> About Me</span></Link></li>
            </ul>
            
        </div>
        </>
    )
}

export default Sidebar

