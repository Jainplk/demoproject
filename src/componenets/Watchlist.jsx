import React, { useState, useEffect } from 'react';
import {watchlist} from '../data/componentData';
import WatchlistItem from './WatchlistItem';
import DropdownWatchlist from './DropdownWatchlist';
import DoughnutChart from './DoughnutChart';
import './DashboardCompStyle.css';

function Watchlist() {

    const labels = watchlist.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(203, 170, 184, 0.5)",
          "rgba(222, 215, 153, 0.61)",
          "rgba(52, 139, 144, 0.51)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(203, 170, 184, 1)",
          "rgba(222, 215, 153, 1)",
          "rgba(52, 139, 144, 1)"
        ],
        borderWidth: 1,
      },
    ],
  };


    const [width, setWidth] = useState(window.innerWidth);
    const [isLargeScreen, setIsLargeScreen] = useState(false);
  
  
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
        setIsLargeScreen(window.innerWidth > 992);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }, []);
  

    return ( 
        <>
      {
        width >= 992 ? <>
          <div className="watchlist-container">
            <div className="search-container">
              <input type="text" name='search' id='search' placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
                className="search" size='50' />

              <span className='counts'>{watchlist.length}</span>  /<span className='counts'> 50</span>

            </div>
            <ul className='list' style={{ all: 'unset' }}>
              {watchlist.map((stock, index) => {
                return (
                  <WatchlistItem stock={stock} key={index} />
                )
              })}
            </ul>

            <DoughnutChart data={data} />
          </div>
        </> :
          
          <DropdownWatchlist />
        

      }
    </>
     );
}

export default Watchlist;