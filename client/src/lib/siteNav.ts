export const siteNav = [
  ["업무 찾기", "/workflows"],
  ["도구 찾기", "/tools"],
  ["UI 참고", "/ui-guide"],
  ["스킬 라이브러리", "/skills"],
  ["초보자 가이드", "/beginner-guide"],
] as const;

export const skillCollectionNav = {
  label: "한국형 스킬",
  mobileLabel: "한국형 스킬 모음집",
  description: "SRT·KTX·정부서비스 등",
  href: "https://github.com/NomaDamas/k-skill",
} as const;
