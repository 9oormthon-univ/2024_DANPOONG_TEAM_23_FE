import { useNavigate } from 'react-router-dom'

import { BottomNavigationBar } from '~/components/bottom-navigation-bar'
import { Header } from '~/components/header'
import { Button } from '~/components/ui/button'
import Warning from '~/assets/images/warning.png'

function MyHealthHistory() {
  const navigate = useNavigate()

  return (
    <div className="h-dvh w-dvw max-w-screen-sm">
      <Header
        title="내 건강 기록"
        showGoBackButton={true}
        showSettingButton={true}
      />

      <div className="mt-16 flex h-4/5 max-h-[calc(100dvh+400px)] flex-col gap-6 overflow-y-scroll p-3">
        {/* 프로필 섹션 */}
        <div className="flex items-center gap-2">
          <div className="mt-2 h-16 w-16 rounded-full bg-gray-200">
            {/* 프로필 이미지 */}
          </div>
          <div className="ml-2">
            <div className="flex">
              <p className="text-xl font-bold text-primary-500">순자</p>
              <p className="flex items-center text-lg text-gray-800">님</p>
            </div>
            <p className="text-[22px] font-medium text-gray-800">
              오늘도 건강한 하루 되세요!
            </p>
          </div>
        </div>

        {/* 건강 변화 섹션 */}
        <div>
          <h2 className="text-lg font-bold text-gray-800">내 건강 변화</h2>
          <div className="mt-2 rounded-sm border border-gray-50 bg-white p-4">
            <div className="flex items-center justify-center gap-2">
              <img src={Warning} />
              <div>
                <p className="text-center text-xl font-bold text-error-400">
                  뇌혈관
                </p>
                <p className="text-sm font-medium text-gray-800">
                  질환이 의심돼요
                </p>
              </div>
            </div>
            <Button
              onClick={() => {
                navigate('/my-health-change')
              }}
              className="mt-2 flex w-full items-center justify-center rounded-sm border-0 p-3 font-medium"
            >
              건강 변화 자세히 보기
            </Button>
          </div>
        </div>

        {/* 오늘의 건강 기록 섹션 */}
        <div>
          <h2 className="text-lg font-bold text-gray-800">오늘의 건강 기록</h2>
          <div className="mt-2 rounded-sm bg-primary-50 p-4">
            <p className="text-lg font-medium text-gray-800">
              2024년 11월 20일 진단결과
            </p>

            {/* 진단 결과가 있을 경우 */}
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
              <p className="mr-1 text-sm font-medium text-gray-500">근처의 </p>
              <p className="text-base font-medium text-primary-500">냠냠병원</p>
              <p className="ml-1 text-sm font-medium text-gray-500">
                을(를) 방문해보세요.
              </p>
            </div>
            <Button className="mt-4 w-full rounded-sm border border-gray-50 bg-white p-3 text-center text-lg font-medium text-primary-500">
              내 주변 병원 보기
            </Button>
            <Button
              onClick={() => {
                navigate('/monthly-health-history')
              }}
              className="mt-2 w-full rounded-sm bg-primary-500 p-3 text-center font-medium text-white"
            >
              지난 진단 결과 보기
            </Button>
          </div>
          <div className="h-12"></div>

          {/* 진단 결과가 없을 경우 */}
          {/* <div className="my-2">
              <p className="text-base font-medium text-gray-500">
                아직 진단 결과가 없어요
              </p>
            </div>
            <Button onClick={() => {navigate('/health-diary')}} className="mt-4 w-full rounded-sm border border-gray-100 bg-white p-3 text-center text-lg font-medium text-primary-500">
              진단하러 가기
            </Button>
            <Button 
              onClick={() => {
                navigate('/monthly-health-history')
              }}
              className="mt-2 w-full rounded-sm bg-primary-500 p-3 text-center font-medium text-white">
              지난 진단 결과 보기
            </Button>
          </div>
          <div className="h-12"></div> */}
        </div>
      </div>

      <BottomNavigationBar />
    </div>
  )
}

export { MyHealthHistory }
