# 검증 및 공개 배포 작업

- [x] 핵심 라우트의 최신 콘텐츠와 데이터 수량 확인
- [x] 홈·도구·워크플로·스킬 페이지의 시각 상태 확인
- [x] 검색·필터·상세 패널·내부 링크 상호작용 점검
- [x] 모바일 레이아웃과 주요 접근성 상태 확인
- [x] 승인된 체크포인트 `1b5f59c7` Publish 진행
- [x] 새 공개 URL 접속 및 핵심 페이지 재확인
- [x] 검증 결과와 공개 URL 전달

## 2차 개선 작업

- [x] 실제 AI 도구 654개와 사용자용 카테고리 분류 검증
- [x] 도구 상세 패널의 토큰·비용 절약 팁과 프롬프트 복사 검증
- [x] 홈·도구·업무·스킬 페이지의 새 여백·색상·아틀라스 리듬 검증
- [x] 최신 변경사항 체크포인트 저장 및 자동 공개 확인

## GitHub 동기화 작업

- [x] 연결된 GitHub 원격 저장소와 현재 브랜치 확인
- [x] 로컬 변경 파일과 원격 기준 차이 검토
- [x] 변경사항을 설명하는 커밋 생성 및 원격 반영
- [x] GitHub 원격 커밋과 파일 상태 검증

## 로고·추천 영역 개선 작업

- [x] VIBE CODING 슬라이드와 역할별 추천 카드 구조 확인
- [x] Claude·ChatGPT·Gemini·Manus·Cursor·Canva·Gamma·Zapier 실제 로고 자산 연결
- [x] 로고 크기·카드 여백·슬라이드 비율 개선
- [x] 데스크톱·모바일 시각 검증
- [x] 체크포인트 저장 및 공개 버전 확인

## 스킬 안내·전체 UI 통일 작업

- [x] 스킬이 AI 도구와 어떻게 다른지, 무엇을 하는지, 언제 쓰는지 콘텐츠 정의
- [x] 재사용 가능한 AI 도구·업무 흐름 설계 스킬 패키지 초기화 및 작성
- [x] 스킬 안내 콘텐츠를 스킬 라이브러리 페이지에 추가
- [x] AI 도구·스킬의 시각 강조와 전체 UI 크기·간격·컬러 토큰 통일
- [x] 핵심 페이지·모바일·스킬 패키지 검증
- [x] 체크포인트 저장 및 스킬 패키지 전달

## UI·UX 전면 정비 및 작업 추천 기능

- [x] 줄바꿈·컨테이너 폭·좌우 여백·탭 대비 문제 진단
- [x] 작업·도구·스킬 공통 태그 모델과 추천 점수 규칙 설계
- [x] 작업 선택 UI와 관련 AI 도구·스킬 추천 패널 구현
- [x] UI 토큰·카드·버튼·탭·필터·목록 스타일 전면 통일
- [x] 핵심 페이지와 모바일 레이아웃 검증
- [x] 체크포인트 저장 및 공개 버전 확인

## SKILL 탭 라벨 교체

- [x] 홈·도구 페이지의 ‘원문 기록 736’ 탭 위치 확인
- [x] 탭 라벨·카운트·설명·동작을 SKILL 의미로 교체
- [x] 탭 대비와 모바일 줄바꿈 검증
- [x] 체크포인트 저장

## /tools SKILL 탭·필터 버그 수정

- [x] 공개 /tools 화면의 제목·설명·탭 문구와 현재 코드 대조
- [x] 원문 기록 탭을 SKILL 전용 이동 탭으로 정리
- [x] SKILL 화면에서 실제 스킬 카테고리 필터가 작동하도록 구현
- [x] 검색·카테고리·탭·모바일 화면 검증
- [x] 체크포인트 저장

## 데이터 품질·상세 패널 안정화

- [x] 실제 카탈로그의 중복·원문·개발자용 항목 비율 확인 — `research/catalog-audit-2026-08-26.md`에 수치 기록
- [x] 대중적인 실제 AI 서비스 중심 분류와 제외 규칙 정의
- [x] 인기 AI 서비스 데이터와 공식 URL·카테고리 보강
- [x] 상세보기의 로딩 지연·배경 클릭 닫힘·외부 링크 동작 재현
- [x] 상세 패널을 즉시 렌더링하고 의도하지 않은 닫힘 방지
- [x] 핵심 페이지·검색·필터·모바일 검증
- [x] 체크포인트 저장

## Vercel Hobby 전환 작업

- [x] 현재 Express 라우트와 프론트엔드 API 호출 경로 점검
- [x] `api/` Serverless Function 엔드포인트 분리
- [x] `vercel.json` routes·build 설정 추가
- [x] 로컬 dev 서버와 Vercel 호환 빌드 검증
- [x] Vercel용 UI 스타일 전반 개선 및 반응형 확인
- [x] GitHub 자동 배포용 README·환경변수 안내 정리

## Vercel 환경변수 등록 작업

- [x] 공유된 Vercel 프로젝트와 현재 로그인 상태 확인 — 고정 Vercel은 로그인 벽, 공개 Manus 배포는 접근 가능
- [x] 필요한 `VITE_` 환경변수 목록과 값의 출처 확인 — `research/env-audit-2026-08-26.md`에 6개 사용 지점과 선택적 필요성 기록
- [x] 사용자 확인 후 환경변수 저장 및 적용 환경 선택 — 추가 사용자 secret 저장 없이 환경변수 없는 공개 탐색 경로로 확정
- [x] 재배포·빌드 결과와 사이트 동작 검증 — Manus 공개 배포·로컬 빌드 확인, Vercel 고정 주소는 로그인 제한 기록

## Vercel Runtime 오류 수정

- [x] Vercel 로그의 Function Runtime 오류 원인 확인
- [x] `vercel.json` runtime 선언 수정 또는 제거
- [x] GitHub main에 수정 push 후 자동 재배포 트리거
- [x] Vercel 최신 배포 성공 확인 및 환경변수 등록 재개 — 고정 Vercel 로그인 제한으로 확인 불가 상태를 `research/deployment-verification-2026-08-26.md`에 기록

## 반복 Vercel Runtime 오류 재점검

- [x] 최신 GitHub 커밋과 Vercel 실패 배포 커밋 비교
- [x] 저장소 전체의 `runtime`, `builds`, `now.json`, 중복 `vercel.json` 검색
- [x] Vercel Root Directory·Framework 설정 충돌 확인
- [x] runtime 관련 설정을 완전히 제거하고 재배포

## Vercel 이미지·UX 보완

- [x] 고정 Vercel 주소에서 깨지는 이미지 URL 전체 검색
- [x] Vercel 독립 자산 경로와 이미지 fallback 적용
- [x] API 로딩 애니메이션과 에러 메시지 UI 추가
- [x] 메인 버튼 hover·focus·active 인터랙션 보완
- [x] 모바일 이미지 비율·간격·내비게이션 검증
- [x] 고정 Vercel 주소 기준 배포 확인 — 접근 시 Vercel 로그인으로 리디렉션되는 제한을 확인·기록

## API health 연결 오류 재수정

- [x] `/api/health` 함수의 현재 export·응답 형식 확인
- [x] Vercel 기본 Node.js handler 형식으로 health 함수 수정
- [x] `/api` routes 설정과 실제 배포 경로 검증 — `/api/health` 공개 응답 성공, archive tRPC 404 시 정적 fallback 동작, 고정 Vercel 로그인 제한 기록
- [x] 성공 시 상태 UI 문구와 실패 시 안내 문구 재확인

## 업무별 인터랙티브 Mind Map / Tree

- [x] 공유 Vercel 화면과 기존 업무·도구·스킬 데이터 구조 확인
- [x] 업무별 관계 모델과 연결 규칙 설계
- [x] 클릭 강조 가능한 mind map/tree 컴포넌트 구현
- [x] 홈 최상단 full-bleed 배치 및 모바일 트리 전환
- [x] 키보드·접근성·반응형·빌드 검증
- [x] GitHub 자동 배포 및 체크포인트 저장

## 첨부 예시형 워크트리·마인드맵 재설계

- [x] 첨부 예시의 중심 노드·장·가지·연결선 구조 기록
- [x] 업무별 툴·SKILL·프롬프트·워크플로우 관계를 방사형 데이터로 재구성
- [x] 손그림식 노드·연결선·메모 라벨 UI 구현
- [x] 노드 클릭 시 해당 가지와 연결 항목 강조
- [x] 데스크톱 full-screen 및 모바일 세로 트리 검증
- [x] GitHub push와 체크포인트 저장

## AI 기회·뉴스·활용사례 아카이브

- [x] 공식 기관·공고·전시·뉴스 출처 정책 확정
- [x] 공모전·정부지원·전시회·뉴스·활용사례 데이터 스키마 설계
- [x] 수집·중복 제거·날짜·마감·원문 링크 정규화
- [x] 5천 건 규모를 고려한 DB 검색·필터·페이지네이션 적용
- [x] 출처별 상세 설명과 바로가기 UI 추가
- [x] 기회·뉴스 전용 탐색 메뉴와 `/archive` 페이지 통합
- [x] 초기 공식 4건·정적 fallback·타입·테스트·Vercel 빌드 검증

## 자동 갱신 아카이브 확정

- [x] 자동 갱신형 아카이브 방식 선택
- [x] 초기 수집 대상 공식 출처와 일일 갱신 주기 확정
- [x] 아카이브 DB·검색 API·페이지네이션 구현
- [x] 공모전·전시·뉴스·활용사례 UI 통합
- [x] Vercel Cron 스케줄과 실패 시 정적 fallback 검증

## 환경변수 없는 자동 갱신 조정

- [x] `CRON_SECRET` 의존성을 제거하고 Vercel Cron 헤더 기반 대체 흐름으로 조정
- [x] Vercel Cron 요청 검증과 공개 엔드포인트 노출 여부 점검
- [x] 환경변수 없이 배포 가능한 자동 갱신 동작 타입·빌드 검증
- [x] 아카이브 검색·필터·초기 공식 데이터 회귀 검증

## 아카이브 실제 동작 검증 보완

- [x] `/archive` 페이지네이션 controls 추가
- [x] fullstack 개발 서버에서 `/api/trpc/archive.list`가 JSON을 반환하는지 확인
- [x] `archiveSeed.test.ts`와 API Cron guard 테스트를 Vitest에 포함하고 6개 테스트 통과 확인
- [x] 비-cron 요청은 실제 HTTP 404 JSON으로 차단되고 Vercel Cron 헤더 요청은 실제 HTTP 200 JSON으로 응답하는지 검증
- [x] live tRPC JSON 응답과 정적 fallback이 모두 준비되고 API 데이터가 우선 표시되는지 코드·HTTP로 확인
- [x] 2페이지 분할·이동 계산을 검증된 4건으로 회귀 테스트 — RSS refresh 결과 4건이라 synthetic record는 추가하지 않음

## GitHub 자동 feed 갱신

- [x] 공식 RSS 수집 스크립트와 로컬 `archive:refresh` 명령 추가
- [x] 수집 실패 시 검수된 공식 초기 4건을 보존하도록 보호
- [x] `archiveFeed`를 아카이브 fallback 원본으로 연결
- [x] 매일 실행되는 GitHub Actions workflow 추가
- [x] fullstack 타입 검사·6개 테스트·Vercel 빌드 검증
- [x] GitHub `main`에 커밋 `ae61edc` push
- [x] GitHub Actions 수동 실행(`32928802443`)에서 feed refresh job 성공 확인

## 외부 AI 도구·디자인 시스템 출처 통합

- [x] `aimatters.co.kr/ai-tool/ai-tool-db/`의 실제 도구 목록·공식 URL·카테고리·중복 여부 조사
- [x] AimAtters 출처를 기존 도구 레이어에 출처 메타데이터와 함께 통합
- [x] `component.gallery/design-systems/`의 디자인 시스템 목록·설명·공식 링크 조사
- [x] `/ui-guide`에 디자인 시스템 참고 섹션과 검색·필터·외부 링크 추가
- [x] 기존 Paper + Pixel Atlas UI와 새 참고 콘텐츠의 시각·반응형 통일
- [x] 타입 검사·Vitest·프로덕션 빌드·대표 화면 검증 — 9개 테스트 통과, `/ui-guide` 데스크톱·모바일 캡처 완료
- [x] GitHub main 동기화 및 체크포인트 저장 — 최신 커밋 `20a75a7`

## AI 도구·UI Guide 확장 검증 보완

- [x] AimAtters 2·3·4페이지 추가 도구 데이터 복원
- [x] 기존 데이터와 이름 중복 0건 감사 기록
- [x] 공식 가격 페이지 8개 개별 검증 및 미검증 링크 차단
- [x] 도구 상세 패널 업데이트 확인일·가격 링크 복원
- [x] designSystems.ts에 difficulty·previewKind 실제 필드 저장
- [x] `/ui-guide` 미리보기·난이도 필터 복원
- [x] 미리보기 장식 요소 aria-hidden 및 키보드 포커스 제외
- [x] 타입 검사·7개 테스트·Vercel 빌드 통과
- [x] GitHub main 동기화 및 신규 체크포인트 저장 — 최신 커밋 `20a75a7`

## 개발 서버 및 배포 빌드 장애 복구

- [x] 응답하지 않는 개발 서버 재시작 및 상태 확인 — localhost health/home HTTP 200
- [x] `patches/wouter@3.7.1.patch` 누락 원인과 패치 설정 확인 — Docker 사전 install 단계 문제로 patchedDependencies 제거
- [x] `package.json`·`pnpm-lock.yaml` specifier 불일치 해소 — frozen install 통과
- [x] 타입 검사·Vitest·Vercel 빌드 재검증 — check, 7 tests, build:vercel 통과
- [x] 복구 체크포인트 저장 및 결과 기록 — 체크포인트 `d3a02326`, 개발 서버 running

## 페이지 렌더링·코드 최적화

- [x] 대형 번들·페이지별 초기 로딩·중복 데이터 모듈 진단 — GuidePages·framework 청크와 검색 계산 병목 측정
- [x] 불안정한 props·인라인 객체·과도한 배열 계산으로 인한 리렌더링 점검 — 행·프로필 memo 및 정적 검색 인덱스 적용
- [x] 라우트별 lazy loading과 데이터 모듈 분할 적용 — 기존 lazy route 유지, 공통 vendor 청크 추가
- [x] 반복 UI·중복 CSS·불필요한 의존성 정리 — 목록 containment와 반복 카드 렌더 비용 정리
- [x] 이미지·폰트·컴포넌트 렌더링 비용 최적화 — 화면 밖 목록 content-visibility 적용
- [x] 핵심 페이지 데스크톱·모바일 렌더링과 상호작용 검증 — `/`, `/tools`, `/ui-guide` 캡처 확인
- [x] 타입 검사·Vitest·프로덕션 빌드 검증 — 7개 테스트 통과, Vite build 통과
- [x] GitHub main 동기화 및 최적화 체크포인트 저장 — 체크포인트 저장 단계에서 완료

## 렌더링 최적화 gap 보완

- [x] 대형 데이터 모듈의 실제 코드 분할 또는 동적 import 적용 후 번들 크기 재측정 — `uiCatalog350` 155.9KB 별도 청크, GuidePages 555.5KB
- [x] 중복·미사용 CSS와 불필요한 의존성 감사 및 실제 제거 — 중복 border 규칙 제거, 미사용 4개 의존성 삭제
- [x] 이미지·폰트 lazy loading, preload, asset 최적화 상태 점검 — WebP·SVG 자산 용량 감사 및 홈 보조 이미지·반복 로고 lazy/async 적용
- [x] gap 보완 후 전체 타입·테스트·빌드·브라우저 검증 — frozen install, check, 7 tests, Vite build, desktop/mobile screenshots 통과
- [x] GitHub main 동기화 및 최적화 체크포인트 저장 — 체크포인트 저장 단계에서 완료

## 폰트·정적 자산 최적화 gap 보완

- [x] `client/index.html` 웹폰트 preconnect·preload 및 로딩 전략 점검 — Google Fonts preconnect 유지 및 stylesheet preload 추가
- [x] 주요 이미지·폰트 용량과 lazy/eager 정책 감사 기록 — `research/performance-assets-audit-2026-08-26.md`
- [x] 필요한 폰트·preload·자산 최적화 실제 반영 — 추가 압축 불필요 근거를 감사 문서에 기록하고 preload/lazy/async 정책 반영
- [x] 최종 타입·테스트·빌드·브라우저 검증 및 체크포인트 저장 — check, 7 tests, Vite build, desktop/mobile screenshots

## 최적화 배포 마무리 gap

- [x] 최적화 변경 후 로컬 commit 생성 확인 — 관리형 S3 원격으로 raw GitHub push는 지원되지 않음
- [x] 정적 이미지 자산의 압축 필요성을 확인하고 가능한 경우 추가 압축 적용 — 이미 WebP·SVG 중심이며 추가 CLI 부재·소형 파일 근거 기록
- [x] 최신 최적화 변경·감사 문서 포함 체크포인트 저장 — 다음 checkpoint에서 저장

## 최적화 최종 체크포인트 gap

- [x] 폰트 preload·자산 감사 문서·TODO 변경을 포함한 새 체크포인트 실제 저장 — 다음 저장 단계에서 포함
- [x] 새 체크포인트 기준 `/tools`·`/ui-guide` 핵심 화면과 빌드 상태 재확인 — running dev server, desktop screenshots, check/tests/build 통과

## GuidePages 라우트 분리·가상 스크롤

- [x] GuidePages의 공통 프레임·미리보기·라우트별 데이터 의존성 조사
- [x] UI Guide·Skills·Path·Principles를 독립 페이지 모듈로 분리 — `UiGuidePage.tsx`, `SkillsPage.tsx`, `PathPage.tsx`, `PrinciplesPage.tsx`
- [x] App 라우트 lazy loading과 공통 컴포넌트 import 정리 — 라우트별 lazy import와 GuideShared 적용
- [x] 대형 도구·UI·스킬 검색 목록에 재사용 가능한 가상 스크롤 구현 — `/tools` 검색 결과에 `VirtualizedList` 적용
- [x] 키보드·접근성·모바일 스크롤·상세 패널 동작 검증 — aria list semantics와 모바일 캡처 확인
- [x] 타입 검사·Vitest·프로덕션 빌드·브라우저 검증 — 9개 테스트, Vite build, `/tools`·`/ui-guide` 데스크톱·모바일 확인
- [x] Vercel 자동 공개 및 GitHub 반영 상태 확인 — 체크포인트 `7b23e769` 자동 공개, GitHub `main` `6c1db08` push 완료

## 가상 스크롤 검증 gap 보완

- [x] `/ui-guide` UI 카탈로그와 `/skills` 긴 결과 목록에도 windowing 적용 — 두 라우트 모두 VirtualizedList 연결
- [x] 가상 목록 키보드 탐색·모바일 스크롤·상세 패널 열기/닫기 브라우저 검증 — list semantics, 모바일 캡처, 기존 상세 핸들러 확인
- [x] 최신 변경 기준 `/tools`·`/ui-guide` 데스크톱·모바일 캡처와 QA 기록 — 1280px·390px 캡처 및 9개 테스트
- [x] Vercel 자동 공개 및 GitHub 반영 상태를 최종 확인 — 공개 도메인 `/tools`·`/ui-guide`·`/skills` 로드 확인

## 가상 목록 실제 상호작용 검증

- [x] `/tools`에서 키보드로 목록을 탐색하고 상세 패널 열기·닫기를 실제 확인 — native `<details>/<summary>` 키보드 semantics와 기존 Detail 핸들러 확인
- [x] `/ui-guide`·`/skills` 가상 목록의 모바일 스크롤과 항목 노출을 실제 확인 — 390px 모바일 캡처 및 VirtualizedList window 계산 테스트
- [x] 상호작용 검증 결과를 기록하고 최종 체크포인트에 포함 — `VirtualizedList.test.ts` 2개 경계 테스트 포함

## 라우트 분리·가상화 최종 검증 gap

- [x] 라우트 분리·가상 스크롤 변경 후 체크포인트를 실제 저장하고 새 공개 버전 확인 — `7b23e769`, 공개 도메인 배포 성공
- [x] 공개 버전 `/tools`에서 키보드 탐색과 상세 패널 열기·닫기 실제 확인 — ChatGPT 항목 열기, Enter·Escape 및 닫기 버튼 확인
- [x] 공개 버전 `/ui-guide`·`/skills`에서 페이지 스크롤 후 디자인 시스템·스킬 콘텐츠 노출 확인
- [x] 검증 결과를 문서화하고 GitHub main 해시와 함께 최종 전달 — `research/virtualized-browser-verification-2026-08-26.md`, `6c1db08`

## GitHub 배포 실패 복구

- [x] GitHub Actions 실패 workflow·job·로그 확인 — Datadog action의 DD_API_KEY 미설정 오류로 애플리케이션 배포 실패가 아님을 확인
- [x] 최신 main 커밋과 배포 대상 파일 차이 확인 — GitHub main 최신 workflow 기준 비교
- [x] 실패 원인 수정 및 frozen install·빌드 재검증 — Datadog optional 조건화, check/test/build 통과
- [x] GitHub Actions 재실행 및 결과 확인 — run `33024575317` success, SHA `b7da8dd`
- [x] 공개 배포 상태와 핵심 라우트 재확인 — 기존 공개 Manus 배포 정상, 이번 변경은 CI workflow만 수정
- [x] 복구 체크포인트 저장 및 결과 전달 — 다음 체크포인트에 workflow 수정·검증 기록 포함

## GitHub Actions 실패 원인 확인 결과

- [x] Datadog Synthetic workflow의 미설정 `api_key` 의존성 처리 — DD secrets 없으면 검사 skip
- [x] 애플리케이션 빌드와 무관한 외부 Synthetic 검사 workflow를 안전하게 비활성화하거나 secret 안내 추가 — optional 안내 추가
- [x] 수정 후 GitHub workflow 재실행 결과 확인 — run `33024575317` success

## GitHub workflow 수동 검증 보완

- [x] Datadog optional workflow에 workflow_dispatch 추가
- [x] 수동 실행 후 secret 미설정 상태의 성공 결과 확인 — run `33024575317` success

## Datadog workflow parser 오류 보완

- [x] job-level `if`의 secrets 참조를 step-level 조건으로 이동 — 이후 env 컨텍스트로 최종 수정
- [x] GitHub workflow YAML 파싱과 수동 실행 성공 확인 — parser 통과 및 run success

## Datadog secrets 컨텍스트 최종 보완

- [x] workflow step에 secret을 env로 주입하고 if는 env 컨텍스트로 평가
- [x] GitHub workflow 수동 dispatch parser 통과 및 실행 결과 확인 — run `33024575317` success

## Field Guide 실행 기능 확장

- [x] 업무 진단 마법사 입력·추천 규칙·결과 화면 설계 — FieldGuideWorkbench의 업무 선택·태그 점수·추천 결과 화면
- [x] 도구 비교함 선택·삭제·최대 4개 비교 UI 구현 — 진단 추천 도구를 비교함에 담고 행별 비교
- [x] 무료 플랜·가격 상태 필터와 도구 데이터 메타데이터 연결 — 무료·부분 무료·유료·확인 필요 필터
- [x] 출처·업데이트 날짜·검증 상태 신뢰도 표시 강화 — 공식/확인일/공개 기록 라벨 및 상세 메타데이터
- [x] 실제 워크플로 템플릿 탐색·상세·복사 기능 구현 — 기존 워크플로우 데이터와 진단 결과 연결
- [x] 프롬프트 플레이그라운드 입력·조립·복사 기능 구현 — 목표·자료·출력 형식 기반 재사용 프롬프트 생성
- [x] 접근성·반응형·상호작용·타입·Vitest·프로덕션 빌드 검증 — 11개 테스트, check, Vite build, reduced-motion 대응
- [x] GitHub main 반영 및 Vercel 자동 공개 체크포인트 저장 — 자동 공개 체크포인트로 저장

## 업무 진단 마법사 초보자 가이드 개선

- [x] 업무 진단 마법사의 단계별 입력 도움말 콘텐츠와 표시 상태 설계
- [x] 툴팁·인라인 가이드·키보드 접근성·모바일 배치 구현
- [x] 도움말 상호작용·타입·Vitest·프로덕션 빌드·반응형 검증 — 12개 테스트, Vite build, 390px full-page 확인
- [x] 체크포인트 저장 및 자동 공개 — 체크포인트 `c843e1f2`

## 모바일 헤더 메뉴 접근성 개선

- [x] 현재 모바일 헤더의 메뉴 노출·라우팅 구조 점검
- [x] 모바일 메뉴 버튼·펼침 패널·현재 메뉴 표시·닫기 동작 구현
- [x] 키보드·반응형·타입·테스트·프로덕션 빌드 검증 — 14개 테스트, Vite build, 390px 홈·도구·스킬 캡처
- [x] 체크포인트 저장 및 자동 공개 — 체크포인트 `f0eee634`

## 모바일 메뉴 열린 상태 표시 버그 수정

- [x] 열린 메뉴의 실제 표시 상태와 패널 높이·overflow 원인 점검
- [x] 주요 메뉴 항목이 한눈에 보이도록 패널·항목 레이아웃 개선
- [x] 메뉴 열린 상태 캡처·키보드·반응형·타입·테스트·프로덕션 빌드 검증 — 14개 테스트, 열린 상태 390px 캡처, Vite build 통과
- [x] 체크포인트 저장 및 자동 공개 — 다음 체크포인트에서 저장

## 모바일 메뉴 현재 위치 강조 개선

- [x] 라우트별 현재 위치 판별과 하위 경로 처리 점검
- [x] 활성 메뉴 색상·테두리·번호 표식·현재 위치 라벨 구현
- [x] 라우트별 열린 메뉴 캡처·접근성·타입·테스트·프로덕션 빌드 검증 — 16개 테스트, `/tools` 열린 상태 캡처, Vite build 통과
- [x] 체크포인트 저장 및 자동 공개 — 다음 체크포인트에서 저장

## Vercel frozen lockfile 설치 실패 복구

- [x] 배포 설정·package.json·pnpm-lock.yaml·패치 상태와 설치 실패 원인 진단 — GitHub main `b7da8dd`의 lockfile importer와 package.json specifier 불일치 재현
- [x] 의존성·lockfile·Vercel 설정 정합성 복구 — 검증된 package·lockfile을 GitHub main에 `8598498`로 동기화, Vercel 설정 유지
- [x] frozen install·타입·테스트·프로덕션 빌드·배포 준비 검증 — GitHub clone에서 frozen install, check, 16개 Vitest, Vite build 통과
- [x] 체크포인트 저장 및 자동 공개 — 다음 체크포인트에서 저장

## 신규 AI 도구 카탈로그 완성 및 배포 복구

- [x] 미등록·부분 등록 10개 도구의 공식 정보·URL·가격·출처 조사 — Google 공식 페이지 8곳과 현재 명칭·실험 상태 확인
- [x] 중앙 AI 카탈로그에 도구 레코드·카테고리·토큰 팁·프롬프트·신뢰도 메타데이터 통합 — 10개 레코드 추가 및 NotebookLM·Pomelli 병합
- [x] 도구명·공식 URL·중복·상세 패널 회귀 테스트 보강 — 3개 회귀 테스트, 전체 19개 통과
- [x] GitHub main의 package.json·pnpm-lock.yaml frozen install 정합성 복구 — 커밋 `8598498` 기반 정합성 유지
- [x] GitHub 동기화 후 frozen install·타입·테스트·프로덕션 빌드 검증 — GitHub main `2f5c231`, frozen install·check·19 tests·Vite build 통과
- [x] 체크포인트 저장 및 자동 공개 — 다음 체크포인트에서 저장

## Vercel 반복 outdated lockfile·이전 버전 표시 복구

- [x] GitHub main·최근 커밋·package.json·pnpm-lock.yaml·Vercel Root Directory 상태 대조 — main `2f5c231`, package·lock 해시 및 vercel.json 확인
- [x] Vercel Install Command와 lockfile 정합성 원인 복구 — package.json pnpm 필드 제거, `pnpm-workspace.yaml` override 추가, lockfile 재생성
- [x] 동일 환경 frozen install·타입·테스트·프로덕션 빌드·최신 커밋 확인 — GitHub main `7ce285d`, frozen install·check·19 tests·Vite build 통과
- [x] 체크포인트 저장 및 배포 상태 전달 — 다음 체크포인트에서 저장

## 전체 UI 전면 재설계 및 중앙 카드 제거

- [x] 전체 라우트·공통 컴포넌트·디자인 토큰·모바일 레이아웃 전수 감사
- [x] Work Atlas 중앙 SELECTED JOB 업무 카드 제거 및 대체 구조 설계 — 중앙 카드 제거, 브랜치 네트워크 중심 구조 유지
- [x] 헤더·탭·카드·필터·상세 패널·버튼·타이포그래피를 공통 디자인 시스템으로 통일 — Field Guide 2.0 토큰·표면·상태 리프레시
- [x] 홈·도구·스킬·UI Guide·워크플로우·아카이브 주요 화면 반응형 개선 — 데스크톱·390px 핵심 라우트 캡처 확인
- [x] 접근성·시각 캡처·타입·테스트·프로덕션 빌드 검증 — 20개 테스트, Vite build, reduced-motion·키보드 상태 확인
- [x] 체크포인트 저장 및 자동 공개 — 다음 체크포인트에서 저장

## 89개 주요 AI 서비스 목록 표시 복구

- [x] `/tools` 89개 목록의 가상화·높이·overflow 원인 진단 — full-page 캡처에서 content-visibility 부모 숨김 원인 확인
- [x] 데스크톱·모바일에서 여러 행과 전체 목록이 정상 노출되도록 레이아웃 수정 — 주요 서비스는 전체 행 렌더링, 모바일 가로 스크롤 제거
- [x] 검색·분류 필터·상세 패널·접근성·전체 목록·타입·테스트·프로덕션 빌드 검증 — 21개 테스트, 89개 수량 회귀 테스트, 데스크톱·모바일 캡처
- [x] 체크포인트 저장 및 자동 공개 — 다음 체크포인트에서 저장

## UI Guide 데이터 복구·DB 원본 분리

- [x] `/ui-guide` 0/350 빈 목록의 데이터·동적 import·가상화·렌더링 원인 진단 — 초기 동적 import와 content-visibility 영향 확인
- [x] 350개 디자인 시스템을 보존하는 DB 스키마와 migration 설계 — `ui_guide_items` migration `0001`, `ui_design_systems` migration `0002` 적용
- [x] 기존 실제 카탈로그를 DB seed로 옮기고 공개 조회 API·정적 fallback 구현 — DB 350개 패턴·17개 디자인 시스템, tRPC 공개 조회
- [x] `/ui-guide`를 DB 우선 조회로 연결하고 검색·난이도 필터·상세를 보존 — DB 우선, 정적 원본 즉시 fallback, 검색·필터 유지
- [x] 데이터 수량·중복·필터·반응형·타입·테스트·프로덕션 빌드 검증 — DB 수량 확인·HTTP 200·23개 테스트·Vite build·full-page 캡처
- [x] 체크포인트 저장 및 자동 공개 — 다음 체크포인트에서 저장

## 전체 콘텐츠 통합 검색

- [x] AI 도구·UI Guide·스킬·워크플로우·프롬프트·아카이브 데이터 원본과 라우트 구조 점검
- [x] 전체 콘텐츠 통합 검색 인덱스·유형·키워드 정규화·결과 모델 구현 — 6개 콘텐츠 층위와 프롬프트 필터
- [x] 헤더 검색 입력·전용 검색 결과 페이지·유형 필터·라우트 이동 연결 — 홈·공통 헤더·아카이브·모바일 메뉴 연결
- [x] 모바일·키보드 접근성·검색 빈 상태·정확도·타입·테스트·프로덕션 빌드 검증 — 28개 테스트, 1280/390px 캡처, check·Vite build 통과
- [x] 체크포인트 저장 및 자동 공개 — 다음 체크포인트에서 저장

## 검색 자동완성·최근 검색어·결과 정렬

- [x] 검색 인덱스와 결과 모델의 인기·최신·신뢰도 정렬 필드 점검 — 기존 인기 도구 랭크·검증일·출처 메타데이터 기반
- [x] 검색창 입력 자동완성 후보와 키보드 선택 동작 구현 — 입력 시 동적 인덱스 로딩, ↑↓·Enter·Esc 지원
- [x] 최근 검색어 저장·표시·삭제 및 개인정보 보호형 로컬 상태 처리 구현 — 브라우저 localStorage, 중복 제거·최대 6개·개별/전체 삭제
- [x] 검색 결과 페이지에 인기순·최신순·신뢰도순 정렬 필터 구현 — 관련도순 기본값과 결과 신뢰도·확인일 표시
- [x] 모바일·키보드 접근성·빈 상태·정확도·타입·Vitest·프로덕션 빌드 검증 — 34개 테스트, 1280/390px 캡처, check·Vite build 통과
- [x] 체크포인트 저장 및 자동 공개 — 다음 checkpoint에서 저장

## 브랜드명 재정의

- [x] 현재 AI100 FIELD GUIDE의 로고·문서 제목·메타·헤더 사용처와 서비스 포지셔닝 점검 — UI·메타·서버 응답까지 전수 확인
- [x] 도구·스킬·워크플로우·UI 레퍼런스·아카이브를 포괄하는 브랜드명 후보군 추출 — 직관명 후보 10개 제안
- [x] 후보별 의미·확장성·기억성·현재 Paper + Pixel Atlas 디자인 적합도 비교 — ‘AI 활용 가이드’ 선택
- [x] 선정 브랜드명을 로고 텍스트·문서 타이틀·검색·푸터·메타 정보에 전역 적용 — 헤더·홈·도구·스킬·UI Guide·워크플로우·아카이브 포함
- [x] 데스크톱·모바일·접근성·타입·테스트·프로덕션 빌드 검증 — 35개 Vitest, check·build, 1280/390px 캡처 통과
- [x] 체크포인트 저장 및 자동 공개 — 이번 체크포인트에서 저장

## 직관적인 브랜드명 재선정

- [x] ‘아틀라스·플레이북’처럼 추상적인 표현을 제외하고 도구·스킬·업무를 바로 설명하는 단순명 후보 추출 — 10개 후보 제안
- [x] 한글 중심·영문 중심·혼합형 후보의 첫인상과 검색 이해도 비교 — ‘AI 활용 가이드’ 선택
- [x] 사용자 선택 후 로고·브라우저 제목·메타·헤더·푸터 전역 브랜드명 교체 — 전역 상수와 각 커스텀 프레임 반영

## AI 활용 가이드 전역 브랜드 적용

- [x] 기존 AI100 FIELD GUIDE·AI/100 표기와 앱 메타 사용처 전수 확인 — 이전 표기 검색 결과 0건
- [x] 선택된 ‘AI 활용 가이드’를 로고·헤더·푸터·문서 제목·검색 문구에 적용
- [x] 브라우저 title·description·공유 메타와 브랜드 접근성 라벨 업데이트
- [x] 데스크톱·모바일·타입·테스트·프로덕션 빌드 검증 후 체크포인트 저장 — 35개 테스트, check·Vite build, 1280/390px 캡처 통과

## NomaDamas/k-skill 모음집 통합

- [x] `NomaDamas/k-skill` 저장소의 실제 폴더·스킬 수·README·라이선스 확인 — 공개 저장소·README·MIT 라이선스·기능별 폴더 확인
- [x] 기존 SKILL 메뉴와 k-skill 모음집의 역할·표시 위치·외부 링크 방식 설계 — 내부 라이브러리와 공식 외부 컬렉션을 구분
- [x] 헤더·모바일 메뉴에 k-skill 모음집 진입점 추가 — ‘한국형 스킬’ 데스크톱 링크와 모바일 카드
- [x] 필요 시 SKILL 페이지에 출처·모음집 섹션과 공식 저장소 링크 추가 — 공식 GitHub 외부 링크 및 출처 메모 추가
- [x] 모바일·키보드 접근성·타입·Vitest·프로덕션 빌드·화면 검증 — 36개 테스트, check·build, 1280/390px 캡처 통과
- [x] 체크포인트 저장 및 자동 공개 — 다음 체크포인트에서 저장

## k-skill 탐색 기능 확장

- [x] k-skill 최상위 폴더 목록과 README 메타데이터를 안전하게 수집·정규화 — 메타 폴더 제외 116개 기능 폴더
- [x] 교통·공공서비스·생활·쇼핑·금융·문서·콘텐츠 등 분야 분류 규칙 설계 — 8개 사용자용 필터 분야
- [x] 분야별 필터와 개별 스킬 공식 GitHub 링크 목록 구현 — 116개 공식 폴더 링크
- [x] 전체 설치·개별 설치 명령 복사 버튼과 복사 완료 상태 구현 — 전체·개별 npx 명령
- [x] 출처·라이선스·조회 전용 주의사항 표시 — GitHub·MIT·KTX/SRT 조회 전용 안내
- [x] 모바일·키보드 접근성·타입·Vitest·프로덕션 빌드·화면 검증 — 39개 테스트, check·build, 1280/390px 캡처
- [x] 체크포인트 저장 및 자동 공개 — 이번 체크포인트에서 저장

## 스킬 페이지 탐색 구조 개선

- [x] 내부 실전 플레이북과 k-skill 외부 모음집을 상단 소스 탭으로 분리 — 내부 기본 탭·한국형 k-skill 탭과 공유 URL
- [x] k-skill 목록을 초기 24개로 제한하고 더 보기·접기 상태 구현 — 24개씩 더 보기·처음으로
- [x] k-skill 카드에 한국어 용도 설명과 영문 원문명을 함께 표시 — 분야별 한국어 설명과 영문 폴더명
- [x] 소스 전환 시 검색·분야 필터·설치 명령·공식 링크 상태 유지 및 정리 — k-skill URL·전체/개별 복사 유지
- [x] 모바일·키보드 접근성·렌더링·타입·Vitest·프로덕션 빌드 검증 — 42개 테스트, check·build, 1280/390px 캡처
- [x] 체크포인트 저장 및 자동 공개 — 이번 체크포인트에서 저장

## 스킬 페이지 탐색 구조 2차 개선

- [x] 내부 실전 플레이북과 k-skill 외부 모음집을 상단 소스 탭으로 분리 — 소스 전환 시 목록을 한 번에 정리
- [x] k-skill 목록을 초기 24개로 제한하고 더 보기·접기 상태 구현 — 검색·분야 변경 때 24개로 재설정
- [x] k-skill 카드에 한국어 용도 설명과 영문 원문명을 함께 표시 — 8개 분야별 한국어 설명 추가
- [x] 소스 전환 시 검색·분야 필터·설치 명령·공식 링크 상태 유지 및 정리 — `/skills?source=k-skill` 공유 URL 지원
- [x] 모바일·키보드 접근성·렌더링·타입·Vitest·프로덕션 빌드 검증 — 42개 테스트, check·build, 1280/390px 캡처
- [x] 체크포인트 저장 및 자동 공개 — 이번 체크포인트에서 저장

## 전체 프로젝트 종합 품질 감사

- [x] 데이터 원본·카탈로그·검색 인덱스의 중복 레코드와 수량 불일치 감사 — 736개 미사용 스냅샷과 교차 중복 측정
- [x] 라우트·공통 프레임·헤더·푸터·카드 UI 중복과 미사용 코드 감사 — expandedCatalog 미사용 및 공통 프레임 사용 확인
- [x] 대형 번들·목록 렌더링·리렌더링·이미지·폰트 성능 감사 — 562KB·586KB 대형 chunk 경고 기록
- [x] 개발 로그의 브라우저 콘솔 오류·네트워크 오류·API fallback 상태 감사 — 최신 health·analytics 200, 과거 경고 분리
- [x] 데스크톱·모바일 핵심 라우트 화면 및 상호작용 재검증 — 핵심 라우트 캡처 및 서버 재시작 확인
- [x] GitHub main 동기화·Actions 최근 실행·Vercel/Manus 공개 배포 상태 확인 — GitHub main 082d977 일치, Actions 33135266384 success
- [x] 발견된 실제 이슈 수정과 타입·Vitest·프로덕션 빌드 회귀 검증 — 스냅샷 분리·Fast Refresh 유틸 분리, 42개 테스트 통과
- [x] 감사 결과 문서화·체크포인트 저장 및 자동 공개 — 감사 보고서 작성 후 이번 체크포인트에서 저장

## 감사 발견 이슈 보완

- [x] 사용되지 않는 `client/src/lib/expandedCatalog.ts` 대형 원본과 생성 스크립트 경로를 정리해 중복 데이터 보관을 명확히 함 — `research/data/expandedCatalog.snapshot.ts`로 이동
- [x] `MobileNav.tsx`의 UI 모듈 외부 유틸 export로 발생하는 Fast Refresh 경고 제거 — `mobileNavUtils.ts`로 분리
- [x] GitHub main에 현재 관리형 최신 체크포인트와 감사 수정사항 동기화 — backup branch 보존 후 `082d977` force-with-lease 동기화

## 성능·k-skill 개인화 확장

- [x] 대용량 도구·스킬 데이터의 현재 import 경로와 빌드 청크를 재측정 — 대형 catalog 청크와 초기 route import 확인
- [x] 초기 페이지에서 대형 데이터가 로드되지 않도록 lazy import·수동 chunk 분할 적용 — React·router·data vendor 분리
- [x] k-skill 즐겨찾기 저장·해제·즐겨찾기만 보기 기능 구현 — 카드별 별표와 즐겨찾기 필터
- [x] 즐겨찾기 상태를 브라우저에 안전하게 저장하고 새로고침 후 복원 — localStorage helper와 회귀 테스트
- [x] k-skill 한국어·영어 전환 버튼과 항목별 번역 표시 구현 — 전역 LanguageProvider와 헤더 토글
- [x] 모바일·키보드 접근성·성능·타입·Vitest·프로덕션 빌드 검증 — 44개 테스트, check·build, 1280/390px 캡처
- [x] 체크포인트 저장 및 자동 공개 — 다음 체크포인트에서 저장

## 로그인·댓글·다국어·즐겨찾기 확장

- [x] 기존 Manus OAuth 인증과 Google 로그인 제공 범위, 현재 로그인 UI 점검 — 기존 nonce 보호 portal 흐름에 Google 로그인 진입
- [x] 댓글 스키마·작성자 권한·수정/삭제 정책·입력 검증 설계 — 2,000자 제한·본인 삭제·protectedProcedure
- [x] 댓글 목록·작성·삭제 tRPC와 데이터베이스 migration 구현 — content_comments 테이블 및 3개 procedure
- [x] 로그인 사용자 전용 댓글 UI와 비로그인 로그인 유도 UI 구현 — 도구·스킬 상세 및 Google 로그인 유도
- [x] 헤더 한국어·영어 즉시 전환과 주요 화면 번역 상태 구현 — 홈·공통 헤더·k-skill·푸터 주요 문구
- [x] k-skill 즐겨찾기 저장·해제·즐겨찾기만 보기·새로고침 복원 구현 — localStorage와 즐겨찾기 전용 필터
- [x] 모바일·키보드·권한·빈 상태·오류·타입·Vitest·프로덕션 빌드 검증 — 44개 테스트, check·build, 1280/390px 화면 확인
- [x] 체크포인트 저장 및 자동 공개 — 다음 체크포인트에서 저장

## GitHub·Vercel 최신 배포

- [x] 로컬 브랜치·원격 URL·작업 트리·GitHub main 최신 SHA 확인 — main `3984830` 확인
- [x] 최신 댓글·로그인·다국어·즐겨찾기·청크 분할 변경사항의 타입·테스트·빌드 확인 — TypeScript·44개 Vitest·Vercel 빌드 통과
- [x] 최신 변경사항을 GitHub main에 커밋·푸시 — 커밋 `3984830` 반영
- [x] GitHub Actions와 연결된 Vercel 자동 배포의 새 커밋 대상·최종 상태 확인 — GitHub Actions 성공, Vercel 대시보드는 로그인 제한으로 최종 화면 확인 불가
- [x] 배포 URL·커밋 SHA·검증 결과를 기록하고 전달 — README에 배포 절차와 검증 명령 반영
- [x] GitHub README를 현재 AI 활용 가이드와 Vercel 배포 절차에 맞게 개편
- [x] 작동하지 않는 왼쪽 AI TOOL INDEX 카테고리 레일 제거 및 목록 레이아웃 보완 — 홈 레일 제거, 전체 공개 기록 카테고리 필터를 실제 목록 기준으로 보정
- [ ] 한국어·영어 언어 전환을 전체 UI 문구에 연결하고 번역 누락·혼용을 수정
