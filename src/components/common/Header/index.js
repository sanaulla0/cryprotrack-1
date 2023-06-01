import React,{useState,useEffect} from 'react';
import './styles.css';
import TemporaryDrawer from './Drawer';
import Button from '../Button';
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';
const storedTheme = localStorage.getItem('theme');

const Header = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkTheme(true);
    }
  }, []);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    if (darkTheme) {
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      localStorage.setItem('theme', 'light');
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [darkTheme]);
  return (
    <div className='navbar'>
       <Link to='/' ><h1 className='logo'>CryptoTraker<span style={{color:"var(--blue)"}}>.</span></h1></Link>
      <div className='Links'>
      <Switch
  checked={darkTheme} onChange={toggleTheme}
  inputProps={{ 'aria-label': 'controlled' }}
/>
      <Link to='/' ><p className='Link'>Home</p></Link>
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