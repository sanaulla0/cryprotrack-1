import {toast} from 'react-toastify';

export const addToWatchlist = (id)=>{
 let watchlist = localStorage.getItem('watchlist');
 let arr = JSON.parse(watchlist) || [];
 
 if (!arr.includes(id)) {
   arr.push(id);
   console.log("arr",arr);
   localStorage.setItem('watchlist', JSON.stringify(arr));
   toast.success(`${id.slice(0, 1).toUpperCase() + id.slice(1)} added to watchlist!`);
 } else {
   toast.error(`${id.slice(0, 1).toUpperCase() + id.slice(1)} is already in watchlist!`);
 }
}