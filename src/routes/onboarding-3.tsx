import { useNavigate } from 'react-router-dom'

import { Button } from '~/components/ui/button'

import OnboardingThreeImage from '~/assets/images/onboarding-3.png'

function OnboardingThree() {
  const navigate = useNavigate()

  return (
    <div className="h-dvh w-dvw max-w-screen-sm">
      <div className="flex h-12 w-full items-center justify-center gap-2">
        <div className="h-3 w-3 rounded-[50%] bg-gray-100"></div>
        <div className="h-3 w-3 rounded-[50%] bg-gray-100"></div>
        <div className="h-3 w-3 rounded-[50%] bg-primary"></div>
      </div>

      <div className="w-dvw max-w-screen-sm text-center">
        <p className="mr-1 text-lg font-bold text-gray-800">증상을 기록하고</p>

        <div className="flex w-dvw max-w-screen-sm justify-center">
          <p className="mr-1 text-lg font-bold text-primary-500">
            건강 변화를 한눈에
          </p>
          <p className="text-lg font-bold text-gray-800">확인하세요</p>
        </div>
      </div>
      <div className="absolute -bottom-10 z-0 flex w-dvw max-w-screen-sm justify-center">
        <img src={OnboardingThreeImage} />
      </div>
      <div className="flex w-full justify-center px-4">
        <Button
          className={`absolute bottom-2 z-10 w-[calc(100%-2rem)] max-w-[343px] rounded-sm px-4 py-2`}
          onClick={() => {
            navigate('/')
          }}
        >
          다음
        </Button>
      </div>
    </div>
  )
}

export { OnboardingThree }
