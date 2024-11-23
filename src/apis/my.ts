import { axiosInstance } from '~/apis/instance'
import type {
  IGetDetailsResponse,
  IGetDiagnosisListsResponse,
  IGetHealthChangesResponse,
  IGetTodayResponse,
} from '~/types/my.type'

// date: YYYY-MM-DD
const getToday = async (date: string) => {
  const response = await axiosInstance.get(`/my/today?date=${date}`)
  return response.data as IGetTodayResponse
}

const getHealthChanges = async () => {
  const response = await axiosInstance.get('/my/health-changes')
  return response.data as IGetHealthChangesResponse
}

const getDetails = async () => {
  const response = await axiosInstance.get('/my/health-changes/details')
  return response.data as IGetDetailsResponse
}

// date: YYYY-MM
const getDiagnosisLists = async (date: string) => {
  const response = await axiosInstance.get(`/my/diagnosis-lists?date=${date}`)
  return response.data as IGetDiagnosisListsResponse
}

export { getToday, getHealthChanges, getDetails, getDiagnosisLists }
