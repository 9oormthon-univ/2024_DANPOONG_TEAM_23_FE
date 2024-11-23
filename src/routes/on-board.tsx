import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useEmblaCarousel from 'embla-carousel-react'

import { cn } from '~/utils/cn'
import { Button } from '~/components/ui/button'
import OnboardingOneImage from '~/assets/images/onboarding-1.png'
import OnboardingTwoImage from '~/assets/images/onboarding-2.png'
import OnboardingThreeImage from '~/assets/images/onboarding-3.png'

function OnBoard() {
  const navigate = useNavigate()
  const [emblaRef, emblaApi] = useEmblaCarousel({ watchDrag: false })
  const [step, setStep] = useState(1)

  const handleNext = () => {
    if (step === 3) {
      navigate('/')
    } else {
      setStep(step + 1)
      emblaApi?.scrollTo(step)
    }
  }

  return (
    <div className="flex h-dvh w-dvw max-w-screen-sm flex-col">
      <div className="flex h-12 w-full items-center justify-center gap-2">
        <div
          className={cn(
            'h-3 w-3 rounded-[50%]',
            step === 1 ? 'bg-primary' : 'bg-gray-100',
          )}
        />
        <div
          className={cn(
            'h-3 w-3 rounded-[50%]',
            step === 2 ? 'bg-primary' : 'bg-gray-100',
          )}
        />
        <div
          className={cn(
            'h-3 w-3 rounded-[50%]',
            step === 3 ? 'bg-primary' : 'bg-gray-100',
          )}
        />
      </div>

      <div className="w-full flex-1 overflow-hidden" ref={emblaRef}>
        <div className="flex h-full gap-10">
          <div className="flex flex-1 flex-col">
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
              <img src={OnboardingOneImage} alt="온보딩1" />
            </div>
          </div>
          <div className="flex-1">
            <div className="mt-6 w-dvw max-w-screen-sm text-center">
              <div className="flex w-dvw max-w-screen-sm justify-center">
                <p className="mr-1 text-lg font-bold text-gray-800">
                  진료 결과에 따라
                </p>
                <p className="text-lg font-bold text-primary-500">
                  가까운 병원과
                </p>
              </div>
              <div className="flex w-dvw max-w-screen-sm justify-center">
                <p className="text-lg font-bold text-primary-500">
                  진료과목을 추천
                </p>
                <p className="text-lg font-bold text-gray-800">해드려요</p>
              </div>
            </div>
            <div className="absolute -bottom-20 z-0 flex w-dvw max-w-screen-sm justify-center">
              <img src={OnboardingTwoImage} alt="온보딩2" />
            </div>
          </div>
          <div className="flex-1">
            <div className="mt-6 w-dvw max-w-screen-sm text-center">
              <p className="mr-1 text-lg font-bold text-gray-800">
                증상을 기록하고
              </p>
              <div className="flex w-dvw max-w-screen-sm justify-center">
                <p className="mr-1 text-lg font-bold text-primary-500">
                  건강 변화를 한눈에
                </p>
                <p className="text-lg font-bold text-gray-800">확인하세요</p>
              </div>
            </div>
            <div className="absolute -bottom-20 z-0 flex w-dvw max-w-screen-sm justify-center">
              <img src={OnboardingThreeImage} alt="온보딩3" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center px-4">
        <Button
          className="absolute bottom-2 z-10 w-[calc(100%-2rem)] max-w-[343px] rounded-sm px-4 py-2"
          onClick={handleNext}
        >
          다음
        </Button>
      </div>
    </div>
  )
}

export { OnBoard }
