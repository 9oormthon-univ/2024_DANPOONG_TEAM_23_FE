interface IGetRecommendResponse {
  data: {
    hospitalId: number
    name: string
    category: string
    phoneNumber: string
    distance: string
  }[]
}

interface IGetDetailsResponse {
  name: string
  category: string
  address: string
  road_address: string
  phoneNumber: string
  distance: string
  location_url: string
  x: string
  y: string
}

export type { IGetRecommendResponse, IGetDetailsResponse }
