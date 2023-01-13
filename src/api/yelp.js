import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:'Bearer 2qpUBuJ_KzLCtSu3BB3-NajNQtQBZYKcg-zOBTQmjJy-VcdN4FTvJs2bHRHoQ93m0CEDSv4OM1P-kv5uCY5Dzak8UFGV2JXfZR6wupIMOqgqrGxli_mT0EuuTPS5Y3Yx'
    }
});