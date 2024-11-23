import { BottomNavigationBar } from '~/components/bottom-navigation-bar'
import { Header } from '~/components/header'
import { Button } from '~/components/ui/button'

import Warning from '~/assets/images/warning.png'

function MyHealthChange() {
  return (
    <div className="h-dvh w-dvw max-w-screen-sm">
      <Header title="내 건강 변화" showGoBackButton={true} />

      <div className="mt-16 flex h-4/5 max-h-[calc(100dvh+400px)] flex-col gap-4 overflow-y-scroll p-3 pb-20">
        {/* 경고 섹션 */}
        <div>
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
          </div>
        </div>

        {/* 최근 증상 섹션 향후 마크 다운 내용 반영해야 함 */}
        <div className="mt-2 rounded-sm border border-gray-50 bg-white p-4">
          <p className="text-lg font-bold text-gray-800">최근 한 달간</p>
          <div className="mt-2 flex items-center">
            <p className="text-base font-medium text-error-400">뇌혈관</p>
            <p className="ml-1 text-sm font-medium text-gray-800">
              관련 증상이
            </p>
            <p className="ml-1 text-base font-medium text-primary-500">8회</p>
            <p className="ml-1 text-sm font-medium text-gray-800">
              나타났습니다.
            </p>
          </div>
          <p className="mt-4 text-sm font-medium text-gray-600">
            동증의 빈도가 더 잦아질 경우,
            <br />
            주의가 필요합니다.
          </p>
          <p className="mt-2 text-sm font-medium text-gray-600">
            건강관리를 위해 규칙적인 수면과 스트레스 관리를 유지하는 것이
            중요합니다.
          </p>
        </div>

        {/* 조치방법 섹션 */}
        <div className="mt-4">
          <h2 className="text-lg font-bold text-gray-800">이렇게 해보세요!</h2>
          <div className="mt-2 rounded-sm bg-primary-50 p-4">
            <div>
              <div>
                <p className="text-base font-medium text-gray-500">
                  조치방법 텍스트
                </p>
              </div>
              <div>
                <p className="text-base font-medium text-gray-500">텍스트</p>
              </div>
              <div>
                <p className="text-base font-medium text-gray-500">텍스트</p>
              </div>
            </div>
            <Button className="mt-4 w-full rounded-sm bg-primary-500 p-3 text-center text-lg font-medium text-white">
              내 주변 병원 보기
            </Button>
          </div>
        </div>
      </div>

      <BottomNavigationBar />
    </div>
  )
}

export { MyHealthChange }
