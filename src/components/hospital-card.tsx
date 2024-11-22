import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import Star from '~/assets/svgs/star.svg?react'

function HospitalCard({
  name,
  category,
  rating,
}: {
  name: string
  category: string
  rating: number
}) {
  return (
    <Card className="shadow-2">
      <div className="flex h-full flex-col justify-between">
        <h4 className="line-clamp-1 text-lg font-medium text-gray-800">
          {name}
        </h4>
        <span className="line-clamp-1 text-xs font-medium text-gray-600">
          {category}
        </span>
        <div className="flex items-center gap-1 text-xs font-medium text-gray-500">
          <Star className="text-primary-500" />
          <span>{rating}</span>
        </div>
      </div>
      <div className="flex flex-col gap-3.5">
        <Button className="w-28" size="sm">
          전화하기
        </Button>
        <Button className="w-28" variant="outline" size="sm">
          알아보기
        </Button>
      </div>
    </Card>
  )
}

export { HospitalCard }
