import React from 'react';
import './styles.css';
import TemporaryDrawer from './Drawer';
import Button from '../Button';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='navbar'>
       <Link to='/' ><h1 className='logo'>CryptoTraker<span style={{color:"var(--blue)"}}>.</span></h1></Link>
      <div className='Links'>
      <Link to='/'   ><p className='Link'>Home</p></Link>
       <Link to='/Compare'  ><p className='Link'>Compare</p></Link>
       <Link to='/WatchList'  ><p className='Link'> WatchList</p></Link> 
       <Link to='/Dashboard' >
       <Button text={"Dashboard"} outlined={true} onClick={()=>console.log("clicked")} />
        </Link>
      
       </div>
       <div className='mobile-drawer'>
         <TemporaryDrawer /> 
       </div>
    </div>
  )
}

export default Header;