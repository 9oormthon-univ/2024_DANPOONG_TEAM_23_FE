interface IGetTodayResponse {
  name: string
  content: string
  hospital: string
}

interface IGetHealthChangesResponse {
  content: string
}

interface IGetDetailsResponse {
  disease: string
  reportContent: string
}

interface IGetDiagnosisListsResponse {
  diagnosisResultList: {
    date: string
    content: string
    hospital: string
    diagnosisResultId: number
  }[]
}

export type {
  IGetTodayResponse,
  IGetHealthChangesResponse,
  IGetDetailsResponse,
  IGetDiagnosisListsResponse,
}
