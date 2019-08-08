import { CHANGE_LOGIN } from './constants'

const changeLogin = (value) => ({
  type: CHANGE_LOGIN,
  value
})

export const login = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/createUserKey?appId=com.chat.peakchao&passwd=123456').then(res => {
      console.log(res.data);
      let status = res.data.code === 200
      dispatch(changeLogin(status))
    }).catch(err => {
      console.log(err)
    })
  }
}

export const logout = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/createUserKey?appId=com.chat.peakchao&passwd=123').then(res => {
      console.log(res.data);
      let status = res.data.code === 200
      dispatch(changeLogin(status))
    }).catch(err => {
      console.log(err)
    })
  }
}

export const getHeaderInfo = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/createUserKey?appId=com.chat.peakchao&passwd=12345').then(res => {
      console.log(res.data);
      let status = res.data.code === 200
      dispatch(changeLogin(status))
    }).catch(err => {
      console.log(err)
    })
  }
}