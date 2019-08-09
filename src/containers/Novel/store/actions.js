import { CHANGE_LIST } from './constants'

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getNovelList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/novelApi').then(res => {
      // console.log(res.data);
      if (res.data.code === 200) {
        const list = res.data.data
        dispatch(changeList(list))
      } else {
        const list = []
        dispatch(changeList(list))
      }
      
    }).catch(err => {
      console.log(err)
    })
  }
} 

