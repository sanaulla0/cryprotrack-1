import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Drawer from '@mui/material/Drawer';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer() {
    const[open ,setOpen] = useState(false);
  return (
    <div>
  
          <IconButton onClick={()=>setOpen(true)}><MenuRoundedIcon className='Link' /></IconButton>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
          >
          <div className='drawer-div'>
          <Link to='/Home'   ><p className='Link'>Home</p></Link>
       <Link to='/Compare'  ><p className='Link'>Compare</p></Link>
       <Link to='/WatchList'  ><p className='Link'> WatchList</p></Link> 
       <Link to='/Dashboard'>
        <p className='Link'>Dashboard</p>
        </Link>
       
          </div>
          
          </Drawer>
      
    
    </div>
  );
}