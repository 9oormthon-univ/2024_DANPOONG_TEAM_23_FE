import { useNavigate } from 'react-router-dom'

import { Button } from '~/components/ui/button'

import OnboardingTwoImage from '~/assets/images/onboarding-2.png'

function OnboardingTwo() {
  const navigate = useNavigate()

  return (
    <div className="h-dvh w-dvw max-w-screen-sm">
      <div className="flex h-12 w-full items-center justify-center gap-2">
        <div className="h-3 w-3 rounded-[50%] bg-gray-100"></div>
        <div className="h-3 w-3 rounded-[50%] bg-primary"></div>
        <div className="h-3 w-3 rounded-[50%] bg-gray-100"></div>
      </div>

      <div className="mt-6 w-dvw max-w-screen-sm text-center">
        <div className="flex w-dvw max-w-screen-sm justify-center">
          <p className="mr-1 text-lg font-bold text-gray-800">
            진료 결과에 따라
          </p>
          <p className="text-lg font-bold text-primary-500">가까운 병원과</p>
        </div>
        <div className="flex w-dvw max-w-screen-sm justify-center">
          <p className="text-lg font-bold text-primary-500">진료과목을 추천</p>
          <p className="text-lg font-bold text-gray-800">해드려요</p>
        </div>
      </div>
      <div className="absolute -bottom-20 z-0 flex w-dvw max-w-screen-sm justify-center">
        <img src={OnboardingTwoImage} />
      </div>
      <div className="flex w-full justify-center px-4">
        <Button
          className={`absolute bottom-2 z-10 w-[calc(100%-2rem)] max-w-[343px] rounded-sm px-4 py-2`}
          onClick={() => {
            navigate('/onboarding-3')
          }}
        >
          다음
        </Button>
      </div>
    </div>
  )
}

export { OnboardingTwo }
