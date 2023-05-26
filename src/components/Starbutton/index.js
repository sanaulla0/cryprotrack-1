import  React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { color } from 'framer-motion';
import { Style } from '@mui/icons-material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Iconic() {
  const [flag , setFlag ] = useState(false);
  
  return (
    <div >
      <Checkbox {...label} icon={<FavoriteBorder sx={{fontSize:"large"}} />} style={{ color: "var(--white)", backgroundColor:"var(--darkGrey)"}}  />
      
    </div>
  );
}