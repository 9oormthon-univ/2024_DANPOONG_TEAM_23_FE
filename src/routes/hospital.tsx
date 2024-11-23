import { useEffect, useRef } from 'react'

import Phone from '~/assets/svgs/phone.svg?react'
import Place from '~/assets/svgs/place.svg?react'
import Search from '~/assets/svgs/search.svg?react'
import { Button } from '~/components/ui/button'

function Hospital() {
  const mapRef = useRef(null)

  useEffect(() => {
    const position = new kakao.maps.LatLng(33.450701, 126.570667)

    const options = {
      center: position,
      level: 3,
    }

    const marker = new kakao.maps.Marker({
      position,
    })

    const map = new kakao.maps.Map(mapRef.current, options)

    marker.setMap(map)
  }, [])

  return (
    <>
      <div className="mt-4 aspect-square overflow-hidden rounded-sm">
        <div className="h-full w-full" ref={mapRef} />
      </div>
      <div className="flex flex-col gap-2.5 px-6 py-7">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-gray-800">냠냠병원</h2>
          <span className="text-sm font-medium text-gray-500">이비인후과</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="size-6 text-primary" />
          <span className="text-base-800 line-clamp-1 text-sm font-medium">
            031-000-0000
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Place className="size-6 text-primary" />
          <span className="text-base-800 line-clamp-1 text-sm font-medium">
            경기도 수원시 매탄동
          </span>
        </div>
        <div className="flex gap-5">
          <Button
            className="mt-5 w-full gap-2.5 rounded-xl px-5 py-2"
            variant="outline"
          >
            <Search className="size-6 text-primary" />
            <span className="font-medium">더보기</span>
          </Button>
          <Button className="mt-5 w-full gap-2.5 rounded-xl px-5 py-2">
            <Phone className="size-6 text-white" />
            <span className="font-medium">전화하기</span>
          </Button>
        </div>
      </div>
    </>
  )
}

export { Hospital }
