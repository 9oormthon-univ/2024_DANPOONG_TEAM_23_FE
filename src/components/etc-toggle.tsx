import { useState } from 'react'

import { Toggle, ToggleCheckIcon } from '~/components/ui/toggle'

function EtcToggle({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) {
  const [isEtcSelected, setIsEtcSelected] = useState(false)

  return (
    <Toggle
      pressed={isEtcSelected}
      onPressedChange={(pressed) => {
        setIsEtcSelected(pressed)
        onChange('')
      }}
      className="group w-full items-start"
    >
      <ToggleCheckIcon className="mt-1.5" />
      <div className="flex w-full flex-col items-start gap-2">
        <span>기타</span>
        <input
          type="text"
          className="hidden w-full border-b border-primary-700 bg-transparent text-xs font-medium placeholder:text-gray-500 group-data-[state=on]:block"
          placeholder="자유롭게 작성해주세요."
          value={value}
          onChange={(e) => {
            onChange(e.target.value)
          }}
          onClick={(e) => {
            e.preventDefault()
          }}
          onKeyUp={(e) => {
            e.preventDefault()
          }}
        />
      </div>
    </Toggle>
  )
}

export { EtcToggle }
