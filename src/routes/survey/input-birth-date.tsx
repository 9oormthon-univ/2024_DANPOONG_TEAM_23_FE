import { useEffect, useState } from 'react'

import { Button } from '~/components/ui/button'

import GraySonG from '~/assets/images/gray-song.png'

interface Props {
  onNext: (birthDate: string) => void
}

function InputBirthDate({ onNext }: Props) {
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [isValid, setIsValid] = useState(false)

  const validateDate = (year: string, month: string, day: string) => {
    if (!year || !month || !day) return false

    const yearNum = parseInt(year)
    const monthNum = parseInt(month)
    const dayNum = parseInt(day)

    if (yearNum < 1900 || yearNum > 2024) return false
    if (monthNum < 1 || monthNum > 12) return false

    const lastDay = new Date(yearNum, monthNum, 0).getDate()
    if (dayNum < 1 || dayNum > lastDay) return false

    return true
  }

  useEffect(() => {
    setIsValid(validateDate(year, month, day))
  }, [year, month, day])

  const handleNext = () => {
    if (!isValid) return
    const formattedDate = `${year}${month.padStart(2, '0')}${day.padStart(2, '0')}`
    onNext(formattedDate)
  }

  return (
    <div className="z-10 flex h-dvh w-dvw max-w-screen-sm flex-col items-center">
      <div className="flex h-12 w-full items-center justify-center gap-2">
        <div className="h-3 w-3 rounded-[50%] bg-primary"></div>
        <div className="h-3 w-3 rounded-[50%] bg-gray-100"></div>
        <div className="h-3 w-3 rounded-[50%] bg-gray-100"></div>
      </div>
      <div className="w-full max-w-screen-sm px-4">
        <h2 className="mb-4 text-xl font-bold text-gray-800">생년월일</h2>
      </div>
      <div className="w-full max-w-screen-sm px-4">
        <p className="mb-6 text-lg font-bold text-gray-800">
          생일을 알려주세요!
        </p>
      </div>
      <div className="mb-96 flex w-full justify-center gap-2 px-4 text-lg">
        <input
          value={year}
          onChange={(e) => {
            setYear(e.target.value.replace(/\D/g, '').slice(0, 4))
          }}
          className="h-12 w-24 rounded-sm border-[1px] border-solid border-gray-100 p-4 text-center text-gray-800"
          placeholder="2024"
        />
        <span className="flex items-center text-gray-800">년</span>
        <input
          value={month}
          onChange={(e) => {
            setMonth(e.target.value.replace(/\D/g, '').slice(0, 2))
          }}
          className="h-12 w-16 rounded-sm border-[1px] border-solid border-gray-100 p-4 text-center text-gray-800"
          placeholder="11"
        />
        <span className="flex items-center text-gray-800">월</span>
        <input
          value={day}
          onChange={(e) => {
            setDay(e.target.value.replace(/\D/g, '').slice(0, 2))
          }}
          className="h-12 w-16 rounded-sm border-[1px] border-solid border-gray-100 p-4 text-center text-gray-800"
          placeholder="24"
        />
        <span className="flex items-center text-gray-800">일</span>
      </div>
      <div className="absolute bottom-0 z-0 flex w-dvw max-w-screen-sm justify-center">
        <img src={GraySonG} />
      </div>
      <div className="flex w-full justify-center px-4">
        <Button
          className={`absolute bottom-2 z-10 w-[calc(100%-2rem)] max-w-[343px] rounded-sm ${!isValid ? 'bg-gray-100' : 'bg-primary'} px-4 py-2`}
          onClick={handleNext}
          disabled={!isValid}
        >
          다음
        </Button>
      </div>
    </div>
  )
}

export { InputBirthDate }
