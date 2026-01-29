# CrossLit - ACM CHI 2026

웹페이지: **Connecting Visual and Textual Sensemaking for Literature Review**

## 개발 환경 설정

```bash
cd site
npm install
npm run dev
```

개발 서버가 `http://localhost:5173`에서 실행됩니다.

## 빌드

```bash
cd site
npm run build
```

빌드 결과물은 `crosslit/` 폴더에 생성됩니다:
- `index.html`
- `assets/` (CSS, JS)
- 미디어 파일들 (GIF, PNG, MP4)

## GitHub Pages 배포

1. GitHub에 새 repository 생성 (예: `crosslit-chi2026`)
2. `crosslit/` 폴더의 내용을 repository에 push
3. Repository Settings > Pages에서:
   - Source: Deploy from a branch
   - Branch: main / root
4. 몇 분 후 `https://[username].github.io/crosslit-chi2026/`에서 접속 가능

## 구조

```
crosslit/
├── site/                    # 소스 코드
│   ├── src/
│   │   ├── App.tsx         # 메인 컴포넌트
│   │   ├── main.tsx        # Entry point
│   │   └── index.css       # Tailwind CSS
│   ├── package.json
│   ├── vite.config.ts
│   └── tailwind.config.js
├── index.html              # 빌드된 HTML
├── assets/                 # 빌드된 CSS/JS
└── *.{gif,png,mp4}        # 미디어 파일
```

## 수정하기

컨텐츠를 수정하려면 `site/src/App.tsx`를 편집한 후 다시 빌드하세요.
