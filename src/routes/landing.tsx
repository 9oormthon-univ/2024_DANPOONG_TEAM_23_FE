import LandingLogo from '~/assets/svgs/landing-logo.svg?react'
import LandingSonG from '~/assets/images/landing-song.png'

function Landing() {
  return (
    <div className="h-dvh">
      <div className="flex h-2/5 items-end justify-center">
        <LandingLogo />
      </div>
      <div className="absolute bottom-0 flex w-dvw max-w-screen-sm justify-center">
        <img src={LandingSonG} />
      </div>
    </div>
  )
}

export { Landing }
