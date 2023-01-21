import axios from 'axios';


export const getAllFeeds = () => {
    return axios.get('/api/feeds.json').then(res => res.data);
}
