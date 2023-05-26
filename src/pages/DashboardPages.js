import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header';
import TabsComponent from '../components/dashboard/tabs';
import axios from 'axios';
import Search from '../components/dashboard/search';
import PaginationComponent from '../components/dashboard/paginationComponent';
import Progress from '../components/common/progress';
import BackTop from '../components/common/BackToTop';
import { get100Coins } from '../functions/get100Coins';
const DashboardPage = () => {
  const [coins , setCoins] = useState([]);
  const [paginatedcoins , setPaginatedcoins] = useState([]);
 const[isLoading ,setIsLoading] = useState(true);

  const [search,setSearch] = useState('');
 const [page, setPage] = React.useState(1);
const handlePageChange =(e,value)=>{
     setPage(value);
     var previosIndex = (value-1) * 10;
     setPaginatedcoins(coins.slice(previosIndex, previosIndex +10))
};


 const onSearchChange = (e)=>{
  
  setSearch(e.target.value);
 };
 var filteredCoins = coins.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase())|| item.symbol.toLowerCase().includes(search.toLowerCase()) );
 useEffect(()=>{
  getData();
},[]);
   const getData = async  ()=>{
           const myCoins = await get100Coins();
    if(myCoins){
        setCoins(myCoins);
        setPaginatedcoins(myCoins.slice(0,10));
        setIsLoading(false);
    }
          }; 

  return (
    <>
     <Header />
     <BackTop />
     {isLoading ? (<Progress />) :(
      <div>
         <Search search={search} onSearchChange={onSearchChange} />
         <TabsComponent coins={search ? filteredCoins : paginatedcoins} />
        {!search && <PaginationComponent  page={page}
                  handlePageChange={handlePageChange} />}
    </div>
     )}
    
    </>
  )
}

export default DashboardPage;