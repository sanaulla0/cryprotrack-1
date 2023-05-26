import React from 'react'
import axios from 'axios';
export  const getCoinData = (id) => {
 let myData = axios
  .get(`https://api.coingecko.com/api/v3/coins/${id}`) 
   .then((res) => {
    return res.data;
   })
     .catch((error)=>{console.log('error',error);
  
    })
    return myData;
}

