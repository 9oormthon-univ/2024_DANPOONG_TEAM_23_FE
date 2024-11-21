import { useState } from 'react'
import { createFunnelSteps, useFunnel } from '@use-funnel/react-router-dom'

import { BODYPARTS, BodyPartToggle } from '~/components/body-part-toggle'
import { Button } from '~/components/ui/button'
import {
  ToggleCheckIcon,
  ToggleGroup,
  ToggleGroupItem,
} from '~/components/ui/toggle-group'
import { EtcToggle } from '~/components/etc-toggle'

function Step1({
  onNext,
}: {
  onNext: (bodypart: keyof typeof BODYPARTS) => void
}) {
  return (
    <>
      <h2 className="mt-12 text-center text-lg font-medium text-gray-800">
        불편하신 곳을{' '}
        <span className="font-bold text-primary-500">한 가지만</span>
        <br />
        골라주세요!
      </h2>
      <div className="mt-12 grid w-full grid-cols-3 gap-5">
        {Object.entries(BODYPARTS).map(([key, part]) => (
          <BodyPartToggle
            key={key}
            part={part}
            onClick={() => {
              onNext(key as keyof typeof BODYPARTS)
            }}
          />
        ))}
        <BodyPartToggle>
          <span>기타</span>
        </BodyPartToggle>
      </div>
    </>
  )
}

function Step2({
  part,
  onNext,
}: {
  part: keyof typeof BODYPARTS | undefined
  onNext: (detail: string) => void
}) {
  return (
    part && (
      <>
        <div className="mt-9 flex flex-col items-center">
          <img
            src={BODYPARTS[part].image}
            alt={BODYPARTS[part].title}
            className="size-20"
          />
          <span className="text-lg font-bold text-gray-800">
            {BODYPARTS[part].title}
          </span>
        </div>
        <h2 className="mt-6 text-center text-lg font-medium text-gray-800">
          아픈 곳에 대해 <br />
          <span className="font-bold text-primary-500">
            조금 더 자세히
          </span>{' '}
          말해주세요.
        </h2>
        <div className="mt-12 grid w-full grid-cols-3 gap-5">
          {Object.entries(BODYPARTS[part].parts).map(([key, part]) => (
            <BodyPartToggle
              key={key}
              onClick={() => {
                onNext(part)
              }}
            >
              {part}
            </BodyPartToggle>
          ))}
          <BodyPartToggle>
            <span>기타</span>
          </BodyPartToggle>
        </div>
      </>
    )
  )
}

function Step3({ onNext }: { onNext: (feeling: string[]) => void }) {
  const options = [
    '찌르는 듯한 느낌',
    '뻐근한 느낌',
    '맥박이 뛰는 듯한 느낌',
    '저리는 느낌',
    '화끈거리는 느낌',
    '당기는 느낌',
  ]

  const [selected, setSelected] = useState<string[]>([])
  const [etc, setEtc] = useState('')

  return (
    <>
      <h2 className="mt-12 text-center text-lg font-medium text-gray-800">
        <span className="font-bold text-primary-500">어떤 느낌</span>의
        불편함인가요?
        <br />
        <span className="font-bold text-primary-500">모두</span> 골라주세요!
      </h2>
      <ToggleGroup
        type="multiple"
        className="mt-12 flex flex-1 flex-col justify-start gap-2.5 pb-12"
        value={selected}
        onValueChange={setSelected}
      >
        {options.map((option) => (
          <ToggleGroupItem value={option} key={option} className="w-full">
            <ToggleCheckIcon />
            {option}
          </ToggleGroupItem>
        ))}
        <EtcToggle value={etc} onChange={setEtc} />
      </ToggleGroup>
      <div className="sticky bottom-12 w-full max-w-screen-sm">
        <Button
          className="w-full"
          disabled={!selected.length && etc.length === 0}
          onClick={() => {
            onNext(selected.slice().concat(etc))
          }}
        >
          다음
        </Button>
      </div>
    </>
  )
}

function Step4({ onNext }: { onNext: (level: string) => void }) {
  const options = ['약간 불편함', '보통 불편함', '매우 불편함']

  return (
    <>
      <h2 className="mt-12 text-center text-lg font-medium text-gray-800">
        <span className="font-bold text-primary-500">불편함의 정도</span>는
        <br />
        어느 정도인가요?
      </h2>
      <ToggleGroup
        type="single"
        className="mt-12 flex flex-col gap-2.5"
        onValueChange={(value) => {
          onNext(value)
        }}
      >
        {options.map((option) => (
          <ToggleGroupItem value={option} key={option} className="w-full">
            <ToggleCheckIcon />
            {option}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </>
  )
}

function Step5({ onNext }: { onNext: (date: string) => void }) {
  const options = [
    '1년 넘음',
    '6개월 ~ 11개월 전',
    '한 달 ~ 6개월',
    '한 달',
    '일주일 이내',
  ]

  return (
    <>
      <h2 className="mt-12 text-center text-lg font-medium text-gray-800">
        <span className="font-bold text-primary-500">언제부터</span> 불편함을
        <br />
        느끼셨나요?
      </h2>
      <ToggleGroup
        type="single"
        className="mt-12 flex flex-col gap-2.5"
        onValueChange={(value) => {
          onNext(value)
        }}
      >
        {options.map((option) => (
          <ToggleGroupItem value={option} key={option} className="w-full">
            <ToggleCheckIcon />
            {option}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </>
  )
}

function Step6({ onNext }: { onNext: (frequency: string) => void }) {
  const options = [
    '하루에 3번 이상',
    '하루에 한 번',
    '일주일에 3번',
    '일주일에 한 번',
    '한 달에 한 번',
  ]

  return (
    <>
      <h2 className="mt-12 text-center text-lg font-medium text-gray-800">
        <span className="font-bold text-primary-500">얼마나 자주</span>
        <br />
        불편함을 느끼시나요?
      </h2>
      <ToggleGroup
        type="single"
        className="mt-12 flex flex-col gap-2.5"
        onValueChange={(value) => {
          onNext(value)
        }}
      >
        {options.map((option) => (
          <ToggleGroupItem value={option} key={option} className="w-full">
            <ToggleCheckIcon />
            {option}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </>
  )
}

function Step7({ onNext }: { onNext: (complex: string[]) => void }) {
  const options = [
    '메스꺼움',
    '어지러움',
    '시야가 흐림',
    '구토',
    '열이 남',
    '숨쉬기 어려움',
    '기타',
    '없음',
  ]

  const [selected, setSelected] = useState<string[]>([])

  return (
    <>
      <h2 className="mt-12 text-center text-lg font-medium text-gray-800">
        다음 중{' '}
        <span className="font-bold text-primary-500">함께 나타나는</span>
        <br />
        <span className="font-bold text-primary-500">증상을 모두</span>{' '}
        선택해주세요.
      </h2>
      <div className="flex-1 pb-12">
        <ToggleGroup
          type="multiple"
          className="mt-12 grid w-full grid-cols-3 gap-5"
          value={selected}
          onValueChange={setSelected}
        >
          {options.map((option) => (
            <ToggleGroupItem
              value={option}
              key={option}
              className="aspect-square size-full flex-col justify-center rounded-md bg-white font-bold shadow-2"
            >
              {option}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <div className="sticky bottom-12 w-full max-w-screen-sm">
        <Button
          className="w-full"
          disabled={!selected.length}
          onClick={() => {
            onNext(selected)
          }}
        >
          다음
        </Button>
      </div>
    </>
  )
}

interface FormState {
  bodypart?: keyof typeof BODYPARTS
  detail?: string
  feeling?: string[]
  level?: string
  date?: string
  frequency?: string
  complex?: string[]
}
const steps = createFunnelSteps<FormState>()
  .extends('부위선택')
  .extends('세부부위선택')
  .extends('증상선택')
  .extends('증상정도')
  .extends('날짜선택')
  .extends('빈도선택')
  .extends('복합증상선택')
  .extends('완료')
  .build()

function HealthDiary() {
  const funnel = useFunnel({
    id: 'health-diary',
    steps: steps,
    initial: {
      step: '부위선택',
      context: {},
    },
  })

  return (
    <funnel.Render
      부위선택={({ history }) => (
        <Step1
          onNext={(bodypart: keyof typeof BODYPARTS) =>
            history.push('세부부위선택', { bodypart })
          }
        />
      )}
      세부부위선택={({ context, history }) => (
        <Step2
          part={context.bodypart}
          onNext={(detail: string) => history.push('증상선택', { detail })}
        />
      )}
      증상선택={({ history }) => (
        <Step3
          onNext={(feeling: string[]) => history.push('증상정도', { feeling })}
        />
      )}
      증상정도={({ history }) => (
        <Step4
          onNext={(level: string) => history.push('날짜선택', { level })}
        />
      )}
      날짜선택={({ history }) => (
        <Step5 onNext={(date: string) => history.push('빈도선택', { date })} />
      )}
      빈도선택={({ history }) => (
        <Step6
          onNext={(frequency: string) =>
            history.push('복합증상선택', { frequency })
          }
        />
      )}
      복합증상선택={({ history }) => (
        <Step7
          onNext={(complex: string[]) => history.push('완료', { complex })}
        />
      )}
      완료={({ context }) => <>{JSON.stringify(context)}</>}
    />
  )
}

export { HealthDiary }
