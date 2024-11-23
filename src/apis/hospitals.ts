import { axiosInstance } from '~/apis/instance'
import type {
  IGetDetailsResponse,
  IGetRecommendResponse,
} from '~/types/hospitals.type'

const getRecommend = async (
  diagnosisResultId: number,
  x: string,
  y: string,
) => {
  const response = await axiosInstance.get(
    `/hospitals/recommend/${String(diagnosisResultId)}?x=${x}&y=${y}`,
  )
  return response.data as IGetRecommendResponse
}

const getDetails = async (hospitalId: number) => {
  const response = await axiosInstance.get(
    `/hospitals/details/${String(hospitalId)}`,
  )
  return response.data as IGetDetailsResponse
}

export { getRecommend, getDetails }
