import { cva, type VariantProps } from 'cva'
import { cn } from '~/utils/cn'

import BottomNavigationFloor from '~/assets/svgs/BottomNavigationFloor.svg?react'
import Home from '~/assets/svgs/Home.svg?react'

const bottomNavigationBarVariants = cva({
  base: 'fixed bottom-0 flex h-14 w-full',
  variants: {
    variant: {
      default: '[&_.navigation-floor]:bg-white [&_.home-button]:bg-primary-500',
    },
    size: {
      default: '[&_.home-button]:h-[88px] [&_.home-button]:w-[88px]',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

const homeButtonVariants = cva({
  base: 'absolute bottom-[-5px] left-1/2 flex h-[88px] w-[88px] translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[50%] bg-primary-500 shadow-1',
})

export interface BottomNavigationBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bottomNavigationBarVariants> {
  onClick?: () => void
}

function BottomNavigationBar({
  className,
  variant,
  size,
  onClick,
  ...props
}: BottomNavigationBarProps) {
  return (
    <div
      className={cn(bottomNavigationBarVariants({ variant, size, className }))}
      {...props}
    >
      <div className="h-14 w-4/12 flex-1 bg-white" />
      <BottomNavigationFloor />
      <div className="h-14 w-4/12 flex-1 bg-white" />
      <button
        onClick={onClick}
        className={cn(homeButtonVariants(), 'home-button')}
      >
        <Home />
      </button>
    </div>
  )
}

export { BottomNavigationBar, bottomNavigationBarVariants }
