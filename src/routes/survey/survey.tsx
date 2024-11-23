import { useFunnel } from '@use-funnel/react-router-dom'

import { InputBirthDate } from './input-birth-date'
import { SelectGender } from './select-gender'
import { SelectMedicalConditions } from './select-medical-conditions'

function Survey() {
  const funnel = useFunnel<{
    inputBirthDate: { birthDate?: string }
    selectGender: { gender?: string; birthDate: string }
    selectMedicalConditions: {
      medicalConditions?: string
      gender: string
      birthDate: string
    }
  }>({
    id: 'survey',
    initial: {
      step: 'inputBirthDate',
      context: {},
    },
  })

  return (
    <funnel.Render
      inputBirthDate={({ history }) => (
        <InputBirthDate
          onNext={(birthDate) => {
            void history.push('selectGender', { birthDate })
          }}
        />
      )}
      selectGender={({ history }) => (
        <SelectGender
          onNext={(gender) => {
            void history.push('selectMedicalConditions', { gender })
          }}
        />
      )}
      selectMedicalConditions={({ context }) => (
        <SelectMedicalConditions
          birthDate={context.birthDate}
          gender={context.gender}
        />
      )}
    />
  )
}

export { Survey }
