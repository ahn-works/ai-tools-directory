import { useMemo, useState } from "react";
import { useLocation } from "wouter";
import { Link } from "wouter";
import { ArrowUpRight, BarChart3, Boxes, BriefcaseBusiness, Check, Code2, Copy, Factory, FileText, Filter, Megaphone, Search, ShoppingCart, Sparkles, Star, Users, WalletCards, X, type LucideIcon } from "lucide-react";
import { workflowPrompts } from "@/lib/workflows";
import { accountingWorkflowPrompts, advancedBusinessWorkflowPrompts, beginnerKSkillWorkflowPrompts, excelAutomationWorkflowPrompts, extraWorkflowPrompts } from "@/lib/workflowsExtra";
import { PageFrame } from "./GuidePages";
import { BRAND_NAME } from "@/lib/brand";

const popularWorkflowTags = ["재고", "CRM", "ERP", "엑셀 자동화", "메일", "홈페이지", "데이터 분석", "경리"];


const allWorkflowPrompts = [...workflowPrompts, ...extraWorkflowPrompts, ...beginnerKSkillWorkflowPrompts, ...accountingWorkflowPrompts, ...excelAutomationWorkflowPrompts, ...advancedBusinessWorkflowPrompts];
const levelById: Record<string, "초급" | "중급" | "고급"> = {
  "mail-automation": "중급", "document-summary": "초급", "csv-analysis": "중급", "webapp-plan": "초급", "ui-design": "초급", "social-content": "초급", "youtube-seo": "초급", "research-brief": "중급", "vba-spec": "중급", "image-model": "고급", "meeting": "초급", "prompt-improve": "초급", "presentation": "초급", "customer-support": "초급", "seo-page": "중급", "release-check": "중급", "notebooklm-study": "초급", "excel-clean-columns": "초급", "excel-duplicate-check": "초급", "excel-merge-sheets": "중급", "excel-xlookup-match": "초급", "excel-date-due-alert": "초급", "excel-reminder-mail-list": "중급", "excel-vba-report": "고급", "excel-pivot-dashboard": "중급", "excel-split-files": "고급", "excel-data-validation": "초급", "excel-csv-import": "중급", "excel-formula-audit": "중급", "excel-inventory-low-stock": "초급", "excel-weekly-summary": "초급",
};
const featuredIds = new Set(["mail-automation", "webapp-plan", "csv-analysis", "ui-design", "document-summary", "sales-analysis", "email-draft"]);
const categoryTaxonomy = [
  ["영업·고객관리", "영업기회 관리", "CRM"], ["영업·고객관리", "고객지원·VOC", "고객 응대"], ["영업·고객관리", "영업기회 관리", "영업·고객관리"],
  ["재무·회계", "회계·경리", "경리·회계"], ["재무·회계", "재무 리포팅", "데이터 분석"], ["재무·회계", "재무 리포팅", "예산·실적"],
  ["구매·조달", "구매·지급", "ERP"], ["구매·조달", "거래처 관리", "공급처 관리"],
  ["생산·운영", "업무 프로세스 관리", "업무 자동화"], ["생산·운영", "업무 프로세스 관리", "고급 업무 자동화"], ["생산·운영", "업무 프로세스 관리", "협업·보고"],
  ["물류·재고", "재고 운영", "재고관리"], ["물류·재고", "재고 운영", "엑셀 자동화"], ["물류·재고", "입출고 관리", "입고·출고"],
  ["마케팅·콘텐츠", "콘텐츠 기획·제작", "콘텐츠·바이럴"], ["마케팅·콘텐츠", "캠페인·상품 마케팅", "마케팅"], ["마케팅·콘텐츠", "캠페인·상품 마케팅", "마케팅·상품"],
  ["데이터·리포팅", "데이터 정리·분석", "데이터 분석"], ["데이터·리포팅", "데이터 정리·분석", "시트·문서"], ["데이터·리포팅", "데이터 정리·분석", "엑셀 자동화"],
  ["IT·웹 제작", "요구사항·화면설계", "웹앱 제작"], ["IT·웹 제작", "요구사항·화면설계", "UI·UX 디자인"], ["IT·웹 제작", "개발·테스트·배포", "배포·운영"], ["IT·웹 제작", "개발·테스트·배포", "SEO·웹"], ["IT·웹 제작", "개발·테스트·배포", "AI·머신러닝"],
  ["문서·지식관리", "문서 작성·요약", "문서·요약"], ["문서·지식관리", "문서 작성·요약", "공문서·교정"], ["문서·지식관리", "회의·협업 기록", "문서·협업"], ["문서·지식관리", "학습·리서치", "리서치"], ["문서·지식관리", "학습·리서치", "학습·리서치"], ["문서·지식관리", "학습·리서치", "프롬프트 설계"], ["문서·지식관리", "발표·교육", "발표·교육"], ["문서·지식관리", "문서 작성·요약", "번역"],
].map(([major, middle, specific]) => ({ major, middle, specific }));
const areaMeta: { key: string; label: string; description: string; icon: LucideIcon }[] = [
  { key: "영업·고객관리", label: "영업·고객관리", description: "리드·고객·문의·후속 연락", icon: Users },
  { key: "재무·회계", label: "재무·회계", description: "경리·수금·보고·마감", icon: WalletCards },
  { key: "구매·조달", label: "구매·조달", description: "발주·거래처·지급 관리", icon: ShoppingCart },
  { key: "생산·운영", label: "생산·운영", description: "반복 업무·협업·프로세스", icon: Factory },
  { key: "물류·재고", label: "물류·재고", description: "입고·출고·재고·발주", icon: Boxes },
  { key: "마케팅·콘텐츠", label: "마케팅·콘텐츠", description: "콘텐츠·캠페인·상품 홍보", icon: Megaphone },
  { key: "데이터·리포팅", label: "데이터·리포팅", description: "엑셀·분석·대시보드", icon: BarChart3 },
  { key: "IT·웹 제작", label: "IT·웹 제작", description: "기획·화면·개발·배포", icon: Code2 },
  { key: "문서·지식관리", label: "문서·지식관리", description: "문서·회의·학습·발표", icon: FileText },
];
const roadmapByCategory: Record<string, { title: string; description: string; stages: { label: string; title: string; prompt: string; checklist: string[]; next: string }[] }> = {
  "재고관리": { title: "재고관리 업무 진행 순서", description: "재고 파일을 처음 정리할 때부터 검토·보완·반복 운영까지 한 단계씩 따라가세요.", stages: [
    { label: "01 초안", title: "현재 재고표 구조 파악", prompt: "재고 파일의 시트명·열 이름·기준일·상품코드·현재고·입고예정·출고예정 열을 확인하고, 누락·중복·단위가 다른 항목을 ‘확인 필요’로 표시해줘. 원본은 수정하지 말고 먼저 데이터 사전을 만들어줘.", checklist: ["원본 파일을 복사했나요?", "기준일과 단위를 확인했나요?", "상품코드가 중복되지 않나요?"], next: "검토 단계로 이동해 오류와 확인 질문을 정리하세요." },
    { label: "02 검토", title: "장부재고와 실제 자료 대조", prompt: "재고 파일의 상품코드별 장부재고·입출고·반품·폐기·실사수량을 대조해 일치·차이·자료 부족으로 나누고, 차이를 오류로 단정하지 말고 원인 후보와 담당자 확인 질문을 작성해줘.", checklist: ["장부 기준일과 실사일이 같은가요?", "입고·반품·폐기 자료가 빠지지 않았나요?", "차이의 원인을 추측과 사실로 구분했나요?"], next: "보완 단계에서 기준과 데이터 누락을 수정하세요." },
    { label: "03 보완", title: "안전재고·재주문 기준 보완", prompt: "최근 출고량·리드타임·안전재고·입고예정·최소주문량을 사용해 재주문점 계산에 필요한 열과 수식을 제안해줘. 보수·기준·확대 3개 시나리오를 만들고 발주 전 승인 항목을 표시해줘.", checklist: ["수요 기간과 리드타임을 적었나요?", "수식과 가정을 함께 표시했나요?", "자동 발주가 아닌 승인 단계인가요?"], next: "다음 단계에서 운영표와 알림 규칙을 만드세요." },
    { label: "04 실행 준비", title: "운영표·알림·담당자 연결", prompt: "재고 상태를 부족·주의·정상·장기재고로 표시하는 운영표를 만들고, 각 상태별 담당자·확인 기한·필요 조치·증빙 위치를 연결해줘. 자동 알림은 발송 전 검수 큐를 거치게 설계해줘.", checklist: ["상태별 기준값이 있나요?", "담당자와 기한이 비어 있지 않나요?", "알림 전 사람이 확인하나요?"], next: "반복 단계에서 주간 업데이트와 개선 기록을 운영하세요." },
    { label: "05 반복", title: "주간 검토와 개선 기록", prompt: "매주 재고 데이터의 품질·품절·과잉·발주 정확도·예외 처리 건수를 비교하고, 지난주 예측과 실제 결과의 차이·다음 주 개선 실험·변경 승인 이력을 보고서로 정리해줘.", checklist: ["지난주와 같은 기준으로 비교했나요?", "예외와 재작업 시간을 기록했나요?", "변경 전후를 되돌릴 수 있나요?"], next: "다음 주 초안 단계로 돌아가 기준일과 입력자료를 갱신하세요." },
  ] },
  "CRM": { title: "CRM 업무 진행 순서", description: "고객 자료를 정리하고 검토한 뒤 후속 행동과 반복 운영으로 연결합니다.", stages: [
    { label: "01 초안", title: "고객·거래 데이터 구조화", prompt: "CRM 자료의 고객ID·회사명·담당자·최근 접점·기회단계·다음 행동·동의상태 열을 정리하고 빈값·중복·서로 다른 표기를 표시해줘.", checklist: ["고객ID 기준이 있나요?", "동의상태를 확인했나요?", "추정과 사실을 구분했나요?"], next: "검토 단계에서 중복과 누락을 확인하세요." },
    { label: "02 검토", title: "파이프라인·고객 상태 점검", prompt: "마지막 활동일·기회단계·예상 종료일·미해결 문의를 대조해 정체 거래와 확인이 필요한 고객을 분리하고 근거를 표시해줘.", checklist: ["최근 활동 기준일이 있나요?", "금액을 임의 조정하지 않았나요?", "확인 담당자가 정해졌나요?"], next: "보완 단계에서 다음 행동과 접점 계획을 만드세요." },
    { label: "03 보완", title: "고객별 다음 행동 보완", prompt: "확인된 고객 목표와 미해결 이슈를 기준으로 고객별 다음 접점 목적·담당자·기한·필요자료를 제안하고 고객에게 확인할 질문을 분리해줘.", checklist: ["고객이 말한 사실을 근거로 했나요?", "연락 목적이 한 문장인가요?", "자동 발송하지 않나요?"], next: "다음 단계에서 캠페인 또는 갱신 계획을 실행 준비하세요." },
    { label: "04 실행 준비", title: "후속 접점·캠페인 승인", prompt: "고객군별 후속 연락 계획을 만들고 포함·제외 조건, 중복 발송 방지, 검수자, 승인 로그를 정의해줘.", checklist: ["수신 동의와 제외 조건을 확인했나요?", "중복 발송을 막았나요?", "승인 로그가 남나요?"], next: "반복 단계에서 성과를 비교하고 기준을 개선하세요." },
    { label: "05 반복", title: "성과·건강도 주간 리뷰", prompt: "접촉수·응답·문의·전환·이탈 신호를 전주와 비교하고 사실·가설·다음 실험을 나눠 CRM 운영 리뷰로 작성해줘.", checklist: ["기간과 지표 정의가 같은가요?", "인과관계를 단정하지 않았나요?", "다음 실험이 작고 측정 가능한가요?"], next: "다음 주 초안 단계에서 최신 CRM 자료를 반영하세요." },
  ] },
};
const sourceById: Record<string, string> = Object.fromEntries(allWorkflowPrompts.map((item) => [item.id, `${BRAND_NAME} 공개 프롬프트 카탈로그`]));
const roleByCategory: Record<string, string> = {
  "업무 자동화": "반복 업무를 안전하게 설계하는 업무 자동화 담당자",
  "엑셀 자동화": "엑셀과 데이터 정리를 돕는 실무 자동화 담당자",
  "데이터 분석": "데이터 품질과 근거를 먼저 확인하는 분석가",
  "문서·요약": "핵심 내용을 정확하게 정리하는 문서 편집자",
  "메일·문서": "수신자와 목적에 맞는 업무 문서를 쓰는 비서",
  "공문서·교정": "공식 문서의 사실과 표현을 점검하는 편집자",
  "마케팅·상품": "고객과 채널에 맞는 콘텐츠 기획자",
  "콘텐츠·바이럴": "초보자도 이해하는 콘텐츠 제작 기획자",
};
const inputGuideByCategory: Record<string, string> = {
  "엑셀 자동화": "파일명·시트명·열 이름·기준일·샘플 3~5행·원하는 결과",
  "데이터 분석": "파일명·분석 기간·열 정의·비교 기준·알고 싶은 질문 3개",
  "메일·문서": "수신자·관계·목적·핵심 사실·톤·길이·반드시 넣을 내용",
  "공문서·교정": "문서 종류·독자·원문·법령/정책 기준·변경 금지 항목",
  "마케팅·상품": "타깃·채널·제품 정보·고객 문제·브랜드 톤·금지 표현",
};
const getLevel = (item: (typeof allWorkflowPrompts)[number]): "초급" | "중급" | "고급" => levelById[item.id] || (["CRM", "ERP", "고급 업무 자동화", "재고관리"].includes(item.category) ? "고급" : "초급");
const buildPrompt = (item: (typeof allWorkflowPrompts)[number]) => {
  const role = roleByCategory[item.category] || `${item.category} 업무를 돕는 실무 보조자`;
  const inputs = inputGuideByCategory[item.category] || "업무 목적·대상·현재 상황·사용할 자료·기한·원하는 결과";
  return `역할: 당신은 ${role}입니다. 모르는 내용은 추측하지 말고 확인 질문으로 남겨주세요.\n\n목적: ${item.purpose}\n\n맥락: ${item.background}\n\n입력자료: 다음 정보를 먼저 채워 넣겠습니다 — ${inputs}.\n\n작업 순서:\n1. 입력자료의 누락·형식 오류·서로 맞지 않는 값을 먼저 점검하세요.\n2. 확인된 자료만 사용해 아래 요청을 처리하세요: ${item.request}\n3. 판단이 필요한 부분과 사실로 확인된 부분을 분리하세요.\n4. 결과를 만든 뒤 검수표와 추가 확인 질문을 제시하세요.\n\n제약: ${item.constraints}\n\n결과 형식: ${item.output}\n\n검수 기준: ${item.review}\n\n안전 원칙: ${item.caution}`;
};

function WorkflowRoadmap({ category, copied, onCopy }: { category: string; copied: string | null; onCopy: (id: string, prompt: string) => void }) {
  const fallback = { title: `${category} 업무 진행 순서`, description: "업무 자료를 준비하고 초안부터 반복 개선까지 한 단계씩 진행하세요.", stages: [
    { label: "01 초안", title: "자료와 목표 정리", prompt: `${category} 업무의 목적·대상·현재 상황·입력자료·원하는 결과를 정리하고 누락된 정보를 질문 목록으로 만들어줘.`, checklist: ["목표가 한 문장인가요?", "입력자료의 기준일이 있나요?", "모르는 정보는 질문으로 남겼나요?"], next: "검토 단계에서 자료와 결과를 대조하세요." },
    { label: "02 검토", title: "사실·누락·오류 점검", prompt: `아래 ${category} 업무 초안을 원본 자료와 대조해 사실·추정·누락·오류 가능성을 구분하고 확인 질문을 작성해줘.`, checklist: ["원본과 숫자·이름·날짜를 대조했나요?", "추정과 사실을 나눴나요?", "담당자 확인 항목이 있나요?"], next: "보완 단계에서 수정 규칙과 결과 형식을 정하세요." },
    { label: "03 보완", title: "결과 형식과 제약 보완", prompt: `${category} 업무 결과를 실제 사용자가 바로 이해하도록 표·체크리스트·다음 행동 형식으로 보완하고, 하지 말아야 할 것과 검수 기준을 추가해줘.`, checklist: ["출력 형식이 정해졌나요?", "금지사항이 적혀 있나요?", "검수 기준이 측정 가능한가요?"], next: "다음 단계에서 담당자·기한·승인 흐름을 연결하세요." },
    { label: "04 실행 준비", title: "실행·승인·기록 연결", prompt: `${category} 업무의 결과를 실행하기 전에 담당자·기한·승인자·증빙·로그·롤백 방법을 정리해줘. 외부 발송·수정·삭제는 승인 전 실행하지 않도록 해줘.`, checklist: ["실행 전 승인자가 있나요?", "변경 로그가 남나요?", "실패 시 되돌릴 수 있나요?"], next: "반복 단계에서 결과를 비교하고 기준을 개선하세요." },
    { label: "05 반복", title: "다음 회차 개선 기록", prompt: `지난 ${category} 업무 결과와 실제 결과를 비교해 잘된 점·오류·재작업·다음 실험을 정리하고 다음 회차 프롬프트를 개선해줘.`, checklist: ["전 회차와 같은 기준인가요?", "오류와 재작업을 기록했나요?", "다음 실험이 작고 측정 가능한가요?"], next: "다음 주 초안 단계로 돌아가 최신 자료를 반영하세요." },
  ] };
  const roadmap = roadmapByCategory[category] || fallback;
  const [stageIndex, setStageIndex] = useState(0);
  const stage = roadmap.stages[stageIndex];
  const nextPrompts = stageIndex === 1 ? [
    `${category} 업무의 2단계 검토에서 확인된 사실만 사용해 다음 기능을 추가해줘: 입력 조건 필터, 결과 비교표, 빈 상태·오류 상태, 확인 필요 배지. 먼저 화면 목록과 데이터 항목을 정리하고 샘플로 작동시켜줘.`,
    `${category}가 여행·추천 웹앱이라면 맛집 탭(거리·가격대·대표 메뉴·영업시간·공식 링크), 옷 스타일 탭(날씨·TPO·색상·예산), 즐겨찾기와 다시 추천 기능을 추가해줘. 실제 정보와 샘플 정보를 구분하고 공식 확인 필요를 표시해줘.`,
    `${category} 업무의 검토 결과를 반영하는 3단계 보완 프롬프트를 만들어줘. 기존 기능은 유지하고 사용자 입력·필터·추천 카드·저장 버튼을 추가하되, 숫자·날짜·출처가 맞지 않으면 결과를 만들지 말고 확인 질문을 보여줘.`,
  ] : [
    `${category} 업무 결과를 초보자가 바로 쓰도록 입력·결과·오류·빈 상태 화면을 나눈 웹앱 기능 목록으로 만들어줘.`,
    `${category} 업무의 다음 단계를 위해 결과에 필터·비교·저장·다시 추천 기능을 추가하고, 무엇을 검토해야 하는지 체크리스트로 만들어줘.`,
    `${category} 업무를 반복할 때 담당자·승인자·기한·기록·실패 시 되돌리기를 포함한 실행 준비 체크리스트를 만들어줘.`,
  ];
  const promptId = `roadmap-${category}-${stageIndex}`;
  return <section className="workflow-roadmap"><div className="roadmap-heading"><div><span className="workflow-kicker"><Sparkles size={15} /> 업무 진행 로드맵</span><h2>{roadmap.title}</h2><p>{roadmap.description}</p></div><span className="roadmap-progress">{stageIndex + 1} / {roadmap.stages.length}</span></div><div className="roadmap-steps">{roadmap.stages.map((item, index) => <button key={item.label} className={index === stageIndex ? "is-active" : index < stageIndex ? "is-done" : ""} onClick={() => setStageIndex(index)}><b>{item.label}</b><span>{item.title}</span></button>)}</div><div className="roadmap-work"><div className="roadmap-prompt"><span className="roadmap-label">이번 단계에서 복사할 프롬프트</span><h3>{stage.title}</h3><p>{stage.prompt}</p><button onClick={() => onCopy(promptId, stage.prompt)}>{copied === promptId ? "복사됨" : "프롬프트 복사"}</button></div><div className="roadmap-review"><span className="roadmap-label">검토 체크리스트</span>{stage.checklist.map((check) => <label key={check}><input type="checkbox" /> <span>{check}</span></label>)}<strong>다음 단계</strong><p>{stage.next}</p></div></div>{stageIndex > 0 && <div className="roadmap-next-recommendations"><div className="roadmap-recommendation-head"><span className="roadmap-label">{stage.label} 완료 후 다음 작업</span><h3>추천 기능과 다음 프롬프트</h3><p>{stageIndex === 1 ? "2단계 검토에서 확인한 내용을 반영해 맛집·옷 스타일·필터·저장 같은 기능을 골라 3단계 보완으로 넘어가세요." : "현재 단계 결과를 확인했다면 하나를 골라 다음 단계로 이어가세요. 아래 문장은 그대로 복사해 붙여 넣을 수 있습니다."}</p></div><div className="roadmap-recommendation-grid">{nextPrompts.map((prompt, index) => <article key={prompt}><b>추천 {index + 1}</b><p>{prompt}</p><button onClick={() => onCopy(`${promptId}-recommend-${index}`, prompt)}>{copied === `${promptId}-recommend-${index}` ? "복사됨" : "프롬프트 복사"}</button></article>)}</div></div>}</section>;
}

export default function WorkflowsPage() {
  const [, navigate] = useLocation();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("전체");
  const [majorCategory, setMajorCategory] = useState("전체");
  const [middleCategory, setMiddleCategory] = useState("전체");
  const [level, setLevel] = useState("전체");
  const [scope, setScope] = useState("추천");
  const [limit, setLimit] = useState("20");
  const [copied, setCopied] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>(() => { try { return JSON.parse(localStorage.getItem("ai100-workflow-favorites") || "[]"); } catch { return []; } });
  const [favoriteOnly, setFavoriteOnly] = useState(false);
  const categories = ["전체", ...Array.from(new Set(allWorkflowPrompts.map((item) => item.category)))];
  const majorCategories = ["전체", ...Array.from(new Set(categoryTaxonomy.map((item) => item.major)))];
  const middleCategories = ["전체", ...Array.from(new Set(categoryTaxonomy.filter((item) => majorCategory === "전체" || item.major === majorCategory).map((item) => item.middle)))];
  const specificCategories = ["전체", ...Array.from(new Set(categoryTaxonomy.filter((item) => (majorCategory === "전체" || item.major === majorCategory) && (middleCategory === "전체" || item.middle === middleCategory)).map((item) => item.specific)))];
  const filtered = useMemo(() => { const term = query.trim().toLowerCase(); const base = allWorkflowPrompts.filter((item) => { const matchesScope = scope === "전체" || (scope === "추천" && featuredIds.has(item.id)) || (scope === "공개 카탈로그" && sourceById[item.id]); const matchesFavorite = !favoriteOnly || favorites.includes(item.id); const matchesLevel = level === "전체" || getLevel(item) === level; const matchesCategory = category === "전체" || item.category === category; const hierarchies = categoryTaxonomy.filter((entry) => entry.specific === item.category); const matchesMajor = majorCategory === "전체" || hierarchies.some((entry) => entry.major === majorCategory); const matchesMiddle = middleCategory === "전체" || hierarchies.some((entry) => entry.middle === middleCategory); const matchesQuery = !term || [item.title, item.category, item.tools.join(" "), item.purpose].join(" ").toLowerCase().includes(term); return matchesScope && matchesLevel && matchesCategory && matchesMajor && matchesMiddle && matchesQuery && matchesFavorite; }); return limit === "전체" ? base : base.slice(0, Number(limit));   }, [category, favoriteOnly, favorites, level, limit, majorCategory, middleCategory, query, scope]);
  const copyPrompt = async (id: string, prompt: string) => { await navigator.clipboard?.writeText(prompt); setCopied(id); window.setTimeout(() => setCopied(null), 1600); };
  const reset = () => { setQuery(""); setCategory("전체"); setMajorCategory("전체"); setMiddleCategory("전체"); setLevel("전체"); setScope("추천"); setLimit("20"); setFavoriteOnly(false); };
  const toggleFavorite = (id: string) => { const next = favorites.includes(id) ? favorites.filter((value) => value !== id) : [...favorites, id]; setFavorites(next); localStorage.setItem("ai100-workflow-favorites", JSON.stringify(next)); };
  const openWorkflow = (id: string) => navigate(`/workflows/${id}`);
  return <PageFrame active="/workflows" kicker="WORKFLOW PROMPT LAB / START HERE" title={<>어떤 일을<br /><em>하고 있나요?</em></>}><section className="workflow-lead"><div><div className="workflow-location"><span>업무 찾기</span><b>업무 목록</b></div><span className="workflow-kicker"><Sparkles size={15} /> AI에게 일하는 법을 가르치기</span><p>도구 이름부터 고르지 말고, 먼저 하려는 일을 고르세요. 목적·역할·맥락·입력자료·단계·제약·결과 형식을 채우면 AI가 더 정확하게 도와줍니다.</p><small className="workflow-reference">작성 구조 참고: <a href="https://wikidocs.net/340811" target="_blank" rel="noreferrer">프롬프트 작성법</a> · <a href="https://wikidocs.net/340813" target="_blank" rel="noreferrer">문서 업무</a> · <a href="https://wikidocs.net/340814" target="_blank" rel="noreferrer">데이터 분석</a> · <a href="https://wikidocs.net/book/19558" target="_blank" rel="noreferrer">책 전체 보기</a></small></div><div className="workflow-stat"><strong>{allWorkflowPrompts.length}</strong><span>실전 업무 프롬프트</span></div></section><section className="prompt-method"><div><span>01</span><strong>목적</strong><small>무엇을 이루려는가</small></div><i>→</i><div><span>02</span><strong>배경</strong><small>AI가 알아야 할 상황</small></div><i>→</i><div><span>03</span><strong>요청사항</strong><small>무엇을 해달라는가</small></div><i>→</i><div><span>04</span><strong>제약</strong><small>하지 말아야 할 것</small></div><i>→</i><div><span>05</span><strong>결과</strong><small>어떤 형태로 받을까</small></div></section><WorkflowRoadmap category={category !== "전체" ? category : "웹앱 제작"} copied={copied} onCopy={copyPrompt} /><section className="workflow-discovery"><div className="workflow-discovery-title"><span>빠른 검색</span><strong>자주 찾는 업무를 바로 선택하세요.</strong></div><label className="workflow-search-spotlight"><Search size={20} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="업무명, 결과물, 도구로 검색해보세요" aria-label="업무 빠른 검색" /><kbd>⌘ K</kbd></label><div className="workflow-popular-tags"><span>인기 업무</span>{popularWorkflowTags.map((tag) => <button key={tag} className={query === tag ? "is-active" : ""} onClick={() => { setQuery(tag); setScope("전체"); setFavoriteOnly(false); }}>{tag}</button>)}</div></section><section className="workflow-browser"><div className="workflow-scope-tabs" role="tablist" aria-label="프롬프트 범위"><button className={scope === "추천" && !favoriteOnly ? "is-active" : ""} onClick={() => { setScope("추천"); setFavoriteOnly(false); }}>추천 업무 <small>{featuredIds.size}</small></button><button className={scope === "공개 카탈로그" && !favoriteOnly ? "is-active" : ""} onClick={() => { setScope("공개 카탈로그"); setFavoriteOnly(false); }}>공개 카탈로그 <small>{allWorkflowPrompts.length}</small></button><button className={scope === "전체" && !favoriteOnly ? "is-active" : ""} onClick={() => { setScope("전체"); setFavoriteOnly(false); }}>전체 보기 <small>{allWorkflowPrompts.length}</small></button><button className={favoriteOnly ? "is-active favorite-tab" : ""} onClick={() => setFavoriteOnly(true)}><Star size={13} fill="currentColor" /> 즐겨찾기 <small>{favorites.length}</small></button></div><div className="workflow-area-picker" aria-label="업무 영역 빠른 선택"><button className={`workflow-area-card ${majorCategory === "전체" ? "is-active" : ""}`} onClick={() => { setMajorCategory("전체"); setMiddleCategory("전체"); setCategory("전체"); }}><BriefcaseBusiness size={20} /><strong>전체 업무</strong><span>모든 업무 영역을 한눈에 보기</span></button>{areaMeta.map((area) => { const Icon = area.icon; return <button key={area.key} className={`workflow-area-card ${majorCategory === area.key ? "is-active" : ""}`} onClick={() => { setMajorCategory(area.key); setMiddleCategory("전체"); setCategory("전체"); }}><Icon size={20} /><strong>{area.label}</strong><span>{area.description}</span></button>; })}</div><div className="workflow-toolbar"><label className="ui-catalog-search"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="업무명이나 결과물로 검색: 미수금, 재고, 홈페이지…" aria-label="업무 프롬프트 검색" /></label><select value={majorCategory} onChange={(event) => { setMajorCategory(event.target.value); setMiddleCategory("전체"); setCategory("전체"); }} aria-label="업무 영역 선택"><option value="전체">업무 영역: 전체</option>{majorCategories.slice(1).map((item) => <option key={item}>{item}</option>)}</select><select value={middleCategory} onChange={(event) => { setMiddleCategory(event.target.value); setCategory("전체"); }} aria-label="업무 프로세스 선택"><option value="전체">업무 프로세스: 전체</option>{middleCategories.slice(1).map((item) => <option key={item}>{item}</option>)}</select><select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="세부 업무 선택"><option value="전체">세부 업무: 전체</option>{specificCategories.slice(1).map((item) => <option key={item}>{item}</option>)}</select><select value={level} onChange={(event) => setLevel(event.target.value)} aria-label="난이도 선택"><option value="전체">난이도: 전체</option><option>초급</option><option>중급</option><option>고급</option></select><select value={limit} onChange={(event) => setLimit(event.target.value)} aria-label="노출 개수 선택"><option value="20">표시: 20개</option><option value="30">표시: 30개</option><option value="50">표시: 50개</option><option value="전체">전체 표시</option></select><button className="workflow-reset" onClick={reset}><Filter size={14} /> 초기화</button></div><div className="workflow-result-meta"><span><strong>{filtered.length}</strong>개 표시 · {favoriteOnly ? "즐겨찾기" : scope} · {level === "전체" ? "모든 레벨" : level}</span>{(query || category !== "전체" || level !== "전체" || scope !== "추천" || limit !== "20") && <button onClick={reset}><X size={13} /> 조건 지우기</button>}</div><div className="workflow-grid">{filtered.map((item) => { const prompt = buildPrompt(item); return <article className="workflow-card" key={item.id} role="link" tabIndex={0} onClick={() => openWorkflow(item.id)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openWorkflow(item.id); } }}><span className="workflow-card-detail"><ArrowUpRight size={15} /> 상세 보기</span><div className="workflow-card-head"><span className="workflow-index">{String(allWorkflowPrompts.indexOf(item) + 1).padStart(2, "0")}</span><div><div className="workflow-card-labels"><span className="workflow-category">{item.category}</span><span className={`workflow-level level-${getLevel(item)}`}>{getLevel(item)}</span><button className={`workflow-favorite ${favorites.includes(item.id) ? "is-favorite" : ""}`} onClick={(event) => { event.stopPropagation(); toggleFavorite(item.id); }} aria-label={favorites.includes(item.id) ? "즐겨찾기 해제" : "즐겨찾기 추가"}><Star size={16} fill={favorites.includes(item.id) ? "currentColor" : "none"} /></button></div><h2><Link href={`/workflows/${item.id}`} className="workflow-card-link">{item.title}</Link></h2><p>{item.purpose}</p></div></div><div className="workflow-tools">{item.tools.map((tool) => <span key={tool}>{tool}</span>)}<span className="workflow-source">{sourceById[item.id]}</span></div><div className="prompt-block"><div className="prompt-label"><span>RCIF 실전 프롬프트 · 역할·맥락·지시·형식</span><button onClick={(event) => { event.stopPropagation(); copyPrompt(item.id, prompt); }} aria-label={`${item.title} 프롬프트 복사`}>{copied === item.id ? <><Check size={14} /> 복사됨</> : <><Copy size={14} /> 복사</>}</button></div><p>{prompt}</p></div></article>; })}</div>{filtered.length === 0 && <div className="workflow-empty"><strong>조건에 맞는 업무 프롬프트가 없습니다.</strong><button onClick={reset}>필터 초기화</button></div>}</section></PageFrame>;
}
