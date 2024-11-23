import { useNavigate } from 'react-router-dom'

import { Button } from '~/components/ui/button'

import OnboardingOneImage from '~/assets/images/onboarding-1.png'

function OnboardingOne() {
  const navigate = useNavigate()

  return (
    <div className="h-dvh w-dvw max-w-screen-sm">
      <div className="flex h-12 w-full items-center justify-center gap-2">
        <div className="h-3 w-3 rounded-[50%] bg-primary"></div>
        <div className="h-3 w-3 rounded-[50%] bg-gray-100"></div>
        <div className="h-3 w-3 rounded-[50%] bg-gray-100"></div>
      </div>

      <div className="mt-6 w-dvw max-w-screen-sm text-center">
        <p className="text-lg font-bold text-gray-800">증상을 선택하면</p>
        <div className="flex w-dvw max-w-screen-sm justify-center">
          <p className="text-lg font-bold text-primary-500">
            빠르고 정확하게 분석
          </p>
          <p className="text-lg font-bold text-gray-800">해드려요</p>
        </div>
      </div>
      <div className="absolute -bottom-20 z-0 flex w-dvw max-w-screen-sm justify-center">
        <img src={OnboardingOneImage} />
      </div>
      <div className="flex w-full justify-center px-4">
        <Button
          className={`absolute bottom-2 z-10 w-[calc(100%-2rem)] max-w-[343px] rounded-sm px-4 py-2`}
          onClick={() => {
            navigate('/onboarding-2')
          }}
        >
          다음
        </Button>
      </div>
    </div>
  )
}

export { OnboardingOne }
