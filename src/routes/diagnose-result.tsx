import { DiagnoseMarkdownRenderer } from '~/components/diagnose-markdown-renderer'
import { HospitalCard } from '~/components/hospital-card'

const mdxSource = `
## 증상 요약
- **오른쪽 허리 통증**: 통증 강도 7/10, 쑤시는 양상
- **다리 방사통**: 오른쪽 다리 뒤쪽 전체 저림, 통증 강도 5/10
- **악화 요인**: 물건을 주을 때
- **통증 양상**: 허리 통증은 간헐적, 다리 저림은 지속적

### 예상되는 질환
노인분의 증상으로 미루어 볼 때, **'요추 추간판 탈출증(허리 디스크)'**일 가능성이 높습니다.
- 디스크가 밀려나와 신경을 압박하여 발생
- 허리 통증과 함께 다리로 저림이 나타남
- 특정 자세나 동작에서 증상 악화

## 해결 방법

### 1. 즉각적인 조치
- **자세 교정**
  - 허리를 구부리는 동작 피하기
  - 물건을 들 때는 무릎을 굽혀서 들기
- **적절한 휴식**
  - 딱딱한 바닥에 누워 휴식
  - 무릎 아래 배게를 받쳐주기

### 2. 병원 진료
**방문해야 할 병원**:
- 정형외과
- 신경외과
- 척추 전문병원

**필요한 검사**:
- X-ray
- MRI 검사
- 신경전도 검사(필요시)

### 3. 치료 방법
1. **보존적 치료**
   - 물리치료
   - 약물치료
   - 운동치료

2. **적극적 치료** (증상이 심한 경우)
   - 신경차단술
   - 수술적 치료

## ⚠️ 주의사항
다음과 같은 증상이 나타나면 **즉시 응급실**을 방문하셔야 합니다:
1. 다리에 심한 마비가 오는 경우
2. 대소변 조절이 어려워지는 경우
3. 참을 수 없는 극심한 통증이 발생하는 경우

### 일상생활 관리
- 바른 자세 유지하기
- 갑작스러운 움직임 피하기
- 무거운 물건 들지 않기
- 적절한 체중 유지하기

*더 자세한 설명이나 궁금하신 점이 있으시다면 말씀해 주세요.*
`

function DiagnoseResult() {
  return (
    <>
      <h2 className="mt-5 text-lg font-bold">
        이런 이유로
        <br />
        불편하실 수 있어요.
      </h2>
      <DiagnoseMarkdownRenderer mdxSource={mdxSource} />
      <p className="pt-2.5 text-xs font-medium text-gray-300">
        AI가 실수를 할 수도 있어요!
        <br />
        정확한 진단은 병원을 방문해 주세요!
      </p>
      <h2 className="pt-10 text-lg font-bold">이 병원이 딱 맞을 것 같아요.</h2>
      <div className="mt-5 flex flex-col gap-2.5">
        <HospitalCard name="냠냠병원" category="이비인후과" rating={4.3} />
        <HospitalCard name="냠냠병원" category="이비인후과" rating={4.3} />
        <HospitalCard name="냠냠병원" category="이비인후과" rating={4.3} />
      </div>
    </>
  )
}

export { DiagnoseResult }
