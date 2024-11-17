# 의사손주

> 노인 의료 디지털 소외 문제를 해결합니다.  
> 내 손 안의 AI 주치의, 의사손주

## 기술 스택

![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white)
![Tanstack Query](https://img.shields.io/badge/Tanstack%20Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white)
![Kakao API](https://img.shields.io/badge/Kakao%20API-FFCD00?style=for-the-badge&logo=Kakao&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white)

## 커밋 메시지 컨벤션

- **Conventional Commit**을 따릅니다.

  ```md
  <타입>[적용 범위(선택 사항)]: <설명>

  [본문(선택 사항)]

  [꼬리말(선택 사항)]
  ```

  - 타입은 다음을 따릅니다.
    - build
    - chore
    - ci
    - docs
    - feat
    - fix
    - perf
    - refactor
    - revert
    - style
    - test

## 코드 작성 컨벤션

- 컴포넌트는 `function` 키워드를 사용해 함수 선언으로 작성합니다.
- 그 외 유틸 함수 등은 `const` 키워드로 함수 표현식으로 작성합니다.
- 컴포넌트는 `default export`가 아닌 `named export`로 파일 끝에 묶어서 내보냅니다.

  ```ts
  interface Props {}

  function A() {} // 컴포넌트

  function B() {} // 컴포넌트

  const utilA = () => {} // util 함수

  export { type Props, A, B, utilA }
  ```

## 프로젝트 구조

```bash
.
├── node_modules
├── public
└── src
    ├── assets
    ├── components
    ├── routes
    ├── styles
    └── utils
```
