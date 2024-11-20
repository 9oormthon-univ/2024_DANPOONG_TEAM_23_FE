import { cn } from '~/utils/cn'

function Profile({
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      className={cn(
        'size-16 rounded-xl border border-gray-50 bg-white',
        className,
      )}
      {...props}
    />
  )
}

export { Profile }
