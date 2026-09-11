import { useState } from "react";
import { ArrowRight, Check, CircleHelp, ClipboardCheck, Copy, ExternalLink, Rocket, Sparkles } from "lucide-react";
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

const promptExamples = [
  ["01", "전 세계 마트 필수템", "일본·돈키호테·5만 원·30대 여성 선물", "당신은 여행 쇼핑 전문 기획자입니다. 여행지 [국가·도시·관광지]와 방문 마트 [마트명], 예산 [금액·통화], 구매자 [연령대·성별·알레르기·식습관], 대상 [본인·가족·거래처 선물], 인원과 짐 크기를 반영하세요. 음식·과자·음료·술·화장품·생활용품·기념품 카테고리별로 현지에서 인기 있고 실패가 적은 상품을 3개씩 추천하고, 상품명·카테고리·추천 대상·예상 가격·용량·추천 이유·주의사항·관광지 근처 구매 위치를 표로 만드세요. 예산별 장바구니와 면세·반입 제한·공식 가격 확인 방법도 적고, 모르는 가격·재고는 추측하지 마세요. 이 요구사항으로 예쁜 반응형 React 웹앱을 기획·제작하세요. 입력 폼(여행지·마트·예산·구매자 조건), 카테고리 필터, 상품 카드, 예산 합계, 장바구니, 확인 필요 배지를 만들고 샘플 데이터로 실행 가능한 미리보기를 보여 주세요. 모던한 색상·여백·모바일 화면을 적용하고 수정할 파일과 실행 방법도 안내하세요."],
  ["02", "날씨 맞춤 코디", "여수·24/15도·30대·데이트·많이 걷기", "당신은 체형과 날씨를 함께 보는 코디 전문가입니다. [지역·날짜·최고/최저기온·습도·비·바람], [나이대·성별·키/체형·평소 사이즈], [목적·드레스코드·걷는 시간·선호 색·예산·가지고 있는 옷]을 받아 코디 3가지를 추천하세요. 각 코디를 상의·하의·속옷·아우터·신발·가방·액세서리로 나누고 색·소재·착용 순서·구매 대체품을 표로 작성하세요. 오전·낮·밤과 비 오는 날 대안, 불편한 소재도 알려 주세요. 이 요구사항으로 예쁜 반응형 React 코디 웹앱을 제작하세요. 날씨·체형·TPO 입력 화면, 코디 3개 카드, 옷 상세, 아우터 대안, 저장·다시 추천 버튼을 만들고 샘플 데이터로 클릭 가능한 미리보기를 보여 주세요. 모바일 우선 디자인과 실행 방법을 함께 제공하세요."],
  ["03", "자취생 트러블슈팅", "흰 셔츠에 김치 국물·면 10분 전", "당신은 초보 자취생용 안전 생활 코치입니다. 문제 [무엇이 묻었거나 고장 났는지·발생 시간], 대상 [소재·색·제품 라벨·상태], 집에 있는 준비물 [세제·물품], 주변 위험 [전기·가스·아이·반려동물]을 먼저 확인하세요. 가장 안전한 방법을 1단계씩 준비물·양·시간·행동·중단 조건으로 설명하고, 눈에 띄지 않는 곳 테스트 방법과 절대 섞으면 안 되는 재료를 알려 주세요. 효과가 없을 때의 다음 단계와 세탁소·관리업체에 연락할 기준도 포함하세요. 이 요구사항으로 안전한 생활 문제 해결 웹앱을 제작하세요. 문제·소재·준비물 입력, 단계별 타임라인, 금지 조합 경고, 중단 조건, 체크 완료 표시, 전문가 문의 버튼을 만들고 위험한 조언은 확인 필요로 표시하세요. React 반응형 UI와 샘플 실행 화면을 제공하세요."],
  ["04", "오늘 뭐 보지?", "기묘한 이야기·짧은 스릴러·주말 2시간", "당신은 스포일러 없는 콘텐츠 큐레이터입니다. [재미있게 본 작품 3개], 원하는 장르 [스릴러·미스터리 등], 길이 [회당/전체 시간], 분위기 [긴장감·가벼움], 피할 요소 [고어·점프스케어], 시청 플랫폼 [국가 포함], 함께 보는 사람과 연령을 입력받으세요. 조건에 맞는 영화·시리즈 5개를 제목·형식·러닝타임·등급·폭력성·맞는 이유·첫 10분 기대 포인트로 비교하고, 현재 플랫폼 제공 여부와 등급은 공식 앱에서 확인하라고 표시하세요. 이 요구사항으로 스포일러 없는 콘텐츠 추천 웹앱을 제작하세요. 취향·시간·플랫폼·피할 요소 입력, 필터, 추천 카드, 비교표, 찜 버튼, 확인 필요 배지를 만들고 실제 서비스 여부는 사용자가 확인하도록 표시하세요. 예쁜 반응형 React 미리보기와 실행 방법을 제공하세요."],
  ["05", "갈등 사과문", "내 실수로 친구가 서운함·문자로 사과", "당신은 비폭력 대화 코치입니다. [사건의 사실], 내가 한 말과 의도, 상대가 한 말, 관계와 상황, 원하는 결과 [사과·설명·관계 회복], 연락 수단과 말투를 입력받으세요. MBTI는 참고만 하고 성격을 단정하지 마세요. 사실 인정→상대 감정 공감→변명 없는 사과→다음 행동→답할 시간 순서로 카톡 3종과 전화 대화 예시를 작성하세요. 피해야 할 말, 상대가 답하지 않을 때의 간격, 폭력·협박이 있으면 도움을 요청할 기준도 알려 주세요. 이 요구사항으로 사과문 작성 웹앱을 제작하세요. 사건·상대 감정·관계·말투 입력, 공감 문장·사과문·피할 말 탭, 복사 버튼, 답장 없음 상황 안내를 만들고 성격을 단정하지 마세요. 초보자도 실행할 수 있는 반응형 React 미리보기를 제공하세요."],
  ["06", "정중한 업무 거절", "타 부서 자료 요청·오늘은 불가·모레 오후 가능", "당신은 한국 직장인용 비즈니스 문서 코치입니다. [받는 사람·관계·요청 내용·요청 시한], 현재 업무량과 불가능한 이유, 실제 가능한 날짜·시간, 대신 제공할 수 있는 부분, 회사 말투를 입력받으세요. 상대를 탓하지 않고 요청을 확인한 뒤 일정 조정이 필요한 이유, 가능한 납기, 대안 2개를 제시하는 이메일 제목·본문과 메신저 문장을 작성하세요. 너무 약하거나 공격적인 표현을 고치고, 재촉받았을 때·상사가 참조된 경우의 답장도 추가하세요. 이 요구사항으로 업무 거절 문장 생성 웹앱을 제작하세요. 상대·요청·가능 날짜·대안 입력, 이메일·메신저 탭, 제목 복사·문장 다시 쓰기 버튼, 일정 확인 체크를 만들고 예쁜 반응형 React UI와 샘플 실행 결과를 제공하세요."],
  ["07", "3줄 요약", "긴 보고서·숫자와 표 포함·임원 보고용", "당신은 사실 검증형 보고서 편집자입니다. 아래 원문만 사용하고 외부 지식이나 추측을 섞지 마세요. 문서의 목적과 독자 [임원·팀원·고객], 원하는 길이, 반드시 남길 숫자·기간·조건을 먼저 확인한 뒤 핵심 주장 3개, 근거 수치, 리스크, 실행 결론을 작성하세요. 출력은 ①한 줄 제목 ②핵심 3줄 ③결론 1줄 ④확인 필요 항목 ⑤원문 위치 표 순서로 만들고, 원문에 없는 정보는 ‘확인 필요’라고 표시하세요. 이 요구사항으로 문서 요약 웹앱을 제작하세요. 텍스트 붙여넣기 영역, 파일 안내, 요약 길이 선택, 핵심 3줄·결론·확인 필요 탭, 원문 대조 체크리스트, 복사 버튼을 만들고 개인정보 경고를 넣은 실행형 React 미리보기를 제공하세요."],
  ["08", "즉석 동화", "6세·토끼 토토·우주 공룡 마을·나눔", "당신은 6세 아이에게 읽어 주는 동화 작가입니다. [아이 나이·주인공 이름/성격·배경·친구·해결할 문제·배울 가치·피할 요소]를 받아 3분 분량으로 작성하세요. 시작-문제-도움 요청-해결-따뜻한 결말의 5장면을 만들고, 장면마다 짧은 대사와 그림 상상을 넣으세요. 무서운 폭력·차별·위험한 행동은 빼고, 어려운 낱말은 쉽게 바꾸세요. 제목, 본문, 부모가 물어볼 질문 3개, 아이가 따라 할 안전한 실천 1개를 구분해 주세요. 이 요구사항으로 어린이 동화 생성 웹앱을 제작하세요. 아이 나이·주인공·배경·교훈 입력, 장면별 카드, 읽어주기용 보기, 질문 카드, 다시 쓰기·복사 버튼을 만들고 안전한 콘텐츠 안내를 넣으세요. 따뜻한 색의 반응형 React 실행 화면과 제작 방법을 제공하세요."],
  ["09", "집에서 20분 운동", "30대·집·하체·무릎 통증 없음·층간소음 걱정", "당신은 운동 초보자용 안전 코치입니다. [나이대·운동 경험·목표 부위·장소·가능 시간·사용 도구·층간소음·통증/질환·운동 가능한 요일]을 입력받으세요. 의학적 진단은 하지 말고, 3분 준비운동-12분 본운동-3분 마무리-2분 기록으로 시간표를 만드세요. 동작별 자세·호흡·횟수·세트·휴식·쉬운 대체 동작과 흔한 실수를 표로 쓰고, 통증·어지럼·호흡곤란 시 즉시 중단하고 전문가에게 상담하라는 안내를 포함하세요. 이 요구사항으로 운동 루틴 웹앱을 제작하세요. 나이·목표·시간·통증·장소 입력, 타이머, 준비·본운동·마무리 탭, 대체 동작, 중단 경고, 완료 체크를 만들고 의료 조언이 아님을 표시하세요. 층간소음 고려 반응형 React 미리보기를 제공하세요."],
  ["10", "쇼츠·릴스 제목", "강아지가 고양이 흉내·15초·귀여운 영상", "당신은 사실을 지키는 숏폼 콘텐츠 기획자입니다. [영상에서 실제로 일어난 장면·길이·주인공·감정·전달할 사실·시청자·플랫폼·브랜드 말투]를 입력받으세요. 호기심형·유머형·감성형·검색형·직관형 제목을 3개씩 만들고, 제목별 썸네일 문구·첫 3초 자막·해시태그 3개·어울리는 이유를 표로 정리하세요. 영상에 없는 장면, 과장, 혐오, 위험한 행동을 암시하는 표현은 제외하고 사실과 맞는 최종 후보 3개를 골라 주세요. 이 요구사항으로 쇼츠 제목 제작 웹앱을 제작하세요. 영상 설명 입력, 제목 스타일 필터, 제목·썸네일·첫 자막 카드, 복사·다시 생성 버튼, 과장 검토 배지를 만들고 실제 장면과 다른 표현을 막으세요. 클릭 가능한 반응형 React 미리보기와 실행 방법을 제공하세요."],
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

const nextPromptGuides: Record<string, string[]> = {
  "01": ["추천 기능: 카테고리·예산·연령·선물 대상 필터와 장바구니 합계를 추가하고 샘플 10개로 작동시켜 줘.", "초안 결과를 마트 공식몰·관광지 공식 사이트와 대조해 가격·재고·반입 제한을 확인 필요로 표시해 줘.", "모바일에서 장바구니와 확인 필요 상품을 먼저 보이게 고치고 GitHub Pages 배포 순서를 초보자용으로 알려 줘."],
  "02": ["추천 기능: 기온·비·바람 입력, 코디 3장, 아우터 대안, 저장·다시 추천 버튼을 추가해 줘.", "추천 결과의 날씨 조건과 옷 조합을 실제 날씨 자료와 대조하고 틀릴 수 있는 부분을 표시해 줘.", "샘플 입력 3개로 모바일 버튼을 테스트한 뒤 GitHub 저장·빌드·Pages 배포 체크리스트를 만들어 줘."],
  "03": ["추천 기능: 소재·색상·준비물 입력, 단계별 타이머, 금지 조합 경고, 중단 버튼을 추가해 줘.", "각 단계가 제품 라벨·안전 자료와 맞는지 검토하고 위험하거나 모르는 내용은 전문가 확인으로 바꿔 줘.", "빈 입력·위험 입력·정상 입력을 테스트하고 안전 안내를 첫 화면에 넣어 배포해 줘."],
  "04": ["추천 기능: 장르·러닝타임·플랫폼·피할 요소 필터와 추천 비교표·찜 버튼을 추가해 줘.", "현재 플랫폼 제공 여부·등급·러닝타임을 공식 서비스에서 다시 확인하고 스포일러를 제거해 줘.", "모바일에서 필터와 찜을 테스트하고 샘플 데이터와 실제 배포 데이터 분리 방법을 알려 줘."],
  "05": ["추천 기능: 사건 입력, 공감·사과문·피할 말 탭, 복사 버튼, 답장 없음 안내를 추가해 줘.", "사과문에 사실과 추측·변명이 섞이지 않았는지 검토하고 상대를 단정하는 문장을 삭제해 줘.", "민감정보를 지운 샘플로 테스트한 뒤 공유 전 개인정보 점검과 Pages 배포 방법을 알려 줘."],
  "06": ["추천 기능: 이메일·메신저 탭, 가능한 날짜 선택, 대안 제시, 제목 복사 버튼을 추가해 줘.", "받는 사람·날짜·첨부파일·약속 가능 여부를 원문과 대조하고 거짓 약속을 제거해 줘.", "정상·급한 요청·날짜 없음 상황을 테스트하고 승인 후 공유·배포 체크리스트를 작성해 줘."],
  "07": ["추천 기능: 글 붙여넣기, 3줄·1줄·표 탭, 원문 위치, 복사 버튼, 개인정보 경고를 추가해 줘.", "요약 숫자·이름·기간을 원문과 대조하고 근거 없는 문장은 확인 필요로 표시해 줘.", "짧은 글·긴 글·빈 입력을 테스트한 뒤 빌드와 GitHub Pages 배포 순서를 만들어 줘."],
  "08": ["추천 기능: 아이 나이·주인공 입력, 5장면 카드, 읽어주기 화면, 질문 카드, 다시 쓰기 버튼을 추가해 줘.", "폭력·공포·차별·위험 행동이 없는지 부모 검토 체크리스트로 확인해 줘.", "6세·10세 샘플로 글자 크기와 모바일 읽기를 테스트하고 안전 안내를 포함해 배포해 줘."],
  "09": ["추천 기능: 준비·본운동·마무리 탭, 타이머, 휴식, 대체 동작, 통증 중단 경고를 추가해 줘.", "운동 시간·세트·휴식 계산을 대조하고 의학적 진단처럼 보이는 문장을 제거해 줘.", "무릎 통증 없음·통증 있음·빈 입력을 테스트하고 모바일 타이머와 배포 후 실행을 확인해 줘."],
  "10": ["추천 기능: 제목 스타일 필터, 제목·썸네일·첫 자막 카드, 복사·다시 생성 버튼을 추가해 줘.", "각 제목이 실제 영상 장면과 맞는지 대조하고 과장·혐오·거짓 약속을 제거해 줘.", "15초 영상 샘플 3개를 테스트하고 공유 전 저작권·사실·모바일 화면을 검토해 배포해 줘."],
};

const reviewCompleteRecommendations: Record<string, string[]> = {
  "01": ["맛집 탭을 추가해 여행지·거리·가격대·대표 메뉴·영업시간을 비교하고 공식 지도 링크를 보여 줘.", "쇼핑 결과에 선물용·가족용·연령대별 필터, 품절 대체품, 장바구니 예산 초과 알림을 추가해 줘.", "2단계 검토 결과를 반영해 가격·영업시간·재고를 확인 필요로 표시하고, 확인된 장소만 지도와 즐겨찾기에 넣는 프롬프트를 만들어 줘."],
  "02": ["옷 스타일 탭을 추가해 캐주얼·데이트·출근·여행 스타일을 고르고 같은 옷으로 3가지 코디를 보여 줘.", "신발·가방·액세서리와 체형·색상·예산 필터를 추가하고, 가진 옷을 먼저 선택하면 새로 살 옷을 줄여 줘.", "검토한 날씨 조건과 코디를 대조해 비·바람·실내 냉방 대안을 추가하고, 구매 링크는 공식 판매처 확인 필요로 표시해 줘."],
  "03": ["세탁·청소·배수구·전기 문제를 고르는 상황별 메뉴와 위험도별 경고 화면을 추가해 줘.", "준비물 체크, 단계별 타이머, 중단 조건, 전문가 문의 버튼과 ‘이 조합은 섞지 마세요’ 경고를 추가해 줘.", "검토에서 확인한 소재·제품 라벨을 기준으로 안전한 방법만 남기고, 모르면 답하지 않는 확인 질문 화면을 만들어 줘."],
  "04": ["영화·드라마뿐 아니라 예능·다큐·애니 탭과 가족·혼자·친구 보기 필터를 추가해 줘.", "시청 시간표, 비슷한 작품 더 보기, 분위기·폭력성·연령 등급 필터와 찜 목록을 추가해 줘.", "검토한 플랫폼·등급·러닝타임을 다시 확인하는 버튼과 정보가 오래됐을 때 확인 필요 배지를 추가해 줘."],
  "05": ["사과·부탁·거절·감사 상황을 고르는 대화 유형 탭과 실제 말투별 문장 3개를 추가해 줘.", "상대 감정·관계·연락 방법·답장 없음 상황을 입력하고 보내기 전 위험한 표현을 알려 주는 검토 기능을 추가해 줘.", "검토에서 사실로 확인된 내용만 남겨 사과문을 다시 만들고, 개인정보를 가린 샘플로 테스트하는 프롬프트를 만들어 줘."],
  "06": ["메일·메신저·회의 요청 탭과 긴급도·상대 관계·가능한 날짜를 선택하는 기능을 추가해 줘.", "대안 일정 3개, 업무 우선순위, 첨부파일 확인, 상급자 승인 체크를 넣어 바로 보내지 않고 검토하게 해 줘.", "검토한 일정·담당자·첨부파일을 원문과 대조하는 확인 화면과 승인 전 복사만 가능한 기능을 추가해 줘."],
  "07": ["3줄 요약·임원 보고·회의용·SNS용 결과 탭과 원문 위치로 이동하는 근거 기능을 추가해 줘.", "숫자·날짜·이름을 원문과 자동 비교하고, 근거 없음·확인 필요 문장을 따로 모으는 기능을 추가해 줘.", "검토 체크리스트를 통과한 문장만 최종 요약으로 보내고, 원문 단락을 클릭해 대조하는 프롬프트를 만들어 줘."],
  "08": ["잠자리·모험·우정·과학 탭과 아이 나이별 글자 크기·문장 길이 조절 기능을 추가해 줘.", "장면별 그림 설명, 읽어주기 속도, 부모 질문 카드, 무서운 단어 바꾸기 기능을 추가해 줘.", "검토에서 발견한 어려운 말과 불편한 장면을 쉬운 표현으로 바꾸고 부모 확인 완료 표시를 넣어 줘."],
  "09": ["하체·상체·전신·스트레칭 탭과 10·20·30분 시간 선택 기능을 추가해 줘.", "층간소음 없는 동작 필터, 초급 대체 동작, 세트·휴식 타이머, 운동 기록과 다음 루틴 추천을 추가해 줘.", "검토한 통증·시간·공간 조건에 맞지 않는 동작을 제외하고, 중단 경고를 먼저 보여 주는 프롬프트를 만들어 줘."],
  "10": ["귀여움·유머·감성·정보형 스타일 탭과 제목·썸네일·첫 3초 자막을 한 묶음으로 추가해 줘.", "플랫폼별 글자 수, 해시태그, 금칙어, 과장 표현 경고와 제목 A/B 비교 기능을 추가해 줘.", "검토한 실제 장면과 맞는 제목만 남기고, 게시 전 저작권·초상권·사실 확인 체크를 통과하게 해 줘."],
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
  const [platform, setPlatform] = useState<"chatgpt" | "gemini">("chatgpt");
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

        <div className="beginner-guide-section beginner-platform-section">
          <div className="beginner-guide-section-head"><span>02-B / FREE TOOL TIPS</span><h2>무료 ChatGPT · Gemini 사용법</h2><p>둘 다 무료 채팅부터 시작하세요. 아래 탭을 누르고 순서대로 따라 하면 긴 프롬프트도 어렵지 않습니다.</p></div>
          <div className="beginner-platform-tabs" role="tablist" aria-label="무료 AI 사용법"><button type="button" className={platform === "chatgpt" ? "is-active" : ""} onClick={() => setPlatform("chatgpt")} role="tab" aria-selected={platform === "chatgpt"}>무료 ChatGPT</button><button type="button" className={platform === "gemini" ? "is-active" : ""} onClick={() => setPlatform("gemini")} role="tab" aria-selected={platform === "gemini"}>무료 Gemini</button></div>
          {platform === "chatgpt" ? <div className="beginner-platform-panel"><h3>ChatGPT: 대화하면서 결과를 고칠 때</h3><ol><li>ChatGPT를 열고 새 채팅을 시작합니다.</li><li>아래 프롬프트 카드에서 <b>프롬프트 복사</b>를 누릅니다.</li><li>대괄호 [ ] 안의 국가·예산·연령·성별·목적 같은 내용을 내 상황으로 바꿉니다.</li><li>한 번에 붙여넣고 답변을 기다립니다. 긴 답변은 “1번부터 표로 나누어 계속해 줘”라고 말합니다.</li><li>결과가 모호하면 “가격은 공식 사이트 확인 필요, 추천 이유와 제외 조건을 추가해 줘”처럼 한 가지씩 다시 요청합니다.</li><li>숫자·가격·날짜·안전 정보는 인터넷이나 공식 사이트로 확인한 뒤 복사·공유합니다.</li></ol><div className="beginner-tip-box"><b>ChatGPT 재질문 예시</b><p>“내 예산은 5만 원이고 짐은 기내용 가방 하나야. 30대 여성과 60대 부모님이 좋아할 선물을 나눠 추천하고, 음식·술·생활용품을 따로 표로 다시 만들어 줘.”</p></div></div> : <div className="beginner-platform-panel"><h3>Gemini: 자료·검색·문서와 함께 만들 때</h3><ol><li>Gemini를 열고 새 채팅을 시작합니다.</li><li>프롬프트를 붙여넣고 국가·기간·출처 범위를 먼저 적습니다.</li><li>최신 정보가 필요하면 검색 결과가 최신인지 확인하고, 가격·영업시간은 공식 사이트 링크를 요구합니다.</li><li>긴 문서나 표는 한 번에 넣기 어렵다면 파일 또는 부분별로 나누어 넣고 “앞 내용과 이어서 분석해 줘”라고 합니다.</li><li>Canvas가 보이면 답변을 문서 형태로 다듬고, 표 제목·목차·읽는 사람을 지정합니다.</li><li>Deep Research나 NotebookLM을 쓸 때도 AI 결과를 최종 근거로 믿지 말고 원문 출처를 직접 엽니다.</li></ol><div className="beginner-tip-box"><b>Gemini 재질문 예시</b><p>“이 추천을 관광지 공식 홈페이지·마트 공식몰·정부 반입 규정으로 나누어 출처 링크를 붙여 검토해 줘. 확인되지 않은 항목은 추천에서 빼고 확인 필요로 표시해 줘.”</p></div></div>}
          <div className="beginner-webapp-build"><h3>웹앱을 목표로 할 때 반드시 이렇게 말하세요</h3><div className="beginner-webapp-steps"><article><b>1. 제작 요청</b><p>“이 요구사항으로 실행 가능한 반응형 웹앱을 만들어 줘. 단순 설명이 아니라 화면과 버튼이 작동하는 UI를 보여 줘.”라고 프롬프트 마지막에 붙입니다.</p></article><article><b>2. 실행 화면</b><p>Gemini는 <strong>Canvas</strong>를 선택한 뒤 실행·미리보기 화면에서 입력하고 버튼을 눌러 봅니다. ChatGPT는 Canvas·코드 실행·미리보기 기능이 보이면 선택하고, 없으면 React 파일과 실행 명령을 받아 로컬 또는 Pages에서 확인합니다.</p></article><article><b>3. 수정 요청</b><p>“입력 화면은 유지하고 카드 간격을 넓혀 줘”, “모바일에서 버튼을 한 줄로 보여 줘”, “샘플 데이터 대신 빈 상태와 오류 상태도 추가해 줘”처럼 한 번에 한 가지씩 요청합니다.</p></article><article><b>4. 배포</b><p>작동 확인 후 “파일 목록·설치 명령·빌드 명령·GitHub 업로드·GitHub Pages 배포 순서를 초보자용으로 알려 줘”라고 요청합니다. 배포 후 실제 주소에서 새로고침·모바일·각 버튼을 다시 검사합니다.</p></article></div></div>
        </div>

        <div className="beginner-guide-section beginner-skill-choice">
          <div className="beginner-guide-section-head"><span>03 / SKILL CHOICE</span><h2>내 일에 맞는 스킬 고르기</h2><p>스킬은 AI에게 일을 시킬 때 참고하는 작업 설명서입니다. 이름보다 입력 자료, 결과 형식, 검수 기준이 내 업무와 맞는지 확인합니다.</p></div>
          <div className="beginner-skill-flow"><div><b>문제</b><span>무엇을 반복하는가?</span></div><ArrowRight /><div><b>스킬</b><span>어떤 규칙으로 처리할까?</span></div><ArrowRight /><div><b>결과</b><span>어떤 형식이어야 할까?</span></div><ArrowRight /><div><b>검수</b><span>무엇을 사람이 볼까?</span></div></div>
          <div className="beginner-skill-tips"><p><strong>초급 스킬을 고르는 신호</strong> 입력과 출력 예시가 있고, 한 번에 한 가지 결과를 만들며, 사람이 승인해야 하는 지점이 적혀 있습니다.</p><Link href="/skills" className="text-link">스킬 라이브러리에서 찾기 <ArrowRight size={15} /></Link></div>
        </div>

        <div className="beginner-guide-section beginner-prompt-section">
          <div className="beginner-guide-section-head"><span>04 / PROMPT RECIPE</span><h2>처음 쓰는 프롬프트 만들기</h2><p>“요약해줘”보다 역할·목표·자료·형식·검토 조건을 차례로 적으면 결과를 비교하고 고치기 쉽습니다.</p></div>
          <div className="beginner-prompt-card">{promptParts.map(([label, text]) => <div key={label}><span>{label}</span><p>{text}</p></div>)}<button type="button" className="beginner-copy-note" onClick={() => navigator.clipboard?.writeText(promptParts.map(([label, text]) => `${label}: ${text}`).join("\n"))}><ClipboardCheck size={16} /> 이 구조를 복사해 내 업무 내용으로 바꿔 쓰세요</button></div>
        </div>

        <div className="beginner-guide-section beginner-example-section">
          <div className="beginner-guide-section-head"><span>04-B / COPY & TRY</span><h2>따라 하며 배우는 웹앱 10가지</h2><p>처음부터 외우지 않아도 됩니다. 아래 예시를 하나 골라 대괄호 안의 조건을 바꾸고, 무료 ChatGPT 또는 Gemini에서 실행하며 기능을 하나씩 배워 보세요.</p></div>
          <div className="beginner-example-grid">{promptExamples.map(([num, title, input, prompt]) => { const [feature, run, checklist, review] = promptGuides[num]; const nextPrompts = nextPromptGuides[num] || []; const reviewRecommendations = reviewCompleteRecommendations[num] || []; return <article key={num}><div className="beginner-example-top"><span>{num}</span><small>무료 ChatGPT · Gemini</small></div><h3>{title}</h3><p className="beginner-example-input"><strong>입력 예시</strong>{input}</p><details open><summary>실행형 웹앱 제작 프롬프트</summary><p className="beginner-example-prompt">{prompt}</p><CopyPromptButton prompt={prompt} /></details><div className="beginner-example-guide"><div><b>01 초안</b><p>주요 기능: {feature} 목표·입력자료·화면·샘플 데이터를 먼저 정합니다.</p></div><div><b>02 검토</b><p>{checklist} 원본·출처·사실과 추측을 대조합니다.</p></div><div><b>03 보완</b><p>결과 형식과 제한을 보완합니다. 작동 방법: {run}</p></div><div><b>04 실행 준비</b><p>담당자·승인자·기록 방법을 정하고 외부 발송·수정·삭제 전 승인을 둡니다.</p></div><div><b>05 반복 개선</b><p>만든 뒤 검토: {review} 실제 사용 결과를 기록해 다음 회차에 반영합니다.</p></div><div><b>공유·배포</b><p>샘플 입력·빈 입력·오류 입력을 테스트하고 GitHub에 저장한 뒤 Pages 주소에서 모바일·버튼·링크를 확인합니다.</p></div></div><div className="beginner-next-prompts"><b>1단계 완료 후 추천 기능·프롬프트</b>{nextPrompts.map((nextPrompt, index) => <div key={nextPrompt}><span>추천 {index + 1}</span><p>{nextPrompt}</p><CopyPromptButton prompt={nextPrompt} /></div>)}</div><div className="beginner-next-prompts beginner-review-recommendations"><b>2단계 검토 완료 후 추천 기능·프롬프트</b><p className="beginner-recommendation-note">검토에서 확인한 사실과 빠진 내용을 반영한 뒤, 아래 기능 중 하나를 골라 3단계 보완으로 넘어가세요.</p>{reviewRecommendations.map((recommendation, index) => <div key={recommendation}><span>추천 {index + 1}</span><p>{recommendation}</p><CopyPromptButton prompt={recommendation} /></div>)}</div></article>; })}</div>
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

        <div className="beginner-guide-section beginner-quickstart-section">
          <div className="beginner-guide-section-head"><span>05 / FIRST 10 MINUTES</span><h2>AI를 처음 만나는 사람을 위한 첫 10분</h2><p>처음부터 어려운 기능을 만들지 말고, 질문 하나를 넣어 결과를 확인하는 연습부터 합니다.</p></div>
          <div className="beginner-quickstart-grid"><article><b>1. 도구 열기</b><p>무료 ChatGPT 또는 Gemini에서 새 채팅을 엽니다. Gemini에서 실행형 결과를 보고 싶다면 Canvas를 선택합니다.</p></article><article><b>2. 예시 바꾸기</b><p>아래 프롬프트의 [ ] 부분만 내 상황으로 바꿉니다. 이름·전화번호·비밀번호는 지우고 넣습니다.</p></article><article><b>3. 답변 다시 묻기</b><p>한 번에 완벽하지 않아도 괜찮습니다. “표로 바꿔 줘”, “빠진 내용을 찾아 줘”처럼 한 가지씩 고칩니다.</p></article></div>
          <div className="beginner-example-prompt quickstart-prompt">예시 프롬프트: 나는 AI를 처음 사용하는 사람입니다. 오늘 해야 할 일 [할 일 3개]를 가장 쉬운 순서로 정리해 주세요. 결과는 오늘 할 일·예상 시간·먼저 할 일 표로 보여 주세요. 모르는 내용은 추측하지 말고 질문으로 남겨 주세요.</div><CopyPromptButton prompt="나는 AI를 처음 사용하는 사람입니다. 오늘 해야 할 일 [할 일 3개]를 가장 쉬운 순서로 정리해 주세요. 결과는 오늘 할 일·예상 시간·먼저 할 일 표로 보여 주세요. 모르는 내용은 추측하지 말고 질문으로 남겨 주세요." />
          <div className="beginner-good-bad-grid"><article><b>나쁜 프롬프트</b><p>여행 일정 짜줘.</p><small>정보가 너무 적어서 AI가 마음대로 정하고, 결과를 비교하기 어렵습니다.</small></article><article><b>좋은 프롬프트</b><p>부산 2박 3일 여행 일정을 만들어 주세요. 30대 부부이고 대중교통을 이용합니다. 하루 관광지 2곳과 맛집 1곳, 비 오는 날 대안을 넣고 공식 확인 필요 항목을 표시해 주세요.</p><small>목적·조건·결과 모양·검토 기준이 들어 있어 수정하기 쉽습니다.</small></article></div>
        </div>

        <div className="beginner-guide-section beginner-speaking-section">
          <div className="beginner-guide-section-head"><span>05-B / SPEAK CLEARLY</span><h2>AI에게 어떻게 말해야 할지 모르겠어요</h2><p>어려운 전문 용어 대신 아래 다섯 가지를 평범한 말로 알려 주세요.</p></div>
          <div className="beginner-speaking-grid">{[["목표", "무엇을 만들고 싶은지"], ["상황", "누가 언제 왜 쓰는지"], ["자료", "AI가 사용할 원문·파일·링크"], ["결과", "표·카드·메일처럼 받을 모양"], ["검토", "틀리지 않았는지 확인하는 방법"]].map(([label, text]) => <article key={label}><b>{label}</b><p>{text}</p></article>)}</div>
          <div className="beginner-tip-box"><b>쉬운 재질문 예시</b><p>“초등학생도 이해하게 다시 써 줘.” · “빠진 조건을 질문해 줘.” · “원문에 없는 내용은 확인 필요로 표시해 줘.” · “실제로 따라 할 순서로 바꿔 줘.”</p></div>
        </div>

        <div className="beginner-guide-section beginner-safe-input-section">
          <div className="beginner-guide-section-head"><span>05-C / SAFE INPUT</span><h2>AI에 넣으면 안 되는 정보</h2><p>무료 버전에서는 특히 조심하고, 유료 버전이라도 서비스의 데이터 설정과 회사 규정을 먼저 확인하세요.</p></div>
          <div className="beginner-safe-grid"><article><b>그대로 넣지 않기</b><p>주민등록번호, 비밀번호, API 키, 계좌번호, 고객 연락처, 회사 비밀자료, 계약서 원본, 건강·병원 민감정보</p></article><article><b>이렇게 바꾸기</b><p>홍길동 → 고객 A<br />010-1234-5678 → 연락처 삭제<br />ABC회사 → 거래처 B<br />실제 금액 → 100만 원</p></article><article><b>유료 버전도 확인하기</b><p>유료라고 모든 자료가 자동으로 안전한 것은 아닙니다. 학습 사용 여부·보관 기간·관리자 설정·회사 승인 여부를 확인한 뒤 필요한 최소 자료만 사용하세요.</p></article></div>
        </div>

        <div className="beginner-guide-section beginner-scope-section">
          <div className="beginner-guide-section-head"><span>05-D / START SMALL</span><h2>웹앱 제작 전 기능 욕심 줄이기</h2><p>처음에는 입력 1개, 결과 1개, 버튼 1~2개만 만들면 성공입니다.</p></div>
          <div className="beginner-scope-grid"><article><b>처음 만들 것</b><p>입력창 1개 · 결과 카드 1개 · 실행 버튼 · 샘플 데이터 · 모바일 화면 · 빈 입력 안내</p></article><article><b>나중에 추가할 것</b><p>로그인 · 결제 · 지도 · 외부 API · 알림 · 관리자 화면 · 자동 발송 · 복잡한 저장 기능</p></article></div>
          <div className="beginner-tip-box"><b>작게 시작하는 문장</b><p>“처음에는 여행지와 예산을 입력하면 추천 목록만 보여 주세요. 맛집·지도·로그인은 첫 화면이 작동한 뒤 하나씩 추가해 주세요.”</p></div>
        </div>

        <div className="beginner-guide-section beginner-spec-section">
          <div className="beginner-guide-section-head"><span>05-E / APP SPEC</span><h2>웹앱 만들기 전 기능 명세서 자동 작성</h2><p>제작 프롬프트를 바로 넣기 전에 AI가 앱의 뼈대를 먼저 정리하게 하세요.</p></div>
          <div className="beginner-spec-grid">{["앱 이름·누구를 위한 앱인지", "입력값과 결과값", "필요한 화면과 버튼", "빈 입력·오류·로딩 상황", "모바일 화면과 배포 방법"].map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><b>{item}</b></article>)}</div>
          <div className="beginner-example-prompt quickstart-prompt">기능 명세서 프롬프트: 내 아이디어 [아이디어]를 초보자용 웹앱 기능 명세서로 바꿔 주세요. 앱 이름·사용자·입력값·결과값·화면 목록·버튼·샘플 데이터·빈 화면·오류 화면·모바일 규칙·배포 순서를 표로 작성하고, 첫 버전과 나중에 추가할 기능을 나눠 주세요.</div><CopyPromptButton prompt="내 아이디어 [아이디어]를 초보자용 웹앱 기능 명세서로 바꿔 주세요. 앱 이름·사용자·입력값·결과값·화면 목록·버튼·샘플 데이터·빈 화면·오류 화면·모바일 규칙·배포 순서를 표로 작성하고, 첫 버전과 나중에 추가할 기능을 나눠 주세요." />
        </div>

        <div className="beginner-guide-section beginner-feature-request-section">
          <div className="beginner-guide-section-head"><span>05-F / NEXT FEATURES</span><h2>기능 추가 요청 예시 모음</h2><p>1단계 웹앱이 작동한 뒤 아래 문장을 하나씩 복사해 기능을 추가하세요.</p></div>
          <div className="beginner-feature-request-grid">{["맛집 추천 탭과 거리·가격대·대표 메뉴·영업시간·공식 링크를 추가해 줘.", "옷 스타일 필터와 날씨·TPO·색상·예산별 코디 카드를 추가해 줘.", "가격대·지역·카테고리·연령대 필터와 결과 비교표를 추가해 줘.", "즐겨찾기·저장·다시 추천·결과 복사 버튼을 추가해 줘.", "검색 결과가 없을 때 안내하고, 잘못된 입력에는 고치는 방법을 보여 줘.", "모바일에서 한 손으로 쓰기 좋게 버튼과 카드 간격을 고쳐 줘.", "추천 근거·출처·확인 필요 배지를 카드에 표시해 줘.", "로딩 화면과 오류 화면을 추가하고 샘플 데이터와 실제 데이터를 구분해 줘."].map((prompt, index) => <article key={prompt}><span>기능 {index + 1}</span><p>{prompt}</p><CopyPromptButton prompt={prompt} /></article>)}</div>
        </div>

        <div className="beginner-guide-section beginner-publish-section">
          <div className="beginner-guide-section-head"><span>07 / SHARE & PUBLISH</span><h2>작은 결과를 배포하는 방법</h2><p>업무 문서는 공유 권한을 확인하고, 웹 결과물은 저장소와 배포 주소를 분리해 관리합니다.</p></div>
          <div className="beginner-publish-grid"><article><Rocket size={21} /><h3>문서·슬라이드</h3><p>최종본, 출처, 작성일, 검토자를 적고 공유 링크의 접근 권한을 확인합니다.</p></article><article><Rocket size={21} /><h3>웹페이지</h3><p>파일을 GitHub 저장소에 올리고 Actions로 빌드한 뒤 GitHub Pages 주소에서 모바일 화면과 주요 링크를 확인합니다.</p></article><article><Rocket size={21} /><h3>다음 개선</h3><p>방문자가 막힌 지점과 자주 쓰는 업무를 기록해 다음 스킬·워크플로우 후보로 바꿉니다.</p></article></div>
          <div className="beginner-final-cta"><div><strong>바로 하나 골라 시작하세요.</strong><span>업무일지 한 주치 또는 회의 메모 3건이면 충분합니다.</span></div><Link href="/workflows" className="primary-action">업무부터 고르기 <ArrowRight size={16} /></Link></div>
        </div>

        <div className="beginner-guide-section beginner-next-stop-section">
          <div className="beginner-guide-section-head"><span>08 / NEXT STOP</span><h2>이제 어디로 갈까요?</h2><p>가이드에서 배운 내용을 실제 메뉴에서 바로 이어서 실행해 보세요.</p></div>
          <div className="beginner-final-checklist"><b>배포 전 6가지 체크</b><div>{["입력 예시·빈 입력·오류 입력을 시험했나요?", "모바일 화면에서 글자와 버튼이 잘 보이나요?", "가격·날짜·영업시간·출처를 공식 자료와 비교했나요?", "실제 개인정보와 비밀번호를 지웠나요?", "자동 발송·삭제·결제 전에 사람 승인 단계가 있나요?", "배포 주소와 다음에 고칠 점을 메모했나요?"].map((item) => <span key={item}><Check size={14} />{item}</span>)}</div></div>
          <div className="beginner-next-links"><Link href="/workflows"><b>업무 찾기</b><span>내가 하려는 업무에 맞는 진행 순서와 프롬프트 찾기 <ArrowRight size={14} /></span></Link><Link href="/tools"><b>도구 찾기</b><span>ChatGPT·Gemini 등 결과에 맞는 도구 비교하기 <ArrowRight size={14} /></span></Link><Link href="/skills"><b>스킬 라이브러리</b><span>반복 작업을 위한 작업 설명서 찾아보기 <ArrowRight size={14} /></span></Link></div>
        </div>

        <div className="beginner-guide-section beginner-review-section">
          <div className="beginner-guide-section-head"><span>LAST / REVIEW TRAINING</span><h2>AI 결과 검수 훈련</h2><p>가이드의 마지막 단계입니다. AI 결과를 바로 믿지 말고 아래 초보자 검수 5가지를 확인하세요.</p></div>
          <div className="beginner-review-layout"><div className="beginner-review-list">{reviewItems.map((item) => <div key={item}><Check size={16} /><span>{item}</span></div>)}</div><div className="beginner-review-warning"><strong>처음에는 맡기지 말 것</strong><p>자동 발송, 자동 삭제, 결제, 계약·법률 판단, 고객에게 바로 전달되는 확정 문장은 초안 단계에서 멈추고 사람이 승인하세요.</p></div></div>
        </div>
      </section>
    </PageFrame>
  );
}
