import { CHANGE_LOGIN } from './constants'

const changeLogin = (value) => ({
  type: CHANGE_LOGIN,
  value
})

export const getHeaderInfo = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/createUserKey?appId=com.chat.peakchao&passwd=123456').then(res => {
      console.log(res.data);
      let status = res.data.code === 200
      dispatch(changeLogin(status))
    }).catch(err => {
      console.log(err)
    })
  }
}