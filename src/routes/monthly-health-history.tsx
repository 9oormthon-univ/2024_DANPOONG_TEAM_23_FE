import { useState, useRef, useEffect } from 'react'

import { BottomNavigationBar } from '~/components/bottom-navigation-bar'
import { Header } from '~/components/header'
import { Button } from '~/components/ui/button'

import CryingSonG from '~/assets/images/crying-song.png'

interface DiagnosticRecord {
  date: string
  symptoms: {
    headache: boolean
    cerebrovascular: boolean
  }
  hospital: string
}

interface DiagnosticCardProps {
  record: DiagnosticRecord
}

function MonthlyHealthHistory() {
  const [selectedMonth, setSelectedMonth] = useState('2024년 11월')
  const [isSelectOpen, setIsSelectOpen] = useState(false)
  const [visibleItems, setVisibleItems] = useState(2)
  const selectRef = useRef<HTMLDivElement>(null)

  const months = [
    '2024년 08월',
    '2024년 09월',
    '2024년 10월',
    '2024년 11월',
    '2024년 12월',
  ]

  const mockRecords: DiagnosticRecord[] = [
    {
      date: '2024년 8월 1일',
      symptoms: { headache: true, cerebrovascular: true },
      hospital: '냠냠병원',
    },
    {
      date: '2024년 8월 1일',
      symptoms: { headache: true, cerebrovascular: true },
      hospital: '냠냠병원',
    },
    {
      date: '2024년 8월 1일',
      symptoms: { headache: true, cerebrovascular: true },
      hospital: '냠냠병원',
    },
  ]

  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 2) // 더보기 클릭시 2개씩 추가
  }

  const DiagnosticCard = ({ record }: DiagnosticCardProps) => (
    <div className="rounded-sm border border-gray-50 bg-white p-4">
      <p className="text-lg font-bold text-gray-800">{record.date} 진단결과</p>
      <div className="mt-2 flex items-center">
        <p className="text-base font-medium text-secondary-600">두통</p>
        <p className="ml-1 text-sm font-medium text-gray-500">
          증상이 있으셨어요.
        </p>
      </div>
      <div className="flex items-center">
        <p className="text-base font-medium text-secondary-800">뇌혈관</p>
        <p className="ml-1 text-sm font-medium text-gray-500">
          질병이 의심돼요.
        </p>
      </div>
      <div className="flex items-center">
        <p className="mr-1 text-sm font-medium text-gray-500">근처의</p>
        <p className="text-base font-medium text-primary-500">
          {record.hospital}
        </p>
        <p className="ml-1 text-sm font-medium text-gray-500">
          을(를) 방문해보세요.
        </p>
      </div>
    </div>
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsSelectOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="h-dvh w-dvw max-w-screen-sm">
      <Header title="AI 진단 기록" showGoBackButton={true} />

      <div className="mt-16 flex flex-col gap-4 p-3 pb-20">
        <div ref={selectRef} className="relative">
          <button
            type="button"
            className="flex w-48 items-center justify-between rounded-sm bg-green-50 p-2 text-lg font-bold text-gray-800"
            onClick={() => {
              setIsSelectOpen(!isSelectOpen)
            }}
          >
            {selectedMonth}
            <svg
              className={`ml-2 h-8 w-8 transform transition-transform ${
                isSelectOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isSelectOpen && (
            <div className="absolute left-0 top-full z-50 mt-1 w-48 rounded-sm bg-white shadow-lg">
              <div className="max-h-60 overflow-auto py-1">
                {months.map((month) => (
                  <button
                    key={month}
                    className={`w-full px-4 py-2 text-center text-lg font-medium text-gray-600 hover:bg-gray-100 ${month === selectedMonth ? 'bg-gray-50' : ''}`}
                    onClick={() => {
                      setSelectedMonth(month)
                      setIsSelectOpen(false)
                    }}
                  >
                    {month}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {mockRecords.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <div className="mt-12">
              <img src={CryingSonG} />
            </div>
            <p className="text-center text-lg font-bold text-gray-800">
              이 달에는
              <br />
              진단 기록이 없어요.
            </p>
          </div>
        ) : (
          <div className="flex h-4/5 max-h-[calc(100dvh-16rem)] flex-col gap-4 overflow-y-scroll pb-12">
            {mockRecords.slice(0, visibleItems).map((record, index) => (
              <DiagnosticCard key={index} record={record} />
            ))}
            {visibleItems < mockRecords.length && (
              <Button
                className="mt-2 w-full rounded-sm bg-transparent p-3 text-center text-gray-800"
                onClick={handleShowMore}
              >
                더보기
                <svg
                  className={`ml-2 h-8 w-8`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Button>
            )}
          </div>
        )}
      </div>

      <BottomNavigationBar />
    </div>
  )
}

export { MonthlyHealthHistory }
