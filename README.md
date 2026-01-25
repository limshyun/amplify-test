# amplify-test

React + TypeScript + Vite 기반의 프로젝트입니다. Storybook과 Vitest를 통한 컴포넌트 개발 및 테스트를 지원합니다.

## 기술 스택

### 프론트엔드
- **React** 19.2.0 - UI 라이브러리
- **TypeScript** 5.9.3 - 타입 안정성을 위한 정적 타입 시스템
- **Vite** 7.2.4 - 빠른 개발 서버 및 빌드 도구

### 개발 도구
- **Storybook** 10.1.11 - 컴포넌트 개발 및 문서화
- **Vitest** 4.0.17 - 단위 테스트 프레임워크
- **Playwright** 1.57.0 - 브라우저 자동화 및 E2E 테스트
- **ESLint** 9.39.1 - 코드 품질 및 스타일 검사

### 주요 플러그인 및 도구
- `@vitejs/plugin-react-swc` - SWC 기반의 React Fast Refresh
- `@storybook/addon-vitest` - Storybook 테스트 통합
- `@storybook/addon-a11y` - 접근성 검사
- `@vitest/browser-playwright` - 브라우저 기반 테스트

## 설치 방법

이 프로젝트는 pnpm을 패키지 매니저로 사용합니다.

### 사전 요구사항
- Node.js (최신 LTS 버전 권장)
- pnpm

### pnpm 설치
```bash
npm install -g pnpm
```

### 프로젝트 의존성 설치
```bash
pnpm install
```

## 실행 방법

### 개발 서버 실행
개발 모드로 애플리케이션을 실행합니다 (HMR 지원).
```bash
pnpm dev
```

개발 서버는 기본적으로 `http://localhost:5173`에서 실행됩니다.

### 프로덕션 빌드
```bash
pnpm build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

### 프로덕션 빌드 미리보기
```bash
pnpm preview
```

### Storybook 실행
컴포넌트 개발 환경을 실행합니다.
```bash
pnpm storybook
```

Storybook은 기본적으로 `http://localhost:6006`에서 실행됩니다.

### Storybook 빌드
```bash
pnpm build-storybook
```

### 린트 검사
```bash
pnpm lint
```

## React + Vite

이 프로젝트는 HMR(Hot Module Replacement)과 일부 ESLint 규칙을 갖춘 React + Vite 템플릿을 기반으로 합니다.

### 사용 중인 플러그인
- **@vitejs/plugin-react-swc** - [SWC](https://swc.rs/)를 사용한 Fast Refresh 제공

### React Compiler
React Compiler는 현재 SWC와 호환되지 않습니다. 진행 상황은 [이 이슈](https://github.com/vitejs/vite-plugin-react/issues/428)에서 확인할 수 있습니다.

## ESLint 설정 확장

프로덕션 애플리케이션을 개발하는 경우, 타입 인식 린트 규칙을 활성화하도록 설정을 업데이트하는 것을 권장합니다:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

React 전용 린트 규칙을 위해 [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x)와 [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)을 설치할 수도 있습니다:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
