import { Link } from 'react-router-dom'

import { BottomNavigationBar } from '~/components/bottom-navigation-bar'

import Setting from '~/assets/svgs/setting.svg?react'
import MagicWand from '~/assets/images/magic-wand.png'
import Clipboard from '~/assets/images/clipboard.png'
import Chart from '~/assets/images/chart.png'

function Root() {
  return (
    <div className="relative h-dvh w-dvw max-w-screen-sm">
      <div className="absolute top-0 h-[50dvh] w-full bg-primary-500" />

      <div className="relative h-full overflow-auto pb-40">
        <div className="flex h-16 w-full items-center justify-between px-4">
          <h1 className="text-xl font-bold text-white">홈</h1>
          <Link to="/settings">
            <div className="flex items-center justify-center rounded-full text-white">
              <Setting className="size-10" />
            </div>
          </Link>
        </div>

        <div className="mt-4 px-4">
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold text-white">안녕하세요 순자님!</p>
          </div>
          <p className="text-xl font-bold text-white">
            오늘의 몸 상태는 어떠세요?
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-4 px-4">
          <Link
            to="/health-diary"
            className="relative flex h-52 gap-4 rounded-sm bg-white p-4 shadow-sm"
          >
            <div>
              <p className="text-lg font-bold text-gray-800">
                내 증상 확인하기
              </p>
              <p className="mt-2 text-lg font-medium text-gray-500">
                인공지능으로 빠르고
                <br />
                쉽게 증상을
                <br />
                확인할 수 있어요!
              </p>
            </div>
            <div className="absolute bottom-2 right-2">
              <img src={MagicWand} className="size-15" />
            </div>
            <div className="absolute bottom-2 right-1">
              <img src={Clipboard} className="size-25" />
            </div>
          </Link>

          <Link
            to="/my-health-history"
            className="relative h-44 items-center gap-2 rounded-sm bg-white p-4 shadow-sm"
          >
            <div>
              <p className="text-lg font-bold text-gray-800">내 건강 기록</p>
              <p className="mt-2 text-lg font-medium text-gray-500">
                기록된 건강 정보를 한 눈에!
              </p>
            </div>
            <div className="absolute bottom-2 right-4">
              <img src={Chart} className="size-28" />
            </div>
          </Link>
        </div>
      </div>
      <BottomNavigationBar />
    </div>
  )
}

export { Root }
