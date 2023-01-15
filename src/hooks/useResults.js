import { useEffect,useState } from "react";
import yelp from '../api/yelp';

export default  () => {
    const [results,setResults] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search',{
                params:{
                    limit:50,
                    term: searchTerm,
                    location: 'Tampa'
                }
            });
            console.log( JSON.stringify(response.data.businesses));
            setResults(response.data.businesses);
        }   catch(e){
            setErrorMessage('Something went Wrong')
        }
    }

    useEffect(() => {
        searchApi('Pasta');
    },[])

    return [searchApi,results,errorMessage];
}