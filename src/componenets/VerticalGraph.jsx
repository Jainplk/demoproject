 import React from 'react';
import { Chart } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2'

 function VerticalGraph({ data }) {
    return ( 
        <div>
            <Bar data={data}>
            </Bar>
        </div>

     );
 }
 export default VerticalGraph;