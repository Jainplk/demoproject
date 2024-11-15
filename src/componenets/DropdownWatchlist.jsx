import React from 'react';
import { watchlist } from '../data/componentData';
import WatchlistItem from './WatchlistItem';
import DoughnutChart from './DoughnutChart';
import './DashboardCompStyle.css';

function DropdownWatchlist() {

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

  return (
    <>
      <div class="dropdown-center">
        <button className='dropdownBtn dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <p>Watchlist</p>
        </button>
        <ul class="dropdown-menu position-static border-none ">
          <div className="watchlist-container ">
            <div className="search-container">
              <input type="text" name='search' id='search' placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
                className="search" size='50' />

              <div className='watchlistLenght'>
                <span className='counts'>{watchlist.length}</span>  /<span className='counts'> 50</span>
              </div>

            </div>
            <ul className='list text-center'>
              {watchlist.map((stock, index) => {
                return (
                  <WatchlistItem stock={stock} key={index} />
                )
              })}
            </ul>

            <DoughnutChart data={data} />
          </div>
        </ul>
      </div>
    </>
  );
}


export default DropdownWatchlist;