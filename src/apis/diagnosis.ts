import { axiosInstance } from '~/apis/instance'
import type {
  IGetResultsResponse,
  IPatchChatResponse,
  IPostStartResponse,
} from '~/types/diagnosis.type'

const postStart = async (userMessage: string) => {
  const response = await axiosInstance.post('/diagnosis/start', {
    userMessage,
  })
  return response.data as IPostStartResponse
}

const patchChat = async (diagnosisResultId: number, userMessage: string) => {
  const response = await axiosInstance.patch(
    `/diagnosis/chat/${String(diagnosisResultId)}`,
    {
      userMessage,
    },
  )
  return response.data as IPatchChatResponse
}

const getResults = async (diagnosisResultId: number) => {
  const response = await axiosInstance.get(
    `/diagnosis/results/${String(diagnosisResultId)}`,
  )
  return response.data as IGetResultsResponse
}

export { postStart, patchChat, getResults }
