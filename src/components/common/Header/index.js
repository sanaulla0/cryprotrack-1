import React,{useState} from 'react';
import './styles.css';
import TemporaryDrawer from './Drawer';
import Button from '../Button';
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';

const Header = () => {
  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  const storedTheme = localStorage.getItem("theme");

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

    const [darkTheme, setDarkTheme] = useState(defaultDark);

  if (defaultDark) {
    setDark();
  }

  const toggleTheme = (e) => {
    if (!darkTheme) {
      setDark();
    } else {
      setLight();
    }
    setDarkTheme(!darkTheme);
  };
  return (
    <div className='navbar'>
       <Link to='/' ><h1 className='logo'>CryptoTraker<span style={{color:"var(--blue)"}}>.</span></h1></Link>
      <div className='Links'>
        <Switch 
         defaultChecked
             value={!darkTheme}
             onClick={() => toggleTheme()}
        />
      <Link to='/'   ><p className='Link'>Home</p></Link>
       <Link to='/Compare'><p className='Link'>Compare</p></Link>
       <Link to='/WatchList'><p className='Link'> WatchList</p></Link> 
       <Link to='/Dashboard'>
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