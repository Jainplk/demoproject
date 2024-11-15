import React, {useState} from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Tooltip, Grow } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './DashboardCompStyle.css';

function WatclistItem({stock}) {

    const [showWatchListAction, setShowWatchListAction] = useState(false);

    const handleMouseEnter = () => {
        setShowWatchListAction(true);
    }

    const handleMouseLeave = () => {
        setShowWatchListAction(false);
    }

    return ( 
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="item">
                <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
                <div className="itemInfo">
                    <span className="percent">{stock.percent}</span>
                    {stock.isDown ? (
                        <KeyboardArrowDownIcon className="down"/>
                    ) : (<KeyboardArrowUpIcon className="up"/>
                    )}
                     <span className="percent">{stock.price}</span>
                </div>
            </div>
            {showWatchListAction && <WatchListAction uid={stock.name}/>}
        </li>
    );
}

const WatchListAction = ({uid}) => {
    return (
        <span className="actions">
            <Tooltip 
            title="Buy (B)"
            placement="top"
            arrow TransitionComponent={Grow}>
                <button className="buy">Buy</button>
            </Tooltip>

            <Tooltip 
            title="Sell (S)"
            placement="top"
            arrow TransitionComponent={Grow}>
                <button className="sell">Sell</button>
            </Tooltip>

            <Tooltip 
            title="Analytics (A)"
            placement="top"
            arrow TransitionComponent={Grow}>
                <button className="action">
                    <BarChartIcon className="icon"/>
                </button>
            </Tooltip>

            <Tooltip 
            title="More"
            placement="top"
            arrow TransitionComponent={Grow}>
               <button className="action">
                    <MoreHorizIcon className="icon"/>
                </button>
            </Tooltip>
        </span>
    )
}
     
export default WatclistItem;