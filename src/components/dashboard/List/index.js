import React,{useState,useEffect} from 'react';
import './styles.css';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import { ConvertNumber } from '../../../functions/ConvertNumbers';
import { Padding } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Iconic from '../../Starbutton';
import {toast} from 'react-toastify';
import { addToWatchlist } from '../../../functions/addToWatchlist';
import { removeFromWatchlist } from '../../../functions/removeFromWatchlist';
import { delay, motion } from 'framer-motion'; 
import Footer from '../../common/Footer';

const List = ({coin}) => {
  const [flag,setFlag] = useState(true);

  
useEffect(() => {
  const watchlist = JSON.parse(localStorage.getItem('watchlist'));
  if (watchlist && watchlist.includes(coin.id)) {
    setFlag(false);
  }
}, []);

  const handleAddToWatchlist = (event) => {
   event.preventDefault();
     if(flag){
      setFlag(false);
      addToWatchlist(coin.id);
      toast.success(`${coin.name} added to watchlist!`);
     }
     else
     {
      event.preventDefault();
      setFlag(true);
      removeFromWatchlist(coin.id);

     }
    }
  return (
      <Link to={`/coin/${coin.id}`}>
       
    <motion.tr className='list-row'
       initial = {{opacity:0, x:-30}}
       whileInView = {{opacity:1 , x:0}}
       viewport = {{once:true}}
        
       transition={{
        type:"spring",
        duration:1 , delay:0.25 + delay * 0.1}}
    >
     <Tooltip title="Logo" placement='bottom-start' >
       <td className='info-flex'>
    <img src={coin.image} className='td-image' />
      </td>
      </Tooltip>
  <td>
  <div className='name-col'>
  
  <Tooltip title="Symbol" placement='bottom-start'> 
   <p className='coin-symbol' >{coin.symbol}</p>
   </Tooltip>
   <Tooltip title="Name" placement='bottom-start' >
     <p className='coin-name' >{coin.name}</p>
     </Tooltip>
     </div>
     
    </td>
    <Tooltip title="Price Change" placement='bottom-start'>
    {coin.price_change_percentage_24h > 0 ? (
    <td className='chip-flex'>
      <div className='price-chip'>
          {coin.price_change_percentage_24h.toFixed(2)}%
      </div>
      <div className='icon-chip td-icon'>
      <TrendingUpRoundedIcon />
     </div>
     
     </td>
     
    ):(
      <td className='chip-flex'>
      <div className='price-chip-red'>
          {coin.price_change_percentage_24h.toFixed(2)}%
      </div>
      <div className='chip-red td-icon' ><TrendingDownRoundedIcon /> </div>
    
     </td>   

    )}
    </Tooltip>
    <Tooltip title="Current price">
    <td className='coin-price'>
    
    <p
     className=' td-center-align' style={{
      color: coin.price_change_percentage_24h < 0 ? "var(--red)" : "var(--green)"
     }}
     >${coin.current_price.toLocaleString()}</p>
     </td>
     </Tooltip>
     <Tooltip title="Total Volume" placement='bottom' >
     <td>
     <p className='td-right-align td-vol' style={{color:"var(--white)"}} > ${coin.total_volume.toLocaleString()}</p>
     </td>
     </Tooltip>
     <Tooltip title="Market Cap" placement='bottom'>
     <td className='desktop-td-mkt'> 
    <p className='td-right-align td-vol' style={{color:"var(--white)"}}> ${coin.market_cap.toLocaleString()}</p>
    </td>
    </Tooltip>
    <Tooltip title="Market Cap" >
     <td className='mobile-td-mkt'> 
    <p className='td-right-align' style={{color:"var(--white)"}}> ${ConvertNumber(coin.market_cap)}</p>
    </td>
    </Tooltip>
    
    <td className='heart' onClick={handleAddToWatchlist}>
         {flag ? <Iconic  />   : <FavoriteIcon />}
         </td>
    
    </motion.tr>
    <Footer />
    </Link>
  )
}

export default List;