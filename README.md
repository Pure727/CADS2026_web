# ROUTINE Download Web

고등학생을 위한 Android 통합 스케줄러 `ROUTINE`의 소개 및 APK 다운로드 웹사이트입니다.

## 주요 구성

- 앱과 동일한 라벤더 기반 반응형 UI
- 시간표, 캘린더, 알림, 클라우드 백업 기능 소개
- 실제 앱 스크린샷 갤러리
- Android APK 설치 안내와 SHA-256 무결성 정보
- GitHub Release의 최신 APK로 연결되는 다운로드 버튼
- 라이트·다크 모드 및 접근성 대응

## 개발

Node.js 22.13 이상이 필요합니다.

```bash
npm install
npm run dev
```

## 검증

```bash
npm test
npm run lint
```

## APK 배포

웹의 다운로드 버튼은 아래 GitHub Release 파일을 가리킵니다.

`ROUTINE-v1.0-20260729.apk`

현재 v1.0 APK는 Android 디버그 인증서로 서명된 테스트 배포판입니다. 정식 공개 전에는 동일한 파일명으로 릴리스 키 서명 APK를 등록하는 것을 권장합니다.
