// 350개 홈페이지 UI 위치·기능 카탈로그. 패턴 참고용이며 프로젝트에 맞게 조정합니다.
import { withBilingualFields } from "./bilingualCatalog";

export type UiCatalogEntry = { id: number; category: string; location: string; name: string; purpose: string; pattern: string; example: string; tools: string };
const baseUiCatalog350: UiCatalogEntry[] = [
  {
    "id": 1,
    "category": "브랜드·GNB",
    "location": "상단 내비게이션",
    "name": "로고 잠금 영역",
    "purpose": "로고 잠금 영역을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "상단 내비게이션에서 로고 잠금 영역을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Framer · Stitch"
  },
  {
    "id": 2,
    "category": "브랜드·GNB",
    "location": "상단 내비게이션",
    "name": "제품명 워드마크",
    "purpose": "제품명 워드마크을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "상단 내비게이션에서 제품명 워드마크을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Framer · Stitch"
  },
  {
    "id": 3,
    "category": "브랜드·GNB",
    "location": "상단 내비게이션",
    "name": "주요 메뉴 그룹",
    "purpose": "주요 메뉴 그룹을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "상단 내비게이션에서 주요 메뉴 그룹을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Framer · Stitch"
  },
  {
    "id": 4,
    "category": "브랜드·GNB",
    "location": "상단 내비게이션",
    "name": "메뉴 활성 표시",
    "purpose": "메뉴 활성 표시을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "상단 내비게이션에서 메뉴 활성 표시을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Framer · Stitch"
  },
  {
    "id": 5,
    "category": "브랜드·GNB",
    "location": "상단 내비게이션",
    "name": "드롭다운 메뉴",
    "purpose": "드롭다운 메뉴을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "상단 내비게이션에서 드롭다운 메뉴을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Framer · Stitch"
  },
  {
    "id": 6,
    "category": "브랜드·GNB",
    "location": "상단 내비게이션",
    "name": "메가 메뉴",
    "purpose": "메가 메뉴을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "상단 내비게이션에서 메가 메뉴을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Framer · Stitch"
  },
  {
    "id": 7,
    "category": "브랜드·GNB",
    "location": "상단 내비게이션",
    "name": "제품 전환 메뉴",
    "purpose": "제품 전환 메뉴을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "상단 내비게이션에서 제품 전환 메뉴을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Framer · Stitch"
  },
  {
    "id": 8,
    "category": "브랜드·GNB",
    "location": "상단 내비게이션",
    "name": "언어 선택",
    "purpose": "언어 선택을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "상단 내비게이션에서 언어 선택을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Framer · Stitch"
  },
  {
    "id": 9,
    "category": "브랜드·GNB",
    "location": "상단 내비게이션",
    "name": "테마 전환",
    "purpose": "테마 전환을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "상단 내비게이션에서 테마 전환을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Framer · Stitch"
  },
  {
    "id": 10,
    "category": "브랜드·GNB",
    "location": "상단 내비게이션",
    "name": "로그인·회원가입 영역",
    "purpose": "로그인·회원가입 영역을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "상단 내비게이션에서 로그인·회원가입 영역을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Framer · Stitch"
  },
  {
    "id": 11,
    "category": "히어로·첫인상",
    "location": "첫 화면",
    "name": "히어로 헤드라인",
    "purpose": "히어로 헤드라인을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "첫 화면에서 히어로 헤드라인을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · Midjourney · Framer"
  },
  {
    "id": 12,
    "category": "히어로·첫인상",
    "location": "첫 화면",
    "name": "히어로 서브카피",
    "purpose": "히어로 서브카피을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "첫 화면에서 히어로 서브카피을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · Midjourney · Framer"
  },
  {
    "id": 13,
    "category": "히어로·첫인상",
    "location": "첫 화면",
    "name": "주요 CTA",
    "purpose": "주요 CTA을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "첫 화면에서 주요 CTA을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · Midjourney · Framer"
  },
  {
    "id": 14,
    "category": "히어로·첫인상",
    "location": "첫 화면",
    "name": "보조 CTA",
    "purpose": "보조 CTA을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "첫 화면에서 보조 CTA을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · Midjourney · Framer"
  },
  {
    "id": 15,
    "category": "히어로·첫인상",
    "location": "첫 화면",
    "name": "히어로 이미지",
    "purpose": "히어로 이미지을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "첫 화면에서 히어로 이미지을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · Midjourney · Framer"
  },
  {
    "id": 16,
    "category": "히어로·첫인상",
    "location": "첫 화면",
    "name": "제품 데모 영상",
    "purpose": "제품 데모 영상을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "첫 화면에서 제품 데모 영상을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · Midjourney · Framer"
  },
  {
    "id": 17,
    "category": "히어로·첫인상",
    "location": "첫 화면",
    "name": "신뢰 배지",
    "purpose": "신뢰 배지을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "첫 화면에서 신뢰 배지을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · Midjourney · Framer"
  },
  {
    "id": 18,
    "category": "히어로·첫인상",
    "location": "첫 화면",
    "name": "고객사 로고 띠",
    "purpose": "고객사 로고 띠을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "첫 화면에서 고객사 로고 띠을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · Midjourney · Framer"
  },
  {
    "id": 19,
    "category": "히어로·첫인상",
    "location": "첫 화면",
    "name": "히어로 통계",
    "purpose": "히어로 통계을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "첫 화면에서 히어로 통계을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · Midjourney · Framer"
  },
  {
    "id": 20,
    "category": "히어로·첫인상",
    "location": "첫 화면",
    "name": "스크롤 유도",
    "purpose": "스크롤 유도을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "첫 화면에서 스크롤 유도을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · Midjourney · Framer"
  },
  {
    "id": 21,
    "category": "검색·발견",
    "location": "찾기 경험",
    "name": "통합 검색창",
    "purpose": "통합 검색창을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "찾기 경험에서 통합 검색창을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · v0 · Cursor"
  },
  {
    "id": 22,
    "category": "검색·발견",
    "location": "찾기 경험",
    "name": "자동완성",
    "purpose": "자동완성을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "찾기 경험에서 자동완성을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · v0 · Cursor"
  },
  {
    "id": 23,
    "category": "검색·발견",
    "location": "찾기 경험",
    "name": "검색 결과 미리보기",
    "purpose": "검색 결과 미리보기을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "찾기 경험에서 검색 결과 미리보기을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · v0 · Cursor"
  },
  {
    "id": 24,
    "category": "검색·발견",
    "location": "찾기 경험",
    "name": "최근 검색어",
    "purpose": "최근 검색어을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "찾기 경험에서 최근 검색어을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · v0 · Cursor"
  },
  {
    "id": 25,
    "category": "검색·발견",
    "location": "찾기 경험",
    "name": "인기 검색어",
    "purpose": "인기 검색어을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "찾기 경험에서 인기 검색어을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · v0 · Cursor"
  },
  {
    "id": 26,
    "category": "검색·발견",
    "location": "찾기 경험",
    "name": "검색 필터",
    "purpose": "검색 필터을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "찾기 경험에서 검색 필터을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · v0 · Cursor"
  },
  {
    "id": 27,
    "category": "검색·발견",
    "location": "찾기 경험",
    "name": "검색 정렬",
    "purpose": "검색 정렬을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "찾기 경험에서 검색 정렬을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · v0 · Cursor"
  },
  {
    "id": 28,
    "category": "검색·발견",
    "location": "찾기 경험",
    "name": "검색 결과 없음",
    "purpose": "검색 결과 없음을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "찾기 경험에서 검색 결과 없음을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · v0 · Cursor"
  },
  {
    "id": 29,
    "category": "검색·발견",
    "location": "찾기 경험",
    "name": "음성 검색",
    "purpose": "음성 검색을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "찾기 경험에서 음성 검색을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · v0 · Cursor"
  },
  {
    "id": 30,
    "category": "검색·발견",
    "location": "찾기 경험",
    "name": "검색 단축키 안내",
    "purpose": "검색 단축키 안내을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "찾기 경험에서 검색 단축키 안내을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · v0 · Cursor"
  },
  {
    "id": 31,
    "category": "카테고리·탐색",
    "location": "콘텐츠 탐색",
    "name": "카테고리 탭",
    "purpose": "카테고리 탭을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "콘텐츠 탐색에서 카테고리 탭을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Relume · Framer"
  },
  {
    "id": 32,
    "category": "카테고리·탐색",
    "location": "콘텐츠 탐색",
    "name": "태그 클라우드",
    "purpose": "태그 클라우드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "콘텐츠 탐색에서 태그 클라우드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Relume · Framer"
  },
  {
    "id": 33,
    "category": "카테고리·탐색",
    "location": "콘텐츠 탐색",
    "name": "사이드바 필터",
    "purpose": "사이드바 필터을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "콘텐츠 탐색에서 사이드바 필터을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Relume · Framer"
  },
  {
    "id": 34,
    "category": "카테고리·탐색",
    "location": "콘텐츠 탐색",
    "name": "브레드크럼",
    "purpose": "브레드크럼을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "콘텐츠 탐색에서 브레드크럼을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Relume · Framer"
  },
  {
    "id": 35,
    "category": "카테고리·탐색",
    "location": "콘텐츠 탐색",
    "name": "페이지네이션",
    "purpose": "페이지네이션을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "콘텐츠 탐색에서 페이지네이션을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Relume · Framer"
  },
  {
    "id": 36,
    "category": "카테고리·탐색",
    "location": "콘텐츠 탐색",
    "name": "무한 스크롤",
    "purpose": "무한 스크롤을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "콘텐츠 탐색에서 무한 스크롤을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Relume · Framer"
  },
  {
    "id": 37,
    "category": "카테고리·탐색",
    "location": "콘텐츠 탐색",
    "name": "정렬 드롭다운",
    "purpose": "정렬 드롭다운을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "콘텐츠 탐색에서 정렬 드롭다운을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Relume · Framer"
  },
  {
    "id": 38,
    "category": "카테고리·탐색",
    "location": "콘텐츠 탐색",
    "name": "저장한 필터",
    "purpose": "저장한 필터을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "콘텐츠 탐색에서 저장한 필터을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Relume · Framer"
  },
  {
    "id": 39,
    "category": "카테고리·탐색",
    "location": "콘텐츠 탐색",
    "name": "추천 탐색 링크",
    "purpose": "추천 탐색 링크을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "콘텐츠 탐색에서 추천 탐색 링크을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Relume · Framer"
  },
  {
    "id": 40,
    "category": "카테고리·탐색",
    "location": "콘텐츠 탐색",
    "name": "목차 내비게이션",
    "purpose": "목차 내비게이션을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "콘텐츠 탐색에서 목차 내비게이션을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Relume · Framer"
  },
  {
    "id": 41,
    "category": "콘텐츠·매거진",
    "location": "읽기 화면",
    "name": "기사 제목",
    "purpose": "기사 제목을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "읽기 화면에서 기사 제목을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Webflow · Notion · Tiptap"
  },
  {
    "id": 42,
    "category": "콘텐츠·매거진",
    "location": "읽기 화면",
    "name": "작성자 정보",
    "purpose": "작성자 정보을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "읽기 화면에서 작성자 정보을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Webflow · Notion · Tiptap"
  },
  {
    "id": 43,
    "category": "콘텐츠·매거진",
    "location": "읽기 화면",
    "name": "발행일 메타",
    "purpose": "발행일 메타을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "읽기 화면에서 발행일 메타을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Webflow · Notion · Tiptap"
  },
  {
    "id": 44,
    "category": "콘텐츠·매거진",
    "location": "읽기 화면",
    "name": "리드 문단",
    "purpose": "리드 문단을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "읽기 화면에서 리드 문단을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Webflow · Notion · Tiptap"
  },
  {
    "id": 45,
    "category": "콘텐츠·매거진",
    "location": "읽기 화면",
    "name": "본문 목차",
    "purpose": "본문 목차을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "읽기 화면에서 본문 목차을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Webflow · Notion · Tiptap"
  },
  {
    "id": 46,
    "category": "콘텐츠·매거진",
    "location": "읽기 화면",
    "name": "인용 블록",
    "purpose": "인용 블록을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "읽기 화면에서 인용 블록을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Webflow · Notion · Tiptap"
  },
  {
    "id": 47,
    "category": "콘텐츠·매거진",
    "location": "읽기 화면",
    "name": "코드 블록",
    "purpose": "코드 블록을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "읽기 화면에서 코드 블록을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Webflow · Notion · Tiptap"
  },
  {
    "id": 48,
    "category": "콘텐츠·매거진",
    "location": "읽기 화면",
    "name": "이미지 캡션",
    "purpose": "이미지 캡션을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "읽기 화면에서 이미지 캡션을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Webflow · Notion · Tiptap"
  },
  {
    "id": 49,
    "category": "콘텐츠·매거진",
    "location": "읽기 화면",
    "name": "관련 글",
    "purpose": "관련 글을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "읽기 화면에서 관련 글을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Webflow · Notion · Tiptap"
  },
  {
    "id": 50,
    "category": "콘텐츠·매거진",
    "location": "읽기 화면",
    "name": "다음 글 이동",
    "purpose": "다음 글 이동을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "읽기 화면에서 다음 글 이동을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Webflow · Notion · Tiptap"
  },
  {
    "id": 51,
    "category": "카드·목록",
    "location": "반복 정보",
    "name": "기본 카드",
    "purpose": "기본 카드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "반복 정보에서 기본 카드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · shadcn/ui · v0"
  },
  {
    "id": 52,
    "category": "카드·목록",
    "location": "반복 정보",
    "name": "이미지 카드",
    "purpose": "이미지 카드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "반복 정보에서 이미지 카드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · shadcn/ui · v0"
  },
  {
    "id": 53,
    "category": "카드·목록",
    "location": "반복 정보",
    "name": "가격 카드",
    "purpose": "가격 카드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "반복 정보에서 가격 카드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · shadcn/ui · v0"
  },
  {
    "id": 54,
    "category": "카드·목록",
    "location": "반복 정보",
    "name": "기능 카드",
    "purpose": "기능 카드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "반복 정보에서 기능 카드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · shadcn/ui · v0"
  },
  {
    "id": 55,
    "category": "카드·목록",
    "location": "반복 정보",
    "name": "프로필 카드",
    "purpose": "프로필 카드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "반복 정보에서 프로필 카드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · shadcn/ui · v0"
  },
  {
    "id": 56,
    "category": "카드·목록",
    "location": "반복 정보",
    "name": "상태 카드",
    "purpose": "상태 카드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "반복 정보에서 상태 카드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · shadcn/ui · v0"
  },
  {
    "id": 57,
    "category": "카드·목록",
    "location": "반복 정보",
    "name": "가로 리스트 행",
    "purpose": "가로 리스트 행을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "반복 정보에서 가로 리스트 행을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · shadcn/ui · v0"
  },
  {
    "id": 58,
    "category": "카드·목록",
    "location": "반복 정보",
    "name": "비교 리스트",
    "purpose": "비교 리스트을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "반복 정보에서 비교 리스트을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · shadcn/ui · v0"
  },
  {
    "id": 59,
    "category": "카드·목록",
    "location": "반복 정보",
    "name": "추천 카드",
    "purpose": "추천 카드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "반복 정보에서 추천 카드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · shadcn/ui · v0"
  },
  {
    "id": 60,
    "category": "카드·목록",
    "location": "반복 정보",
    "name": "빈 목록 상태",
    "purpose": "빈 목록 상태을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "반복 정보에서 빈 목록 상태을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · shadcn/ui · v0"
  },
  {
    "id": 61,
    "category": "CTA·전환",
    "location": "행동 유도",
    "name": "고정 CTA 바",
    "purpose": "고정 CTA 바을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "행동 유도에서 고정 CTA 바을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Canva · Framer"
  },
  {
    "id": 62,
    "category": "CTA·전환",
    "location": "행동 유도",
    "name": "스크롤 CTA",
    "purpose": "스크롤 CTA을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "행동 유도에서 스크롤 CTA을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Canva · Framer"
  },
  {
    "id": 63,
    "category": "CTA·전환",
    "location": "행동 유도",
    "name": "인라인 CTA",
    "purpose": "인라인 CTA을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "행동 유도에서 인라인 CTA을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Canva · Framer"
  },
  {
    "id": 64,
    "category": "CTA·전환",
    "location": "행동 유도",
    "name": "상담 요청 CTA",
    "purpose": "상담 요청 CTA을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "행동 유도에서 상담 요청 CTA을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Canva · Framer"
  },
  {
    "id": 65,
    "category": "CTA·전환",
    "location": "행동 유도",
    "name": "무료 체험 CTA",
    "purpose": "무료 체험 CTA을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "행동 유도에서 무료 체험 CTA을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Canva · Framer"
  },
  {
    "id": 66,
    "category": "CTA·전환",
    "location": "행동 유도",
    "name": "다운로드 CTA",
    "purpose": "다운로드 CTA을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "행동 유도에서 다운로드 CTA을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Canva · Framer"
  },
  {
    "id": 67,
    "category": "CTA·전환",
    "location": "행동 유도",
    "name": "예약 CTA",
    "purpose": "예약 CTA을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "행동 유도에서 예약 CTA을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Canva · Framer"
  },
  {
    "id": 68,
    "category": "CTA·전환",
    "location": "행동 유도",
    "name": "공유 CTA",
    "purpose": "공유 CTA을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "행동 유도에서 공유 CTA을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Canva · Framer"
  },
  {
    "id": 69,
    "category": "CTA·전환",
    "location": "행동 유도",
    "name": "뉴스레터 CTA",
    "purpose": "뉴스레터 CTA을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "행동 유도에서 뉴스레터 CTA을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Canva · Framer"
  },
  {
    "id": 70,
    "category": "CTA·전환",
    "location": "행동 유도",
    "name": "전환 완료 화면",
    "purpose": "전환 완료 화면을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "행동 유도에서 전환 완료 화면을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Canva · Framer"
  },
  {
    "id": 71,
    "category": "신뢰·사회적 증거",
    "location": "신뢰 형성",
    "name": "고객 후기",
    "purpose": "고객 후기을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "신뢰 형성에서 고객 후기을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · Figma · Webflow"
  },
  {
    "id": 72,
    "category": "신뢰·사회적 증거",
    "location": "신뢰 형성",
    "name": "별점 표시",
    "purpose": "별점 표시을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "신뢰 형성에서 별점 표시을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · Figma · Webflow"
  },
  {
    "id": 73,
    "category": "신뢰·사회적 증거",
    "location": "신뢰 형성",
    "name": "고객사 로고",
    "purpose": "고객사 로고을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "신뢰 형성에서 고객사 로고을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · Figma · Webflow"
  },
  {
    "id": 74,
    "category": "신뢰·사회적 증거",
    "location": "신뢰 형성",
    "name": "수치 성과",
    "purpose": "수치 성과을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "신뢰 형성에서 수치 성과을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · Figma · Webflow"
  },
  {
    "id": 75,
    "category": "신뢰·사회적 증거",
    "location": "신뢰 형성",
    "name": "인증 배지",
    "purpose": "인증 배지을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "신뢰 형성에서 인증 배지을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · Figma · Webflow"
  },
  {
    "id": 76,
    "category": "신뢰·사회적 증거",
    "location": "신뢰 형성",
    "name": "보안 인증",
    "purpose": "보안 인증을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "신뢰 형성에서 보안 인증을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · Figma · Webflow"
  },
  {
    "id": 77,
    "category": "신뢰·사회적 증거",
    "location": "신뢰 형성",
    "name": "언론 보도",
    "purpose": "언론 보도을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "신뢰 형성에서 언론 보도을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · Figma · Webflow"
  },
  {
    "id": 78,
    "category": "신뢰·사회적 증거",
    "location": "신뢰 형성",
    "name": "사례 연구 링크",
    "purpose": "사례 연구 링크을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "신뢰 형성에서 사례 연구 링크을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · Figma · Webflow"
  },
  {
    "id": 79,
    "category": "신뢰·사회적 증거",
    "location": "신뢰 형성",
    "name": "팀 소개",
    "purpose": "팀 소개을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "신뢰 형성에서 팀 소개을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · Figma · Webflow"
  },
  {
    "id": 80,
    "category": "신뢰·사회적 증거",
    "location": "신뢰 형성",
    "name": "커뮤니티 수치",
    "purpose": "커뮤니티 수치을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "신뢰 형성에서 커뮤니티 수치을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · Figma · Webflow"
  },
  {
    "id": 81,
    "category": "가격·결제",
    "location": "수익화",
    "name": "가격표",
    "purpose": "가격표을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "수익화에서 가격표을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stripe · v0"
  },
  {
    "id": 82,
    "category": "가격·결제",
    "location": "수익화",
    "name": "월간·연간 토글",
    "purpose": "월간·연간 토글을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "수익화에서 월간·연간 토글을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stripe · v0"
  },
  {
    "id": 83,
    "category": "가격·결제",
    "location": "수익화",
    "name": "기능 비교표",
    "purpose": "기능 비교표을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "수익화에서 기능 비교표을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stripe · v0"
  },
  {
    "id": 84,
    "category": "가격·결제",
    "location": "수익화",
    "name": "추천 플랜 배지",
    "purpose": "추천 플랜 배지을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "수익화에서 추천 플랜 배지을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stripe · v0"
  },
  {
    "id": 85,
    "category": "가격·결제",
    "location": "수익화",
    "name": "사용량 슬라이더",
    "purpose": "사용량 슬라이더을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "수익화에서 사용량 슬라이더을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stripe · v0"
  },
  {
    "id": 86,
    "category": "가격·결제",
    "location": "수익화",
    "name": "쿠폰 입력",
    "purpose": "쿠폰 입력을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "수익화에서 쿠폰 입력을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stripe · v0"
  },
  {
    "id": 87,
    "category": "가격·결제",
    "location": "수익화",
    "name": "결제 단계 표시",
    "purpose": "결제 단계 표시을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "수익화에서 결제 단계 표시을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stripe · v0"
  },
  {
    "id": 88,
    "category": "가격·결제",
    "location": "수익화",
    "name": "결제 수단 선택",
    "purpose": "결제 수단 선택을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "수익화에서 결제 수단 선택을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stripe · v0"
  },
  {
    "id": 89,
    "category": "가격·결제",
    "location": "수익화",
    "name": "영수증 화면",
    "purpose": "영수증 화면을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "수익화에서 영수증 화면을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stripe · v0"
  },
  {
    "id": 90,
    "category": "가격·결제",
    "location": "수익화",
    "name": "구독 관리",
    "purpose": "구독 관리을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "수익화에서 구독 관리을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stripe · v0"
  },
  {
    "id": 91,
    "category": "회원·인증",
    "location": "계정 진입",
    "name": "로그인 폼",
    "purpose": "로그인 폼을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "계정 진입에서 로그인 폼을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Firebase · Clerk"
  },
  {
    "id": 92,
    "category": "회원·인증",
    "location": "계정 진입",
    "name": "회원가입 폼",
    "purpose": "회원가입 폼을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "계정 진입에서 회원가입 폼을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Firebase · Clerk"
  },
  {
    "id": 93,
    "category": "회원·인증",
    "location": "계정 진입",
    "name": "소셜 로그인",
    "purpose": "소셜 로그인을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "계정 진입에서 소셜 로그인을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Firebase · Clerk"
  },
  {
    "id": 94,
    "category": "회원·인증",
    "location": "계정 진입",
    "name": "이메일 인증",
    "purpose": "이메일 인증을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "계정 진입에서 이메일 인증을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Firebase · Clerk"
  },
  {
    "id": 95,
    "category": "회원·인증",
    "location": "계정 진입",
    "name": "비밀번호 찾기",
    "purpose": "비밀번호 찾기을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "계정 진입에서 비밀번호 찾기을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Firebase · Clerk"
  },
  {
    "id": 96,
    "category": "회원·인증",
    "location": "계정 진입",
    "name": "2단계 인증",
    "purpose": "2단계 인증을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "계정 진입에서 2단계 인증을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Firebase · Clerk"
  },
  {
    "id": 97,
    "category": "회원·인증",
    "location": "계정 진입",
    "name": "초대 수락",
    "purpose": "초대 수락을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "계정 진입에서 초대 수락을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Firebase · Clerk"
  },
  {
    "id": 98,
    "category": "회원·인증",
    "location": "계정 진입",
    "name": "약관 동의",
    "purpose": "약관 동의을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "계정 진입에서 약관 동의을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Firebase · Clerk"
  },
  {
    "id": 99,
    "category": "회원·인증",
    "location": "계정 진입",
    "name": "세션 만료 안내",
    "purpose": "세션 만료 안내을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "계정 진입에서 세션 만료 안내을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Firebase · Clerk"
  },
  {
    "id": 100,
    "category": "회원·인증",
    "location": "계정 진입",
    "name": "계정 삭제 확인",
    "purpose": "계정 삭제 확인을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "계정 진입에서 계정 삭제 확인을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Firebase · Clerk"
  },
  {
    "id": 101,
    "category": "폼·입력",
    "location": "정보 수집",
    "name": "텍스트 입력",
    "purpose": "텍스트 입력을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "정보 수집에서 텍스트 입력을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · React Hook Form · v0"
  },
  {
    "id": 102,
    "category": "폼·입력",
    "location": "정보 수집",
    "name": "다중 행 입력",
    "purpose": "다중 행 입력을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "정보 수집에서 다중 행 입력을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · React Hook Form · v0"
  },
  {
    "id": 103,
    "category": "폼·입력",
    "location": "정보 수집",
    "name": "파일 업로드",
    "purpose": "파일 업로드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "정보 수집에서 파일 업로드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · React Hook Form · v0"
  },
  {
    "id": 104,
    "category": "폼·입력",
    "location": "정보 수집",
    "name": "드래그 앤 드롭",
    "purpose": "드래그 앤 드롭을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "정보 수집에서 드래그 앤 드롭을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · React Hook Form · v0"
  },
  {
    "id": 105,
    "category": "폼·입력",
    "location": "정보 수집",
    "name": "날짜 선택",
    "purpose": "날짜 선택을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "정보 수집에서 날짜 선택을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · React Hook Form · v0"
  },
  {
    "id": 106,
    "category": "폼·입력",
    "location": "정보 수집",
    "name": "시간 선택",
    "purpose": "시간 선택을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "정보 수집에서 시간 선택을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · React Hook Form · v0"
  },
  {
    "id": 107,
    "category": "폼·입력",
    "location": "정보 수집",
    "name": "셀렉트 메뉴",
    "purpose": "셀렉트 메뉴을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "정보 수집에서 셀렉트 메뉴을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · React Hook Form · v0"
  },
  {
    "id": 108,
    "category": "폼·입력",
    "location": "정보 수집",
    "name": "체크박스 그룹",
    "purpose": "체크박스 그룹을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "정보 수집에서 체크박스 그룹을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · React Hook Form · v0"
  },
  {
    "id": 109,
    "category": "폼·입력",
    "location": "정보 수집",
    "name": "라디오 그룹",
    "purpose": "라디오 그룹을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "정보 수집에서 라디오 그룹을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · React Hook Form · v0"
  },
  {
    "id": 110,
    "category": "폼·입력",
    "location": "정보 수집",
    "name": "입력 오류 안내",
    "purpose": "입력 오류 안내을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "정보 수집에서 입력 오류 안내을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · React Hook Form · v0"
  },
  {
    "id": 111,
    "category": "상태·피드백",
    "location": "시스템 반응",
    "name": "로딩 스피너",
    "purpose": "로딩 스피너을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "시스템 반응에서 로딩 스피너을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Radix UI · shadcn/ui"
  },
  {
    "id": 112,
    "category": "상태·피드백",
    "location": "시스템 반응",
    "name": "스켈레톤 로딩",
    "purpose": "스켈레톤 로딩을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "시스템 반응에서 스켈레톤 로딩을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Radix UI · shadcn/ui"
  },
  {
    "id": 113,
    "category": "상태·피드백",
    "location": "시스템 반응",
    "name": "진행률 표시",
    "purpose": "진행률 표시을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "시스템 반응에서 진행률 표시을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Radix UI · shadcn/ui"
  },
  {
    "id": 114,
    "category": "상태·피드백",
    "location": "시스템 반응",
    "name": "성공 토스트",
    "purpose": "성공 토스트을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "시스템 반응에서 성공 토스트을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Radix UI · shadcn/ui"
  },
  {
    "id": 115,
    "category": "상태·피드백",
    "location": "시스템 반응",
    "name": "오류 토스트",
    "purpose": "오류 토스트을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "시스템 반응에서 오류 토스트을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Radix UI · shadcn/ui"
  },
  {
    "id": 116,
    "category": "상태·피드백",
    "location": "시스템 반응",
    "name": "경고 배너",
    "purpose": "경고 배너을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "시스템 반응에서 경고 배너을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Radix UI · shadcn/ui"
  },
  {
    "id": 117,
    "category": "상태·피드백",
    "location": "시스템 반응",
    "name": "확인 모달",
    "purpose": "확인 모달을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "시스템 반응에서 확인 모달을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Radix UI · shadcn/ui"
  },
  {
    "id": 118,
    "category": "상태·피드백",
    "location": "시스템 반응",
    "name": "오프라인 안내",
    "purpose": "오프라인 안내을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "시스템 반응에서 오프라인 안내을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Radix UI · shadcn/ui"
  },
  {
    "id": 119,
    "category": "상태·피드백",
    "location": "시스템 반응",
    "name": "저장 완료 표시",
    "purpose": "저장 완료 표시을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "시스템 반응에서 저장 완료 표시을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Radix UI · shadcn/ui"
  },
  {
    "id": 120,
    "category": "상태·피드백",
    "location": "시스템 반응",
    "name": "재시도 버튼",
    "purpose": "재시도 버튼을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "시스템 반응에서 재시도 버튼을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Radix UI · shadcn/ui"
  },
  {
    "id": 121,
    "category": "대시보드·분석",
    "location": "운영 화면",
    "name": "대시보드 헤더",
    "purpose": "대시보드 헤더을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "운영 화면에서 대시보드 헤더을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Recharts · Lovable"
  },
  {
    "id": 122,
    "category": "대시보드·분석",
    "location": "운영 화면",
    "name": "KPI 숫자 카드",
    "purpose": "KPI 숫자 카드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "운영 화면에서 KPI 숫자 카드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Recharts · Lovable"
  },
  {
    "id": 123,
    "category": "대시보드·분석",
    "location": "운영 화면",
    "name": "선형 차트",
    "purpose": "선형 차트을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "운영 화면에서 선형 차트을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Recharts · Lovable"
  },
  {
    "id": 124,
    "category": "대시보드·분석",
    "location": "운영 화면",
    "name": "막대 차트",
    "purpose": "막대 차트을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "운영 화면에서 막대 차트을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Recharts · Lovable"
  },
  {
    "id": 125,
    "category": "대시보드·분석",
    "location": "운영 화면",
    "name": "도넛 차트",
    "purpose": "도넛 차트을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "운영 화면에서 도넛 차트을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Recharts · Lovable"
  },
  {
    "id": 126,
    "category": "대시보드·분석",
    "location": "운영 화면",
    "name": "기간 필터",
    "purpose": "기간 필터을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "운영 화면에서 기간 필터을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Recharts · Lovable"
  },
  {
    "id": 127,
    "category": "대시보드·분석",
    "location": "운영 화면",
    "name": "데이터 테이블",
    "purpose": "데이터 테이블을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "운영 화면에서 데이터 테이블을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Recharts · Lovable"
  },
  {
    "id": 128,
    "category": "대시보드·분석",
    "location": "운영 화면",
    "name": "행동 로그",
    "purpose": "행동 로그을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "운영 화면에서 행동 로그을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Recharts · Lovable"
  },
  {
    "id": 129,
    "category": "대시보드·분석",
    "location": "운영 화면",
    "name": "알림 센터",
    "purpose": "알림 센터을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "운영 화면에서 알림 센터을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Recharts · Lovable"
  },
  {
    "id": 130,
    "category": "대시보드·분석",
    "location": "운영 화면",
    "name": "내보내기 메뉴",
    "purpose": "내보내기 메뉴을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "운영 화면에서 내보내기 메뉴을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Recharts · Lovable"
  },
  {
    "id": 131,
    "category": "프로필·마이페이지",
    "location": "개인 공간",
    "name": "프로필 헤더",
    "purpose": "프로필 헤더을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "개인 공간에서 프로필 헤더을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · React · v0"
  },
  {
    "id": 132,
    "category": "프로필·마이페이지",
    "location": "개인 공간",
    "name": "아바타 업로드",
    "purpose": "아바타 업로드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "개인 공간에서 아바타 업로드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · React · v0"
  },
  {
    "id": 133,
    "category": "프로필·마이페이지",
    "location": "개인 공간",
    "name": "프로필 편집",
    "purpose": "프로필 편집을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "개인 공간에서 프로필 편집을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · React · v0"
  },
  {
    "id": 134,
    "category": "프로필·마이페이지",
    "location": "개인 공간",
    "name": "활동 타임라인",
    "purpose": "활동 타임라인을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "개인 공간에서 활동 타임라인을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · React · v0"
  },
  {
    "id": 135,
    "category": "프로필·마이페이지",
    "location": "개인 공간",
    "name": "즐겨찾기",
    "purpose": "즐겨찾기을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "개인 공간에서 즐겨찾기을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · React · v0"
  },
  {
    "id": 136,
    "category": "프로필·마이페이지",
    "location": "개인 공간",
    "name": "저장 목록",
    "purpose": "저장 목록을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "개인 공간에서 저장 목록을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · React · v0"
  },
  {
    "id": 137,
    "category": "프로필·마이페이지",
    "location": "개인 공간",
    "name": "알림 설정",
    "purpose": "알림 설정을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "개인 공간에서 알림 설정을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · React · v0"
  },
  {
    "id": 138,
    "category": "프로필·마이페이지",
    "location": "개인 공간",
    "name": "연결 계정",
    "purpose": "연결 계정을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "개인 공간에서 연결 계정을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · React · v0"
  },
  {
    "id": 139,
    "category": "프로필·마이페이지",
    "location": "개인 공간",
    "name": "사용량 현황",
    "purpose": "사용량 현황을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "개인 공간에서 사용량 현황을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · React · v0"
  },
  {
    "id": 140,
    "category": "프로필·마이페이지",
    "location": "개인 공간",
    "name": "개인정보 설정",
    "purpose": "개인정보 설정을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "개인 공간에서 개인정보 설정을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · React · v0"
  },
  {
    "id": 141,
    "category": "커뮤니티·소셜",
    "location": "참여 경험",
    "name": "게시글 피드",
    "purpose": "게시글 피드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "참여 경험에서 게시글 피드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Supabase · Firebase"
  },
  {
    "id": 142,
    "category": "커뮤니티·소셜",
    "location": "참여 경험",
    "name": "댓글 목록",
    "purpose": "댓글 목록을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "참여 경험에서 댓글 목록을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Supabase · Firebase"
  },
  {
    "id": 143,
    "category": "커뮤니티·소셜",
    "location": "참여 경험",
    "name": "댓글 작성",
    "purpose": "댓글 작성을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "참여 경험에서 댓글 작성을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Supabase · Firebase"
  },
  {
    "id": 144,
    "category": "커뮤니티·소셜",
    "location": "참여 경험",
    "name": "좋아요 버튼",
    "purpose": "좋아요 버튼을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "참여 경험에서 좋아요 버튼을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Supabase · Firebase"
  },
  {
    "id": 145,
    "category": "커뮤니티·소셜",
    "location": "참여 경험",
    "name": "북마크 버튼",
    "purpose": "북마크 버튼을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "참여 경험에서 북마크 버튼을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Supabase · Firebase"
  },
  {
    "id": 146,
    "category": "커뮤니티·소셜",
    "location": "참여 경험",
    "name": "팔로우 버튼",
    "purpose": "팔로우 버튼을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "참여 경험에서 팔로우 버튼을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Supabase · Firebase"
  },
  {
    "id": 147,
    "category": "커뮤니티·소셜",
    "location": "참여 경험",
    "name": "멘션 자동완성",
    "purpose": "멘션 자동완성을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "참여 경험에서 멘션 자동완성을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Supabase · Firebase"
  },
  {
    "id": 148,
    "category": "커뮤니티·소셜",
    "location": "참여 경험",
    "name": "신고 메뉴",
    "purpose": "신고 메뉴을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "참여 경험에서 신고 메뉴을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Supabase · Firebase"
  },
  {
    "id": 149,
    "category": "커뮤니티·소셜",
    "location": "참여 경험",
    "name": "온라인 상태",
    "purpose": "온라인 상태을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "참여 경험에서 온라인 상태을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Supabase · Firebase"
  },
  {
    "id": 150,
    "category": "커뮤니티·소셜",
    "location": "참여 경험",
    "name": "커뮤니티 규칙",
    "purpose": "커뮤니티 규칙을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "참여 경험에서 커뮤니티 규칙을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Supabase · Firebase"
  },
  {
    "id": 151,
    "category": "협업·팀",
    "location": "함께 작업",
    "name": "팀 전환 메뉴",
    "purpose": "팀 전환 메뉴을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "함께 작업에서 팀 전환 메뉴을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Linear · Notion"
  },
  {
    "id": 152,
    "category": "협업·팀",
    "location": "함께 작업",
    "name": "멤버 목록",
    "purpose": "멤버 목록을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "함께 작업에서 멤버 목록을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Linear · Notion"
  },
  {
    "id": 153,
    "category": "협업·팀",
    "location": "함께 작업",
    "name": "권한 선택",
    "purpose": "권한 선택을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "함께 작업에서 권한 선택을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Linear · Notion"
  },
  {
    "id": 154,
    "category": "협업·팀",
    "location": "함께 작업",
    "name": "초대 모달",
    "purpose": "초대 모달을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "함께 작업에서 초대 모달을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Linear · Notion"
  },
  {
    "id": 155,
    "category": "협업·팀",
    "location": "함께 작업",
    "name": "공유 링크",
    "purpose": "공유 링크을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "함께 작업에서 공유 링크을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Linear · Notion"
  },
  {
    "id": 156,
    "category": "협업·팀",
    "location": "함께 작업",
    "name": "댓글 스레드",
    "purpose": "댓글 스레드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "함께 작업에서 댓글 스레드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Linear · Notion"
  },
  {
    "id": 157,
    "category": "협업·팀",
    "location": "함께 작업",
    "name": "변경 이력",
    "purpose": "변경 이력을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "함께 작업에서 변경 이력을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Linear · Notion"
  },
  {
    "id": 158,
    "category": "협업·팀",
    "location": "함께 작업",
    "name": "실시간 커서",
    "purpose": "실시간 커서을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "함께 작업에서 실시간 커서을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Linear · Notion"
  },
  {
    "id": 159,
    "category": "협업·팀",
    "location": "함께 작업",
    "name": "할 일 배정",
    "purpose": "할 일 배정을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "함께 작업에서 할 일 배정을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Linear · Notion"
  },
  {
    "id": 160,
    "category": "협업·팀",
    "location": "함께 작업",
    "name": "팀 청구 설정",
    "purpose": "팀 청구 설정을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "함께 작업에서 팀 청구 설정을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Linear · Notion"
  },
  {
    "id": 161,
    "category": "AI 상호작용",
    "location": "AI 기능",
    "name": "AI 채팅 입력",
    "purpose": "AI 채팅 입력을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "AI 기능에서 AI 채팅 입력을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · ChatGPT · Claude"
  },
  {
    "id": 162,
    "category": "AI 상호작용",
    "location": "AI 기능",
    "name": "대화 기록",
    "purpose": "대화 기록을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "AI 기능에서 대화 기록을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · ChatGPT · Claude"
  },
  {
    "id": 163,
    "category": "AI 상호작용",
    "location": "AI 기능",
    "name": "모델 선택",
    "purpose": "모델 선택을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "AI 기능에서 모델 선택을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · ChatGPT · Claude"
  },
  {
    "id": 164,
    "category": "AI 상호작용",
    "location": "AI 기능",
    "name": "프롬프트 템플릿",
    "purpose": "프롬프트 템플릿을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "AI 기능에서 프롬프트 템플릿을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · ChatGPT · Claude"
  },
  {
    "id": 165,
    "category": "AI 상호작용",
    "location": "AI 기능",
    "name": "파일과 대화",
    "purpose": "파일과 대화을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "AI 기능에서 파일과 대화을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · ChatGPT · Claude"
  },
  {
    "id": 166,
    "category": "AI 상호작용",
    "location": "AI 기능",
    "name": "생성 중 표시",
    "purpose": "생성 중 표시을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "AI 기능에서 생성 중 표시을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · ChatGPT · Claude"
  },
  {
    "id": 167,
    "category": "AI 상호작용",
    "location": "AI 기능",
    "name": "응답 복사",
    "purpose": "응답 복사을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "AI 기능에서 응답 복사을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · ChatGPT · Claude"
  },
  {
    "id": 168,
    "category": "AI 상호작용",
    "location": "AI 기능",
    "name": "응답 재생성",
    "purpose": "응답 재생성을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "AI 기능에서 응답 재생성을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · ChatGPT · Claude"
  },
  {
    "id": 169,
    "category": "AI 상호작용",
    "location": "AI 기능",
    "name": "좋아요·싫어요 평가",
    "purpose": "좋아요·싫어요 평가을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "AI 기능에서 좋아요·싫어요 평가을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · ChatGPT · Claude"
  },
  {
    "id": 170,
    "category": "AI 상호작용",
    "location": "AI 기능",
    "name": "출력 형식 선택",
    "purpose": "출력 형식 선택을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "AI 기능에서 출력 형식 선택을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · ChatGPT · Claude"
  },
  {
    "id": 171,
    "category": "에디터·문서",
    "location": "작성 도구",
    "name": "리치 텍스트 툴바",
    "purpose": "리치 텍스트 툴바을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "작성 도구에서 리치 텍스트 툴바을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Tiptap · Notion · Figma"
  },
  {
    "id": 172,
    "category": "에디터·문서",
    "location": "작성 도구",
    "name": "마크다운 미리보기",
    "purpose": "마크다운 미리보기을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "작성 도구에서 마크다운 미리보기을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Tiptap · Notion · Figma"
  },
  {
    "id": 173,
    "category": "에디터·문서",
    "location": "작성 도구",
    "name": "블록 삽입 메뉴",
    "purpose": "블록 삽입 메뉴을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "작성 도구에서 블록 삽입 메뉴을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Tiptap · Notion · Figma"
  },
  {
    "id": 174,
    "category": "에디터·문서",
    "location": "작성 도구",
    "name": "멘션 삽입",
    "purpose": "멘션 삽입을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "작성 도구에서 멘션 삽입을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Tiptap · Notion · Figma"
  },
  {
    "id": 175,
    "category": "에디터·문서",
    "location": "작성 도구",
    "name": "슬래시 커맨드",
    "purpose": "슬래시 커맨드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "작성 도구에서 슬래시 커맨드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Tiptap · Notion · Figma"
  },
  {
    "id": 176,
    "category": "에디터·문서",
    "location": "작성 도구",
    "name": "문서 버전",
    "purpose": "문서 버전을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "작성 도구에서 문서 버전을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Tiptap · Notion · Figma"
  },
  {
    "id": 177,
    "category": "에디터·문서",
    "location": "작성 도구",
    "name": "자동 저장",
    "purpose": "자동 저장을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "작성 도구에서 자동 저장을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Tiptap · Notion · Figma"
  },
  {
    "id": 178,
    "category": "에디터·문서",
    "location": "작성 도구",
    "name": "공동 편집",
    "purpose": "공동 편집을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "작성 도구에서 공동 편집을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Tiptap · Notion · Figma"
  },
  {
    "id": 179,
    "category": "에디터·문서",
    "location": "작성 도구",
    "name": "문서 공유",
    "purpose": "문서 공유을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "작성 도구에서 문서 공유을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Tiptap · Notion · Figma"
  },
  {
    "id": 180,
    "category": "에디터·문서",
    "location": "작성 도구",
    "name": "인쇄 설정",
    "purpose": "인쇄 설정을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "작성 도구에서 인쇄 설정을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Tiptap · Notion · Figma"
  },
  {
    "id": 181,
    "category": "미디어·갤러리",
    "location": "시각 콘텐츠",
    "name": "이미지 갤러리",
    "purpose": "이미지 갤러리을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "시각 콘텐츠에서 이미지 갤러리을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Canva · Cloudinary"
  },
  {
    "id": 182,
    "category": "미디어·갤러리",
    "location": "시각 콘텐츠",
    "name": "라이트박스",
    "purpose": "라이트박스을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "시각 콘텐츠에서 라이트박스을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Canva · Cloudinary"
  },
  {
    "id": 183,
    "category": "미디어·갤러리",
    "location": "시각 콘텐츠",
    "name": "이미지 확대",
    "purpose": "이미지 확대을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "시각 콘텐츠에서 이미지 확대을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Canva · Cloudinary"
  },
  {
    "id": 184,
    "category": "미디어·갤러리",
    "location": "시각 콘텐츠",
    "name": "동영상 플레이어",
    "purpose": "동영상 플레이어을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "시각 콘텐츠에서 동영상 플레이어을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Canva · Cloudinary"
  },
  {
    "id": 185,
    "category": "미디어·갤러리",
    "location": "시각 콘텐츠",
    "name": "재생목록",
    "purpose": "재생목록을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "시각 콘텐츠에서 재생목록을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Canva · Cloudinary"
  },
  {
    "id": 186,
    "category": "미디어·갤러리",
    "location": "시각 콘텐츠",
    "name": "음량·자막 컨트롤",
    "purpose": "음량·자막 컨트롤을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "시각 콘텐츠에서 음량·자막 컨트롤을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Canva · Cloudinary"
  },
  {
    "id": 187,
    "category": "미디어·갤러리",
    "location": "시각 콘텐츠",
    "name": "오디오 플레이어",
    "purpose": "오디오 플레이어을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "시각 콘텐츠에서 오디오 플레이어을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Canva · Cloudinary"
  },
  {
    "id": 188,
    "category": "미디어·갤러리",
    "location": "시각 콘텐츠",
    "name": "썸네일 스트립",
    "purpose": "썸네일 스트립을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "시각 콘텐츠에서 썸네일 스트립을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Canva · Cloudinary"
  },
  {
    "id": 189,
    "category": "미디어·갤러리",
    "location": "시각 콘텐츠",
    "name": "미디어 필터",
    "purpose": "미디어 필터을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "시각 콘텐츠에서 미디어 필터을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Canva · Cloudinary"
  },
  {
    "id": 190,
    "category": "미디어·갤러리",
    "location": "시각 콘텐츠",
    "name": "미디어 업로드",
    "purpose": "미디어 업로드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "시각 콘텐츠에서 미디어 업로드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Canva · Cloudinary"
  },
  {
    "id": 191,
    "category": "커머스·상품",
    "location": "상품 경험",
    "name": "상품 상세 헤더",
    "purpose": "상품 상세 헤더을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "상품 경험에서 상품 상세 헤더을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Shopify · v0"
  },
  {
    "id": 192,
    "category": "커머스·상품",
    "location": "상품 경험",
    "name": "상품 이미지 줌",
    "purpose": "상품 이미지 줌을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "상품 경험에서 상품 이미지 줌을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Shopify · v0"
  },
  {
    "id": 193,
    "category": "커머스·상품",
    "location": "상품 경험",
    "name": "옵션 선택",
    "purpose": "옵션 선택을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "상품 경험에서 옵션 선택을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Shopify · v0"
  },
  {
    "id": 194,
    "category": "커머스·상품",
    "location": "상품 경험",
    "name": "수량 스테퍼",
    "purpose": "수량 스테퍼을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "상품 경험에서 수량 스테퍼을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Shopify · v0"
  },
  {
    "id": 195,
    "category": "커머스·상품",
    "location": "상품 경험",
    "name": "장바구니 담기",
    "purpose": "장바구니 담기을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "상품 경험에서 장바구니 담기을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Shopify · v0"
  },
  {
    "id": 196,
    "category": "커머스·상품",
    "location": "상품 경험",
    "name": "장바구니 드로어",
    "purpose": "장바구니 드로어을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "상품 경험에서 장바구니 드로어을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Shopify · v0"
  },
  {
    "id": 197,
    "category": "커머스·상품",
    "location": "상품 경험",
    "name": "위시리스트",
    "purpose": "위시리스트을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "상품 경험에서 위시리스트을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Shopify · v0"
  },
  {
    "id": 198,
    "category": "커머스·상품",
    "location": "상품 경험",
    "name": "배송 옵션",
    "purpose": "배송 옵션을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "상품 경험에서 배송 옵션을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Shopify · v0"
  },
  {
    "id": 199,
    "category": "커머스·상품",
    "location": "상품 경험",
    "name": "재고 상태",
    "purpose": "재고 상태을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "상품 경험에서 재고 상태을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Shopify · v0"
  },
  {
    "id": 200,
    "category": "커머스·상품",
    "location": "상품 경험",
    "name": "상품 추천",
    "purpose": "상품 추천을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "상품 경험에서 상품 추천을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Shopify · v0"
  },
  {
    "id": 201,
    "category": "예약·일정",
    "location": "시간 선택",
    "name": "캘린더 월간 보기",
    "purpose": "캘린더 월간 보기을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "시간 선택에서 캘린더 월간 보기을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Cal.com · FullCalendar"
  },
  {
    "id": 202,
    "category": "예약·일정",
    "location": "시간 선택",
    "name": "주간 일정",
    "purpose": "주간 일정을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "시간 선택에서 주간 일정을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Cal.com · FullCalendar"
  },
  {
    "id": 203,
    "category": "예약·일정",
    "location": "시간 선택",
    "name": "가능 시간 슬롯",
    "purpose": "가능 시간 슬롯을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "시간 선택에서 가능 시간 슬롯을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Cal.com · FullCalendar"
  },
  {
    "id": 204,
    "category": "예약·일정",
    "location": "시간 선택",
    "name": "예약 단계",
    "purpose": "예약 단계을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "시간 선택에서 예약 단계을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Cal.com · FullCalendar"
  },
  {
    "id": 205,
    "category": "예약·일정",
    "location": "시간 선택",
    "name": "예약 요약",
    "purpose": "예약 요약을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "시간 선택에서 예약 요약을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Cal.com · FullCalendar"
  },
  {
    "id": 206,
    "category": "예약·일정",
    "location": "시간 선택",
    "name": "참석자 선택",
    "purpose": "참석자 선택을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "시간 선택에서 참석자 선택을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Cal.com · FullCalendar"
  },
  {
    "id": 207,
    "category": "예약·일정",
    "location": "시간 선택",
    "name": "시간대 선택",
    "purpose": "시간대 선택을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "시간 선택에서 시간대 선택을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Cal.com · FullCalendar"
  },
  {
    "id": 208,
    "category": "예약·일정",
    "location": "시간 선택",
    "name": "반복 일정",
    "purpose": "반복 일정을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "시간 선택에서 반복 일정을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Cal.com · FullCalendar"
  },
  {
    "id": 209,
    "category": "예약·일정",
    "location": "시간 선택",
    "name": "예약 변경",
    "purpose": "예약 변경을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "시간 선택에서 예약 변경을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Cal.com · FullCalendar"
  },
  {
    "id": 210,
    "category": "예약·일정",
    "location": "시간 선택",
    "name": "예약 취소",
    "purpose": "예약 취소을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "시간 선택에서 예약 취소을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Cal.com · FullCalendar"
  },
  {
    "id": 211,
    "category": "지도·위치",
    "location": "공간 정보",
    "name": "지도 검색",
    "purpose": "지도 검색을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "공간 정보에서 지도 검색을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Google Maps · Mapbox"
  },
  {
    "id": 212,
    "category": "지도·위치",
    "location": "공간 정보",
    "name": "위치 핀",
    "purpose": "위치 핀을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "공간 정보에서 위치 핀을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Google Maps · Mapbox"
  },
  {
    "id": 213,
    "category": "지도·위치",
    "location": "공간 정보",
    "name": "장소 상세 카드",
    "purpose": "장소 상세 카드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "공간 정보에서 장소 상세 카드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Google Maps · Mapbox"
  },
  {
    "id": 214,
    "category": "지도·위치",
    "location": "공간 정보",
    "name": "길찾기 CTA",
    "purpose": "길찾기 CTA을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "공간 정보에서 길찾기 CTA을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Google Maps · Mapbox"
  },
  {
    "id": 215,
    "category": "지도·위치",
    "location": "공간 정보",
    "name": "주소 자동완성",
    "purpose": "주소 자동완성을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "공간 정보에서 주소 자동완성을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Google Maps · Mapbox"
  },
  {
    "id": 216,
    "category": "지도·위치",
    "location": "공간 정보",
    "name": "현재 위치",
    "purpose": "현재 위치을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "공간 정보에서 현재 위치을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Google Maps · Mapbox"
  },
  {
    "id": 217,
    "category": "지도·위치",
    "location": "공간 정보",
    "name": "지도 레이어",
    "purpose": "지도 레이어을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "공간 정보에서 지도 레이어을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Google Maps · Mapbox"
  },
  {
    "id": 218,
    "category": "지도·위치",
    "location": "공간 정보",
    "name": "지역 필터",
    "purpose": "지역 필터을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "공간 정보에서 지역 필터을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Google Maps · Mapbox"
  },
  {
    "id": 219,
    "category": "지도·위치",
    "location": "공간 정보",
    "name": "거리 정렬",
    "purpose": "거리 정렬을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "공간 정보에서 거리 정렬을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Google Maps · Mapbox"
  },
  {
    "id": 220,
    "category": "지도·위치",
    "location": "공간 정보",
    "name": "지도 없음 상태",
    "purpose": "지도 없음 상태을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "공간 정보에서 지도 없음 상태을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Google Maps · Mapbox"
  },
  {
    "id": 221,
    "category": "알림·메시지",
    "location": "재방문 유도",
    "name": "인앱 알림",
    "purpose": "인앱 알림을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "재방문 유도에서 인앱 알림을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · OneSignal · Firebase"
  },
  {
    "id": 222,
    "category": "알림·메시지",
    "location": "재방문 유도",
    "name": "알림 배지",
    "purpose": "알림 배지을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "재방문 유도에서 알림 배지을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · OneSignal · Firebase"
  },
  {
    "id": 223,
    "category": "알림·메시지",
    "location": "재방문 유도",
    "name": "알림 센터",
    "purpose": "알림 센터을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "재방문 유도에서 알림 센터을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · OneSignal · Firebase"
  },
  {
    "id": 224,
    "category": "알림·메시지",
    "location": "재방문 유도",
    "name": "이메일 구독 설정",
    "purpose": "이메일 구독 설정을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "재방문 유도에서 이메일 구독 설정을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · OneSignal · Firebase"
  },
  {
    "id": 225,
    "category": "알림·메시지",
    "location": "재방문 유도",
    "name": "푸시 권한 안내",
    "purpose": "푸시 권한 안내을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "재방문 유도에서 푸시 권한 안내을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · OneSignal · Firebase"
  },
  {
    "id": 226,
    "category": "알림·메시지",
    "location": "재방문 유도",
    "name": "메시지 스레드",
    "purpose": "메시지 스레드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "재방문 유도에서 메시지 스레드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · OneSignal · Firebase"
  },
  {
    "id": 227,
    "category": "알림·메시지",
    "location": "재방문 유도",
    "name": "읽지 않음 표시",
    "purpose": "읽지 않음 표시을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "재방문 유도에서 읽지 않음 표시을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · OneSignal · Firebase"
  },
  {
    "id": 228,
    "category": "알림·메시지",
    "location": "재방문 유도",
    "name": "공지 배너",
    "purpose": "공지 배너을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "재방문 유도에서 공지 배너을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · OneSignal · Firebase"
  },
  {
    "id": 229,
    "category": "알림·메시지",
    "location": "재방문 유도",
    "name": "예약 알림",
    "purpose": "예약 알림을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "재방문 유도에서 예약 알림을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · OneSignal · Firebase"
  },
  {
    "id": 230,
    "category": "알림·메시지",
    "location": "재방문 유도",
    "name": "알림 비우기",
    "purpose": "알림 비우기을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "재방문 유도에서 알림 비우기을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · OneSignal · Firebase"
  },
  {
    "id": 231,
    "category": "온보딩·가이드",
    "location": "첫 사용",
    "name": "환영 화면",
    "purpose": "환영 화면을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "첫 사용에서 환영 화면을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Userflow · Framer"
  },
  {
    "id": 232,
    "category": "온보딩·가이드",
    "location": "첫 사용",
    "name": "기능 소개 슬라이드",
    "purpose": "기능 소개 슬라이드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "첫 사용에서 기능 소개 슬라이드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Userflow · Framer"
  },
  {
    "id": 233,
    "category": "온보딩·가이드",
    "location": "첫 사용",
    "name": "단계 표시",
    "purpose": "단계 표시을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "첫 사용에서 단계 표시을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Userflow · Framer"
  },
  {
    "id": 234,
    "category": "온보딩·가이드",
    "location": "첫 사용",
    "name": "체크리스트",
    "purpose": "체크리스트을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "첫 사용에서 체크리스트을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Userflow · Framer"
  },
  {
    "id": 235,
    "category": "온보딩·가이드",
    "location": "첫 사용",
    "name": "제품 투어",
    "purpose": "제품 투어을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "첫 사용에서 제품 투어을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Userflow · Framer"
  },
  {
    "id": 236,
    "category": "온보딩·가이드",
    "location": "첫 사용",
    "name": "도움말 툴팁",
    "purpose": "도움말 툴팁을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "첫 사용에서 도움말 툴팁을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Userflow · Framer"
  },
  {
    "id": 237,
    "category": "온보딩·가이드",
    "location": "첫 사용",
    "name": "첫 프로젝트 생성",
    "purpose": "첫 프로젝트 생성을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "첫 사용에서 첫 프로젝트 생성을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Userflow · Framer"
  },
  {
    "id": 238,
    "category": "온보딩·가이드",
    "location": "첫 사용",
    "name": "샘플 데이터 선택",
    "purpose": "샘플 데이터 선택을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "첫 사용에서 샘플 데이터 선택을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Userflow · Framer"
  },
  {
    "id": 239,
    "category": "온보딩·가이드",
    "location": "첫 사용",
    "name": "온보딩 완료",
    "purpose": "온보딩 완료을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "첫 사용에서 온보딩 완료을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Userflow · Framer"
  },
  {
    "id": 240,
    "category": "온보딩·가이드",
    "location": "첫 사용",
    "name": "건너뛰기 링크",
    "purpose": "건너뛰기 링크을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "첫 사용에서 건너뛰기 링크을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Userflow · Framer"
  },
  {
    "id": 241,
    "category": "도움말·지원",
    "location": "문제 해결",
    "name": "도움말 검색",
    "purpose": "도움말 검색을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "문제 해결에서 도움말 검색을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Notion · Intercom · Zendesk"
  },
  {
    "id": 242,
    "category": "도움말·지원",
    "location": "문제 해결",
    "name": "FAQ 아코디언",
    "purpose": "FAQ 아코디언을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "문제 해결에서 FAQ 아코디언을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Notion · Intercom · Zendesk"
  },
  {
    "id": 243,
    "category": "도움말·지원",
    "location": "문제 해결",
    "name": "문서 사이드바",
    "purpose": "문서 사이드바을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "문제 해결에서 문서 사이드바을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Notion · Intercom · Zendesk"
  },
  {
    "id": 244,
    "category": "도움말·지원",
    "location": "문제 해결",
    "name": "상황별 가이드",
    "purpose": "상황별 가이드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "문제 해결에서 상황별 가이드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Notion · Intercom · Zendesk"
  },
  {
    "id": 245,
    "category": "도움말·지원",
    "location": "문제 해결",
    "name": "문의 폼",
    "purpose": "문의 폼을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "문제 해결에서 문의 폼을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Notion · Intercom · Zendesk"
  },
  {
    "id": 246,
    "category": "도움말·지원",
    "location": "문제 해결",
    "name": "챗봇 상담",
    "purpose": "챗봇 상담을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "문제 해결에서 챗봇 상담을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Notion · Intercom · Zendesk"
  },
  {
    "id": 247,
    "category": "도움말·지원",
    "location": "문제 해결",
    "name": "상태 페이지 링크",
    "purpose": "상태 페이지 링크을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "문제 해결에서 상태 페이지 링크을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Notion · Intercom · Zendesk"
  },
  {
    "id": 248,
    "category": "도움말·지원",
    "location": "문제 해결",
    "name": "버그 신고",
    "purpose": "버그 신고을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "문제 해결에서 버그 신고을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Notion · Intercom · Zendesk"
  },
  {
    "id": 249,
    "category": "도움말·지원",
    "location": "문제 해결",
    "name": "기능 요청",
    "purpose": "기능 요청을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "문제 해결에서 기능 요청을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Notion · Intercom · Zendesk"
  },
  {
    "id": 250,
    "category": "도움말·지원",
    "location": "문제 해결",
    "name": "지원 티켓 상태",
    "purpose": "지원 티켓 상태을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "문제 해결에서 지원 티켓 상태을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Notion · Intercom · Zendesk"
  },
  {
    "id": 251,
    "category": "푸터·법무",
    "location": "마무리 영역",
    "name": "푸터 로고",
    "purpose": "푸터 로고을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "마무리 영역에서 푸터 로고을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Webflow · Framer"
  },
  {
    "id": 252,
    "category": "푸터·법무",
    "location": "마무리 영역",
    "name": "푸터 메뉴 그룹",
    "purpose": "푸터 메뉴 그룹을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "마무리 영역에서 푸터 메뉴 그룹을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Webflow · Framer"
  },
  {
    "id": 253,
    "category": "푸터·법무",
    "location": "마무리 영역",
    "name": "소셜 링크",
    "purpose": "소셜 링크을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "마무리 영역에서 소셜 링크을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Webflow · Framer"
  },
  {
    "id": 254,
    "category": "푸터·법무",
    "location": "마무리 영역",
    "name": "뉴스레터 입력",
    "purpose": "뉴스레터 입력을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "마무리 영역에서 뉴스레터 입력을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Webflow · Framer"
  },
  {
    "id": 255,
    "category": "푸터·법무",
    "location": "마무리 영역",
    "name": "앱 다운로드 배지",
    "purpose": "앱 다운로드 배지을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "마무리 영역에서 앱 다운로드 배지을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Webflow · Framer"
  },
  {
    "id": 256,
    "category": "푸터·법무",
    "location": "마무리 영역",
    "name": "저작권 문구",
    "purpose": "저작권 문구을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "마무리 영역에서 저작권 문구을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Webflow · Framer"
  },
  {
    "id": 257,
    "category": "푸터·법무",
    "location": "마무리 영역",
    "name": "개인정보처리방침",
    "purpose": "개인정보처리방침을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "마무리 영역에서 개인정보처리방침을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Webflow · Framer"
  },
  {
    "id": 258,
    "category": "푸터·법무",
    "location": "마무리 영역",
    "name": "이용약관",
    "purpose": "이용약관을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "마무리 영역에서 이용약관을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Webflow · Framer"
  },
  {
    "id": 259,
    "category": "푸터·법무",
    "location": "마무리 영역",
    "name": "쿠키 설정",
    "purpose": "쿠키 설정을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "마무리 영역에서 쿠키 설정을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Webflow · Framer"
  },
  {
    "id": 260,
    "category": "푸터·법무",
    "location": "마무리 영역",
    "name": "사이트맵 링크",
    "purpose": "사이트맵 링크을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "마무리 영역에서 사이트맵 링크을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Webflow · Framer"
  },
  {
    "id": 261,
    "category": "접근성·포용",
    "location": "모두를 위한 UI",
    "name": "키보드 포커스",
    "purpose": "키보드 포커스을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "모두를 위한 UI에서 키보드 포커스을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stark · axe"
  },
  {
    "id": 262,
    "category": "접근성·포용",
    "location": "모두를 위한 UI",
    "name": "건너뛰기 링크",
    "purpose": "건너뛰기 링크을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "모두를 위한 UI에서 건너뛰기 링크을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stark · axe"
  },
  {
    "id": 263,
    "category": "접근성·포용",
    "location": "모두를 위한 UI",
    "name": "고대비 모드",
    "purpose": "고대비 모드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "모두를 위한 UI에서 고대비 모드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stark · axe"
  },
  {
    "id": 264,
    "category": "접근성·포용",
    "location": "모두를 위한 UI",
    "name": "텍스트 크기 조절",
    "purpose": "텍스트 크기 조절을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "모두를 위한 UI에서 텍스트 크기 조절을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stark · axe"
  },
  {
    "id": 265,
    "category": "접근성·포용",
    "location": "모두를 위한 UI",
    "name": "스크린리더 라벨",
    "purpose": "스크린리더 라벨을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "모두를 위한 UI에서 스크린리더 라벨을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stark · axe"
  },
  {
    "id": 266,
    "category": "접근성·포용",
    "location": "모두를 위한 UI",
    "name": "대체 텍스트",
    "purpose": "대체 텍스트을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "모두를 위한 UI에서 대체 텍스트을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stark · axe"
  },
  {
    "id": 267,
    "category": "접근성·포용",
    "location": "모두를 위한 UI",
    "name": "자막 제공",
    "purpose": "자막 제공을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "모두를 위한 UI에서 자막 제공을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stark · axe"
  },
  {
    "id": 268,
    "category": "접근성·포용",
    "location": "모두를 위한 UI",
    "name": "오류 음성 안내",
    "purpose": "오류 음성 안내을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "모두를 위한 UI에서 오류 음성 안내을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stark · axe"
  },
  {
    "id": 269,
    "category": "접근성·포용",
    "location": "모두를 위한 UI",
    "name": "색상 외 상태 표시",
    "purpose": "색상 외 상태 표시을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "모두를 위한 UI에서 색상 외 상태 표시을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stark · axe"
  },
  {
    "id": 270,
    "category": "접근성·포용",
    "location": "모두를 위한 UI",
    "name": "모션 줄이기 설정",
    "purpose": "모션 줄이기 설정을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "모두를 위한 UI에서 모션 줄이기 설정을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stark · axe"
  },
  {
    "id": 271,
    "category": "성능·네트워크",
    "location": "기다림 관리",
    "name": "프리로드 표시",
    "purpose": "프리로드 표시을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "기다림 관리에서 프리로드 표시을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Lighthouse · WebPageTest · Vercel"
  },
  {
    "id": 272,
    "category": "성능·네트워크",
    "location": "기다림 관리",
    "name": "이미지 지연 로딩",
    "purpose": "이미지 지연 로딩을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "기다림 관리에서 이미지 지연 로딩을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Lighthouse · WebPageTest · Vercel"
  },
  {
    "id": 273,
    "category": "성능·네트워크",
    "location": "기다림 관리",
    "name": "저속 네트워크 안내",
    "purpose": "저속 네트워크 안내을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "기다림 관리에서 저속 네트워크 안내을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Lighthouse · WebPageTest · Vercel"
  },
  {
    "id": 274,
    "category": "성능·네트워크",
    "location": "기다림 관리",
    "name": "재연결 배너",
    "purpose": "재연결 배너을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "기다림 관리에서 재연결 배너을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Lighthouse · WebPageTest · Vercel"
  },
  {
    "id": 275,
    "category": "성능·네트워크",
    "location": "기다림 관리",
    "name": "캐시 상태",
    "purpose": "캐시 상태을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "기다림 관리에서 캐시 상태을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Lighthouse · WebPageTest · Vercel"
  },
  {
    "id": 276,
    "category": "성능·네트워크",
    "location": "기다림 관리",
    "name": "부분 새로고침",
    "purpose": "부분 새로고침을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "기다림 관리에서 부분 새로고침을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Lighthouse · WebPageTest · Vercel"
  },
  {
    "id": 277,
    "category": "성능·네트워크",
    "location": "기다림 관리",
    "name": "낙관적 업데이트",
    "purpose": "낙관적 업데이트을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "기다림 관리에서 낙관적 업데이트을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Lighthouse · WebPageTest · Vercel"
  },
  {
    "id": 278,
    "category": "성능·네트워크",
    "location": "기다림 관리",
    "name": "백그라운드 동기화",
    "purpose": "백그라운드 동기화을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "기다림 관리에서 백그라운드 동기화을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Lighthouse · WebPageTest · Vercel"
  },
  {
    "id": 279,
    "category": "성능·네트워크",
    "location": "기다림 관리",
    "name": "데이터 절약 모드",
    "purpose": "데이터 절약 모드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "기다림 관리에서 데이터 절약 모드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Lighthouse · WebPageTest · Vercel"
  },
  {
    "id": 280,
    "category": "성능·네트워크",
    "location": "기다림 관리",
    "name": "브라우저 지원 안내",
    "purpose": "브라우저 지원 안내을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "기다림 관리에서 브라우저 지원 안내을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Lighthouse · WebPageTest · Vercel"
  },
  {
    "id": 281,
    "category": "보안·권한",
    "location": "안전한 행동",
    "name": "권한 요청 모달",
    "purpose": "권한 요청 모달을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "안전한 행동에서 권한 요청 모달을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Firebase · Auth0"
  },
  {
    "id": 282,
    "category": "보안·권한",
    "location": "안전한 행동",
    "name": "API 키 마스킹",
    "purpose": "API 키 마스킹을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "안전한 행동에서 API 키 마스킹을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Firebase · Auth0"
  },
  {
    "id": 283,
    "category": "보안·권한",
    "location": "안전한 행동",
    "name": "로그인 알림",
    "purpose": "로그인 알림을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "안전한 행동에서 로그인 알림을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Firebase · Auth0"
  },
  {
    "id": 284,
    "category": "보안·권한",
    "location": "안전한 행동",
    "name": "기기 목록",
    "purpose": "기기 목록을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "안전한 행동에서 기기 목록을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Firebase · Auth0"
  },
  {
    "id": 285,
    "category": "보안·권한",
    "location": "안전한 행동",
    "name": "활성 세션",
    "purpose": "활성 세션을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "안전한 행동에서 활성 세션을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Firebase · Auth0"
  },
  {
    "id": 286,
    "category": "보안·권한",
    "location": "안전한 행동",
    "name": "민감 작업 재인증",
    "purpose": "민감 작업 재인증을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "안전한 행동에서 민감 작업 재인증을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Firebase · Auth0"
  },
  {
    "id": 287,
    "category": "보안·권한",
    "location": "안전한 행동",
    "name": "삭제 확인",
    "purpose": "삭제 확인을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "안전한 행동에서 삭제 확인을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Firebase · Auth0"
  },
  {
    "id": 288,
    "category": "보안·권한",
    "location": "안전한 행동",
    "name": "데이터 다운로드",
    "purpose": "데이터 다운로드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "안전한 행동에서 데이터 다운로드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Firebase · Auth0"
  },
  {
    "id": 289,
    "category": "보안·권한",
    "location": "안전한 행동",
    "name": "개인정보 동의 기록",
    "purpose": "개인정보 동의 기록을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "안전한 행동에서 개인정보 동의 기록을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Firebase · Auth0"
  },
  {
    "id": 290,
    "category": "보안·권한",
    "location": "안전한 행동",
    "name": "보안 활동 로그",
    "purpose": "보안 활동 로그을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "안전한 행동에서 보안 활동 로그을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Firebase · Auth0"
  },
  {
    "id": 291,
    "category": "SEO·공유",
    "location": "외부 발견",
    "name": "페이지 제목",
    "purpose": "페이지 제목을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "외부 발견에서 페이지 제목을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Google Search Console · next-sitemap"
  },
  {
    "id": 292,
    "category": "SEO·공유",
    "location": "외부 발견",
    "name": "메타 설명",
    "purpose": "메타 설명을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "외부 발견에서 메타 설명을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Google Search Console · next-sitemap"
  },
  {
    "id": 293,
    "category": "SEO·공유",
    "location": "외부 발견",
    "name": "공유 미리보기",
    "purpose": "공유 미리보기을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "외부 발견에서 공유 미리보기을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Google Search Console · next-sitemap"
  },
  {
    "id": 294,
    "category": "SEO·공유",
    "location": "외부 발견",
    "name": "소셜 공유 버튼",
    "purpose": "소셜 공유 버튼을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "외부 발견에서 소셜 공유 버튼을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Google Search Console · next-sitemap"
  },
  {
    "id": 295,
    "category": "SEO·공유",
    "location": "외부 발견",
    "name": "복사 가능한 URL",
    "purpose": "복사 가능한 URL을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "외부 발견에서 복사 가능한 URL을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Google Search Console · next-sitemap"
  },
  {
    "id": 296,
    "category": "SEO·공유",
    "location": "외부 발견",
    "name": "구조화 데이터 안내",
    "purpose": "구조화 데이터 안내을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "외부 발견에서 구조화 데이터 안내을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Google Search Console · next-sitemap"
  },
  {
    "id": 297,
    "category": "SEO·공유",
    "location": "외부 발견",
    "name": "사이트맵 링크",
    "purpose": "사이트맵 링크을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "외부 발견에서 사이트맵 링크을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Google Search Console · next-sitemap"
  },
  {
    "id": 298,
    "category": "SEO·공유",
    "location": "외부 발견",
    "name": "404 페이지",
    "purpose": "404 페이지을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "외부 발견에서 404 페이지을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Google Search Console · next-sitemap"
  },
  {
    "id": 299,
    "category": "SEO·공유",
    "location": "외부 발견",
    "name": "리디렉션 안내",
    "purpose": "리디렉션 안내을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "외부 발견에서 리디렉션 안내을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Google Search Console · next-sitemap"
  },
  {
    "id": 300,
    "category": "SEO·공유",
    "location": "외부 발견",
    "name": "검색 노출 상태",
    "purpose": "검색 노출 상태을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "외부 발견에서 검색 노출 상태을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Google Search Console · next-sitemap"
  },
  {
    "id": 301,
    "category": "모바일·반응형",
    "location": "작은 화면",
    "name": "모바일 헤더",
    "purpose": "모바일 헤더을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "작은 화면에서 모바일 헤더을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stitch · React Native"
  },
  {
    "id": 302,
    "category": "모바일·반응형",
    "location": "작은 화면",
    "name": "하단 탭 바",
    "purpose": "하단 탭 바을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "작은 화면에서 하단 탭 바을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stitch · React Native"
  },
  {
    "id": 303,
    "category": "모바일·반응형",
    "location": "작은 화면",
    "name": "햄버거 메뉴",
    "purpose": "햄버거 메뉴을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "작은 화면에서 햄버거 메뉴을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stitch · React Native"
  },
  {
    "id": 304,
    "category": "모바일·반응형",
    "location": "작은 화면",
    "name": "모바일 드로어",
    "purpose": "모바일 드로어을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "작은 화면에서 모바일 드로어을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stitch · React Native"
  },
  {
    "id": 305,
    "category": "모바일·반응형",
    "location": "작은 화면",
    "name": "스와이프 카드",
    "purpose": "스와이프 카드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "작은 화면에서 스와이프 카드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stitch · React Native"
  },
  {
    "id": 306,
    "category": "모바일·반응형",
    "location": "작은 화면",
    "name": "풀스크린 모달",
    "purpose": "풀스크린 모달을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "작은 화면에서 풀스크린 모달을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stitch · React Native"
  },
  {
    "id": 307,
    "category": "모바일·반응형",
    "location": "작은 화면",
    "name": "모바일 필터",
    "purpose": "모바일 필터을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "작은 화면에서 모바일 필터을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stitch · React Native"
  },
  {
    "id": 308,
    "category": "모바일·반응형",
    "location": "작은 화면",
    "name": "터치 스테퍼",
    "purpose": "터치 스테퍼을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "작은 화면에서 터치 스테퍼을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stitch · React Native"
  },
  {
    "id": 309,
    "category": "모바일·반응형",
    "location": "작은 화면",
    "name": "가상 키보드 대응",
    "purpose": "가상 키보드 대응을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "작은 화면에서 가상 키보드 대응을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stitch · React Native"
  },
  {
    "id": 310,
    "category": "모바일·반응형",
    "location": "작은 화면",
    "name": "모바일 고정 CTA",
    "purpose": "모바일 고정 CTA을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "작은 화면에서 모바일 고정 CTA을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Stitch · React Native"
  },
  {
    "id": 311,
    "category": "내부 도구·관리",
    "location": "운영자 화면",
    "name": "관리자 사이드바",
    "purpose": "관리자 사이드바을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "운영자 화면에서 관리자 사이드바을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Retool · Figma · v0"
  },
  {
    "id": 312,
    "category": "내부 도구·관리",
    "location": "운영자 화면",
    "name": "데이터 CRUD 표",
    "purpose": "데이터 CRUD 표을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "운영자 화면에서 데이터 CRUD 표을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Retool · Figma · v0"
  },
  {
    "id": 313,
    "category": "내부 도구·관리",
    "location": "운영자 화면",
    "name": "일괄 선택",
    "purpose": "일괄 선택을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "운영자 화면에서 일괄 선택을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Retool · Figma · v0"
  },
  {
    "id": 314,
    "category": "내부 도구·관리",
    "location": "운영자 화면",
    "name": "일괄 작업",
    "purpose": "일괄 작업을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "운영자 화면에서 일괄 작업을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Retool · Figma · v0"
  },
  {
    "id": 315,
    "category": "내부 도구·관리",
    "location": "운영자 화면",
    "name": "상태 변경 드롭다운",
    "purpose": "상태 변경 드롭다운을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "운영자 화면에서 상태 변경 드롭다운을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Retool · Figma · v0"
  },
  {
    "id": 316,
    "category": "내부 도구·관리",
    "location": "운영자 화면",
    "name": "승인 대기 목록",
    "purpose": "승인 대기 목록을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "운영자 화면에서 승인 대기 목록을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Retool · Figma · v0"
  },
  {
    "id": 317,
    "category": "내부 도구·관리",
    "location": "운영자 화면",
    "name": "감사 로그",
    "purpose": "감사 로그을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "운영자 화면에서 감사 로그을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Retool · Figma · v0"
  },
  {
    "id": 318,
    "category": "내부 도구·관리",
    "location": "운영자 화면",
    "name": "권한별 메뉴",
    "purpose": "권한별 메뉴을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "운영자 화면에서 권한별 메뉴을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Retool · Figma · v0"
  },
  {
    "id": 319,
    "category": "내부 도구·관리",
    "location": "운영자 화면",
    "name": "관리자 검색",
    "purpose": "관리자 검색을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "운영자 화면에서 관리자 검색을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Retool · Figma · v0"
  },
  {
    "id": 320,
    "category": "내부 도구·관리",
    "location": "운영자 화면",
    "name": "관리자 빈 상태",
    "purpose": "관리자 빈 상태을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "운영자 화면에서 관리자 빈 상태을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Retool · Figma · v0"
  },
  {
    "id": 321,
    "category": "실험·개선",
    "location": "제품 최적화",
    "name": "A/B 테스트 배너",
    "purpose": "A/B 테스트 배너을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "제품 최적화에서 A/B 테스트 배너을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · PostHog · Hotjar"
  },
  {
    "id": 322,
    "category": "실험·개선",
    "location": "제품 최적화",
    "name": "실험 변형 선택",
    "purpose": "실험 변형 선택을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "제품 최적화에서 실험 변형 선택을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · PostHog · Hotjar"
  },
  {
    "id": 323,
    "category": "실험·개선",
    "location": "제품 최적화",
    "name": "피드백 위젯",
    "purpose": "피드백 위젯을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "제품 최적화에서 피드백 위젯을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · PostHog · Hotjar"
  },
  {
    "id": 324,
    "category": "실험·개선",
    "location": "제품 최적화",
    "name": "설문 모달",
    "purpose": "설문 모달을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "제품 최적화에서 설문 모달을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · PostHog · Hotjar"
  },
  {
    "id": 325,
    "category": "실험·개선",
    "location": "제품 최적화",
    "name": "사용성 질문",
    "purpose": "사용성 질문을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "제품 최적화에서 사용성 질문을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · PostHog · Hotjar"
  },
  {
    "id": 326,
    "category": "실험·개선",
    "location": "제품 최적화",
    "name": "전환 이벤트",
    "purpose": "전환 이벤트을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "제품 최적화에서 전환 이벤트을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · PostHog · Hotjar"
  },
  {
    "id": 327,
    "category": "실험·개선",
    "location": "제품 최적화",
    "name": "세션 리플레이 링크",
    "purpose": "세션 리플레이 링크을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "제품 최적화에서 세션 리플레이 링크을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · PostHog · Hotjar"
  },
  {
    "id": 328,
    "category": "실험·개선",
    "location": "제품 최적화",
    "name": "실험 결과 카드",
    "purpose": "실험 결과 카드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "제품 최적화에서 실험 결과 카드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · PostHog · Hotjar"
  },
  {
    "id": 329,
    "category": "실험·개선",
    "location": "제품 최적화",
    "name": "버전 공지",
    "purpose": "버전 공지을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "제품 최적화에서 버전 공지을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · PostHog · Hotjar"
  },
  {
    "id": 330,
    "category": "실험·개선",
    "location": "제품 최적화",
    "name": "변경 전후 비교",
    "purpose": "변경 전후 비교을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "제품 최적화에서 변경 전후 비교을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · PostHog · Hotjar"
  },
  {
    "id": 331,
    "category": "특수·인터랙션",
    "location": "차별화 경험",
    "name": "드래그 정렬",
    "purpose": "드래그 정렬을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "차별화 경험에서 드래그 정렬을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Framer · GSAP"
  },
  {
    "id": 332,
    "category": "특수·인터랙션",
    "location": "차별화 경험",
    "name": "리사이즈 패널",
    "purpose": "리사이즈 패널을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "차별화 경험에서 리사이즈 패널을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Framer · GSAP"
  },
  {
    "id": 333,
    "category": "특수·인터랙션",
    "location": "차별화 경험",
    "name": "단축키 안내",
    "purpose": "단축키 안내을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "차별화 경험에서 단축키 안내을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Framer · GSAP"
  },
  {
    "id": 334,
    "category": "특수·인터랙션",
    "location": "차별화 경험",
    "name": "명령 팔레트",
    "purpose": "명령 팔레트을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "차별화 경험에서 명령 팔레트을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Framer · GSAP"
  },
  {
    "id": 335,
    "category": "특수·인터랙션",
    "location": "차별화 경험",
    "name": "컨텍스트 메뉴",
    "purpose": "컨텍스트 메뉴을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "차별화 경험에서 컨텍스트 메뉴을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Framer · GSAP"
  },
  {
    "id": 336,
    "category": "특수·인터랙션",
    "location": "차별화 경험",
    "name": "비교 슬라이더",
    "purpose": "비교 슬라이더을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "차별화 경험에서 비교 슬라이더을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Framer · GSAP"
  },
  {
    "id": 337,
    "category": "특수·인터랙션",
    "location": "차별화 경험",
    "name": "스크롤 스냅",
    "purpose": "스크롤 스냅을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "차별화 경험에서 스크롤 스냅을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Framer · GSAP"
  },
  {
    "id": 338,
    "category": "특수·인터랙션",
    "location": "차별화 경험",
    "name": "인터랙티브 타임라인",
    "purpose": "인터랙티브 타임라인을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "차별화 경험에서 인터랙티브 타임라인을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Framer · GSAP"
  },
  {
    "id": 339,
    "category": "특수·인터랙션",
    "location": "차별화 경험",
    "name": "3D 제품 뷰어",
    "purpose": "3D 제품 뷰어을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "차별화 경험에서 3D 제품 뷰어을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Framer · GSAP"
  },
  {
    "id": 340,
    "category": "특수·인터랙션",
    "location": "차별화 경험",
    "name": "캔버스 노드 편집",
    "purpose": "캔버스 노드 편집을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "차별화 경험에서 캔버스 노드 편집을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Figma · Framer · GSAP"
  },
  {
    "id": 341,
    "category": "사업·마케팅",
    "location": "성장 화면",
    "name": "리드 수집 바",
    "purpose": "리드 수집 바을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "성장 화면에서 리드 수집 바을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · HubSpot · Webflow"
  },
  {
    "id": 342,
    "category": "사업·마케팅",
    "location": "성장 화면",
    "name": "리드 자격 질문",
    "purpose": "리드 자격 질문을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "성장 화면에서 리드 자격 질문을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · HubSpot · Webflow"
  },
  {
    "id": 343,
    "category": "사업·마케팅",
    "location": "성장 화면",
    "name": "추천인 코드",
    "purpose": "추천인 코드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "성장 화면에서 추천인 코드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · HubSpot · Webflow"
  },
  {
    "id": 344,
    "category": "사업·마케팅",
    "location": "성장 화면",
    "name": "파트너 배너",
    "purpose": "파트너 배너을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "성장 화면에서 파트너 배너을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · HubSpot · Webflow"
  },
  {
    "id": 345,
    "category": "사업·마케팅",
    "location": "성장 화면",
    "name": "캠페인 랜딩",
    "purpose": "캠페인 랜딩을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "성장 화면에서 캠페인 랜딩을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · HubSpot · Webflow"
  },
  {
    "id": 346,
    "category": "사업·마케팅",
    "location": "성장 화면",
    "name": "리타게팅 동의",
    "purpose": "리타게팅 동의을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "성장 화면에서 리타게팅 동의을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · HubSpot · Webflow"
  },
  {
    "id": 347,
    "category": "사업·마케팅",
    "location": "성장 화면",
    "name": "사례 다운로드",
    "purpose": "사례 다운로드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "성장 화면에서 사례 다운로드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · HubSpot · Webflow"
  },
  {
    "id": 348,
    "category": "사업·마케팅",
    "location": "성장 화면",
    "name": "웨비나 등록",
    "purpose": "웨비나 등록을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "상태·오류·완료 피드백을 함께 제공",
    "example": "성장 화면에서 웨비나 등록을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · HubSpot · Webflow"
  },
  {
    "id": 349,
    "category": "사업·마케팅",
    "location": "성장 화면",
    "name": "영업 문의 라우팅",
    "purpose": "영업 문의 라우팅을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "키보드·모바일·스크린리더까지 고려",
    "example": "성장 화면에서 영업 문의 라우팅을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · HubSpot · Webflow"
  },
  {
    "id": 350,
    "category": "사업·마케팅",
    "location": "성장 화면",
    "name": "성장 대시보드",
    "purpose": "성장 대시보드을 배치해 방문자가 필요한 행동을 빠르게 이해하고 실행하도록 돕습니다.",
    "pattern": "명확한 우선순위와 한 가지 핵심 행동",
    "example": "성장 화면에서 성장 대시보드을 사용해 정보 탐색과 다음 행동을 한 화면 안에서 연결합니다.",
    "tools": "Canva · HubSpot · Webflow"
  }
];

export const uiCatalog350 = withBilingualFields(baseUiCatalog350);
