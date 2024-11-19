import { cva, type VariantProps } from 'cva'

import { cn } from '~/utils/cn'

import GoBack from '~/assets/svgs/go-back.svg?react'
import Setting from '~/assets/svgs/setting.svg?react'

const headerVariants = cva({
  base: 'border-gray50 fixed top-0 flex h-16 w-full items-center justify-between border-b px-2.5 py-6',
  variants: {
    variant: {
      default: 'bg-transparent',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const buttonVariants = cva({
  base: 'flex h-10 w-10 items-center justify-center',
})

export interface HeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof headerVariants> {
  title?: string
  showGoBackButton?: boolean
  showSettingButton?: boolean
  onGoBackClick?: () => void
  onSettingClick?: () => void
}

function Header({
  className,
  variant,
  title,
  showGoBackButton = false,
  showSettingButton = false,
  onGoBackClick,
  onSettingClick,
  ...props
}: HeaderProps) {
  return (
    <header className={cn(headerVariants({ variant, className }))} {...props}>
      <div className="w-10">
        {showGoBackButton && (
          <button onClick={onGoBackClick} className={cn(buttonVariants())}>
            <GoBack />
          </button>
        )}
      </div>

      <div className="min-w-60 text-center text-xl font-bold">{title}</div>

      <div className="w-10">
        {showSettingButton && (
          <button onClick={onSettingClick} className={cn(buttonVariants())}>
            <Setting />
          </button>
        )}
      </div>
    </header>
  )
}

export { Header, headerVariants }
