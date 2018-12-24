export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
};

export const fetchPosts = () => {
    return {
        type: 'FETCH_POSTS',
    }
}
