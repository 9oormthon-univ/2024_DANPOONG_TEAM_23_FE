import { useState } from 'react'

import { GenderToggleGroup } from '~/components/gender-toggle-group'
import { Button } from '~/components/ui/button'

import GraySonG from '~/assets/images/gray-song.png'

interface Props {
  onNext: (gender: string) => void
}

function SelectGender({ onNext }: Props) {
  const [selectedGender, setSelectedGender] = useState<string | null>(null)

  const handleGenderChange = (value: string) => {
    setSelectedGender(value)
  }

  const handleNext = () => {
    if (selectedGender) {
      onNext(selectedGender)
    }
  }

  return (
    <div className="z-10 flex h-dvh w-dvw flex-col items-center">
      <div className="flex h-12 w-full items-center justify-center gap-2">
        <div className="h-3 w-3 rounded-[50%] bg-gray-100"></div>
        <div className="h-3 w-3 rounded-[50%] bg-primary"></div>
        <div className="h-3 w-3 rounded-[50%] bg-gray-100"></div>
      </div>
      <div className="w-full px-4">
        <h2 className="mb-4 text-xl font-bold text-gray-800">성별</h2>
      </div>
      <div className="w-full px-4">
        <p className="mb-6 text-lg font-bold text-gray-800">
          성별은 어떻게 되시나요?
        </p>
      </div>
      <div>
        <GenderToggleGroup onValueChange={handleGenderChange} />
      </div>
      <div className="absolute bottom-0 z-0 flex w-dvw max-w-screen-sm justify-center">
        <img src={GraySonG} />
      </div>
      <div className="flex w-full justify-center px-4">
        <Button
          className={`absolute bottom-2 z-10 w-[calc(100%-2rem)] max-w-[343px] rounded-sm ${
            !selectedGender ? 'bg-gray-100' : 'bg-primary'
          } px-4 py-2`}
          onClick={handleNext}
        >
          다음
        </Button>
      </div>
    </div>
  )
}

export { SelectGender }
