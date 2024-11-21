import { cva, type VariantProps } from 'cva'

import { cn } from '~/utils/cn'

const buttonVariants = cva({
  base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-lg font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-gray-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  variants: {
    variant: {
      default: 'bg-primary-500 text-white',
      outline: 'bg-white text-primary-500 border border-gray-100',
    },
    size: {
      default: 'px-7 py-3.5',
      sm: 'px-4 py-2.5 rounded-xl text-xs font-medium',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
