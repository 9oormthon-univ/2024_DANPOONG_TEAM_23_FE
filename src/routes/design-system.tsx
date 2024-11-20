import { GenderToggleGroup } from '~/components/gender-toggle-group'
import { HospitalCard } from '~/components/hospital-card'
import { Button } from '~/components/ui/button'
import { Toggle, ToggleCheckIcon } from '~/components/ui/toggle'
import { Profile } from '~/components/ui/profile'

import Setting from '~/assets/svgs/setting.svg?react'
import BottomNavigationFloor from '~/assets/svgs/bottom-navigation-floor.svg?react'
import Home from '~/assets/svgs/home.svg?react'
import ChevronDown from '~/assets/svgs/chevron-down.svg?react'
import ChevronLeft from '~/assets/svgs/chevron-left.svg?react'
import ChevronUp from '~/assets/svgs/chevron-up.svg?react'
import Calendar from '~/assets/svgs/calendar.svg?react'
import Delete from '~/assets/svgs/delete.svg?react'
import Logout from '~/assets/svgs/logout.svg?react'
import Place from '~/assets/svgs/place.svg?react'
import Star from '~/assets/svgs/star.svg?react'
import ArrowRight from '~/assets/svgs/arrow-right.svg?react'
import Phone from '~/assets/svgs/phone.svg?react'

function DesignSystem() {
  return (
    <div className="flex w-full flex-col gap-8 p-4">
      <section className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold">Typography</h2>
        <div className="flex flex-col gap-4">
          <span className="text-xl font-bold">
            28_bold 28px 단풍톤 dpt bold 150% 2%
          </span>
          <span className="text-lg font-bold">
            24_bold 24px 단풍톤 dpt bold 150% 2%
          </span>
          <span className="text-lg font-medium">
            24_medium 24px 단풍톤 dpt medium 150% 2%
          </span>
          <span className="text-base font-medium">
            22_medium 22px 단풍톤 dpt medium 150% 2%
          </span>
          <span className="text-sm font-medium">
            20_medium 20px 단풍톤 dpt medium 150% 2%
          </span>
          <span className="text-xs font-medium">
            18_medium 18px 단풍톤 dpt medium 150% 2%
          </span>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold">Rounding</h2>
        <div className="flex gap-4">
          <div className="size-40 rounded-xs bg-gray-800" />
          <div className="size-40 rounded-sm bg-gray-800" />
          <div className="size-40 rounded-md bg-gray-800" />
          <div className="size-40 rounded-lg bg-gray-800" />
          <div className="size-40 rounded-xl bg-gray-800" />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold">Shadow</h2>
        <div className="flex gap-4">
          <div className="size-40 rounded-xl bg-white shadow-1" />
          <div className="size-40 rounded-xl bg-white shadow-2" />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold">Colors</h2>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Primary</h3>
          <div className="flex">
            <div className="h-12 w-24 bg-primary-50" />
            <div className="h-12 w-24 bg-primary-100" />
            <div className="h-12 w-24 bg-primary-200" />
            <div className="h-12 w-24 bg-primary-300" />
            <div className="h-12 w-24 bg-primary-400" />
            <div className="h-12 w-24 bg-primary-500" />
            <div className="h-12 w-24 bg-primary-600" />
            <div className="h-12 w-24 bg-primary-700" />
            <div className="h-12 w-24 bg-primary-800" />
            <div className="h-12 w-24 bg-primary-900" />
          </div>

          <h3 className="text-xl font-semibold">Secondary</h3>
          <div className="flex">
            <div className="h-12 w-24 bg-secondary-50" />
            <div className="h-12 w-24 bg-secondary-100" />
            <div className="h-12 w-24 bg-secondary-200" />
            <div className="h-12 w-24 bg-secondary-300" />
            <div className="h-12 w-24 bg-secondary-400" />
            <div className="h-12 w-24 bg-secondary-500" />
            <div className="h-12 w-24 bg-secondary-600" />
            <div className="h-12 w-24 bg-secondary-700" />
            <div className="h-12 w-24 bg-secondary-800" />
            <div className="h-12 w-24 bg-secondary-900" />
          </div>

          <h3 className="text-xl font-semibold">Error</h3>
          <div className="flex">
            <div className="h-12 w-24 bg-error-50" />
            <div className="h-12 w-24 bg-error-100" />
            <div className="h-12 w-24 bg-error-200" />
            <div className="h-12 w-24 bg-error-300" />
            <div className="h-12 w-24 bg-error-400" />
            <div className="h-12 w-24 bg-error-500" />
            <div className="h-12 w-24 bg-error-600" />
            <div className="h-12 w-24 bg-error-700" />
            <div className="h-12 w-24 bg-error-800" />
            <div className="h-12 w-24 bg-error-900" />
          </div>

          <h3 className="text-xl font-semibold">Success</h3>
          <div className="flex">
            <div className="h-12 w-24 bg-success-50" />
            <div className="h-12 w-24 bg-success-100" />
            <div className="h-12 w-24 bg-success-200" />
            <div className="h-12 w-24 bg-success-300" />
            <div className="h-12 w-24 bg-success-400" />
            <div className="h-12 w-24 bg-success-500" />
            <div className="h-12 w-24 bg-success-600" />
            <div className="h-12 w-24 bg-success-700" />
            <div className="h-12 w-24 bg-success-800" />
            <div className="h-12 w-24 bg-success-900" />
          </div>

          <h3 className="text-xl font-semibold">Warning</h3>
          <div className="flex">
            <div className="h-12 w-24 bg-warning-50" />
            <div className="h-12 w-24 bg-warning-100" />
            <div className="h-12 w-24 bg-warning-200" />
            <div className="h-12 w-24 bg-warning-300" />
            <div className="h-12 w-24 bg-warning-400" />
            <div className="h-12 w-24 bg-warning-500" />
            <div className="h-12 w-24 bg-warning-600" />
            <div className="h-12 w-24 bg-warning-700" />
            <div className="h-12 w-24 bg-warning-800" />
            <div className="h-12 w-24 bg-warning-900" />
          </div>

          <h3 className="text-xl font-semibold">Info</h3>
          <div className="flex">
            <div className="h-12 w-24 bg-info-50" />
            <div className="h-12 w-24 bg-info-100" />
            <div className="h-12 w-24 bg-info-200" />
            <div className="h-12 w-24 bg-info-300" />
            <div className="h-12 w-24 bg-info-400" />
            <div className="h-12 w-24 bg-info-500" />
            <div className="h-12 w-24 bg-info-600" />
            <div className="h-12 w-24 bg-info-700" />
            <div className="h-12 w-24 bg-info-800" />
            <div className="h-12 w-24 bg-info-900" />
          </div>

          <h3 className="text-xl font-semibold">Gray</h3>
          <div className="flex">
            <div className="h-12 w-24 bg-gray-50" />
            <div className="h-12 w-24 bg-gray-100" />
            <div className="h-12 w-24 bg-gray-200" />
            <div className="h-12 w-24 bg-gray-300" />
            <div className="h-12 w-24 bg-gray-400" />
            <div className="h-12 w-24 bg-gray-500" />
            <div className="h-12 w-24 bg-gray-600" />
            <div className="h-12 w-24 bg-gray-700" />
            <div className="h-12 w-24 bg-gray-800" />
            <div className="h-12 w-24 bg-gray-900" />
          </div>

          <h3 className="text-xl font-semibold">Background</h3>
          <div className="flex">
            <div className="h-12 w-24 bg-background-50" />
            <div className="h-12 w-24 bg-background-900" />
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold">Components</h2>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Header</h3>
          <div className="flex">
            <header className="border-gray50 flex h-16 w-full max-w-screen-sm items-center justify-between border-b bg-white px-2.5 py-6">
              <div className="w-10">
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center"
                >
                  <ChevronLeft />
                </button>
              </div>
              <div className="min-w-60 text-center text-xl font-bold">
                내 건강
              </div>
              <div className="w-10">
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center"
                >
                  <Setting />
                </button>
              </div>
            </header>
          </div>

          <h3 className="text-xl font-semibold">Bottom Navigation Bar</h3>
          <div className="flex">
            <div className="relative mt-20 flex h-14 w-full max-w-screen-sm">
              <div className="h-14 w-4/12 flex-1 bg-white" />
              <BottomNavigationFloor />
              <div className="h-14 w-4/12 flex-1 bg-white" />
              <button
                type="button"
                className="absolute bottom-[-5px] left-1/2 flex h-[88px] w-[88px] translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[50%] bg-primary-500 shadow-1"
              >
                <Home className="text-white" />
              </button>
            </div>
          </div>

          <h3 className="text-xl font-semibold">Buttons</h3>
          <div className="flex flex-col gap-4">
            <Button className="w-72" disabled>
              다음
            </Button>
            <Button className="w-72">다음</Button>
            <Button className="w-28" size="sm">
              전화하기
            </Button>
            <Button className="w-28" variant="outline" size="sm">
              알아보기
            </Button>
          </div>

          <h3 className="text-xl font-semibold">Toggle</h3>
          <div className="flex flex-col items-start gap-4">
            <Toggle className="w-80">
              <ToggleCheckIcon />
              고혈압
            </Toggle>
            <Toggle className="w-80" defaultPressed>
              <ToggleCheckIcon />
              고혈압
            </Toggle>
            <Toggle className="w-80">
              <ToggleCheckIcon />
              기타
            </Toggle>
            <Toggle className="w-80" defaultPressed>
              <ToggleCheckIcon />
              기타
            </Toggle>
            <GenderToggleGroup />
          </div>

          <h3 className="text-xl font-semibold">Card</h3>
          <div className="flex gap-4">
            <HospitalCard
              image="https://www.rch.or.kr/web/rchseoul/file/image/uu/69728946aa69442596d61da622f6093e"
              name="냠냠병원"
              category="이비인후과"
              rating={4.3}
            />
          </div>

          <h3 className="text-xl font-semibold">Text Input</h3>
          <div className="flex"></div>

          <h3 className="text-xl font-semibold">Profile</h3>
          <div className="flex">
            <Profile
              src="https://w7.pngwing.com/pngs/710/71/png-transparent-profle-person-profile-user-circle-icons-icon-thumbnail.png"
              alt="회원"
            />
          </div>

          <h3 className="text-xl font-semibold">Icon</h3>
          <div className="flex text-primary-500 [&_svg]:size-8">
            <ChevronDown />
            <ChevronLeft />
            <ChevronUp />
            <Calendar />
            <Delete />
            <Setting />
            <Logout />
            <Home />
            <Place />
            <Star />
            <ArrowRight />
            <Phone />
          </div>
        </div>
      </section>
    </div>
  )
}

export { DesignSystem }
