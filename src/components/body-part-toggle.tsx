import { Toggle } from '~/components/ui/toggle'

import { cn } from '~/utils/cn'
import { BODYPARTS } from '~/constants/bodyparts'

export interface BodyPartToggleProps
  extends React.ComponentPropsWithoutRef<typeof Toggle> {
  part?: (typeof BODYPARTS)[keyof typeof BODYPARTS]
}

function BodyPartToggle({
  part,
  className,
  children,
  ...props
}: BodyPartToggleProps) {
  return (
    <Toggle
      className={cn(
        'aspect-square size-full flex-col justify-center rounded-md bg-white font-bold shadow-2',
        className,
      )}
      {...props}
    >
      {part && (
        <>
          <img src={part.image} alt={part.title} className="size-12" />
          <span>{part.title}</span>
        </>
      )}
      {children}
    </Toggle>
  )
}

export { BodyPartToggle, BODYPARTS }
