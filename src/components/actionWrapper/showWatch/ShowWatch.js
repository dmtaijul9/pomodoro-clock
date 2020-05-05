import React from 'react';
import './ShowWatch.css';
import PauseIcon from '@material-ui/icons/Pause';
import RestoreIcon from '@material-ui/icons/Restore';

function ShowWatch() {
    return (
        <div className='showTimeWrap'>
            <h2>session</h2>
            <h1 className ='time'>8:00</h1>
            <h1 className='controler'>
                <span> <PauseIcon /> </span>
                <span> <RestoreIcon /> </span>
            </h1>
        </div>
        
    )
}

export default ShowWatch
