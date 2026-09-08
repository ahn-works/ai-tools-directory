import { withBilingualFields } from "./bilingualCatalog";

export type ArchiveSeedItem = {
  id: number;
  type: "contest" | "grant" | "exhibition" | "news" | "case-study";
  title: string;
  summary: string;
  organization: string;
  sourceDomain: string;
  sourceUrl: string;
  publishedAt: string;
};

export function filterArchiveSeed(items: ArchiveSeedItem[], type?: ArchiveSeedItem["type"], query = "") {
  const normalizedQuery = query.trim().toLowerCase();
  return items.filter((item) => {
    const matchesType = !type || item.type === type;
    const haystack = `${item.title} ${item.summary} ${item.organization}`.toLowerCase();
    return matchesType && (!normalizedQuery || haystack.includes(normalizedQuery));
  });
}

export function paginateArchiveItems<T>(items: T[], page: number, pageSize: number) {
  const safePageSize = Math.max(1, pageSize);
  const pages = Math.max(1, Math.ceil(items.length / safePageSize));
  const safePage = Math.min(Math.max(1, page), pages);
  return { items: items.slice((safePage - 1) * safePageSize, safePage * safePageSize), page: safePage, pages, total: items.length };
}

const baseArchiveSeed: ArchiveSeedItem[] = [
  { id: 1, type: "contest", title: "제14회 범정부 공공데이터·AI 활용 창업경진대회 통합공고", summary: "공공데이터와 인공지능을 활용한 아이디어 기획 및 제품·서비스 개발을 통해 공공데이터 기반 창업을 촉진하는 범정부 경진대회입니다.", organization: "행정안전부", sourceDomain: "mois.go.kr", sourceUrl: "https://www.mois.go.kr/frt/bbs/type013/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000006&nttId=125058", publishedAt: "2026-04-08T00:00:00Z" },
  { id: 2, type: "contest", title: "중소기업 AI 전환 우수사례 공모전 모집공고", summary: "중소기업의 AI 전환 우수사례를 발굴하고 공유하기 위한 공모전 모집공고입니다.", organization: "중소벤처기업부", sourceDomain: "mss.go.kr", sourceUrl: "https://www.mss.go.kr/site/smba/ex/bbs/View.do?cbIdx=310&bcIdx=1061253&parentSeq=1061253", publishedAt: "2025-08-28T00:00:00Z" },
  { id: 3, type: "exhibition", title: "2026 공공 AI 박람회(KPAIX)", summary: "공공 AI 솔루션·재해복구·AI 플랫폼과 클라우드·스타트업 기술 전시 및 포럼을 소개하는 공공 AI 박람회입니다.", organization: "행정안전부", sourceDomain: "mois.go.kr", sourceUrl: "https://www.mois.go.kr/frt/bbs/type010/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000008&nttId=127100", publishedAt: "2026-06-23T00:00:00Z" },
  { id: 4, type: "case-study", title: "(2026년) AI 정부 서비스 사례집", summary: "홍수예보·노동법 상담·복지 사각지대 발굴 등 공공부문 AI 활용 우수사례 16개를 소개합니다.", organization: "행정안전부·한국지능정보사회진흥원", sourceDomain: "mois.go.kr", sourceUrl: "https://www.mois.go.kr/frt/bbs/type001/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000015&nttId=124688", publishedAt: "2026-03-24T00:00:00Z" },
];

export const archiveSeed = withBilingualFields(baseArchiveSeed);
