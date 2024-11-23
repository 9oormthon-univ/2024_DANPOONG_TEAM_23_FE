interface IPostStartResponse {
  diagnosisResultId: number
  isQuestion: boolean
  content: {
    question: string
    options: string[]
    result: string
  }
}

interface IPatchChatResponse {
  isQuestion: boolean
  content: {
    question: string
    options: string[]
    result: string
  }
}

interface IGetResultsResponse {
  content: string
}

export type { IPostStartResponse, IPatchChatResponse, IGetResultsResponse }
