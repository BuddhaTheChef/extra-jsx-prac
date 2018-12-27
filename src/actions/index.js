import _ from 'lodash';
import JsonPlaceholder from '../api/JsonPlaceholder';

export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
};

export const fetchPostsAndUsers = () => async(dispatch, getState) => {
   await dispatch(fetchPosts())

   _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
}

export const fetchPosts = () => async(dispatch) => {
        const response = await JsonPlaceholder.get('/posts');
        dispatch({type: 'FETCH_POSTS', payload: response.data})
};

export const fetchUser = (id) => async(dispatch) => {
    const response = await JsonPlaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data});
}


// Memoize version
// export const fetchUser = (id) => (dispatch) => {
//     _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await JsonPlaceholder.get(`/users/${id}`);
//     dispatch({type: 'FETCH_USER', payload: response.data})
// });

