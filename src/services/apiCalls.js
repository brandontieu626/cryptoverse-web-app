export function getCoin(){

    
    const axios = require("axios");
    
    const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    headers: {
        'X-RapidAPI-Key': '9da0c30f96msh6c9c58d42112a06p1bea7djsn913e5690fa24',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
    };

    return axios.request(options)
    
}
