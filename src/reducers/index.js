import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'Black Pink', duration: '4:05' },
        {title: '24K Magic' , duration: '3:45' },
        {title: 'Barbie Girl' , duration: '4:20' },
        {title: 'Thriller' , duration: '2;58' },
        {title: 'Shabba-Ranks' , duration: '4:03' }
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

 export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});