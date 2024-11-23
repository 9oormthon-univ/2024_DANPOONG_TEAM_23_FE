import { cn } from '~/utils/cn'

function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-4 rounded-sm bg-white px-3 py-4',
        className,
      )}
      {...props}
    />
  )
}

export { Card }
