import axios from "axios";

export const baseUrl='https://bayut.p.rapidapi.com';

// headers: {
//     'content-type': 'application/octet-stream',
//     'X-RapidAPI-Key': 'e60ec4a6aamsh949d1935aafaaecp1a8f92jsn095b43668681',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }

export const fetchApi = async (url) => {
 const {data} = await axios.get(url, {
    headers: {
        // 'content-type': 'application/octet-stream',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'X-RapidAPI-Key': 'e60ec4a6aamsh949d1935aafaaecp1a8f92jsn095b43668681'
        }
    });
    return data;

};


