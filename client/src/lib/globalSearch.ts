import { archiveFeed } from "./archiveFeed";
import { designSystemReferences } from "./designSystems";
import { directoryTools } from "./toolCatalog";
import { uiCatalog350 } from "./uiCatalog350";
import { skills } from "./skills";
import { workflowPrompts } from "./workflows";
import { accountingWorkflowPrompts, advancedBusinessWorkflowPrompts, excelAutomationWorkflowPrompts, extraWorkflowPrompts } from "./workflowsExtra";
import { popularTools } from "./popularTools";
import { BRAND_NAME } from "./brand";

import { withBilingualFields } from "./bilingualCatalog";

export type SearchKind = "AI 도구" | "SKILL" | "UI Guide" | "디자인 시스템" | "워크플로우" | "아카이브";
export type SearchFilter = "전체" | SearchKind | "프롬프트";
export type SearchSort = "relevance" | "popular" | "recent" | "trust";
export type SearchRecord = {
  id: string;
  kind: SearchKind;
  title: string;
  summary: string;
  meta: string;
  tags: string[];
  href: string;
  source?: string;
  updatedAt?: string;
  popularity?: number;
  trustScore?: number;
  isPrompt?: boolean;
};

const allWorkflowPrompts = [...workflowPrompts, ...extraWorkflowPrompts, ...accountingWorkflowPrompts, ...excelAutomationWorkflowPrompts, ...advancedBusinessWorkflowPrompts];
const popularRanks = new Map(popularTools.map((tool, index) => [normalizeSearchText(tool.name), popularTools.length - index]));

export function normalizeSearchText(value: string) {
  return value.normalize("NFKC").toLocaleLowerCase("ko-KR").replace(/\s+/g, " ").trim();
}

function popularityFor(title: string) {
  return popularRanks.get(normalizeSearchText(title)) ?? 0;
}

function trustFor(kind: SearchKind, source?: string) {
  const base = kind === "디자인 시스템" || kind === "아카이브" ? 3 : kind === "AI 도구" || kind === "SKILL" ? 2 : 1;
  return source ? base : Math.max(1, base - 1);
}

const makeRecordText = (record: SearchRecord) => normalizeSearchText([record.title, record.summary, record.meta, ...record.tags].join(" "));

const baseGlobalSearchRecords: SearchRecord[] = [
  ...directoryTools.map((tool) => ({
    id: `tool:${tool.slug}`,
    kind: "AI 도구" as const,
    title: tool.name,
    summary: tool.description,
    meta: `${tool.category} · ${tool.pricing}`,
    tags: [tool.category, tool.sourceCategory, ...tool.tags],
    href: `/tools#${tool.slug}`,
    source: tool.source,
    updatedAt: tool.verifiedAt,
    popularity: popularityFor(tool.name),
    trustScore: trustFor("AI 도구", tool.source),
  })),
  ...skills.map((skill) => ({
    id: `skill:${skill.slug}`,
    kind: "SKILL" as const,
    title: skill.name,
    summary: skill.summary,
    meta: `${skill.category} · ${skill.license}`,
    tags: [skill.category, ...skill.tags, ...skill.compatible],
    href: `/skills#${skill.slug}`,
    source: skill.source,
    updatedAt: skill.verifiedAt,
    popularity: 0,
    trustScore: trustFor("SKILL", skill.source),
  })),
  ...uiCatalog350.map((item) => ({
    id: `ui:${item.id}`,
    kind: "UI Guide" as const,
    title: item.name,
    summary: item.purpose,
    meta: `${item.category} · ${item.location}`,
    tags: [item.category, item.location, item.pattern, item.example, item.tools],
    href: `/ui-guide#pattern-${item.id}`,
    source: `${BRAND_NAME} UI Guide 원문 카탈로그`,
    popularity: 0,
    trustScore: trustFor("UI Guide", `${BRAND_NAME} UI Guide 원문 카탈로그`),
  })),
  ...designSystemReferences.map((system) => ({
    id: `design:${system.name}`,
    kind: "디자인 시스템" as const,
    title: system.name,
    summary: `${system.owner}의 ${system.platform} 디자인 시스템. ${system.features.join(" · ")}`,
    meta: `${system.difficulty} · ${system.platform}`,
    tags: [system.owner, system.platform, ...system.tech, ...system.features],
    href: "/ui-guide#design-system-" + normalizeSearchText(system.name).replace(/[^a-z0-9가-힣]+/g, "-"),
    source: system.url,
    popularity: 0,
    trustScore: trustFor("디자인 시스템", system.url),
  })),
  ...allWorkflowPrompts.map((workflow) => ({
    id: `workflow:${workflow.id}`,
    kind: "워크플로우" as const,
    title: workflow.title,
    summary: workflow.purpose,
    meta: `${workflow.category} · ${workflow.tools.join(" · ")}`,
    tags: [workflow.category, ...workflow.tools, workflow.background, workflow.request, workflow.output],
    href: `/workflows/${workflow.id}`,
    source: `${BRAND_NAME} 공개 프롬프트 카탈로그`,
    popularity: 0,
    trustScore: trustFor("워크플로우", `${BRAND_NAME} 공개 프롬프트 카탈로그`),
    isPrompt: true,
  })),
  ...archiveFeed.map((item) => ({
    id: `archive:${item.id}`,
    kind: "아카이브" as const,
    title: item.title,
    summary: item.summary,
    meta: `${item.organization} · ${item.type}`,
    tags: [item.type, item.organization, item.sourceDomain],
    href: "/archive",
    source: item.sourceUrl,
    updatedAt: item.publishedAt,
    popularity: 0,
    trustScore: trustFor("아카이브", item.sourceUrl),
  })),
];

export const globalSearchRecords = withBilingualFields(baseGlobalSearchRecords);

const indexedRecords = globalSearchRecords.map((record) => ({ record, text: makeRecordText(record) }));

function dateValue(record: SearchRecord) {
  if (!record.updatedAt) return 0;
  const value = Date.parse(record.updatedAt);
  return Number.isFinite(value) ? value : 0;
}

function titleCompare(left: SearchRecord, right: SearchRecord) {
  return left.title.localeCompare(right.title, "ko");
}

export function sortSearchRecords(records: SearchRecord[], sort: SearchSort = "relevance") {
  if (sort === "relevance") return records;
  return [...records].sort((left, right) => {
    if (sort === "popular") return (right.popularity ?? 0) - (left.popularity ?? 0) || (right.trustScore ?? 0) - (left.trustScore ?? 0) || titleCompare(left, right);
    if (sort === "recent") return dateValue(right) - dateValue(left) || (right.trustScore ?? 0) - (left.trustScore ?? 0) || titleCompare(left, right);
    return (right.trustScore ?? 0) - (left.trustScore ?? 0) || dateValue(right) - dateValue(left) || titleCompare(left, right);
  });
}

export function filterSearchRecords(query: string, filter: SearchFilter = "전체", sort: SearchSort = "relevance") {
  const term = normalizeSearchText(query);
  const matched = indexedRecords
    .filter(({ record, text }) => {
      const kindMatches = filter === "전체" || (filter === "프롬프트" ? record.isPrompt === true : record.kind === filter);
      return kindMatches && (!term || text.includes(term));
    })
    .map(({ record }) => record);
  return sortSearchRecords(matched, sort);
}

function suggestionScore(record: SearchRecord, term: string) {
  const title = normalizeSearchText(record.title);
  const summary = normalizeSearchText(record.summary);
  const titleScore = title === term ? 10000 : title.startsWith(term) ? 7000 : title.split(" ").some((word) => word.startsWith(term)) ? 5000 : 2000;
  return titleScore + (title.includes(term) ? 1000 : 0) + (summary.includes(term) ? 100 : 0) + (record.popularity ?? 0) + (record.trustScore ?? 0) * 10;
}

export function getSearchSuggestions(query: string, limit = 6) {
  const term = normalizeSearchText(query);
  if (!term) return [];
  const seen = new Set<string>();
  return indexedRecords
    .filter(({ text }) => text.includes(term))
    .sort((left, right) => suggestionScore(right.record, term) - suggestionScore(left.record, term))
    .map(({ record }) => record)
    .filter((record) => {
      const key = normalizeSearchText(record.title);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, limit);
}

export function getSearchTrustLabel(score = 0) {
  return score >= 3 ? "출처 확인" : score === 2 ? "검증 기록" : "참고 기록";
}

export function getSearchCounts(query = "") {
  const records = filterSearchRecords(query);
  return ["전체", "AI 도구", "SKILL", "UI Guide", "디자인 시스템", "워크플로우", "프롬프트", "아카이브"].map((label) => ({
    label,
    count: filterSearchRecords(query, label as SearchFilter).length,
  }));
}
