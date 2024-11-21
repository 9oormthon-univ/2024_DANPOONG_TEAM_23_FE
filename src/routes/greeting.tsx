import { Button } from '~/components/ui/button'

import GreetingGliter from '~/assets/images/greeting-gliter.png'
import GreetingHeart from '~/assets/images/greeting-heart.png'
import GreetingLightning from '~/assets/images/greeting-lightning.png'
import GreetingRocket from '~/assets/images/greeting-rocket.png'
import GreetingSearch from '~/assets/images/greeting-search.png'
import GreetingSonG from '~/assets/images/greeting-song.png'
import GreetingStar from '~/assets/images/greeting-star.png'
import GreetingSpeechBubble from '~/assets/svgs/greeting-speech-bubble.svg?react'

function Greeting() {
  return (
    <div className="flex h-dvh max-w-screen-sm">
      <div className="size-[46px]">
        <img src={GreetingStar} className="absolute left-12 top-2" />
      </div>
      <div className="size-16">
        <img src={GreetingLightning} className="absolute right-0 top-2" />
      </div>
      <div className="size-16">
        <img src={GreetingSearch} className="absolute bottom-32 left-0" />
      </div>
      <div className="size-[46px]">
        <img src={GreetingHeart} className="absolute bottom-36 right-0" />
      </div>
      <div className="size-16">
        <img
          src={GreetingGliter}
          className="absolute inset-x-0 -bottom-14 left-8"
        />
      </div>
      <div className="size-16">
        <img src={GreetingRocket} className="absolute -bottom-14 right-0" />
      </div>
      <div className="absolute bottom-[22rem] flex w-dvw max-w-screen-sm justify-center">
        <GreetingSpeechBubble />
      </div>
      <div className="absolute bottom-32 flex w-dvw max-w-screen-sm justify-center">
        <img src={GreetingSonG} />
      </div>
      <div className="absolute bottom-2 flex w-dvw max-w-screen-sm justify-center">
        <Button className="w-4/5 max-w-[343px]">다음</Button>
      </div>
    </div>
  )
}

export { Greeting }
