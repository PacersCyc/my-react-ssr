import axios from 'axios'
import { CHANGE_LIST } from './constants'

const url = 'http://47.95.113.63/ssr/api/news.json'
const url2 = 'https://3g.163.com/touch/reconstruct/article/list/BBM54PGAwangning/0-10.html'
const url3 = 'https://www.apiopen.top/journalismApi'

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = () => {
  return (dispatch) => {
    return axios.get(url3).then(res => {
      console.log(res);
      dispatch(changeList(res.data.data.sports))
    })
  }
} 