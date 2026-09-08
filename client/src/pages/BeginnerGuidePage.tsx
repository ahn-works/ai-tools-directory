import { ArrowRight, Check, CircleHelp, ClipboardCheck, ExternalLink, Rocket, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { PageFrame } from "./GuideShared";

const starterSteps = [
  ["01", "문제를 한 문장으로 적기", "무엇을 줄이고 싶은지부터 적습니다. 예: 매주 반복되는 거래처 보고서 초안 작성 시간을 줄이고 싶다."],
  ["02", "결과물을 먼저 정하기", "메일, 표, 보고서, 슬라이드, 업무일지처럼 마지막에 필요한 모양을 정합니다."],
  ["03", "작은 자료로 시험하기", "민감정보를 지운 샘플 3~5건으로 먼저 실행하고 결과를 사람의 눈으로 비교합니다."],
  ["04", "검수 기준을 만들기", "빠진 내용, 숫자 오류, 출처, 말투, 개인정보 노출 여부를 체크리스트로 만듭니다."],
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
          <div className="beginner-prompt-card">{promptParts.map(([label, text]) => <div key={label}><span>{label}</span><p>{text}</p></div>)}<button type="button" className="beginner-copy-note"><ClipboardCheck size={16} /> 이 구조를 복사해 내 업무 내용으로 바꿔 쓰세요</button></div>
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
