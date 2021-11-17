import axios from 'axios';

const headers = {
    'content-type': 'application/x-www-form-urlencoded',
    'x-rapidapi-host': 'url-shortener-service.p.rapidapi.com',
    'x-rapidapi-key': 'ceb3ec0f62msh21345802fae1dd2p1209cdjsne0b977be3c0e'
  }

export function requestGetUrl(url) {
    return axios.post('https://url-shortener-service.p.rapidapi.com/shorten', `url=${url}`, {headers})
};