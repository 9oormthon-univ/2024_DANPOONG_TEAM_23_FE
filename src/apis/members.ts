import { axiosInstance } from '~/apis/instance'

const patchDelete = async () => {
  const response = await axiosInstance.post('/members/delete')
  return response.status
}

const postLogout = async () => {
  const response = await axiosInstance.post('/members/logout')
  return response.status
}

export { patchDelete, postLogout }
