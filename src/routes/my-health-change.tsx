import { BottomNavigationBar } from '~/components/bottom-navigation-bar'
import { Header } from '~/components/header'

import Warning from '~/assets/images/warning.png'
import { DiagnoseMarkdownRenderer } from '~/components/diagnose-markdown-renderer'

const mdxSource = `
최근 한 달간
**뇌혈관**관련 증상이 **8회** 나타났습니다.

**통증의 빈도가 더 낮아질 경우**,
주의가 필요합니다.
건강관리를 위해 **규칙적인 수면과 스트레스 관리를 유지하는 것**이 중요합니다.
`

function MyHealthChange() {
  return (
    <div className="h-dvh w-dvw max-w-screen-sm">
      <Header
        title="내 건강 변화"
        showGoBackButton={true}
        showSettingButton={true}
      />

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

        <DiagnoseMarkdownRenderer mdxSource={mdxSource} />
      </div>

      <BottomNavigationBar />
    </div>
  )
}

export { MyHealthChange }
