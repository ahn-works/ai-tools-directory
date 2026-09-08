import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "ko" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
export const LANGUAGE_STORAGE_KEY = "ai-guide-language";

export function readStoredLanguage(getItem?: (key: string) => string | null): Language {
  try {
    return getItem?.(LANGUAGE_STORAGE_KEY) === "en" ? "en" : "ko";
  } catch {
    return "ko";
  }
}

/**
 * UI-only copy pairs. Catalog records are intentionally left untouched so
 * tool names, prompts, and source data remain faithful to their originals.
 */
const uiCopyPairs = [
  ["업무 찾기", "Find workflows"], ["도구 찾기", "Find tools"], ["UI 참고", "UI reference"],
  ["업무를 고르면,", "Choose a job,"], ["가지가 펼쳐집니다.", "and the branches unfold."],
  ["첨부한 기술 노트처럼 하나의 업무에서 장·개념·도구·스킬·프롬프트가 퍼져 나갑니다. 박스와 연결선을 클릭하면 해당 가지가 또렷해집니다.", "Like a technical notebook, each job branches into chapters, concepts, tools, skills, and prompts. Click a box or connector to bring that branch into focus."],
  ["반복 업무 자동화", "Repetitive task automation"], ["웹앱·바이브코딩", "Web apps and vibe coding"],
  ["콘텐츠·SNS 제작", "Content and social creation"], ["리서치·보고서", "Research and reports"],
  ["슬라이드·교육자료", "Slides and learning materials"], ["데이터 분석", "Data analysis"],
  ["실제 AI 툴", "Real AI tools"], ["재사용 SKILL", "Reusable SKILL"], ["업무 프롬프트", "Workflow prompts"],
  ["입력 자료", "Input materials"], ["검수 기준", "Review criteria"], ["다음 행동", "Next action"],
  ["작게 실행하기", "Run a small experiment"], ["선택 → 테스트 → 반복", "Choose → test → repeat"],
  ["업무를 고르면", "Choose a job"], ["업무에서", "From the job"], ["가지가 현재 업무 지도에서 강조되었습니다.", "branch is highlighted on the job map."],
  ["업무 기준으로 보기", "View by workflow"], ["업무 지도", "job map"], ["mapped nodes", "mapped nodes"],
  ["반복 단계를 줄입니다.", "Reduce repetitive steps."], ["아이디어를 작은 화면과 실제 웹앱으로 만듭니다.", "Turn ideas into small screens and real web apps."],
  ["릴스·쇼츠·카피·썸네일을 채널에 맞춥니다.", "Adapt reels, shorts, copy, and thumbnails to each channel."],
  ["자료를 비교해 출처 있는 브리핑을 만듭니다.", "Compare sources and create an evidence-based brief."],
  ["복잡한 내용을 발표 흐름과 시각 자료로 바꿉니다.", "Turn complex material into a presentation flow and visuals."],
  ["CSV·엑셀·대시보드에서 변화와 이상치를 찾습니다.", "Find changes and anomalies in CSVs, spreadsheets, and dashboards."],
  ["스킬 라이브러리", "Skill library"], ["학습 경로", "Learning path"], ["사용 원칙", "Principles"],
  ["한국형 스킬", "Korean skills"], ["한국형 스킬 모음집", "Korean skill collection"],
  ["주요 메뉴", "Main navigation"], ["Google 로그인", "Sign in with Google"], ["Google sign in", "Sign in with Google"],
  ["홈으로 돌아가기", "Back home"], ["홈으로 이동", "Go home"], ["전체 검색", "Search everything"],
  ["전체 검색 열기", "Open global search"], ["검색", "Search"], ["검색어", "Search term"],
  ["초기화", "Reset"], ["조건 지우기", "Clear filters"], ["필터", "Filters"], ["필터 초기화", "Reset filters"],
  ["상세 보기", "View details"], ["상세 패널 닫기", "Close details"], ["공식 페이지 열기", "Open official page"],
  ["공식 사이트 열기", "Open official site"], ["공식 가격 페이지", "Official pricing page"],
  ["공식 가격 페이지 미확인", "Pricing page not verified"], ["프롬프트 복사", "Copy prompt"],
  ["프롬프트를 복사했어요.", "Prompt copied."], ["복사", "Copy"], ["복사됨", "Copied"],
  ["사용 예시", "Use case"], ["어디에 쓰나요?", "Where to use it"], ["이럴 때 추천", "Recommended when"],
  ["활용 예시", "Example use"], ["연결 주제", "Related topics"], ["핵심 정보", "Key information"],
  ["무엇을 배우나요?", "What you learn"], ["토큰·비용 아끼는 팁", "Token and cost tip"],
  ["바로 쓰는 프롬프트", "Ready-to-use prompt"], ["데이터 출처", "Data source"], ["업데이트 확인일", "Last verified"],
  ["시작 난이도", "Starting difficulty"], ["기능·요금·컨텍스트 한도는 변경될 수 있습니다.", "Features, pricing, and context limits may change."],
  ["전체", "All"], ["전체 표시", "Show all"], ["모든 레벨", "All levels"], ["초급", "Beginner"],
  ["중급", "Intermediate"], ["고급", "Advanced"], ["즐겨찾기", "Favorites"], ["즐겨찾기만 보기", "Favorites only"],
  ["즐겨찾기 추가", "Add to favorites"], ["즐겨찾기 해제", "Remove from favorites"],
  ["조건에 맞는 업무 프롬프트가 없습니다.", "No workflow prompts match these filters."],
  ["조건에 맞는 도구가 없습니다.", "No tools match these filters."], ["조건에 맞는 스킬이 없습니다.", "No skills match these filters."],
  ["댓글", "Comments"], ["댓글 작성", "Write a comment"], ["댓글을 입력하세요", "Write a comment"],
  ["로그인 후 댓글을 작성할 수 있습니다.", "Sign in to leave a comment."], ["댓글이 없습니다.", "No comments yet."],
  ["로그인", "Sign in"], ["삭제", "Delete"], ["확인", "Confirm"], ["취소", "Cancel"],
  ["오류", "Error"], ["다시 시도", "Try again"], ["재시도", "Retry"], ["불러오는 중", "Loading"],
  ["로드 중", "Loading"], ["데이터 없음", "No data"], ["AI 활용 가이드", "AI usage guide"],
  ["활용 가이드", "Usage guide"], ["잠시만요, 화면을 펼치는 중입니다.", "Please wait while the page loads."],
  ["AI 도구 찾기", "Find AI tools"], ["스킬 라이브러리 보기", "Open skill library"], ["도구는 ‘무엇을 쓰는가’,", "Tools answer ‘what to use’,"],
  ["스킬은 ‘어떻게 일하는가’입니다.", "skills answer ‘how to work’."], ["원문·공식 참고", "Original / official reference"],
  ["Manus 가져오기", "Import to Manus"], ["지원·활용 도구", "Compatible tools"], ["라이선스", "License"],
  ["사용 방법", "How to use"], ["프롬프트 예시", "Prompt example"], ["스킬 검색", "Search skills"],
  ["스킬 카테고리 선택", "Select skill category"], ["스킬 소스 선택", "Select skill source"], ["필요한 스킬을", "Find the"],
  ["찾아보세요.", "skills you need."], ["어떤 스킬을", "Which skills are you"], ["찾고 있나요?", "looking for?"],
  ["실전 플레이북", "Field playbooks"], ["한국형 k-skill", "Korean k-skills"], ["현재 페이지", "Current page"],
  ["업무 영역: ", "Work area: "], ["업무 프로세스: ", "Process: "], ["세부 업무: ", "Task: "],
  ["난이도: ", "Level: "], ["표시: ", "Show: "], ["전체 업무", "All work areas"],
  ["모든 업무 영역을 한눈에 보기", "See every work area at a glance"], ["업무명이나 결과물로 검색", "Search by workflow or outcome"],
  ["초안", "Draft"], ["검토", "Review"], ["보완", "Improve"], ["다음 단계", "Next step"], ["반복", "Repeat"],
  ["상세 라이브러리 열기", "Open detailed library"], ["업무 기준으로 보기", "View by workflow"], ["연결된 노드", "Connected nodes"],
  ["이전 추천 보기", "View previous recommendation"], ["다음 추천 보기", "View next recommendation"], ["번 추천 보기", "View recommendation"],
  ["대표 AI 도구", "Featured AI tools"], ["업무 프롬프트", "Workflow prompts"], ["검색 결과", "Search results"],
  ["검색 기록", "Search history"], ["최근 검색", "Recent searches"], ["검색 결과가 없습니다.", "No search results."],
  ["아카이브", "Archive"], ["기회", "Opportunities"], ["뉴스", "News"], ["활용 사례", "Use cases"],
  ["이전", "Previous"], ["다음", "Next"], ["페이지", "Page"], ["새로고침", "Refresh"],
  ["업무를 고르면,", "Choose a job,"], ["가지가 펼쳐집니다.", "and the branches unfold."],
  ["WORK ATLAS / KNOWLEDGE MAP", "업무 아틀라스 / 지식 지도"], ["WORK TREE MIND MAP", "업무 트리 마인드맵"],
  ["CHOOSE A JOB", "업무 선택"], ["KNOWLEDGE BRANCHES", "지식 가지"], ["SELECTED NODE", "선택한 노드"], ["JOB ROOT", "업무 루트"],
  ["Real AI tools", "실제 AI 도구"], ["Reusable SKILL", "재사용 SKILL"], ["Workflow prompts", "업무 프롬프트"],
  ["Input materials", "입력 자료"], ["Review criteria", "검수 기준"], ["Next action", "다음 행동"],
  ["A HUMAN-CURATED INDEX OF AI TOOLS", "사람이 선별한 AI 도구 색인"], ["Start with", "시작은"], ["the job,", "업무부터,"], ["not the tool.", "도구가 아니라."],
  ["MAKE A DECISION", "판단하기"], ["PROMPT PLAYGROUND", "프롬프트 작업장"], ["POPULAR AI SERVICE ROLES", "주요 AI 서비스 역할"],
  ["Reduce repetitive steps.", "반복 단계를 줄입니다."], ["Turn ideas into small screens and real web apps.", "아이디어를 작은 화면과 실제 웹앱으로 만듭니다."],
  ["Compare sources and create an evidence-based brief.", "자료를 비교해 출처 있는 브리핑을 만듭니다."], ["Find changes and anomalies in CSVs, spreadsheets, and dashboards.", "CSV·엑셀·대시보드에서 변화와 이상치를 찾습니다."],
  ["View by workflow", "업무 기준으로 보기"], ["Open detailed library", "상세 라이브러리 열기"], ["View details", "상세 보기"],
] as const;

const koToEn = [...uiCopyPairs].sort(([left], [right]) => right.length - left.length);
const enToKo = koToEn.map(([ko, en]) => [en, ko] as const).sort(([left], [right]) => right.length - left.length);
const contextualUiPairs = koToEn.filter(([from]) => ["전체", "로그인", "확인", "취소", "삭제", "댓글", "필터"].includes(from));
const contextualUiPairsReverse = enToKo.filter(([from]) => ["All", "Sign in", "Confirm", "Cancel", "Delete", "Comments", "Filters"].includes(from));
const broadUiPairs = koToEn.filter(([from]) => from.length >= 3 && !contextualUiPairs.some(([contextual]) => contextual === from));
const broadUiPairsReverse = enToKo.filter(([from]) => from.length >= 3 && !contextualUiPairsReverse.some(([contextual]) => contextual === from));
const sourceByTextNode = new WeakMap<Text, string>();
const sourceByAttribute = new WeakMap<Element, Map<string, string>>();

export function translateUiText(value: string, language: Language) {
  const pairs = language === "en" ? koToEn : enToKo;
  const broadPairs = language === "en" ? broadUiPairs : broadUiPairsReverse;
  const leading = value.match(/^\s*/)?.[0] ?? "";
  const trailing = value.match(/\s*$/)?.[0] ?? "";
  const core = value.slice(leading.length, value.length - trailing.length || undefined);
  const exact = pairs.find(([from]) => from === core)?.[1];
  if (exact) return `${leading}${exact}${trailing}`;
  if (core.length > 160) return value;
  const translated = [...broadPairs, ...(language === "en" ? contextualUiPairs : contextualUiPairsReverse)].reduce((result, [from, to]) => result.split(from).join(to), core);
  return `${leading}${translated}${trailing}`;
}

function LanguageBridge({ language }: { language: Language }) {
  useEffect(() => {
    const root = document.getElementById("root");
    if (!root) return;
    const attributes = ["aria-label", "aria-description", "placeholder", "title"];

    const translateNode = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const textNode = node as Text;
        const source = sourceByTextNode.get(textNode) ?? textNode.nodeValue ?? "";
        sourceByTextNode.set(textNode, source);
        const translated = translateUiText(source, language);
        if (textNode.nodeValue !== translated) textNode.nodeValue = translated;
        return;
      }
      if (node.nodeType !== Node.ELEMENT_NODE) return;
      const element = node as Element;
      let sources = sourceByAttribute.get(element);
      if (!sources) {
        sources = new Map();
        sourceByAttribute.set(element, sources);
      }
      for (const attribute of attributes) {
        const current = element.getAttribute(attribute);
        if (current == null) continue;
        const previous = sources.get(attribute);
        const expectedPreviousTranslation = previous == null ? "" : translateUiText(previous, language);
        if (previous == null || current !== expectedPreviousTranslation) sources.set(attribute, current);
        const source = sources.get(attribute) ?? current;
        const translated = translateUiText(source, language);
        if (current !== translated) element.setAttribute(attribute, translated);
      }
      for (const child of Array.from(node.childNodes)) translateNode(child);
    };

    translateNode(root);
    const observer = new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === "characterData") translateNode(record.target);
        if (record.type === "childList") for (const node of Array.from(record.addedNodes)) translateNode(node);
        if (record.type === "attributes") translateNode(record.target);
      }
    });
    observer.observe(root, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: attributes });
    return () => observer.disconnect();
  }, [language]);
  return null;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    return readStoredLanguage(typeof localStorage === "undefined" ? undefined : (key) => localStorage.getItem(key));
  });
  const setLanguage = (next: Language) => {
    setLanguageState(next);
    try { localStorage.setItem(LANGUAGE_STORAGE_KEY, next); } catch {}
  };
  const value = useMemo(() => ({ language, setLanguage, toggleLanguage: () => setLanguage(language === "ko" ? "en" : "ko") }), [language]);
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  return <LanguageContext.Provider value={value}><LanguageBridge language={language} />{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  return <button type="button" className="language-toggle" onClick={toggleLanguage} aria-label={language === "ko" ? "Switch to English" : "한국어로 전환"} title={language === "ko" ? "Switch to English" : "한국어로 전환"}><span className={language === "ko" ? "is-active" : ""}>한국어</span><i aria-hidden="true">/</i><span className={language === "en" ? "is-active" : ""}>EN</span></button>;
}

export const languageCopy = {
  ko: { skillCollection: "한국형 스킬", internalSkills: "실전 플레이북", officialSource: "공식 출처", comments: "댓글", writeComment: "댓글 작성", loginToComment: "로그인 후 댓글을 작성할 수 있습니다.", favorite: "즐겨찾기", favoritesOnly: "즐겨찾기만 보기" },
  en: { skillCollection: "Korean Skills", internalSkills: "Field Playbooks", officialSource: "Official source", comments: "Comments", writeComment: "Write a comment", loginToComment: "Sign in to leave a comment.", favorite: "Favorite", favoritesOnly: "Favorites only" },
} as const;
