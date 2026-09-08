import { useState } from "react";
import { ArrowRight, Check, CircleHelp, ClipboardCheck, Copy, ExternalLink, Rocket, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { PageFrame } from "./GuideShared";

const starterSteps = [
  ["01", "문제를 한 문장으로 적기", "무엇을 줄이고 싶은지부터 적습니다. 예: 매주 반복되는 거래처 보고서 초안 작성 시간을 줄이고 싶다. 번호와 표로 정리하고, 모르는 내용은 추측하지 말고 확인 필요로 표시해 줘."],
  ["02", "결과물을 먼저 정하기", "메일, 표, 보고서, 슬라이드, 업무일지처럼 마지막에 필요한 모양을 정합니다. 번호와 표로 정리하고, 모르는 내용은 추측하지 말고 확인 필요로 표시해 줘."],
  ["03", "작은 자료로 시험하기", "민감정보를 지운 샘플 3~5건으로 먼저 실행하고 결과를 사람의 눈으로 비교합니다. 번호와 표로 정리하고, 모르는 내용은 추측하지 말고 확인 필요로 표시해 줘."],
  ["04", "검수 기준을 만들기", "빠진 내용, 숫자 오류, 출처, 말투, 개인정보 노출 여부를 체크리스트로 만듭니다. 번호와 표로 정리하고, 모르는 내용은 추측하지 말고 확인 필요로 표시해 줘."],
];

const scenarios = [
  ["업무일지", "오늘 한 일을 시간순으로 붙여 넣고 완료·진행·막힘·내일 할 일 표로 정리합니다.", "ChatGPT 채팅"],
  ["거래처 관리", "거래처별 최근 연락, 요청사항, 다음 행동을 분리하고 미확정 정보는 질문으로 남깁니다.", "ChatGPT + 스프레드시트"],
  ["슬라이드 자료", "목표·청중·발표 시간을 알려주고 슬라이드별 메시지·근거·시각자료를 구성합니다.", "Gemini Canvas + Canva"],
  ["마케팅 분석", "채널별 게시물·반응 데이터를 표로 주고 변화·가설·다음 실험을 구분합니다.", "ChatGPT 데이터 분석"],
  ["리서치 보고서", "질문과 출처 범위를 정한 뒤 자료를 모으고 주장마다 근거 링크를 붙입니다.", "Gemini Deep Research + NotebookLM"],
  ["반복 업무", "매주 같은 형식으로 만드는 메일·회의록·CSV 정리부터 초안 생성 단계만 맡깁니다.", "ChatGPT 워크플로우"],
];

const promptParts = [
  ["역할", "당신은 B2B 영업 담당자의 업무 보조자입니다."],
  ["목표", "거래처 회의 메모를 후속 연락 계획으로 바꿉니다."],
  ["자료", "아래 메모만 사용하고 없는 사실은 만들지 않습니다."],
  ["형식", "요약 3줄 → 요청사항 표 → 다음 행동 3개 순서로 작성합니다."],
  ["검토", "불확실한 내용에는 ‘확인 필요’를 붙이고 원문과 다른 숫자를 만들지 않습니다."],
];

const promptExamples = [
  ["01", "전 세계 마트 필수템", "일본, 돈키호테, 5만 원 예산", "너는 베테랑 여행 쇼핑 가이드야. [국가/마트, 예산, 선물 여부]를 받아 예산을 넘지 않는 필수템 TOP5를 추천해 줘. 제품별 이유·예상가·총액·현지어 3개를 표로 쓰고 가격·재고·면세는 공식 확인 필요라고 밝혀 줘. 마지막에 쇼핑 순서도 적어 줘. 번호와 표로 정리하고, 모르는 내용은 추측하지 말고 확인 필요로 표시해 줘."],
  ["02", "날씨 맞춤 코디", "여수, 24도/15도, 데이트룩", "너는 실용적인 퍼스널 쇼퍼야. [지역/최고·최저기온/TPO]를 받아 상의·하의·아우터·신발의 소재와 색을 제안해 줘. 일교차·바람·비 대비 준비물과 스타일링 이유를 초보자도 알게 설명해 줘. 시간대별로 벗고 입을 시점도 알려 줘. 번호와 표로 정리하고, 모르는 내용은 추측하지 말고 확인 필요로 표시해 줘."],
  ["03", "자취생 트러블슈팅", "흰 셔츠에 김치 국물", "너는 친절한 홈케어 전문가야. [문제 상황]에 맞는 집에 흔한 준비물만 고르고 1·2·3단계 행동을 시간순으로 알려 줘. 옷감 손상·화상·유해가스 위험을 점검하고 절대 금지 행동과 전문가를 부를 때도 써 줘. 각 단계의 예상 시간도 함께 적어 줘. 번호와 표로 정리하고, 모르는 내용은 추측하지 말고 확인 필요로 표시해 줘."],
  ["04", "오늘 뭐 보지?", "기묘한 이야기, 짧은 스릴러", "너는 취향 분석형 콘텐츠 추천가야. [재밌게 본 작품/장르·길이/OTT]를 받아 추천 TOP3를 제시해 줘. 제목·장르·등급·러닝타임·맞는 이유·잔인함을 표로 쓰고 현재 제공 여부는 앱에서 확인 필요라고 밝혀 줘. 스포일러는 절대 포함하지 마. 번호와 표로 정리하고, 모르는 내용은 추측하지 말고 확인 필요로 표시해 줘."],
  ["05", "갈등 사과문", "F 성향 친구에게 사과", "너는 관계를 회복시키는 대화 코치야. [갈등 원인/내 말/상대 말/선택 MBTI]를 받아 성격을 단정하지 말고 감정과 사실을 나눠 분석해 줘. 복사할 카톡 3개, 피할 표현, 대화 순서를 제안하고 강요하는 말은 빼 줘. 상대가 답하지 않을 때 기다리는 방법도 덧붙여 줘. 번호와 표로 정리하고, 모르는 내용은 추측하지 말고 확인 필요로 표시해 줘."],
  ["06", "정중한 업무 거절", "자료 요청을 모레까지", "너는 비즈니스 커뮤니케이션 전문가야. [상대/요청/현재 사정/가능 날짜]를 받아 메일 제목·격식 본문·대안 일정과 메신저용 짧은 버전을 써 줘. 이유는 간단히, 가능한 날짜는 정확히, 거짓 약속과 무례한 표현은 빼 줘. 상대가 다시 재촉할 때 보낼 한 문장도 추가해 줘. 번호와 표로 정리하고, 모르는 내용은 추측하지 말고 확인 필요로 표시해 줘."],
  ["07", "3줄 요약", "기사·보고서 붙여넣기", "너는 문서 핵심을 뽑는 분석가야. 아래 원문만 사용해 핵심 사실·수치·맥락을 글머리표 3줄로 요약하고 실행 결론 1줄을 써 줘. 숫자·이름·조건을 바꾸지 말고 추측은 ‘원문에 없음’이라고 표시해 줘. 마지막에 추가로 확인할 질문 2개도 적어 줘.\n[본문 붙여넣기] 번호와 표로 정리하고, 모르는 내용은 추측하지 말고 확인 필요로 표시해 줘."],
  ["08", "즉석 동화", "토끼 토토, 우주 공룡 마을", "너는 아이에게 읽어 주는 따뜻한 동화 작가야. [주인공/배경/교훈/아이 나이]를 받아 3분 분량 제목·본문·마무리 질문 2개를 써 줘. ‘~했어요’ 말투를 쓰고 공포·폭력·차별 없이 교훈이 자연스럽게 드러나게 해 줘. 등장인물의 대사를 넣어 소리 내어 읽기 쉽게 해 줘. 번호와 표로 정리하고, 모르는 내용은 추측하지 말고 확인 필요로 표시해 줘."],
  ["09", "집에서 20분 운동", "30대 직장인, 하체", "너는 초보자 안전을 우선하는 운동 코치야. [나이대/장소/시간/타깃/통증]을 받아 3분 준비운동, 메인 운동의 세트·횟수·휴식, 마무리를 시간표로 짜 줘. 층간소음과 자세 팁, 통증·어지럼 시 중단 안내를 반드시 넣어 줘. 대체 동작과 다음날 쉬는 기준도 적어 줘. 번호와 표로 정리하고, 모르는 내용은 추측하지 말고 확인 필요로 표시해 줘."],
  ["10", "쇼츠·릴스 제목", "강아지가 고양이 흉내", "너는 숏폼 전문 카피라이터야. [영상 내용/분위기/전달 사실]을 받아 호기심·도발·유머·정보·직관형 제목을 1개씩 써 줘. 실제 영상과 다른 약속·혐오·거짓 과장은 제거하고 각 제목이 왜 맞는지 짧게 검토해 줘. 제목마다 어울리는 썸네일 문구도 1개씩 추천해 줘. 번호와 표로 정리하고, 모르는 내용은 추측하지 말고 확인 필요로 표시해 줘."],
];

const promptGuides: Record<string, [string, string, string, string]> = {
  "01": ["예산·추천·현지어를 한 번에 만드는 쇼핑 도우미", "국가·마트·예산·선물 여부를 입력하고 복사 버튼을 누릅니다. 무료 ChatGPT/Gemini 채팅창에 붙여 넣은 뒤 대괄호 내용을 바꿉니다.", "총액이 예산보다 작은가? 가격·재고가 ‘공식 확인 필요’로 표시됐는가? 면세 조건이 나라별로 다르다고 안내했는가?", "마트 공식 사이트와 영수증으로 가격을 확인한 뒤, 여행 앱의 쇼핑 체크리스트에 옮깁니다."],
  "02": ["기온·일교차·상황을 반영하는 코디 도우미", "지역·최고/최저 기온·목적을 바꿔 입력합니다. 답변의 옷 이름을 내 옷장에 있는 옷으로 다시 질문합니다.", "최고·최저 기온을 모두 반영했는가? 아우터와 신발이 상황에 맞는가? 비·바람 대안이 있는가?", "출발 전 공식 날씨를 다시 보고, 건강 상태나 알레르기가 있으면 옷 선택을 조정합니다."],
  "03": ["집에 있는 재료로 먼저 시도하는 생활 해결 도우미", "문제와 옷감·재료를 정확히 입력합니다. 답변 1단계를 읽고 작은 부분에 먼저 시험합니다.", "재료를 섞어 위험한 가스를 만들지 않는가? 옷감 표시를 확인했는가? 문지르거나 뜨거운 물을 쓰지 말아야 하는 상황인가?", "색 빠짐·화상·누수 위험이 있으면 즉시 멈추고 세탁소나 관리 업체에 문의합니다."],
  "04": ["취향과 시간에 맞는 콘텐츠 추천 도우미", "재미있게 본 작품·원하는 길이·사용 OTT를 입력합니다. 추천 전 현재 제공 여부를 앱에서 직접 확인합니다.", "추천작의 장르·러닝타임·등급이 맞는가? 현재 플랫폼 제공 여부를 확인했는가? 스포일러가 없는가?", "첫 작품을 10분 보고 취향과 맞는지 기록한 뒤, 맞지 않으면 ‘더 짧고 밝게’처럼 조건을 다시 줍니다."],
  "05": ["감정은 존중하고 성격 단정은 피하는 대화 도우미", "갈등 원인과 실제로 한 말을 적되 개인정보는 지웁니다. MBTI는 참고 정보로만 넣고 사과문을 고릅니다.", "상대 성격을 단정하지 않았는가? 변명·비난·압박이 없는가? 사과 뒤 상대가 답할 시간을 남겼는가?", "보내기 전 당사자가 읽는다고 생각하고 줄입니다. 위험한 갈등·폭력 상황이면 혼자 해결하지 않습니다."],
  "06": ["거절 대신 가능한 날짜를 제안하는 업무 문장 도우미", "날것의 말과 실제 가능한 날짜를 입력합니다. 메일 버전과 메신저 버전을 각각 복사합니다.", "제목·인사·이유·가능한 날짜·대안·마무리가 있는가? 과한 사과나 거짓 약속은 없는가?", "보내기 전 날짜·담당자·첨부파일을 확인하고, 중요한 업무는 상급자나 담당자에게 공유합니다."],
  "07": ["긴 글을 핵심과 행동으로 줄이는 요약 도우미", "기사나 보고서에서 비밀번호·주민번호·고객정보를 지운 뒤 붙여 넣습니다. 너무 길면 여러 부분으로 나눕니다.", "3줄과 1줄 결론을 지켰는가? 숫자·이름·조건이 원문과 같은가? 출처와 한계가 사라지지 않았는가?", "원문에서 핵심 문장을 찾아 대조하고, 의사결정 전에는 원문과 출처를 사람이 읽습니다."],
  "08": ["아이 눈높이에 맞는 안전한 잠자리 동화 도우미", "주인공·장소·교훈·아이 나이를 넣습니다. 무서운 장면을 빼 달라고 요청하고 부모가 먼저 읽습니다.", "폭력·공포·차별 표현이 없는가? 교훈을 억지로 말하지 않는가? 아이가 이해할 단어와 길이인가?", "소리 내어 읽어 보고 아이 반응을 살핍니다. 불편해하면 즉시 중단하고 다른 이야기로 바꿉니다."],
  "09": ["시간과 공간에 맞추는 초보 운동 도우미", "나이대·운동 장소·시간·목표·통증 여부를 입력합니다. 답변은 운동 처방이 아니라 참고용으로 사용합니다.", "준비운동·휴식·마무리가 있는가? 통증 시 중단 안내가 있는가? 층간소음과 자세 설명이 맞는가?", "처음에는 절반 강도로 하고 몸 상태를 봅니다. 통증·어지럼증이 있으면 즉시 멈추고 전문가에게 상담합니다."],
  "10": ["스타일별로 비교하는 짧은 영상 제목 도우미", "영상의 실제 장면·분위기·전달할 사실을 입력합니다. 다섯 제목 중 사실과 가장 가까운 것을 고릅니다.", "영상에 없는 장면을 약속하지 않았는가? 혐오·공포·거짓 과장이 없는가? 제목이 짧고 내용과 맞는가?", "게시 전 영상 첫 장면과 제목을 함께 보고 오해 여부를 확인합니다. 반응은 저장하되 다음 제목 실험에 참고만 합니다."],
};

function CopyPromptButton({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = prompt;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };
  return <button type="button" className="beginner-copy-button" onClick={copy}><Copy size={14} /> {copied ? "복사됨" : "프롬프트 복사"}</button>;
}

const reviewItems = ["원문에 없는 사실을 추가하지 않았는가?", "숫자·이름·날짜·링크를 원본과 대조했는가?", "개인정보·비밀번호·API 키를 제거했는가?", "결과물을 실제 업무에 쓰기 전에 사람이 승인했는가?", "다음번에 재사용할 프롬프트와 실패 사례를 저장했는가?"];

export function BeginnerGuidePage() {
  return (
    <PageFrame active="/beginner-guide" kicker="START HERE / PRACTICAL AI" title={<>처음이라면,<br /><em>이렇게 시작하세요.</em></>}>
      <section className="beginner-guide-page">
        <div className="beginner-guide-intro">
          <div className="beginner-guide-intro-copy">
            <span className="beginner-guide-label"><Sparkles size={15} /> 초보자용 사용 설명서</span>
            <p>유료 결제나 복잡한 자동화부터 시작하지 않습니다. 무료로 쓸 수 있는 채팅 도구에서 작은 업무 하나를 시험하고, 결과를 검토하고, 반복할 가치가 있을 때만 다음 단계로 넘어갑니다.</p>
          </div>
          <div className="beginner-guide-source">
            <span>참고한 실전 자료</span>
            <strong>ChatGPT 업무 활용과 산업별 시나리오</strong>
            <a href="https://wikidocs.net/340828" target="_blank" rel="noreferrer">위키독스 원문 보기 <ExternalLink size={13} /></a>
          </div>
        </div>

        <div className="beginner-guide-section beginner-guide-start">
          <div className="beginner-guide-section-head"><span>01 / FIRST SETUP</span><h2>처음 30분에 할 일</h2><p>도구를 고르기 전에 문제와 결과물을 정하면, 무료 도구만으로도 충분히 실험할 수 있습니다.</p></div>
          <div className="beginner-step-grid">{starterSteps.map(([num, title, text]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>

        <div className="beginner-guide-section beginner-tool-chooser">
          <div className="beginner-guide-section-head"><span>02 / TOOL CHOICE</span><h2>초보자용 도구 선택법</h2><p>처음에는 기능이 가장 많은 도구보다, 내가 원하는 결과를 가장 빨리 확인할 수 있는 도구를 고릅니다.</p></div>
          <div className="beginner-choice-grid">
            <article className="beginner-choice-card choice-chatgpt"><span>무료 ChatGPT</span><h3>대화로 정리하고 초안 만들기</h3><p>업무일지, 메일, 회의록, 표 정리, 아이디어 확장처럼 질문과 답을 주고받으며 완성하는 작업에 좋습니다.</p><ul><li>채팅에서 원문과 조건을 붙여 넣기</li><li>첫 답변을 그대로 쓰지 말고 수정 요청하기</li><li>반복하면 워크플로우나 템플릿으로 저장하기</li></ul></article>
            <article className="beginner-choice-card choice-gemini"><span>무료 Gemini</span><h3>자료를 찾아 보고용 결과로 바꾸기</h3><p>Canvas에서 글과 구조를 다듬고, Deep Research로 조사 범위를 잡고, NotebookLM에 자료를 넣어 출처 중심으로 질문합니다.</p><ul><li>조사 주제와 기간·출처 범위 먼저 지정하기</li><li>NotebookLM에는 공개 자료나 공유 가능한 파일만 넣기</li><li>슬라이드·보고서는 숫자와 출처를 사람이 확인하기</li></ul></article>
          </div>
          <div className="beginner-decision-strip"><CircleHelp size={19} /><p><strong>결정이 어려우면?</strong> 글을 같이 고치고 싶으면 ChatGPT, 여러 자료를 읽고 보고서 근거를 모으고 싶으면 Gemini부터 시험하세요. 두 도구에 같은 요청을 넣고 더 검토하기 쉬운 결과를 선택해도 됩니다.</p></div>
        </div>

        <div className="beginner-guide-section beginner-skill-choice">
          <div className="beginner-guide-section-head"><span>03 / SKILL CHOICE</span><h2>스킬은 ‘전문가의 작업 규칙’입니다</h2><p>스킬을 고를 때는 이름보다 입력 자료, 결과 형식, 검수 기준이 내 업무와 맞는지 확인합니다.</p></div>
          <div className="beginner-skill-flow"><div><b>문제</b><span>무엇을 반복하는가?</span></div><ArrowRight /><div><b>스킬</b><span>어떤 규칙으로 처리할까?</span></div><ArrowRight /><div><b>결과</b><span>어떤 형식이어야 할까?</span></div><ArrowRight /><div><b>검수</b><span>무엇을 사람이 볼까?</span></div></div>
          <div className="beginner-skill-tips"><p><strong>초급 스킬을 고르는 신호</strong> 입력과 출력 예시가 있고, 한 번에 한 가지 결과를 만들며, 사람이 승인해야 하는 지점이 적혀 있습니다.</p><Link href="/skills" className="text-link">스킬 라이브러리에서 찾기 <ArrowRight size={15} /></Link></div>
        </div>

        <div className="beginner-guide-section beginner-prompt-section">
          <div className="beginner-guide-section-head"><span>04 / PROMPT RECIPE</span><h2>프롬프트는 5칸으로 씁니다</h2><p>“요약해줘” 대신 역할·목표·자료·형식·검토 조건을 알려주면 초보자도 결과를 비교할 수 있습니다.</p></div>
          <div className="beginner-prompt-card">{promptParts.map(([label, text]) => <div key={label}><span>{label}</span><p>{text}</p></div>)}<button type="button" className="beginner-copy-note" onClick={() => navigator.clipboard?.writeText(promptParts.map(([label, text]) => `${label}: ${text}`).join("\n"))}><ClipboardCheck size={16} /> 이 구조를 복사해 내 업무 내용으로 바꿔 쓰세요</button></div>
        </div>

        <div className="beginner-guide-section beginner-example-section">
          <div className="beginner-guide-section-head"><span>04-B / COPY & TRY</span><h2>한 줄 입력으로 시작하는 10가지</h2><p>아래 입력 예시를 그대로 복사해 무료 ChatGPT 또는 무료 Gemini 채팅에 붙여 넣어 보세요. 답변은 초안이므로 숫자·가격·안전 정보는 반드시 다시 확인합니다.</p></div>
          <div className="beginner-example-grid">{promptExamples.map(([num, title, input, prompt]) => { const [feature, run, checklist, review] = promptGuides[num]; return <article key={num}><div className="beginner-example-top"><span>{num}</span><small>무료 ChatGPT · Gemini</small></div><h3>{title}</h3><p className="beginner-example-input"><strong>입력 예시</strong>{input}</p><details open><summary>200자 이내 제작 프롬프트</summary><p className="beginner-example-prompt">{prompt}</p><CopyPromptButton prompt={prompt} /></details><div className="beginner-example-guide"><div><b>주요 기능</b><p>{feature}</p></div><div><b>만들기 전</b><p>{checklist}</p></div><div><b>작동 방법</b><p>{run}</p></div><div><b>만든 뒤 검토</b><p>{review}</p></div><div><b>공유·배포</b><p>결과를 직접 확인한 뒤 필요한 사람에게 복사해 공유하세요. 웹앱을 만들었다면 샘플 입력으로 다시 테스트하고 GitHub에 저장한 뒤 Pages 주소를 열어 모바일 화면과 링크를 확인하세요.</p></div></div></article>; })}</div>
        </div>

        <div className="beginner-guide-section beginner-travel-app-section">
          <div className="beginner-guide-section-head"><span>04-C / TRAVEL WEB APP</span><h2>여행 웹앱을 만들어 보는 순서</h2><p>처음부터 거대한 여행 플랫폼을 만들지 말고, “짧은 입력 → 맞춤 결과” 한 기능만 먼저 공개합니다.</p></div>
          <div className="beginner-travel-flow"><article><b>1. 입력</b><p>“도쿄, 3박 4일, 1인, 맛집과 쇼핑”처럼 여행지·기간·예산·취향을 한 줄로 입력합니다.</p></article><ArrowRight /><article><b>2. 프롬프트</b><p>무료 ChatGPT나 Gemini에 일정·예산·주의사항·출처 확인 조건을 포함해 요청합니다.</p></article><ArrowRight /><article><b>3. 결과</b><p>날짜별 일정, 이동 순서, 예상 비용, 우천 대안, 지도 검색어를 카드로 보여 줍니다.</p></article><ArrowRight /><article><b>4. 검토·공개</b><p>영업시간·가격·교통은 공식 사이트에서 확인한 뒤 GitHub Pages에 공개합니다.</p></article></div>
          <div className="beginner-travel-prompt"><div><span>여행 일정 생성 프롬프트</span><p>너는 초보 여행자를 돕는 일정 설계자야. 다음 입력을 바탕으로 3박 4일 여행 일정을 만들어 줘. 날짜별 오전·오후·저녁, 이동 순서, 예상 비용, 예약 필요 여부, 비가 올 때 대안을 표로 작성해 줘. 확인되지 않은 영업시간·가격은 추정하지 말고 ‘공식 확인 필요’라고 표시해 줘. 여행지: [도시] / 기간: [날짜] / 예산: [금액] / 취향: [음식·쇼핑·역사 등] / 이동수단: [도보·대중교통]</p></div><CopyPromptButton prompt="너는 초보 여행자를 돕는 일정 설계자야. 다음 입력을 바탕으로 3박 4일 여행 일정을 만들어 줘. 날짜별 오전·오후·저녁, 이동 순서, 예상 비용, 예약 필요 여부, 비가 올 때 대안을 표로 작성해 줘. 확인되지 않은 영업시간·가격은 추정하지 말고 ‘공식 확인 필요’라고 표시해 줘. 여행지: [도시] / 기간: [날짜] / 예산: [금액] / 취향: [음식·쇼핑·역사 등] / 이동수단: [도보·대중교통]" /></div>
          <div className="beginner-travel-build"><strong>초보자용 제작·배포 순서</strong><span>① ChatGPT/Gemini에 화면 목록 요청 → ② 홈·입력·결과 화면 3개만 만들기 → ③ 샘플 입력으로 테스트 → ④ GitHub 저장소에 커밋 → ⑤ Actions 빌드 → ⑥ GitHub Pages 주소에서 모바일·링크·오류 확인</span></div>
        </div>

        <div className="beginner-guide-section beginner-scenario-section">
          <div className="beginner-guide-section-head"><span>05 / WORK SCENARIOS</span><h2>업무에 바로 적용하는 6가지</h2><p>처음부터 자동 실행하지 말고, 아래처럼 자료를 넣어 초안을 만든 다음 사람이 승인하는 방식으로 시작합니다.</p></div>
          <div className="beginner-scenario-grid">{scenarios.map(([title, text, tool]) => <article key={title}><div><span>{tool}</span><h3>{title}</h3></div><p>{text}</p><Link href="/workflows" className="text-link">비슷한 업무 찾기 <ArrowRight size={14} /></Link></article>)}</div>
        </div>

        <div className="beginner-guide-section beginner-review-section">
          <div className="beginner-guide-section-head"><span>06 / REVIEW</span><h2>AI 결과는 이렇게 검토합니다</h2><p>정확한 답을 받는 것보다, 틀렸을 때 빨리 발견하는 구조가 더 중요합니다.</p></div>
          <div className="beginner-review-layout"><div className="beginner-review-list">{reviewItems.map((item) => <div key={item}><Check size={16} /><span>{item}</span></div>)}</div><div className="beginner-review-warning"><strong>처음에는 맡기지 말 것</strong><p>자동 발송, 자동 삭제, 결제, 계약·법률 판단, 고객에게 바로 전달되는 확정 문장은 초안 단계에서 멈추고 사람이 승인하세요.</p></div></div>
        </div>

        <div className="beginner-guide-section beginner-publish-section">
          <div className="beginner-guide-section-head"><span>07 / SHARE & PUBLISH</span><h2>작은 결과를 배포하는 방법</h2><p>업무 문서는 공유 권한을 확인하고, 웹 결과물은 저장소와 배포 주소를 분리해 관리합니다.</p></div>
          <div className="beginner-publish-grid"><article><Rocket size={21} /><h3>문서·슬라이드</h3><p>최종본, 출처, 작성일, 검토자를 적고 공유 링크의 접근 권한을 확인합니다.</p></article><article><Rocket size={21} /><h3>웹페이지</h3><p>파일을 GitHub 저장소에 올리고 Actions로 빌드한 뒤 GitHub Pages 주소에서 모바일 화면과 주요 링크를 확인합니다.</p></article><article><Rocket size={21} /><h3>다음 개선</h3><p>방문자가 막힌 지점과 자주 쓰는 업무를 기록해 다음 스킬·워크플로우 후보로 바꿉니다.</p></article></div>
          <div className="beginner-final-cta"><div><strong>바로 하나 골라 시작하세요.</strong><span>업무일지 한 주치 또는 회의 메모 3건이면 충분합니다.</span></div><Link href="/workflows" className="primary-action">업무부터 고르기 <ArrowRight size={16} /></Link></div>
        </div>
      </section>
    </PageFrame>
  );
}
