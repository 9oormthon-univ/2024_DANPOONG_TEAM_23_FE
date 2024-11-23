import { Button } from '~/components/ui/button'

import KaKao from '~/assets/svgs/kakao.svg?react'
import LoginLogo from '~/assets/svgs/login-logo.svg?react'

function Login() {
  return (
    <div className="h-dvh w-dvw max-w-screen-sm bg-primary-50">
      <div className="flex h-3/5 items-end justify-center">
        <LoginLogo />
      </div>
      <div className="flex h-1/3 items-center justify-center">
        <Button className="h-12 w-4/5 max-w-[343px] bg-[#fee500] hover:bg-[#fee500]">
          <div>
            <KaKao />
          </div>
          <div className="text-[16px] font-semibold text-[#391b1b]">
            카카오 로그인
          </div>
        </Button>
      </div>
    </div>
  )
}

export { Login }
