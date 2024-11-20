import Male from '~/assets/svgs/male.svg?react'
import Female from '~/assets/svgs/female.svg?react'
import { ToggleGroup, ToggleGroupItem } from '~/components/ui/toggle-group'

function GenderToggle({ gender }: { gender: 'male' | 'female' }) {
  return (
    <ToggleGroupItem
      value={gender}
      className="flex flex-col items-center gap-2.5 rounded-sm bg-white px-9 pb-4 pt-7 text-lg font-bold transition-colors data-[state=on]:bg-primary-300 data-[state=on]:text-white"
    >
      {gender === 'male' ? (
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

function GenderToggleGroup() {
  return (
    <ToggleGroup type="single" className="gap-5">
      <GenderToggle gender="male" />
      <GenderToggle gender="female" />
    </ToggleGroup>
  )
}

export { GenderToggleGroup }
