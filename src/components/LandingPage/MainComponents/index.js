import React from 'react';
import './styles.css';
import Button from '../../common/Button';
import iphone from '../../../assets/iphone.080029ada53f0cd57453 (1).png';
import gradient from '../../../assets/gradient.12a666ed10b3b442b534.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify'
const MainComponent = () => {
  const handleshare = ()=>{
   
    navigator.share({
      text: "CryptoDashboard made by Sanaulla using React JS.",
      url: "https://main--rainbow-cassata-47cf9f.netlify.app/",
      title: "CryptoTracker.",
    })
      .then(() => {
        toast.info("App Shared!");
      })
      .catch((error) => {
        console.error("Error sharing:", error);
      });
    
  }
  return (
    <div className='flex-info'>
     <div className='left-component'>
      <h1 className='track-crypto-heading'>Track Crypto</h1>
      <h1 className='real-time-heading'>Real Time.</h1>
   <p className='info-text'>Track crypto through a public api in real time. Visit the dashboard to do so!
Dashboard Share</p>
<div className='btn-flex'>
       
       <Link to="/Dashboard" ><Button text={"Dashbord"}  onClick={()=>console.log("clicked")}/></Link>
       
   
      <Button text={"Share App"}  onClick={handleshare} />
         
          
         
    
      </div>
      </div> 
      
      <div className='phone-container'>
        <motion.img src={iphone} className='iphone'
           initial={{y:-10}}
           animate={{y:10}}
           transition={{
               type:'smooth',
               repeatType:"mirror",
               duration:2,
               repeat:Infinity,
           }}
        
        />
        <img src={gradient} className='gradient'/>
      </div>

    </div>
  )
}

export default MainComponent;
