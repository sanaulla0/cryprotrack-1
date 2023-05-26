import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import './styles.css';
import { Link } from 'react-router-dom';
import Gridd from '../dashboard/Grid';
import { coinObject } from '../../functions/convertObject';
import {getCoinData} from '../../functions/getCoinData';

 const Watchlist = () => {
  const [watchlistData, setWatchlistData] = useState({});

    
      
        const watchlist = localStorage.getItem('watchlist');
        const ids = JSON.parse(watchlist);
        console.log("idcheck",ids);
  //       if (ids && ids.length > 0) {
  //         const responseData = [];
  //         for (const id of ids) {
  //           const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  //           const data = await response.json();
  //           responseData.push(data);
  //         }
  //         console.log(responseData);
  //         setWatchlistData(responseData);
          
  //       } else {
  //         setWatchlistData([]);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching watchlist data:', error);
  //       toast.error('Error fetching watchlist data');
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(()=>{
   if (ids && ids.length > 0) {
    getData();
  } else {
    setWatchlistData({});
  }
},[ids])
  async function getData(){
   // setIsLoading(true);
   try {
    const coinData = await Promise.all(
      ids.map(async (item) => {
        const data = await getCoinData(item);
        console.log('Coin Data:', data);
        return data;
      })
    );
    console.log("check",coinData);
    const formattedData = coinData.reduce((acc, data) => {
     if (data && data.id) {
      const coin = coinObject(data);
      console.log('Formatted Coin:', coin);
      acc[coin] = coin;
    }
      return acc;
    }, {});
    setWatchlistData(formattedData);
  } 
  catch (error) {
    console.log('Error fetching watchlist data:', error);
    toast.error('Error fetching watchlist data');
  }


 


  return (
    
      <div className='info-flex'>
        
          <div>
          {Object.keys(watchlistData).map((item) => (
        <Gridd key={item} coin={watchlistData[item]} />
      ))}
              </div>
          
       
</div>
     
          
     
    
  );
};
 
 }
export default Watchlist;
