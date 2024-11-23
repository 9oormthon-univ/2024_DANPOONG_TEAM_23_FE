import Male from '~/assets/svgs/male.svg?react'
import Female from '~/assets/svgs/female.svg?react'
import { ToggleGroup, ToggleGroupItem } from '~/components/ui/toggle-group'

function GenderToggle({ gender }: { gender: 'MALE' | 'FEMALE' }) {
  return (
    <ToggleGroupItem
      value={gender}
      className="flex flex-col items-center gap-2.5 rounded-sm bg-gray-50 px-9 pb-4 pt-7 text-lg font-bold transition-colors data-[state=on]:bg-primary-300 data-[state=on]:text-white"
    >
      {gender === 'MALE' ? (
        <>
          <Male />
          <span>남성</span>
        </>
      ) : (
        <>
          <Female />
          <span>여성</span>
        </>
      )}
    </ToggleGroupItem>
  )
}

function GenderToggleGroup({
  onValueChange,
}: {
  onValueChange?: (value: string) => void
}) {
  return (
    <ToggleGroup type="single" className="gap-5" onValueChange={onValueChange}>
      <GenderToggle gender="MALE" />
      <GenderToggle gender="FEMALE" />
    </ToggleGroup>
  )
}

export { GenderToggleGroup }
