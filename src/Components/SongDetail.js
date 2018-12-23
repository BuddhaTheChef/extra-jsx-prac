import React from 'react';
import { connect } from 'react-redux'

const SongDetail = ({song}) => {
    if(!song) {
        return <div><h1>Select A Song!!</h1></div>
    } 
    return (
        <div>
            <h2>Song Detail</h2>
            <div style={{ 
                background: 'whitesmoke', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '265px', 
                borderRadius: '9px',
                flexDirection: 'column'
                }}>
            <h2>Title: {song.title}</h2> 
            <h2>Genere: {song.type}</h2> 
            <h2>Duration: {song.duration}</h2>
             </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail);