import React from 'react';
import './Sesons.css';
// import Loader from './Loader';
import SeasonsDisplay from './SeasonsDisplay';
import UseLocation from './UseLocation';

const Seasons = () => {
    const [lat, errorMessage] = UseLocation();

    let content;
    if(errorMessage) {
        content = <div>Error: {errorMessage}</div>
    } else if(lat) {
        content = <SeasonsDisplay lat={lat} />
    } 

    return <div className="border green">{content}</div>
}

export default Seasons;