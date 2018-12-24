import JsonPlaceholder from '../api/JsonPlaceholder';

export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
};

export const fetchPosts = () => async(dispatch) => {
        const response = await JsonPlaceholder.get('/posts');
        dispatch({type: 'FETCH_POSTS', payload: response})
};
