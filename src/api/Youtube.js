import axios from 'axios';

const KEY = 'AIzaSyD-9N09lOKhslTNWYRZyuHB9mzo62QD7ng';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})