import { useState } from 'react'
import { Header } from '~/components/header'
import { BottomNavigationBar } from '~/components/bottom-navigation-bar'
import { Button } from '~/components/ui/button'

import Delete from '~/assets/svgs/delete.svg?react'
import Logout from '~/assets/svgs/logout.svg?react'
import Alert from '~/assets/svgs/alert.svg?react'
import ToggleCheck from '~/assets/svgs/toggle-check.svg?react'
import CryingSonG from '~/assets/images/crying-song.png'

function Settings() {
  const [showModal, setShowModal] = useState(false)
  const [isAgreed, setIsAgreed] = useState(false)

  return (
    <div className="h-dvh w-dvw max-w-screen-sm">
      <Header title="설정" showGoBackButton={true} />
      <div className="mt-16 w-dvw max-w-screen-sm">
        <button className="flex w-dvw max-w-screen-sm p-4">
          <div className="flex h-9 items-center pr-2">
            <Logout className="text-gray-600" />
          </div>
          <div className="text-lg font-bold text-gray-600">로그아웃</div>
        </button>
        <button
          className="flex w-dvw max-w-screen-sm p-4"
          onClick={() => {
            setShowModal(true)
          }}
        >
          <div className="flex h-9 items-center pr-2">
            <Delete className="text-gray-600" />
          </div>
          <div className="text-lg font-bold text-gray-600">회원 탈퇴</div>
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="mx-4 w-full max-w-sm rounded-sm bg-white p-6">
            <div className="flex flex-col items-center">
              <img src={CryingSonG} alt="캐릭터" className="h-24 w-24" />
              <h2 className="mb-2 text-center text-lg font-bold">
                정말 탈퇴하시겠어요?
                <br />
                손쥐가 많이 그리워할 거예요.
              </h2>
              <Alert />
              <p className="mt-2 text-center text-lg font-medium text-error-400">
                탈퇴 이후에는 진단 기록을
                <br />
                되돌려볼 수 없고, 일정 기간
                <br />
                이후 영구 삭제돼요.
              </p>

              <div className="mt-4 flex items-center">
                <button
                  onClick={() => {
                    setIsAgreed(!isAgreed)
                  }}
                  className="mr-2 flex items-center"
                >
                  <ToggleCheck
                    className={` ${isAgreed ? 'text-primary-500' : 'text-gray-100'}`}
                  />
                </button>
                <label
                  htmlFor="agree"
                  className={`text-xs font-medium ${isAgreed ? 'text-gray-800' : 'text-gray-300'}`}
                >
                  동의합니다.
                </label>
              </div>

              <div className="mt-6 flex w-full gap-2">
                <Button
                  className="w-1/2 rounded-sm bg-transparent p-3 text-primary-500"
                  onClick={() => {
                    setShowModal(false)
                    setIsAgreed(false)
                  }}
                >
                  돌아가기
                </Button>
                <Button
                  className={`w-1/2 rounded-sm bg-transparent p-3 disabled:bg-transparent ${
                    isAgreed
                      ? 'font-bold text-red-400'
                      : 'cursor-not-allowed font-medium text-gray-300'
                  }`}
                  disabled={!isAgreed}
                  onClick={() => {
                    if (isAgreed) {
                      // 탈퇴 처리 로직
                    }
                  }}
                >
                  탈퇴하기
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <BottomNavigationBar />
    </div>
  )
}

export { Settings }
