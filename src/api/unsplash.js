import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 36b3e01fe5a8729234019f2be5fb6f53859ed204034ea07a9ba6a138f8110edd' 
    }
});


