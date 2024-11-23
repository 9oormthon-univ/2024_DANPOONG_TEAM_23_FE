import { useState } from 'react'

import { Button } from '~/components/ui/button'
import { Toggle, ToggleCheckIcon } from '~/components/ui/toggle'
import { EtcToggle } from '~/components/etc-toggle'

import GraySonG from '~/assets/images/gray-song.png'

const medicalConditions = [
  '기저질환 없음',
  '당뇨',
  '고혈압',
  '골다공증',
  '저혈압',
  '기타',
]

interface Props {
  birthDate: string
  gender: string
}

function SelectMedicalConditions({ birthDate, gender }: Props) {
  const [selectedConditions, setSelectedConditions] = useState<string[]>([])
  const [otherCondition, setOtherCondition] = useState('')

  const handleToggle = (condition: string) => {
    setSelectedConditions((prev) => {
      if (prev.includes(condition)) {
        return prev.filter((item) => item !== condition)
      }
      if (condition === '기저질환 없음') {
        return [condition]
      }
      return prev.includes('기저질환 없음')
        ? [...prev.filter((item) => item !== '기저질환 없음'), condition]
        : [...prev, condition]
    })
  }

  const handleComplete = () => {
    const conditions = selectedConditions
      .filter((condition) => condition !== '기타')
      .concat(otherCondition ? [otherCondition] : [])
      .join(', ')

    console.log(birthDate)
    console.log(gender)
    console.log(conditions)
  }

  return (
    <div className="z-10 flex h-dvh w-dvw max-w-screen-sm flex-col items-center">
      <div className="flex h-12 w-full items-center justify-center gap-2">
        <div className="h-3 w-3 rounded-[50%] bg-gray-100"></div>
        <div className="h-3 w-3 rounded-[50%] bg-gray-100"></div>
        <div className="h-3 w-3 rounded-[50%] bg-primary"></div>
      </div>
      <div className="w-full max-w-screen-sm px-4">
        <h2 className="mb-4 text-xl font-bold text-gray-800">기저질환</h2>
      </div>
      <div className="w-full max-w-screen-sm px-4">
        <p className="mb-6 text-lg font-bold text-gray-800">
          갖고 있는 질환이 있다면
          <br /> 알려주세요!
        </p>
      </div>

      <div className="z-10 flex h-full max-h-[calc(100dvh-300px)] w-full flex-col items-start gap-2 overflow-y-scroll px-4">
        {medicalConditions
          .filter((condition) => condition !== '기타')
          .map((condition) => (
            <div key={condition} className="w-full">
              <Toggle
                className="w-full"
                pressed={selectedConditions.includes(condition)}
                onPressedChange={() => {
                  handleToggle(condition)
                }}
              >
                <div className="flex items-center">
                  <ToggleCheckIcon />
                  <div className="ml-2">{condition}</div>
                </div>
              </Toggle>
            </div>
          ))}

        <EtcToggle
          value={otherCondition}
          onChange={(value) => {
            setOtherCondition(value)
            if (value && !selectedConditions.includes('기타')) {
              setSelectedConditions((prev) =>
                prev.includes('기저질환 없음') ? ['기타'] : [...prev, '기타'],
              )
            } else if (!value && selectedConditions.includes('기타')) {
              setSelectedConditions((prev) =>
                prev.filter((condition) => condition !== '기타'),
              )
            }
          }}
        />
      </div>

      <div className="absolute bottom-0 z-0 flex w-dvw max-w-screen-sm justify-center">
        <img src={GraySonG} />
      </div>
      <div className="flex w-full justify-center px-4">
        <Button
          className={`absolute bottom-2 z-10 w-[calc(100%-2rem)] max-w-[343px] rounded-sm px-4 py-2`}
          onClick={handleComplete}
        >
          시작하기
        </Button>
      </div>
    </div>
  )
}

export { SelectMedicalConditions }
