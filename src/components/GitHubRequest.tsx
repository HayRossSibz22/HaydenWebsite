import axios from 'axios';
import REACT_APP_API_KEY from '../DOTENV.env';

const username = 'HayRossSibz22';
const token = REACT_APP_API_KEY;

const apiUrl = `https://api.github.com/users/${username}/pinned`;

const fetchPinnedRepos = async () => {
    return await axios.get(apiUrl, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    .then(response => {
        const pinnedRepos = response.data;
        console.log(pinnedRepos);
    })
    .catch(error => {
        console.error('Error fetching pinned repositories:', error);
    });
};

export default fetchPinnedRepos