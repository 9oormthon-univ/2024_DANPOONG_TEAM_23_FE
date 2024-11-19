'use client'

import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva, type VariantProps } from 'cva'

import { cn } from '~/utils/cn'
import ToggleCheck from '~/assets/svgs/toggle-check.svg?react'

const toggleVariants = cva({
  base: 'inline-flex group items-center rounded-sm text-lg font-medium text-gray-800 ring-offset-background transition-colors hover:bg-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-primary-200 gap-2',
  variants: {
    variant: {
      default: 'bg-gray-50',
    },
    size: {
      default: 'p-3',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {}

function Toggle({ className, variant, size, children, ...props }: ToggleProps) {
  return (
    <TogglePrimitive.Root
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    >
      <ToggleCheck className="text-gray-100 transition-colors group-hover:text-primary-300 group-data-[state=on]:text-primary-500 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0" />
      {children}
    </TogglePrimitive.Root>
  )
}

export { Toggle, toggleVariants }
