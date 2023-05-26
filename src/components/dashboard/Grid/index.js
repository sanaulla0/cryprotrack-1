import React, { useState,useEffect } from 'react'
import './styles.css';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import { addToWatchlist } from '../../../functions/addToWatchlist';
import StarsIcon from '@mui/icons-material/Stars';
import Iconic from '../../Starbutton';
import { removeFromWatchlist } from '../../../functions/removeFromWatchlist';
import { color } from 'framer-motion';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Gridd = ({coin}) => {
  console.log("letme see",coin);
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
      setFlag(true);
      removeFromWatchlist(coin.id);

     }
   
  };


  return (
    <Link to={`/coin/${coin.id}`}>
    <div 
    className = {`grid-container ${
      coin.price_change_percentage_24h < 0 && "grid-container-red"
      }`}>
        
  <div className='info-flex'>
    <img src={coin.image} className='coin-logo' />
  
  <div className='name-col'>
    <p className='coin-symbol' >{coin.symbol}</p>
     <p className='coin-name' >{coin.name}</p>
     </div>
     
     <div className='heart' onClick={handleAddToWatchlist}>
         {flag ? <Iconic  />   : <FavoriteIcon />}
         </div>
    </div>
    {coin.price_change_percentage_24h > 0 ? (
    <div className='chip-flex'>
      <div className='price-chip'>
          {coin.price_change_percentage_24h.toFixed(2)}%
      </div>
      <div className='icon-chip'>
      <TrendingUpRoundedIcon fontSize='small'/>
     </div>
     {/* <div className='star-icon-green' onClick={handleAddToWatchlist}>
   <Iconic  ></Iconic> 
      </div> */}
     </div>
    ):(
    
      <div className='chip-flex'>
         
      <div className='price-chip-red'>
          {coin.price_change_percentage_24h.toFixed(2)}%
      </div>
      <div className='chip-red' ><TrendingDownRoundedIcon fontSize='small'/> </div>
      {/* <div className='star-icon-red' onClick={handleAddToWatchlist}>
   <Iconic    /> 
      </div> */}
     </div>        
    )}
    <div className='info-container ' >
    <h3
     className='coin-price' style={{
      color: coin.price_change_percentage_24h < 0 ? "var(--red)" : "var(--green)"
     }}
     >${coin.current_price.toLocaleString()}</h3>
     <p className='total_vol'>Total Volume:{coin.total_volume.toLocaleString()}</p>
     <p className='total_vol'>Market Cap : {coin.market_cap.toLocaleString()}</p>
    </div>
   
    </div>
    </Link>
   
  )
}

export default Gridd;