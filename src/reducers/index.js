import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'Black Pink',type:'K-POP', duration: '4:05' },
        {title: '24K Magic' ,type:'POP', duration: '3:45' },
        {title: 'Barbie Girl',type:'Indie', duration: '4:20' },
        {title: 'Thriller',type:"90's Music", duration: '2:58' },
        {title: 'Shabba-Ranks',type:'Rap/ Hip-Hop', duration: '4:03' }
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