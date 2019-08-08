import axios from 'axios';

const createInstance = (req) => axios.create({
  baseURL: 'https://www.apiopen.top',
  headers: {
    cookie: req.get('cookie') || ''
  }
})

export default createInstance