import React from 'react';
import { Chart } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';


function DoughnutChart({data}) {
    return ( 
        <div>
            <Doughnut data={data}/>
        </div>
     );
}

export default DoughnutChart;