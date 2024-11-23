import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import Place from '~/assets/svgs/place.svg?react'
import Phone from '~/assets/svgs/phone.svg?react'

function HospitalCard({ name, category }: { name: string; category: string }) {
  return (
    <Card className="px-6 py-6 shadow-2">
      <div className="flex flex-col justify-between gap-8">
        <h4 className="line-clamp-1 text-lg font-medium text-gray-800">
          {name}
        </h4>
        <span className="line-clamp-1 text-xs font-medium text-gray-600">
          {category}
        </span>
      </div>
      <div className="flex gap-2.5">
        <Button
          className="aspect-square size-16 rounded-xl p-2"
          variant="outline"
        >
          <Place className="size-9" />
        </Button>
        <Button className="aspect-square size-16 rounded-xl p-2">
          <Phone className="size-9" />
        </Button>
      </div>
    </Card>
  )
}

export { HospitalCard }
