import React from 'react'
import { Line } from 'react-chartjs-2';
import {Chart as ChartJs} from "chart.js/auto";
import { convertDate } from '../../../functions/convertDate';
import { ConvertNumber } from '../../../functions/ConvertNumbers'; 
function LineChart({ chartData,priceType,multiAxis}) {
const options = {
    plugins: {
       legend: {
         display : multiAxis ? true : false,
       },
    },
    responsive: true,
    interaction: {
       mode : "index",
       intersect : false,
    },
    scales: {
      crypto1: {
        type:"linear",
        display: true,
        position : "left",
          ticks: {
              // Include a dollar sign in the ticks
              callback: function(value, index, ticks) {
                 if(priceType == "prices") return '$' + value.toLocaleString(); 
                   else{
                         return '$' + ConvertNumber(value);
                   }
               },
          },
      },
      crypto2: {
        type:"linear",
        display: true,
        position : "right",
          ticks: {
              // Include a dollar sign in the ticks
              callback: function(value, index, ticks) {
                 if(priceType == "prices") return '$' + value.toLocaleString(); 
                   else{
                         return '$' + ConvertNumber(value);
                   }
               }
          }
      }

  },
};
      return <Line data={chartData} options={options}  />;
}

export default LineChart;