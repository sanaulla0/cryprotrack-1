import axios from 'axios';
import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getCoinData } from '../functions/getCoinData';
import Header from '../components/common/Header';
import Progress from '../components/common/progress';
import { coinObject } from '../functions/convertObject';
import List from '../components/dashboard/List';
import Coininfo from '../components/coin/CoinInfo';
import { getCoinPrice } from '../functions/getCoinPrice';
import LineChart from '../components/coin/LineChart/linechart';
 import { convertDate } from '../functions/convertDate';
import SelectDays from '../components/coin/SelectDays';
import { settingChartData } from '../functions/settingChartData';
import TogglePriceType from '../components/coin/PriceType';


function CoinPage() {
  const[isLoading ,setIsLoading] = useState(true);
 const { id } = useParams();
 console.log("id",id);
 const[coinData , setCoinData] = useState();
 const[days,setDays] = useState('7');
const[chartData , setChartData] = useState({});
const[priceType, setPriceType] = useState('prices');

 useEffect(() => {
  if (id){
    getData();
  }
},[id]);
 async function getData(){
  const data = await getCoinData(id);
  
 if(data){
    coinObject(setCoinData,data);
    console.log("data",data);

    const prices = await getCoinPrice(id ,days,priceType);
        
     
    if(prices){
      console.log("ehoo");
      settingChartData(setChartData , prices);
     setIsLoading(false);
      
    }
 }
}
const handleDaysChange = async (event) => {
  setIsLoading(true);
  setDays(event.target.value);
   const prices = await getCoinPrice(id , event.target.value,priceType);

   if(prices){
    console.log("prro",prices);
    
    settingChartData(setChartData,prices);
    setIsLoading(false);
  }
   };
   

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices = await getCoinPrice(id, days,newType);
    console.log("prr",prices);
    
     if(prices){
            console.log("prr",prices);
              settingChartData(setChartData , prices);
              setIsLoading(false);
           }
  };

  return (
    <div>
        <Header />
        {isLoading ? <Progress />: <>
       <div className='grey-wrapper' style={{padding:"0rem 1rem"}} > 
     
      <List coin={coinData} /> 
      
     </div>
     <div className='grey-wrapper'>
     <SelectDays days={days} handleDaysChange={handleDaysChange} /> 
       <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />
       <LineChart chartData={chartData} priceType={priceType} />
      </div>
     <Coininfo heading={coinData.name} desc={coinData.desc} />
       </> 
         }
     </div>
  )
}

export default CoinPage;