import React,{useEffect, useState} from 'react'
import Header from '../components/common/Header'
import SelectCoins from '../components/compare/SelectCoins';
import SelectDays from '../components/coin/SelectDays';
import { coinObject } from '../functions/convertObject';
import { getCoinPrice } from '../functions/getCoinPrice';
import { getCoinData } from '../functions/getCoinData';
import Progress from '../components/common/progress';
import List from '../components/dashboard/List';
import Coininfo from '../components/coin/CoinInfo';
import { settingChartData } from '../functions/settingChartData';
import LineChart from '../components/coin/LineChart/linechart';
import TogglePriceType from '../components/coin/PriceType';
import Footer from '../components/common/Footer';


function ComparePage() {
  const[crypto1 ,setCrypto1] = useState("bitcoin");
  const[crypto2,setCrypto2] = useState('ethereum');
 const[crypto1Data , setCrypto1Data] = useState({});
 const [crypto2Data, setCrypto2Data] = useState({});
 const[isLoading ,setIsLoading] = useState(true);
const [priceType,setPriceType] = useState("prices");
  const[days,setDays] = useState('30');
  const[chartData,setChartData] = useState({});
  

 async function handleDaysChange(event){
  setIsLoading(true);
       setDays(event.target.value);
       console.log("checkdays",days)
       const prices1 = await getCoinPrice(crypto1 , event.target.value,priceType);
       const prices2 = await getCoinPrice(crypto2 , event.target.value,priceType);
       settingChartData(setChartData,prices1,prices2);
       setIsLoading(false);
 }

 const handlePriceTypeChange = async (event, newType) => {
  setIsLoading(true);
  setPriceType(newType);
  const prices1 = await getCoinPrice(crypto1 , days,newType);
  const prices2 = await getCoinPrice(crypto2 , days,newType);
  
            settingChartData(setChartData ,prices1,prices2);
            setIsLoading(false);
         
};

 useEffect(()=>{
    getData();
 },[])
   async function getData(){
    setIsLoading(true);
    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);
    if(data1){
      coinObject(setCrypto1Data,data1);
   }
    if(data2){
      coinObject(setCrypto2Data,data2);
   }
   if(data1 && data2){
    const prices1 = await getCoinPrice(crypto1 , days,priceType);
    const prices2 = await getCoinPrice(crypto2 , days,priceType);
    settingChartData(setChartData,prices1,prices2);

    if(prices1 && prices2){
      setIsLoading(false);
        console.log("both prices are fetched",prices1,prices2);
     }

  
  }


  }




 const handleCoinchange = async (event,isCoin2)=>{
  setIsLoading(true);
  if(isCoin2){
   setCrypto2(event.target.value);
   const data = await getCoinData(event.target.value);
      coinObject(setCrypto2Data,data);
      console.log("data",data);
      const prices1 = await getCoinPrice(crypto1 , days,priceType);
  const prices2 = await getCoinPrice( crypto2 , days,priceType);
        
    if(prices1 && prices2){

      setIsLoading(false);
        console.log("both prices are fetched",prices1,prices2);
     }  
           

  
  }
  else{
   setCrypto1(event.target.value);
   const data = await getCoinData(event.target.value);
      coinObject(setCrypto1Data,data);
  }
     
};



  return (
    <div>
     <Header />
     {isLoading ? <Progress />: <>
     <div className='coins-days-flex'>
     <SelectCoins 
         crypto1={crypto1}
         crypto2={crypto2}
         setCrypto1={setCrypto1}
         setCrypto2={setCrypto2}
         handleCoinchange={handleCoinchange}
     />
<SelectDays days={days} handleDaysChange={handleDaysChange} noPTag={true} />

     </div>
     <div className='grey-wrapper' style={{padding:"0rem 1rem"}} > 
     
     <List coin={crypto1Data} /> 
     
    </div>
    <div className='grey-wrapper' style={{padding:"0rem 1rem"}} > 
     <List coin={crypto2Data} /> 
    </div>

    <div className='grey-wrapper'>
    <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />
       <LineChart chartData={chartData} priceType={"prices"} multiAxis={true}/>
      </div>
    <Coininfo heading={crypto1Data.name} desc={crypto1Data.desc} />
    <Coininfo heading={crypto2Data.name} desc={crypto2Data.desc} />
     </>
}       
      <Footer />
     </div>
  );
}

export default ComparePage;