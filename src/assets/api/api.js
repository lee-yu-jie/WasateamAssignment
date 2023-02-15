import axios from 'axios';

const memberRequest = axios.create({
  baseURL: 'https://mocki.io/v1'
});

export const apiGetMember = _ => memberRequest.get('/d4867d8b-b5d5-4a48-a4ab-79131b5809b8');