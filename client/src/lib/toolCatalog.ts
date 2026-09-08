/* Generated from the repository's expanded public catalog; resource lists and model-only records are excluded. */
import { aimattersTools } from "./aimattersTools";
import { googleLabsTools } from "./googleLabsTools";
import { withBilingualFields } from "./bilingualCatalog";

export type DirectoryTool = { id:number; slug:string; name:string; category:string; sourceCategory:string; description:string; useCase:string; tokenTip:string; promptStarter:string; pricing:string; source:string; verifiedAt:string; url:string; pricingUrl?: string; tags:string[] };
const baseDirectoryTools: DirectoryTool[] = [
  {
    "id": 1,
    "slug": "quickgpt-1",
    "name": "QuickGPT",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "Access the ChatGPT web UI from the menu bar, Dock, or using a keyboard shortcut on macOS.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "QuickGPT에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://sindresorhus.gumroad.com/l/quickgpt",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 2,
    "slug": "macgpt-2",
    "name": "MacGPT",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "Native macOS app with a global prompt and also a web UI wrapper.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "MacGPT에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://www.macgpt.com",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 3,
    "slug": "chatterbox-3",
    "name": "Chatterbox",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "Native macOS app that can be shown with a keyboard shortcut.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Chatterbox에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://manuelkehl.gumroad.com/l/chatterbox",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 4,
    "slug": "writemage-4",
    "name": "WriteMage",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "Native macOS app to use ChatGPT in any app. ($)",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "WriteMage에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "유료 옵션 또는 요금제 있음",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://writemage.com",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 5,
    "slug": "palettebrain-5",
    "name": "PaletteBrain",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "Native macOS app to use ChatGPT in any app. ($)",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "PaletteBrain에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "유료 옵션 또는 요금제 있음",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://palettebrain.com",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 6,
    "slug": "machato-6",
    "name": "Machato",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "Native macOS app. ($)",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Machato에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "유료 옵션 또는 요금제 있음",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://untimelyunicorn.gumroad.com/l/machato",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 7,
    "slug": "wondergpt-7",
    "name": "wonderGPT",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "Native macOS app with a focus on simplicity.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "wonderGPT에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://wondergpt.co",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 8,
    "slug": "petey-8",
    "name": "Petey",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "Native iOS and watchOS app. ($)",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Petey에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "유료 옵션 또는 요금제 있음",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://apps.apple.com/app/id6446047813",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 9,
    "slug": "intellibar-9",
    "name": "IntelliBar",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "macOS app that can be shown with a keyboard shortcut. ($ · Electron)",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "IntelliBar에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "유료 옵션 또는 요금제 있음",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://intellibar.app",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 10,
    "slug": "ask-ai-10",
    "name": "Ask AI",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "Native watchOS app. ($)",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Ask AI에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "유료 옵션 또는 요금제 있음",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://sindresorhus.com/ask-ai",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 11,
    "slug": "chat-answer-11",
    "name": "Chat Answer",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "Native iOS and Android app.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Chat Answer에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/bapaws/answer",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 12,
    "slug": "chat-ai-desktop-app-12",
    "name": "Chat AI Desktop App",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "Cross-platform web UI wrapper.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Chat AI Desktop App에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/sonnylazuardi/chat-ai-desktop",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 13,
    "slug": "chatgpt-desktop-application-13",
    "name": "ChatGPT Desktop Application",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "Cross-platform web UI wrapper. (Electron)",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "ChatGPT Desktop Application에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/lencx/ChatGPT",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 14,
    "slug": "chatgpt-android-14",
    "name": "ChatGPT Android",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "Native Android app.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "ChatGPT Android에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/skydoves/chatgpt-android",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 15,
    "slug": "chatarkit-15",
    "name": "ChatARKit",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "iOS app for creating AR experiences with natural language.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "ChatARKit에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/trzy/ChatARKit",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 16,
    "slug": "delphi-chatgpt-16",
    "name": "Delphi ChatGPT",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "Native cross-platform app.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Delphi ChatGPT에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/HemulGM/ChatGPT",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 17,
    "slug": "chatbox-17",
    "name": "Chatbox",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "Cross-platform app.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Chatbox에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/Bin-Huang/chatbox",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 18,
    "slug": "short-circuit-18",
    "name": "Short Circuit",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "Native iOS and macOS app with support for Siri, Shortcuts, and more. ($)",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Short Circuit에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "유료 옵션 또는 요금제 있음",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://apps.apple.com/app/id1638522784",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 19,
    "slug": "chatboost-19",
    "name": "ChatBoost",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "Native Android app with support for Azure voice, custom prompts, and more. ($)",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "ChatBoost에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "유료 옵션 또는 요금제 있음",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://play.google.com/store/apps/details?id=studio.muggle.chatboost",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 20,
    "slug": "developer-duck-20",
    "name": "Developer Duck",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "Native developer-focused macOS app with Xcode plugin and command line support. ($)",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Developer Duck에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "유료 옵션 또는 요금제 있음",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://apps.apple.com/app/id1662283032",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 21,
    "slug": "hello-history-21",
    "name": "Hello History",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "Chat with historical figures on iOS and Android. ($)",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Hello History에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "유료 옵션 또는 요금제 있음",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://hellohistory.ai",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 22,
    "slug": "actions-22",
    "name": "Actions",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "Use ChatGPT from the Shortcuts app on iOS and macOS.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Actions에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/sindresorhus/Actions",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 23,
    "slug": "easychat-ai-23",
    "name": "EasyChat AI",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "Native Windows app using the latest Windows 11 design lanquage.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "EasyChat AI에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://easychat-ai.app",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 24,
    "slug": "pgmagic-24",
    "name": "pgMagic",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "macOS app that lets you query your PostgreSQL database using natural language. ($)",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "pgMagic에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "유료 옵션 또는 요금제 있음",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://pgmagic.app",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 25,
    "slug": "atua-25",
    "name": "Atua",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "macOS app to use ChatGPT in any app. ($)",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Atua에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "유료 옵션 또는 요금제 있음",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://atua.app",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 26,
    "slug": "16x-prompt-26",
    "name": "16x Prompt",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "Cross-platform app to add source code and formatting instructions into prompt for coding tasks. ($)",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "16x Prompt에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "유료 옵션 또는 요금제 있음",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://prompt.16x.engineer",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 27,
    "slug": "ai-chat-27",
    "name": "AI Chat",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "Cross-platform app that provides quick access to chatbots like ChatGPT from the menu bar. (Electron)",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "AI Chat에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://www.chatbar.top",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 28,
    "slug": "screensnapai-28",
    "name": "ScreenSnapAI",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "Native macOS app to chat about captured screenshots. ($)",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "ScreenSnapAI에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "유료 옵션 또는 요금제 있음",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://screensnap.ai",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 29,
    "slug": "qchatgpt-29",
    "name": "QChatGPT",
    "category": "업무·자동화",
    "sourceCategory": "Apps",
    "description": "ChatGPT cross-platform client made with the Quasar framework. (Electron)",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "QChatGPT에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/timamus/QChatGPT",
    "tags": [
      "업무·자동화",
      "Apps"
    ]
  },
  {
    "id": 30,
    "slug": "sharegpt-30",
    "name": "ShareGPT",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Share permanent links to ChatGPT conversations.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "ShareGPT에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/domeccleston/sharegpt",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 31,
    "slug": "anse-31",
    "name": "Anse",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Alternative ChatGPT web UI.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Anse에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/anse-app/anse",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 32,
    "slug": "chatbot-ui-32",
    "name": "chatbot-ui",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Alternative ChatGPT web UI.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "chatbot-ui에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/mckaywrigley/chatbot-ui",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 33,
    "slug": "chatgpt-next-web-33",
    "name": "ChatGPT Next Web",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Alternative ChatGPT web UI.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "ChatGPT Next Web에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/Yidadaa/ChatGPT-Next-Web",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 34,
    "slug": "roomgpt-34",
    "name": "roomGPT",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Generate your dream room.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "roomGPT에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/Nutlope/roomGPT",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 35,
    "slug": "docsgpt-35",
    "name": "DocsGPT",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Documentation assistant.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "DocsGPT에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/arc53/DocsGPT",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 36,
    "slug": "promptsandbox-36",
    "name": "promptsandbox",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Visual programming tool for experimenting with ChatGPT.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "promptsandbox에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/eg9y/promptsandbox.io",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 37,
    "slug": "adrenaline-37",
    "name": "Adrenaline",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Talk to your codebase.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Adrenaline에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/shobrook/adrenaline/",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 38,
    "slug": "deepwrite-ai-38",
    "name": "DeepWrite AI",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Blog post generator.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "DeepWrite AI에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/simplysabir/AI-Writing-Assistant",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 39,
    "slug": "chat-with-gpt-39",
    "name": "Chat with GPT",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Open-source ChatGPT web app with a voice.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Chat with GPT에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/cogentapps/chat-with-gpt",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 40,
    "slug": "fastchat-40",
    "name": "FastChat",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "An open platform for training, serving, and evaluating large language model based chatbots.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "FastChat에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/lm-sys/FastChat",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 41,
    "slug": "kindle-gpt-41",
    "name": "kindle-gpt",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Search and chat on your Kindle highlights.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "kindle-gpt에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/mckaywrigley/kindle-gpt",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 42,
    "slug": "eslint-gpt-42",
    "name": "eslint-gpt",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Generate ESLint rules from example code.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "eslint-gpt에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/ycjcl868/eslint-gpt",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 43,
    "slug": "chatgpt-i18n-43",
    "name": "chatgpt-i18n",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Localize your websites.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "chatgpt-i18n에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/ObservedObserver/chatgpt-i18n",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 44,
    "slug": "agentgpt-44",
    "name": "AgentGPT",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Autonomous AI agents in your browser.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "AgentGPT에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/reworkd/AgentGPT",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 45,
    "slug": "op-vault-chatgpt-45",
    "name": "OP Vault ChatGPT",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Give ChatGPT long-term memory using the OP Stack (OpenAI + Pinecone Vector Database).",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "OP Vault ChatGPT에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/pashpashpash/vault-ai",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 46,
    "slug": "chatgpt-demo-46",
    "name": "chatgpt-demo",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Minimal web UI for ChatGPT.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "chatgpt-demo에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/anse-app/chatgpt-demo",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 47,
    "slug": "pdfgpt-47",
    "name": "pdfGPT",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Interactive conversations with the contents of PDF files.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "pdfGPT에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/bhaskatripathi/pdfGPT",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 48,
    "slug": "chat-chat-48",
    "name": "Chat Chat",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Your own unified AI interface.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Chat Chat에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/okisdev/ChatChat",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 49,
    "slug": "vlog-49",
    "name": "VLog",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Convert videos to documents.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "VLog에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/showlab/VLog",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 50,
    "slug": "ask-anything-50",
    "name": "Ask-Anything",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "ChatGPT with video understanding and communication.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Ask-Anything에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/OpenGVLab/Ask-Anything",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 51,
    "slug": "taskmatrix-51",
    "name": "TaskMatrix",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Combines ChatGPT with Visual Models for enhanced image-chat interactions.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "TaskMatrix에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/microsoft/TaskMatrix",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 52,
    "slug": "openchat-52",
    "name": "OpenChat",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Personalized ChatGPT chatbot.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "OpenChat에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/openchatai/OpenChat",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 53,
    "slug": "gpt-code-ui-53",
    "name": "gpt-code-ui",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Code interpreter integrated with ChatGPT.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "gpt-code-ui에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/ricklamers/gpt-code-ui",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 54,
    "slug": "ai-chatbot-54",
    "name": "ai-chatbot",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Personalized ChatGPT AI chatbot.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "ai-chatbot에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/vercel-labs/ai-chatbot",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 55,
    "slug": "open-interpreter-55",
    "name": "Open Interpreter",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Code interpreter with ChatGPT.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Open Interpreter에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/KillianLucas/open-interpreter",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 56,
    "slug": "web3-gpt-56",
    "name": "Web3-GPT",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Deploy smart contracts with ChatGPT.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Web3-GPT에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/Markeljan/Web3GPT",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 57,
    "slug": "opik-57",
    "name": "Opik",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Open-source end-to-end LLM development platform.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Opik에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/comet-ml/opik",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 58,
    "slug": "openagents-58",
    "name": "OpenAgents",
    "category": "AI 도구",
    "sourceCategory": "Hosted and self-hosted",
    "description": "Open-source replicate of ChatGPT Plus products including code interpreter, plugins and web browsing.",
    "useCase": "Hosted and self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "OpenAgents에서 Hosted and self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/xlang-ai/OpenAgents",
    "tags": [
      "AI 도구",
      "Hosted and self-hosted"
    ]
  },
  {
    "id": 59,
    "slug": "typingmind-59",
    "name": "TypingMind",
    "category": "AI 도구",
    "sourceCategory": "Hosted",
    "description": "Alternative web UI.",
    "useCase": "Hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "TypingMind에서 Hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://www.typingmind.com",
    "tags": [
      "AI 도구",
      "Hosted"
    ]
  },
  {
    "id": 60,
    "slug": "chatkit-60",
    "name": "ChatKit",
    "category": "AI 도구",
    "sourceCategory": "Hosted",
    "description": "Refined ChatGPT UI with support for plugins and accessing external resources.",
    "useCase": "Hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "ChatKit에서 Hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://chatkit.app",
    "tags": [
      "AI 도구",
      "Hosted"
    ]
  },
  {
    "id": 61,
    "slug": "humata-ai-61",
    "name": "Humata.ai",
    "category": "AI 도구",
    "sourceCategory": "Hosted",
    "description": "Ask anything about your files.",
    "useCase": "Hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Humata.ai에서 Hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://www.humata.ai",
    "tags": [
      "AI 도구",
      "Hosted"
    ]
  },
  {
    "id": 62,
    "slug": "epic-music-quiz-62",
    "name": "Epic Music Quiz",
    "category": "AI 도구",
    "sourceCategory": "Hosted",
    "description": "Create your own custom music video quiz.",
    "useCase": "Hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Epic Music Quiz에서 Hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://epicmusicquiz.com",
    "tags": [
      "AI 도구",
      "Hosted"
    ]
  },
  {
    "id": 63,
    "slug": "flexgpt-63",
    "name": "FlexGPT",
    "category": "AI 도구",
    "sourceCategory": "Hosted",
    "description": "Like ChatGPT but for pros, with long-term memory, internet access, unlimited GPT-4, and no subscription.",
    "useCase": "Hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "FlexGPT에서 Hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://flexgpt.io",
    "tags": [
      "AI 도구",
      "Hosted"
    ]
  },
  {
    "id": 64,
    "slug": "learngpt-64",
    "name": "LearnGPT",
    "category": "AI 도구",
    "sourceCategory": "Hosted",
    "description": "Title-based book creation. ($)",
    "useCase": "Hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "LearnGPT에서 Hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "유료 옵션 또는 요금제 있음",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://learngpt.art",
    "tags": [
      "AI 도구",
      "Hosted"
    ]
  },
  {
    "id": 65,
    "slug": "wielded-65",
    "name": "Wielded",
    "category": "AI 도구",
    "sourceCategory": "Hosted",
    "description": "Web UI that works for OpenAI, Azure, Anthropic, and AWS Bedrock. Free for individuals.",
    "useCase": "Hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Wielded에서 Hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "무료/무료 티어 가능",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://wielded.com",
    "tags": [
      "AI 도구",
      "Hosted"
    ]
  },
  {
    "id": 66,
    "slug": "price-per-token-66",
    "name": "Price Per Token",
    "category": "AI 도구",
    "sourceCategory": "Hosted",
    "description": "Compare LLM API pricing across providers. Includes token counter and cost calculator.",
    "useCase": "Hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Price Per Token에서 Hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://pricepertoken.com",
    "tags": [
      "AI 도구",
      "Hosted"
    ]
  },
  {
    "id": 67,
    "slug": "taskade-67",
    "name": "Taskade",
    "category": "AI 도구",
    "sourceCategory": "Hosted",
    "description": "AI-powered workspace with custom AI agents, multi-model support (GPT, Claude, Gemini), project management, and workflow automation for teams.",
    "useCase": "Hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Taskade에서 Hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://taskade.com",
    "tags": [
      "AI 도구",
      "Hosted"
    ]
  },
  {
    "id": 68,
    "slug": "auto-gpt-68",
    "name": "Auto-GPT",
    "category": "AI 도구",
    "sourceCategory": "Self-hosted",
    "description": "An experimental open-source attempt to make GPT-4 fully autonomous.",
    "useCase": "Self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Auto-GPT에서 Self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/Significant-Gravitas/Auto-GPT",
    "tags": [
      "AI 도구",
      "Self-hosted"
    ]
  },
  {
    "id": 69,
    "slug": "chatgpt-paper-reader-69",
    "name": "ChatGPT-Paper-Reader",
    "category": "AI 도구",
    "sourceCategory": "Self-hosted",
    "description": "Read and summarize academic papers.",
    "useCase": "Self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "ChatGPT-Paper-Reader에서 Self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/talkingwallace/ChatGPT-Paper-Reader",
    "tags": [
      "AI 도구",
      "Self-hosted"
    ]
  },
  {
    "id": 70,
    "slug": "sidekick-70",
    "name": "Sidekick",
    "category": "AI 도구",
    "sourceCategory": "Self-hosted",
    "description": "Connect external data to ChatGPT APIs through a dashboard.",
    "useCase": "Self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Sidekick에서 Self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/ai-sidekick/sidekick",
    "tags": [
      "AI 도구",
      "Self-hosted"
    ]
  },
  {
    "id": 71,
    "slug": "twitterbio-71",
    "name": "twitterbio",
    "category": "AI 도구",
    "sourceCategory": "Self-hosted",
    "description": "Generate your Twitter bio.",
    "useCase": "Self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "twitterbio에서 Self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/Nutlope/twitterbio",
    "tags": [
      "AI 도구",
      "Self-hosted"
    ]
  },
  {
    "id": 72,
    "slug": "beelzebub-72",
    "name": "Beelzebub",
    "category": "AI 도구",
    "sourceCategory": "Self-hosted",
    "description": "Secure honeypot framework.",
    "useCase": "Self-hosted 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Beelzebub에서 Self-hosted 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/mariocandela/beelzebub",
    "tags": [
      "AI 도구",
      "Self-hosted"
    ]
  },
  {
    "id": 73,
    "slug": "chatgpt-for-google-73",
    "name": "ChatGPT for Google",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Display ChatGPT response alongside search engine results.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "ChatGPT for Google에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://chatgpt4google.com",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 74,
    "slug": "chatgpt-prompt-genius-74",
    "name": "ChatGPT Prompt Genius",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Discover, share, import, and use the best prompts for ChatGPT.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "ChatGPT Prompt Genius에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/benf2004/ChatGPT-Prompt-Genius",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 75,
    "slug": "chatgpt-box-75",
    "name": "ChatGPT Box",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Deep ChatGPT integrations in your browser.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "ChatGPT Box에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/josStorer/chatGPTBox",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 76,
    "slug": "chatgpt-export-and-share-76",
    "name": "ChatGPT Export and Share",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Download your ChatGPT history to PNG, PDF or a sharable link.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "ChatGPT Export and Share에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/liady/ChatGPT-pdf",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 77,
    "slug": "superpower-chatgpt-77",
    "name": "Superpower ChatGPT",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Enhance the ChatGPT web UI with search history, create folders, export all chats, pin messages, and access thousands of prompts.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "Superpower ChatGPT에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://chrome.google.com/webstore/detail/superpower-chatgpt/amhmeenmapldpjdedekalnfifgnpfnkc",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 78,
    "slug": "chatgpt-google-summary-extension-78",
    "name": "chatgpt-google-summary-extension",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Display ChatGPT summaries alongside Google search results, YouTube videos, etc.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "chatgpt-google-summary-extension에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/sparticleinc/chatgpt-google-summary-extension",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 79,
    "slug": "fancygpt-79",
    "name": "FancyGPT",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Save and share beautiful ChatGPT snippets as images, PDFs, and text files.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "FancyGPT에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://chrome.google.com/webstore/detail/fancygpt/meonalmakdjaojaoipfhahcfccoecegk",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 80,
    "slug": "writingmate-ai-80",
    "name": "WritingMate.ai",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Writing assistant.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "WritingMate.ai에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://chrome.google.com/webstore/detail/writingmateai-1-chatgpt-a/iihamopomflffiecicbgelncanmfionp",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 81,
    "slug": "summarize-81",
    "name": "Summarize",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Summarize websites.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "Summarize에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/clmnin/summarize.site",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 82,
    "slug": "webchatgpt-82",
    "name": "WebChatGPT",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Enable web access in ChatGPT.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "WebChatGPT에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/qunash/chatgpt-advanced/",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 83,
    "slug": "chatgpt-for-chrome-youtube-summary-83",
    "name": "ChatGPT for Chrome & YouTube Summary",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Access ChatGPT from the Chrome toolbar, see transcripts of YouTube videos, and summarize YouTube videos.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "ChatGPT for Chrome & YouTube Summary에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://chrome.google.com/webstore/detail/chatgpt-for-chrome-youtub/cdjifpfganmhoojfclednjdnnpooaojb",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 84,
    "slug": "chatgpt-enhancement-extension-84",
    "name": "ChatGPT Enhancement Extension",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Enhancements to the ChatGPT web UI.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "ChatGPT Enhancement Extension에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/sailist/chatgpt-enhancement-extension",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 85,
    "slug": "chassistantgpt-85",
    "name": "ChassistantGPT",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Chrome browser extension that embeds ChatGPT as a hands-free voice assistant.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "ChassistantGPT에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "무료/무료 티어 가능",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/idosal/assistant-chat-gpt",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 86,
    "slug": "talk-to-chatgpt-86",
    "name": "Talk-to-ChatGPT",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Talk with ChatGPT using your voice and listen to answers.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "Talk-to-ChatGPT에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/C-Nedelcu/talk-to-chatgpt",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 87,
    "slug": "chatgpt-for-google-colab-87",
    "name": "ChatGPT for Google Colab",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Embed ChatGPT inside Google Colab.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "ChatGPT for Google Colab에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/ali-h-kudeir/ChatGPT-Google-Colab",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 88,
    "slug": "codereview-gpt-88",
    "name": "codereview.gpt",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Reviews your pull requests.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "codereview.gpt에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/sturdy-dev/codereview.gpt",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 89,
    "slug": "gpt2markdown-89",
    "name": "GPT2Markdown",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Export your ChatGPT conversations to Markdown.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "GPT2Markdown에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/0xreeko/gpt2markdown",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 90,
    "slug": "chatgpt-widescreen-mode-90",
    "name": "ChatGPT Widescreen Mode",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Adds widescreen and fullscreen mode to ChatGPT.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "ChatGPT Widescreen Mode에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/adamlui/chatgpt-widescreen",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 91,
    "slug": "chatgpt-infinity-91",
    "name": "ChatGPT Infinity",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Makes ChatGPT automatically answer random questions to increase your knowledge.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "ChatGPT Infinity에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/adamlui/chatgpt-infinity",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 92,
    "slug": "meeper-92",
    "name": "Meeper",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Transcriptions, summary and more using ChatGPT and Whisper AI for meetings and any browser tab.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "Meeper에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/pas1ko/meeper",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 93,
    "slug": "youtube-summary-by-tubesum-93",
    "name": "YouTube Summary by TubeSum",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Summarize YouTube videos.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "YouTube Summary by TubeSum에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://chromewebstore.google.com/detail/tubesum/hkhihfjmjgledkdhmlohldmpnolcoabm",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 94,
    "slug": "swiftstyle-ai-94",
    "name": "SwiftStyle AI",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "An open-source Chrome extension that customizes content to match your unique style and brand voice.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "SwiftStyle AI에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/swiftstyleai/swiftstyleai",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 95,
    "slug": "chatgpt-exporter-95",
    "name": "ChatGPT Exporter",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Export and share ChatGPT conversation history.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "ChatGPT Exporter에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/pionxzh/chatgpt-exporter",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 96,
    "slug": "keepchatgpt-96",
    "name": "KeepChatGPT",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Fixes common networks errors and problems with ChatGPT.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "KeepChatGPT에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/xcanwin/KeepChatGPT/blob/main/README_EN.md",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 97,
    "slug": "autoclear-chatgpt-history-97",
    "name": "Autoclear ChatGPT History",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Auto-clear ChatGPT conversation history for increased privacy.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "Autoclear ChatGPT History에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/adamlui/autoclear-chatgpt-history",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 98,
    "slug": "chatgpt-auto-refresh-98",
    "name": "ChatGPT Auto Refresh",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Keeps ChatGPT sessions fresh to avoid network errors and Cloudflare checks.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "ChatGPT Auto Refresh에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/adamlui/chatgpt-auto-refresh",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 99,
    "slug": "chatgpt-auto-continue-99",
    "name": "ChatGPT Auto-Continue",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Automatically clicks \"Continue generating\" when responses are cut off.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "ChatGPT Auto-Continue에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/adamlui/chatgpt-auto-continue",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 100,
    "slug": "conversation-saving-100",
    "name": "Conversation Saving",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Save your ChatGPT conversation.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "Conversation Saving에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/jcubic/chat-gpt",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 101,
    "slug": "chatgpt-export-101",
    "name": "ChatGPT Export",
    "category": "브라우저·리서치",
    "sourceCategory": "Browser extensions",
    "description": "Export ChatGPT conversations to Markdown files.",
    "useCase": "브라우저 작업·스크랩·검색 보조",
    "tokenTip": "수집할 필드와 최대 결과 수를 먼저 지정하세요.",
    "promptStarter": "ChatGPT Export에서 브라우저 작업·스크랩·검색 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/yaph/chatgpt-export",
    "tags": [
      "브라우저·리서치",
      "Browser extensions"
    ]
  },
  {
    "id": 102,
    "slug": "assistant-cli-102",
    "name": "Assistant CLI",
    "category": "개발·자동화",
    "sourceCategory": "CLI tools",
    "description": "Use ChatGPT from the command-line.",
    "useCase": "터미널·CLI 기반 작업",
    "tokenTip": "명령어·입력·출력을 표준화해 재시도 때 같은 컨텍스트를 반복하지 마세요.",
    "promptStarter": "Assistant CLI에서 터미널·CLI 기반 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/diciaup/assistant-cli",
    "tags": [
      "개발·자동화",
      "CLI tools"
    ]
  },
  {
    "id": 103,
    "slug": "searchgpt-103",
    "name": "SearchGPT",
    "category": "개발·자동화",
    "sourceCategory": "CLI tools",
    "description": "Connect ChatGPT with the Internet.",
    "useCase": "터미널·CLI 기반 작업",
    "tokenTip": "명령어·입력·출력을 표준화해 재시도 때 같은 컨텍스트를 반복하지 마세요.",
    "promptStarter": "SearchGPT에서 터미널·CLI 기반 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/tobiasbueschel/search-gpt",
    "tags": [
      "개발·자동화",
      "CLI tools"
    ]
  },
  {
    "id": 104,
    "slug": "chatgpt-conversation-104",
    "name": "chatgpt-conversation",
    "category": "개발·자동화",
    "sourceCategory": "CLI tools",
    "description": "Have a conversation with ChatGPT.",
    "useCase": "터미널·CLI 기반 작업",
    "tokenTip": "명령어·입력·출력을 표준화해 재시도 때 같은 컨텍스트를 반복하지 마세요.",
    "promptStarter": "chatgpt-conversation에서 터미널·CLI 기반 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/platelminto/chatgpt-conversation",
    "tags": [
      "개발·자동화",
      "CLI tools"
    ]
  },
  {
    "id": 105,
    "slug": "cli-for-chatgpt-105",
    "name": "CLI for ChatGPT",
    "category": "개발·자동화",
    "sourceCategory": "CLI tools",
    "description": "Interactive interface for ChatGPT.",
    "useCase": "터미널·CLI 기반 작업",
    "tokenTip": "명령어·입력·출력을 표준화해 재시도 때 같은 컨텍스트를 반복하지 마세요.",
    "promptStarter": "CLI for ChatGPT에서 터미널·CLI 기반 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/j178/chatgpt",
    "tags": [
      "개발·자동화",
      "CLI tools"
    ]
  },
  {
    "id": 106,
    "slug": "chat-gpt-ppt-106",
    "name": "chat-gpt-ppt",
    "category": "개발·자동화",
    "sourceCategory": "CLI tools",
    "description": "Automatically generate PowerPoint presentations.",
    "useCase": "터미널·CLI 기반 작업",
    "tokenTip": "명령어·입력·출력을 표준화해 재시도 때 같은 컨텍스트를 반복하지 마세요.",
    "promptStarter": "chat-gpt-ppt에서 터미널·CLI 기반 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/williamfzc/chat-gpt-ppt",
    "tags": [
      "개발·자동화",
      "CLI tools"
    ]
  },
  {
    "id": 107,
    "slug": "stackexplain-107",
    "name": "StackExplain",
    "category": "개발·자동화",
    "sourceCategory": "CLI tools",
    "description": "Have your error messages explained in plain English.",
    "useCase": "터미널·CLI 기반 작업",
    "tokenTip": "명령어·입력·출력을 표준화해 재시도 때 같은 컨텍스트를 반복하지 마세요.",
    "promptStarter": "StackExplain에서 터미널·CLI 기반 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/shobrook/stackexplain",
    "tags": [
      "개발·자동화",
      "CLI tools"
    ]
  },
  {
    "id": 108,
    "slug": "clevercli-108",
    "name": "clevercli",
    "category": "개발·자동화",
    "sourceCategory": "CLI tools",
    "description": "ChatGPT-powered command-line utilities.",
    "useCase": "터미널·CLI 기반 작업",
    "tokenTip": "명령어·입력·출력을 표준화해 재시도 때 같은 컨텍스트를 반복하지 마세요.",
    "promptStarter": "clevercli에서 터미널·CLI 기반 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/clevercli/clevercli",
    "tags": [
      "개발·자동화",
      "CLI tools"
    ]
  },
  {
    "id": 109,
    "slug": "readme-ai-109",
    "name": "README-AI",
    "category": "개발·자동화",
    "sourceCategory": "CLI tools",
    "description": "Automatically generate README files.",
    "useCase": "터미널·CLI 기반 작업",
    "tokenTip": "명령어·입력·출력을 표준화해 재시도 때 같은 컨텍스트를 반복하지 마세요.",
    "promptStarter": "README-AI에서 터미널·CLI 기반 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/eli64s/README-AI",
    "tags": [
      "개발·자동화",
      "CLI tools"
    ]
  },
  {
    "id": 110,
    "slug": "aicommits-110",
    "name": "aicommits",
    "category": "개발·자동화",
    "sourceCategory": "CLI tools",
    "description": "Automatically generate Git commit messages.",
    "useCase": "터미널·CLI 기반 작업",
    "tokenTip": "명령어·입력·출력을 표준화해 재시도 때 같은 컨텍스트를 반복하지 마세요.",
    "promptStarter": "aicommits에서 터미널·CLI 기반 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/Nutlope/aicommits",
    "tags": [
      "개발·자동화",
      "CLI tools"
    ]
  },
  {
    "id": 111,
    "slug": "happycommit-111",
    "name": "happycommit",
    "category": "개발·자동화",
    "sourceCategory": "CLI tools",
    "description": "Automatically generate Git commit messages.",
    "useCase": "터미널·CLI 기반 작업",
    "tokenTip": "명령어·입력·출력을 표준화해 재시도 때 같은 컨텍스트를 반복하지 마세요.",
    "promptStarter": "happycommit에서 터미널·CLI 기반 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/jackbackes/happycommit",
    "tags": [
      "개발·자동화",
      "CLI tools"
    ]
  },
  {
    "id": 112,
    "slug": "commit-assist-112",
    "name": "commit-assist",
    "category": "개발·자동화",
    "sourceCategory": "CLI tools",
    "description": "Automatically generate Git commit messages.",
    "useCase": "터미널·CLI 기반 작업",
    "tokenTip": "명령어·입력·출력을 표준화해 재시도 때 같은 컨텍스트를 반복하지 마세요.",
    "promptStarter": "commit-assist에서 터미널·CLI 기반 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/dejorrit/commit-assist",
    "tags": [
      "개발·자동화",
      "CLI tools"
    ]
  },
  {
    "id": 113,
    "slug": "cz-git-113",
    "name": "cz-git",
    "category": "개발·자동화",
    "sourceCategory": "CLI tools",
    "description": "Automatically generate Git commit messages.",
    "useCase": "터미널·CLI 기반 작업",
    "tokenTip": "명령어·입력·출력을 표준화해 재시도 때 같은 컨텍스트를 반복하지 마세요.",
    "promptStarter": "cz-git에서 터미널·CLI 기반 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/Zhengqbbb/cz-git",
    "tags": [
      "개발·자동화",
      "CLI tools"
    ]
  },
  {
    "id": 114,
    "slug": "ai-commit-114",
    "name": "ai-commit",
    "category": "개발·자동화",
    "sourceCategory": "CLI tools",
    "description": "Automatically generate conventional Git commit messages.",
    "useCase": "터미널·CLI 기반 작업",
    "tokenTip": "명령어·입력·출력을 표준화해 재시도 때 같은 컨텍스트를 반복하지 마세요.",
    "promptStarter": "ai-commit에서 터미널·CLI 기반 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/guanguans/ai-commit",
    "tags": [
      "개발·자동화",
      "CLI tools"
    ]
  },
  {
    "id": 115,
    "slug": "gptcommit-115",
    "name": "gptcommit",
    "category": "개발·자동화",
    "sourceCategory": "CLI tools",
    "description": "Git hook for authoring commit messages.",
    "useCase": "터미널·CLI 기반 작업",
    "tokenTip": "명령어·입력·출력을 표준화해 재시도 때 같은 컨텍스트를 반복하지 마세요.",
    "promptStarter": "gptcommit에서 터미널·CLI 기반 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/zurawiki/gptcommit",
    "tags": [
      "개발·자동화",
      "CLI tools"
    ]
  },
  {
    "id": 116,
    "slug": "autodoc-116",
    "name": "autodoc",
    "category": "개발·자동화",
    "sourceCategory": "CLI tools",
    "description": "Automatically generate codebase documentation.",
    "useCase": "터미널·CLI 기반 작업",
    "tokenTip": "명령어·입력·출력을 표준화해 재시도 때 같은 컨텍스트를 반복하지 마세요.",
    "promptStarter": "autodoc에서 터미널·CLI 기반 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/context-labs/autodoc",
    "tags": [
      "개발·자동화",
      "CLI tools"
    ]
  },
  {
    "id": 117,
    "slug": "gpt3-wordpress-post-generator-117",
    "name": "GPT3 WordPress Post Generator",
    "category": "개발·자동화",
    "sourceCategory": "CLI tools",
    "description": "Generate WordPress blog posts.",
    "useCase": "터미널·CLI 기반 작업",
    "tokenTip": "명령어·입력·출력을 표준화해 재시도 때 같은 컨텍스트를 반복하지 마세요.",
    "promptStarter": "GPT3 WordPress Post Generator에서 터미널·CLI 기반 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/nicolaballotta/gpt3-wordpress-post-generator",
    "tags": [
      "개발·자동화",
      "CLI tools"
    ]
  },
  {
    "id": 118,
    "slug": "aiac-118",
    "name": "aiac",
    "category": "개발·자동화",
    "sourceCategory": "CLI tools",
    "description": "Infrastructure-as-Code generator.",
    "useCase": "터미널·CLI 기반 작업",
    "tokenTip": "명령어·입력·출력을 표준화해 재시도 때 같은 컨텍스트를 반복하지 마세요.",
    "promptStarter": "aiac에서 터미널·CLI 기반 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/gofireflyio/aiac",
    "tags": [
      "개발·자동화",
      "CLI tools"
    ]
  },
  {
    "id": 119,
    "slug": "tenere-119",
    "name": "tenere",
    "category": "개발·자동화",
    "sourceCategory": "CLI tools",
    "description": "Terminal interface (TUI) for ChatGPT written in Rust.",
    "useCase": "터미널·CLI 기반 작업",
    "tokenTip": "명령어·입력·출력을 표준화해 재시도 때 같은 컨텍스트를 반복하지 마세요.",
    "promptStarter": "tenere에서 터미널·CLI 기반 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/pythops/tenere",
    "tags": [
      "개발·자동화",
      "CLI tools"
    ]
  },
  {
    "id": 120,
    "slug": "shellchatgpt-120",
    "name": "shellChatGPT",
    "category": "개발·자동화",
    "sourceCategory": "CLI tools",
    "description": "Use ChatGPT from the command-line.",
    "useCase": "터미널·CLI 기반 작업",
    "tokenTip": "명령어·입력·출력을 표준화해 재시도 때 같은 컨텍스트를 반복하지 마세요.",
    "promptStarter": "shellChatGPT에서 터미널·CLI 기반 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "유료 옵션 또는 요금제 있음",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/mountaineerbr/shellChatGPT",
    "tags": [
      "개발·자동화",
      "CLI tools"
    ]
  },
  {
    "id": 121,
    "slug": "shell-genie-121",
    "name": "Shell Genie",
    "category": "개발·자동화",
    "sourceCategory": "CLI tools",
    "description": "Interact with the terminal in plain English.",
    "useCase": "터미널·CLI 기반 작업",
    "tokenTip": "명령어·입력·출력을 표준화해 재시도 때 같은 컨텍스트를 반복하지 마세요.",
    "promptStarter": "Shell Genie에서 터미널·CLI 기반 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/dylanjcastillo/shell-genie",
    "tags": [
      "개발·자동화",
      "CLI tools"
    ]
  },
  {
    "id": 122,
    "slug": "shellgpt-122",
    "name": "ShellGPT",
    "category": "개발·자동화",
    "sourceCategory": "CLI tools",
    "description": "Use ChatGPT from the command-line.",
    "useCase": "터미널·CLI 기반 작업",
    "tokenTip": "명령어·입력·출력을 표준화해 재시도 때 같은 컨텍스트를 반복하지 마세요.",
    "promptStarter": "ShellGPT에서 터미널·CLI 기반 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/TheR1D/shell_gpt",
    "tags": [
      "개발·자동화",
      "CLI tools"
    ]
  },
  {
    "id": 123,
    "slug": "chatgpt-shell-cli-123",
    "name": "chatGPT-shell-cli",
    "category": "개발·자동화",
    "sourceCategory": "CLI tools",
    "description": "Use ChatGPT from the command-line. Shell script.",
    "useCase": "터미널·CLI 기반 작업",
    "tokenTip": "명령어·입력·출력을 표준화해 재시도 때 같은 컨텍스트를 반복하지 마세요.",
    "promptStarter": "chatGPT-shell-cli에서 터미널·CLI 기반 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/0xacx/chatGPT-shell-cli",
    "tags": [
      "개발·자동화",
      "CLI tools"
    ]
  },
  {
    "id": 124,
    "slug": "aifiles-124",
    "name": "aifiles",
    "category": "개발·자동화",
    "sourceCategory": "CLI tools",
    "description": "Organize and manage your files using AI.",
    "useCase": "터미널·CLI 기반 작업",
    "tokenTip": "명령어·입력·출력을 표준화해 재시도 때 같은 컨텍스트를 반복하지 마세요.",
    "promptStarter": "aifiles에서 터미널·CLI 기반 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/jjuliano/aifiles",
    "tags": [
      "개발·자동화",
      "CLI tools"
    ]
  },
  {
    "id": 125,
    "slug": "chatgpt-twitter-bot-125",
    "name": "chatgpt-twitter-bot",
    "category": "업무·자동화",
    "sourceCategory": "Bots",
    "description": "Twitter bot.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "chatgpt-twitter-bot에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/transitive-bullshit/chatgpt-twitter-bot",
    "tags": [
      "업무·자동화",
      "Bots"
    ]
  },
  {
    "id": 126,
    "slug": "chatgpt-telegram-bot-serverless-126",
    "name": "chatgpt-telegram-bot-serverless",
    "category": "업무·자동화",
    "sourceCategory": "Bots",
    "description": "Telegram bot.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "chatgpt-telegram-bot-serverless에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/franalgaba/chatgpt-telegram-bot-serverless",
    "tags": [
      "업무·자동화",
      "Bots"
    ]
  },
  {
    "id": 127,
    "slug": "chatgpt-telegram-127",
    "name": "chatgpt-telegram",
    "category": "업무·자동화",
    "sourceCategory": "Bots",
    "description": "Telegram bot.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "chatgpt-telegram에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/m1guelpf/chatgpt-telegram",
    "tags": [
      "업무·자동화",
      "Bots"
    ]
  },
  {
    "id": 128,
    "slug": "mygptreader-128",
    "name": "myGPTReader",
    "category": "업무·자동화",
    "sourceCategory": "Bots",
    "description": "Slack bot.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "myGPTReader에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/madawei2699/myGPTReader",
    "tags": [
      "업무·자동화",
      "Bots"
    ]
  },
  {
    "id": 129,
    "slug": "chatgptslackbot-129",
    "name": "ChatGPTSlackBot",
    "category": "업무·자동화",
    "sourceCategory": "Bots",
    "description": "Slack bot.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "ChatGPTSlackBot에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/pedrorito/ChatGPTSlackBot",
    "tags": [
      "업무·자동화",
      "Bots"
    ]
  },
  {
    "id": 130,
    "slug": "chatgpt-discord-bot-130",
    "name": "ChatGPT Discord Bot",
    "category": "업무·자동화",
    "sourceCategory": "Bots",
    "description": "Discord bot.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "ChatGPT Discord Bot에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/Zero6992/chatGPT-discord-bot",
    "tags": [
      "업무·자동화",
      "Bots"
    ]
  },
  {
    "id": 131,
    "slug": "chatgpt-discord-131",
    "name": "chatgpt-discord",
    "category": "업무·자동화",
    "sourceCategory": "Bots",
    "description": "Discord bot.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "chatgpt-discord에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/m1guelpf/chatgpt-discord",
    "tags": [
      "업무·자동화",
      "Bots"
    ]
  },
  {
    "id": 132,
    "slug": "kubernetes-chatgpt-bot-132",
    "name": "kubernetes-chatgpt-bot",
    "category": "업무·자동화",
    "sourceCategory": "Bots",
    "description": "Kubernetes bot.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "kubernetes-chatgpt-bot에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/robusta-dev/kubernetes-chatgpt-bot",
    "tags": [
      "업무·자동화",
      "Bots"
    ]
  },
  {
    "id": 133,
    "slug": "codereview-bot-133",
    "name": "CodeReview Bot",
    "category": "업무·자동화",
    "sourceCategory": "Bots",
    "description": "GitHub Actions bot.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "CodeReview Bot에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/anc95/ChatGPT-CodeReview",
    "tags": [
      "업무·자동화",
      "Bots"
    ]
  },
  {
    "id": 134,
    "slug": "openai-pr-reviewer-134",
    "name": "openai-pr-reviewer",
    "category": "업무·자동화",
    "sourceCategory": "Bots",
    "description": "GitHub Actions bot.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "openai-pr-reviewer에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/fluxninja/openai-pr-reviewer",
    "tags": [
      "업무·자동화",
      "Bots"
    ]
  },
  {
    "id": 135,
    "slug": "chatgpt-create-unit-tests-135",
    "name": "chatgpt-create-unit-tests",
    "category": "업무·자동화",
    "sourceCategory": "Bots",
    "description": "GitHub Actions bot that analyses a pull request and adds unit tests if necessary.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "chatgpt-create-unit-tests에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/zebroc/chatgpt-create-unit-tests",
    "tags": [
      "업무·자동화",
      "Bots"
    ]
  },
  {
    "id": 136,
    "slug": "gpt4-pdf-chatbot-langchain-136",
    "name": "gpt4-pdf-chatbot-langchain",
    "category": "업무·자동화",
    "sourceCategory": "Bots",
    "description": "Chatbot for large PDF files.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "gpt4-pdf-chatbot-langchain에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/mayooear/gpt4-pdf-chatbot-langchain",
    "tags": [
      "업무·자동화",
      "Bots"
    ]
  },
  {
    "id": 137,
    "slug": "wechat-chatgpt-137",
    "name": "wechat-chatgpt",
    "category": "업무·자동화",
    "sourceCategory": "Bots",
    "description": "Wechat bot.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "wechat-chatgpt에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/fuergaosi233/wechat-chatgpt",
    "tags": [
      "업무·자동화",
      "Bots"
    ]
  },
  {
    "id": 138,
    "slug": "chatgpt-telegram-bot-138",
    "name": "chatgpt-telegram-bot",
    "category": "업무·자동화",
    "sourceCategory": "Bots",
    "description": "Telegram bot that supports voice messages.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "chatgpt-telegram-bot에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/karfly/chatgpt_telegram_bot",
    "tags": [
      "업무·자동화",
      "Bots"
    ]
  },
  {
    "id": 139,
    "slug": "duckduckgpt-139",
    "name": "DuckDuckGPT",
    "category": "업무·자동화",
    "sourceCategory": "Bots",
    "description": "DuckDuckGo bot.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "DuckDuckGPT에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/kudoai/duckduckgpt",
    "tags": [
      "업무·자동화",
      "Bots"
    ]
  },
  {
    "id": 140,
    "slug": "bravegpt-140",
    "name": "BraveGPT",
    "category": "업무·자동화",
    "sourceCategory": "Bots",
    "description": "Brave Search bot.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "BraveGPT에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/kudoai/bravegpt",
    "tags": [
      "업무·자동화",
      "Bots"
    ]
  },
  {
    "id": 141,
    "slug": "googlegpt-141",
    "name": "GoogleGPT",
    "category": "업무·자동화",
    "sourceCategory": "Bots",
    "description": "Google Search bot.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "GoogleGPT에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://www.googlegpt.io",
    "tags": [
      "업무·자동화",
      "Bots"
    ]
  },
  {
    "id": 142,
    "slug": "openclaw-142",
    "name": "OpenClaw",
    "category": "업무·자동화",
    "sourceCategory": "Bots",
    "description": "Self-hosted multi-channel bot bridging Claude to WhatsApp, Telegram, Discord, Slack, and more.",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "OpenClaw에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/openclaw/openclaw",
    "tags": [
      "업무·자동화",
      "Bots"
    ]
  },
  {
    "id": 143,
    "slug": "chatgpt-raycast-143",
    "name": "chatgpt-raycast",
    "category": "연결·자동화",
    "sourceCategory": "Integrations",
    "description": "Raycast extension.",
    "useCase": "서비스 연결·워크플로",
    "tokenTip": "트리거와 액션 사이에 전달할 필드만 선택해 페이로드를 줄이세요.",
    "promptStarter": "chatgpt-raycast에서 서비스 연결·워크플로를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/abielzulio/chatgpt-raycast",
    "tags": [
      "연결·자동화",
      "Integrations"
    ]
  },
  {
    "id": 144,
    "slug": "mpociot-chatgpt-vscode-144",
    "name": "mpociot/chatgpt-vscode",
    "category": "연결·자동화",
    "sourceCategory": "Integrations",
    "description": "VSCode extension.",
    "useCase": "서비스 연결·워크플로",
    "tokenTip": "트리거와 액션 사이에 전달할 필드만 선택해 페이로드를 줄이세요.",
    "promptStarter": "mpociot/chatgpt-vscode에서 서비스 연결·워크플로를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/mpociot/chatgpt-vscode",
    "tags": [
      "연결·자동화",
      "Integrations"
    ]
  },
  {
    "id": 145,
    "slug": "gencay-vscode-chatgpt-145",
    "name": "gencay/vscode-chatgpt",
    "category": "연결·자동화",
    "sourceCategory": "Integrations",
    "description": "VSCode extension.",
    "useCase": "서비스 연결·워크플로",
    "tokenTip": "트리거와 액션 사이에 전달할 필드만 선택해 페이로드를 줄이세요.",
    "promptStarter": "gencay/vscode-chatgpt에서 서비스 연결·워크플로를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/gencay/vscode-chatgpt",
    "tags": [
      "연결·자동화",
      "Integrations"
    ]
  },
  {
    "id": 146,
    "slug": "org-ai-146",
    "name": "org-ai",
    "category": "연결·자동화",
    "sourceCategory": "Integrations",
    "description": "Emacs org-mode.",
    "useCase": "서비스 연결·워크플로",
    "tokenTip": "트리거와 액션 사이에 전달할 필드만 선택해 페이로드를 줄이세요.",
    "promptStarter": "org-ai에서 서비스 연결·워크플로를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/rksm/org-ai",
    "tags": [
      "연결·자동화",
      "Integrations"
    ]
  },
  {
    "id": 147,
    "slug": "vim-chatgpt-147",
    "name": "vim-chatgpt",
    "category": "연결·자동화",
    "sourceCategory": "Integrations",
    "description": "Vim plugin.",
    "useCase": "서비스 연결·워크플로",
    "tokenTip": "트리거와 액션 사이에 전달할 필드만 선택해 페이로드를 줄이세요.",
    "promptStarter": "vim-chatgpt에서 서비스 연결·워크플로를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/CoderCookE/vim-chatgpt",
    "tags": [
      "연결·자동화",
      "Integrations"
    ]
  },
  {
    "id": 148,
    "slug": "chatgpt-nvim-148",
    "name": "ChatGPT.nvim",
    "category": "연결·자동화",
    "sourceCategory": "Integrations",
    "description": "Neovim plugin.",
    "useCase": "서비스 연결·워크플로",
    "tokenTip": "트리거와 액션 사이에 전달할 필드만 선택해 페이로드를 줄이세요.",
    "promptStarter": "ChatGPT.nvim에서 서비스 연결·워크플로를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/jackMort/ChatGPT.nvim",
    "tags": [
      "연결·자동화",
      "Integrations"
    ]
  },
  {
    "id": 149,
    "slug": "chatgpt-jetbrains-149",
    "name": "ChatGPT Jetbrains",
    "category": "연결·자동화",
    "sourceCategory": "Integrations",
    "description": "Jetbrains plugin.",
    "useCase": "서비스 연결·워크플로",
    "tokenTip": "트리거와 액션 사이에 전달할 필드만 선택해 페이로드를 줄이세요.",
    "promptStarter": "ChatGPT Jetbrains에서 서비스 연결·워크플로를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/dromara/ChatGPT",
    "tags": [
      "연결·자동화",
      "Integrations"
    ]
  },
  {
    "id": 150,
    "slug": "docgpt-150",
    "name": "DocGPT",
    "category": "연결·자동화",
    "sourceCategory": "Integrations",
    "description": "Writing assistant for Google Docs.",
    "useCase": "서비스 연결·워크플로",
    "tokenTip": "트리거와 액션 사이에 전달할 필드만 선택해 페이로드를 줄이세요.",
    "promptStarter": "DocGPT에서 서비스 연결·워크플로를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://workspace.google.com/u/0/marketplace/app/docgpt_ai_writer_for_docs/466607203252",
    "tags": [
      "연결·자동화",
      "Integrations"
    ]
  },
  {
    "id": 151,
    "slug": "wordgpt-151",
    "name": "WordGPT",
    "category": "연결·자동화",
    "sourceCategory": "Integrations",
    "description": "Use ChatGPT in Microsoft Word.",
    "useCase": "서비스 연결·워크플로",
    "tokenTip": "트리거와 액션 사이에 전달할 필드만 선택해 페이로드를 줄이세요.",
    "promptStarter": "WordGPT에서 서비스 연결·워크플로를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/filippofinke/WordGPT",
    "tags": [
      "연결·자동화",
      "Integrations"
    ]
  },
  {
    "id": 152,
    "slug": "add-chatgpt-to-microsoft-word-152",
    "name": "Add ChatGPT to Microsoft Word",
    "category": "연결·자동화",
    "sourceCategory": "Integrations",
    "description": "How to integrate ChatGPT with Microsoft Word.",
    "useCase": "서비스 연결·워크플로",
    "tokenTip": "트리거와 액션 사이에 전달할 필드만 선택해 페이로드를 줄이세요.",
    "promptStarter": "Add ChatGPT to Microsoft Word에서 서비스 연결·워크플로를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/analyticsinmotion/add-chatgpt-to-microsoft-word",
    "tags": [
      "연결·자동화",
      "Integrations"
    ]
  },
  {
    "id": 153,
    "slug": "open-assistant-helper-153",
    "name": "Open Assistant Helper",
    "category": "연결·자동화",
    "sourceCategory": "Integrations",
    "description": "Improve Open Assistant with ChatGPT.",
    "useCase": "서비스 연결·워크플로",
    "tokenTip": "트리거와 액션 사이에 전달할 필드만 선택해 페이로드를 줄이세요.",
    "promptStarter": "Open Assistant Helper에서 서비스 연결·워크플로를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/AnotiaWang/open-assistant-helper",
    "tags": [
      "연결·자동화",
      "Integrations"
    ]
  },
  {
    "id": 154,
    "slug": "chatgptwizard-154",
    "name": "ChatGPTWizard",
    "category": "연결·자동화",
    "sourceCategory": "Integrations",
    "description": "Embarcadero RAD Studio (Delphi & C++ Builder) plugin.",
    "useCase": "서비스 연결·워크플로",
    "tokenTip": "트리거와 액션 사이에 전달할 필드만 선택해 페이로드를 줄이세요.",
    "promptStarter": "ChatGPTWizard에서 서비스 연결·워크플로를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/AliDehbansiahkarbon/ChatGPTWizard",
    "tags": [
      "연결·자동화",
      "Integrations"
    ]
  },
  {
    "id": 155,
    "slug": "aicommand-155",
    "name": "AICommand",
    "category": "연결·자동화",
    "sourceCategory": "Integrations",
    "description": "ChatGPT integration with Unity Editor.",
    "useCase": "서비스 연결·워크플로",
    "tokenTip": "트리거와 액션 사이에 전달할 필드만 선택해 페이로드를 줄이세요.",
    "promptStarter": "AICommand에서 서비스 연결·워크플로를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/keijiro/AICommand",
    "tags": [
      "연결·자동화",
      "Integrations"
    ]
  },
  {
    "id": 156,
    "slug": "ai-shader-156",
    "name": "AI Shader",
    "category": "연결·자동화",
    "sourceCategory": "Integrations",
    "description": "ChatGPT-powered shader generator for Unity.",
    "useCase": "서비스 연결·워크플로",
    "tokenTip": "트리거와 액션 사이에 전달할 필드만 선택해 페이로드를 줄이세요.",
    "promptStarter": "AI Shader에서 서비스 연결·워크플로를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/keijiro/AIShader",
    "tags": [
      "연결·자동화",
      "Integrations"
    ]
  },
  {
    "id": 157,
    "slug": "translate-gpt-157",
    "name": "Translate GPT",
    "category": "연결·자동화",
    "sourceCategory": "Integrations",
    "description": "A fastlane plugin that provides an action to translate localizable strings using ChatGPT.",
    "useCase": "서비스 연결·워크플로",
    "tokenTip": "트리거와 액션 사이에 전달할 필드만 선택해 페이로드를 줄이세요.",
    "promptStarter": "Translate GPT에서 서비스 연결·워크플로를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/ftp27/fastlane-plugin-translate_gpt",
    "tags": [
      "연결·자동화",
      "Integrations"
    ]
  },
  {
    "id": 158,
    "slug": "pandasai-158",
    "name": "PandasAI",
    "category": "연결·자동화",
    "sourceCategory": "Integrations",
    "description": "Integrate ChatGPT capabilities into Pandas.",
    "useCase": "서비스 연결·워크플로",
    "tokenTip": "트리거와 액션 사이에 전달할 필드만 선택해 페이로드를 줄이세요.",
    "promptStarter": "PandasAI에서 서비스 연결·워크플로를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/gventuri/pandas-ai",
    "tags": [
      "연결·자동화",
      "Integrations"
    ]
  },
  {
    "id": 159,
    "slug": "plus-ai-for-google-slides-159",
    "name": "Plus AI for Google Slides",
    "category": "연결·자동화",
    "sourceCategory": "Integrations",
    "description": "Create AI-powered presentations in Google Slides.",
    "useCase": "서비스 연결·워크플로",
    "tokenTip": "트리거와 액션 사이에 전달할 필드만 선택해 페이로드를 줄이세요.",
    "promptStarter": "Plus AI for Google Slides에서 서비스 연결·워크플로를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://www.plusdocs.com/plus-ai-for-google-slides",
    "tags": [
      "연결·자동화",
      "Integrations"
    ]
  },
  {
    "id": 160,
    "slug": "scikit-llm-160",
    "name": "Scikit-LLM",
    "category": "연결·자동화",
    "sourceCategory": "Integrations",
    "description": "Integrate ChatGPT capabilities into scikit-learn.",
    "useCase": "서비스 연결·워크플로",
    "tokenTip": "트리거와 액션 사이에 전달할 필드만 선택해 페이로드를 줄이세요.",
    "promptStarter": "Scikit-LLM에서 서비스 연결·워크플로를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/iryna-kondr/scikit-llm",
    "tags": [
      "연결·자동화",
      "Integrations"
    ]
  },
  {
    "id": 161,
    "slug": "chatgpt-md-161",
    "name": "ChatGPT-MD",
    "category": "연결·자동화",
    "sourceCategory": "Integrations",
    "description": "ChatGPT integration with Obsidian note-taking software.",
    "useCase": "서비스 연결·워크플로",
    "tokenTip": "트리거와 액션 사이에 전달할 필드만 선택해 페이로드를 줄이세요.",
    "promptStarter": "ChatGPT-MD에서 서비스 연결·워크플로를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/bramses/chatgpt-md",
    "tags": [
      "연결·자동화",
      "Integrations"
    ]
  },
  {
    "id": 162,
    "slug": "chapyter-162",
    "name": "Chapyter",
    "category": "연결·자동화",
    "sourceCategory": "Integrations",
    "description": "Integrate ChatGPT capabilities into Jupyter Notebook.",
    "useCase": "서비스 연결·워크플로",
    "tokenTip": "트리거와 액션 사이에 전달할 필드만 선택해 페이로드를 줄이세요.",
    "promptStarter": "Chapyter에서 서비스 연결·워크플로를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/chapyter/chapyter",
    "tags": [
      "연결·자동화",
      "Integrations"
    ]
  },
  {
    "id": 163,
    "slug": "i-don-t-care-about-commit-message-163",
    "name": "I Don't Care About Commit Message",
    "category": "연결·자동화",
    "sourceCategory": "Integrations",
    "description": "Auto-generate commit messages and push actions in VS Code.",
    "useCase": "서비스 연결·워크플로",
    "tokenTip": "트리거와 액션 사이에 전달할 필드만 선택해 페이로드를 줄이세요.",
    "promptStarter": "I Don't Care About Commit Message에서 서비스 연결·워크플로를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/mefengl/vscode-i-dont-care-about-commit-message",
    "tags": [
      "연결·자동화",
      "Integrations"
    ]
  },
  {
    "id": 164,
    "slug": "python-smart-exceptions-164",
    "name": "Python Smart Exceptions",
    "category": "연결·자동화",
    "sourceCategory": "Integrations",
    "description": "AI-powered Python exceptions debugging.",
    "useCase": "서비스 연결·워크플로",
    "tokenTip": "트리거와 액션 사이에 전달할 필드만 선택해 페이로드를 줄이세요.",
    "promptStarter": "Python Smart Exceptions에서 서비스 연결·워크플로를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/roma-guru/smart-exceptions",
    "tags": [
      "연결·자동화",
      "Integrations"
    ]
  },
  {
    "id": 165,
    "slug": "textcraft-165",
    "name": "TextCraft",
    "category": "연결·자동화",
    "sourceCategory": "Integrations",
    "description": "AI-powered Word add-in for text generation and proofreading.",
    "useCase": "서비스 연결·워크플로",
    "tokenTip": "트리거와 액션 사이에 전달할 필드만 선택해 페이로드를 줄이세요.",
    "promptStarter": "TextCraft에서 서비스 연결·워크플로를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/suncloudsmoon/TextCraft",
    "tags": [
      "연결·자동화",
      "Integrations"
    ]
  },
  {
    "id": 166,
    "slug": "swift-166",
    "name": "Swift",
    "category": "개발·코딩",
    "sourceCategory": "API clients",
    "description": "공개 목록에 등재된 AI 관련 도구·프로젝트",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Swift에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/MacPaw/OpenAI",
    "tags": [
      "개발·코딩",
      "API clients"
    ]
  },
  {
    "id": 167,
    "slug": "node-js-167",
    "name": "Node.js",
    "category": "개발·코딩",
    "sourceCategory": "API clients",
    "description": "공개 목록에 등재된 AI 관련 도구·프로젝트",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Node.js에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/transitive-bullshit/chatgpt-api",
    "tags": [
      "개발·코딩",
      "API clients"
    ]
  },
  {
    "id": 168,
    "slug": "go-168",
    "name": "Go",
    "category": "개발·코딩",
    "sourceCategory": "API clients",
    "description": "공개 목록에 등재된 AI 관련 도구·프로젝트",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Go에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/AlmazDelDiablo/gpt3-5-turbo-go",
    "tags": [
      "개발·코딩",
      "API clients"
    ]
  },
  {
    "id": 169,
    "slug": "delphi-169",
    "name": "Delphi",
    "category": "개발·코딩",
    "sourceCategory": "API clients",
    "description": "공개 목록에 등재된 AI 관련 도구·프로젝트",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Delphi에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/HemulGM/DelphiOpenAI",
    "tags": [
      "개발·코딩",
      "API clients"
    ]
  },
  {
    "id": 170,
    "slug": "php-170",
    "name": "PHP",
    "category": "개발·코딩",
    "sourceCategory": "API clients",
    "description": "공개 목록에 등재된 AI 관련 도구·프로젝트",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "PHP에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/openai-php/client",
    "tags": [
      "개발·코딩",
      "API clients"
    ]
  },
  {
    "id": 171,
    "slug": "ruby-171",
    "name": "Ruby",
    "category": "개발·코딩",
    "sourceCategory": "API clients",
    "description": "공개 목록에 등재된 AI 관련 도구·프로젝트",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Ruby에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/alexrudall/ruby-openai",
    "tags": [
      "개발·코딩",
      "API clients"
    ]
  },
  {
    "id": 172,
    "slug": "chatgpt-js-172",
    "name": "chatgpt.js",
    "category": "개발·코딩",
    "sourceCategory": "JavaScript",
    "description": "Easy interaction with the ChatGPT DOM.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "chatgpt.js에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/kudoai/chatgpt.js",
    "tags": [
      "개발·코딩",
      "JavaScript"
    ]
  },
  {
    "id": 173,
    "slug": "vercel-ai-sdk-173",
    "name": "Vercel AI SDK",
    "category": "개발·코딩",
    "sourceCategory": "JavaScript",
    "description": "An open source library for building AI-powered user interfaces.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Vercel AI SDK에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/vercel-labs/ai",
    "tags": [
      "개발·코딩",
      "JavaScript"
    ]
  },
  {
    "id": 174,
    "slug": "llm-ui-174",
    "name": "llm-ui",
    "category": "개발·코딩",
    "sourceCategory": "JavaScript",
    "description": "An open source library for building UIs for LLMs.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "llm-ui에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/llm-ui-kit/llm-ui",
    "tags": [
      "개발·코딩",
      "JavaScript"
    ]
  },
  {
    "id": 175,
    "slug": "gptcache-175",
    "name": "GPTCache",
    "category": "개발·코딩",
    "sourceCategory": "Python",
    "description": "Semantic cache to store responses from LLM queries.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "GPTCache에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/zilliztech/GPTCache",
    "tags": [
      "개발·코딩",
      "Python"
    ]
  },
  {
    "id": 176,
    "slug": "knowledge-gpt-176",
    "name": "knowledge-gpt",
    "category": "개발·코딩",
    "sourceCategory": "Python",
    "description": "Extract knowledge from information sources.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "knowledge-gpt에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/geeks-of-data/knowledge-gpt",
    "tags": [
      "개발·코딩",
      "Python"
    ]
  },
  {
    "id": 177,
    "slug": "doctorgpt-177",
    "name": "doctorgpt",
    "category": "개발·코딩",
    "sourceCategory": "Go",
    "description": "Diagnosing web app log errors with ChatGPT.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "doctorgpt에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/ingyamilmolinar/doctorgpt",
    "tags": [
      "개발·코딩",
      "Go"
    ]
  },
  {
    "id": 178,
    "slug": "reddit-178",
    "name": "Reddit",
    "category": "AI 도구",
    "sourceCategory": "Community",
    "description": "공개 목록에 등재된 AI 관련 도구·프로젝트",
    "useCase": "Community 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Reddit에서 Community 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://www.reddit.com/r/ChatGPT/",
    "tags": [
      "AI 도구",
      "Community"
    ]
  },
  {
    "id": 179,
    "slug": "discord-179",
    "name": "Discord",
    "category": "AI 도구",
    "sourceCategory": "Community",
    "description": "공개 목록에 등재된 AI 관련 도구·프로젝트",
    "useCase": "Community 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Discord에서 Community 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · awesome-chatgpt",
    "verifiedAt": "2026-08-20",
    "url": "https://discord.com/invite/openai",
    "tags": [
      "AI 도구",
      "Community"
    ]
  },
  {
    "id": 180,
    "slug": "ai-for-developers-180",
    "name": "AI For Developers",
    "category": "AI 도구",
    "sourceCategory": "Editor's Choice",
    "description": "Just a curated list of AI agents, SDKs, coding copilots, and dev-first tools that save you hours — not waste them.",
    "useCase": "Editor's Choice 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "AI For Developers에서 Editor's Choice 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://aifordevelopers.org",
    "tags": [
      "AI 도구",
      "Editor's Choice"
    ]
  },
  {
    "id": 181,
    "slug": "there-s-an-ai-181",
    "name": "There's an AI",
    "category": "AI 도구",
    "sourceCategory": "Editor's Choice",
    "description": "List of best AI Tools",
    "useCase": "Editor's Choice 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "There's an AI에서 Editor's Choice 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://theresanai.com",
    "tags": [
      "AI 도구",
      "Editor's Choice"
    ]
  },
  {
    "id": 182,
    "slug": "notion-ai-182",
    "name": "Notion AI",
    "category": "AI 도구",
    "sourceCategory": "Editor's Choice",
    "description": "Just ask Q&A, and find the info you need in seconds. Get help writing and brainstorming in Notion, not in a separate browser tab.",
    "useCase": "Editor's Choice 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Notion AI에서 Editor's Choice 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://affiliate.notion.so/9po6cx7rvdr6-4y5a7",
    "tags": [
      "AI 도구",
      "Editor's Choice"
    ]
  },
  {
    "id": 183,
    "slug": "murf-ai-183",
    "name": "Murf AI",
    "category": "AI 도구",
    "sourceCategory": "Editor's Choice",
    "description": "Create voiceover with the most lifelike AI voices.",
    "useCase": "Editor's Choice 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Murf AI에서 Editor's Choice 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://get.murf.ai/v8i9to5ad4oq",
    "tags": [
      "AI 도구",
      "Editor's Choice"
    ]
  },
  {
    "id": 184,
    "slug": "sanebox-184",
    "name": "SaneBox",
    "category": "AI 도구",
    "sourceCategory": "Editor's Choice",
    "description": "an email management software as a service that integrates with IMAP and Exchange Web Services email accounts.",
    "useCase": "Editor's Choice 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "SaneBox에서 Editor's Choice 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://try.sanebox.com/yzkpe5s68xk2",
    "tags": [
      "AI 도구",
      "Editor's Choice"
    ]
  },
  {
    "id": 185,
    "slug": "meetgeek-185",
    "name": "MeetGeek",
    "category": "AI 도구",
    "sourceCategory": "Editor's Choice",
    "description": "an AI meeting assistant that automatically video records, transcribes, summarizes, and provides the key points from every meeting.",
    "useCase": "Editor's Choice 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "MeetGeek에서 Editor's Choice 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://get.meetgeek.ai/zmrnb5xlyfs9",
    "tags": [
      "AI 도구",
      "Editor's Choice"
    ]
  },
  {
    "id": 186,
    "slug": "chatgpt-186",
    "name": "ChatGPT",
    "category": "챗봇",
    "sourceCategory": "Chatbots",
    "description": "[reviews](https://theresanai.com/chatgpt) - ChatGPT by OpenAI is a large language model that interacts in a conversational way.",
    "useCase": "대화형 AI·고객 응대",
    "tokenTip": "시스템 규칙을 짧게 유지하고 대화 이력은 필요한 최근 맥락만 남기세요.",
    "promptStarter": "ChatGPT에서 대화형 AI·고객 응대를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://chatgpt.com",
    "tags": [
      "챗봇",
      "Chatbots"
    ]
  },
  {
    "id": 187,
    "slug": "bing-chat-187",
    "name": "Bing Chat",
    "category": "챗봇",
    "sourceCategory": "Chatbots",
    "description": "[reviews](https://altern.ai/product/bingchat) - A conversational AI language model powered by Microsoft Bing.",
    "useCase": "대화형 AI·고객 응대",
    "tokenTip": "시스템 규칙을 짧게 유지하고 대화 이력은 필요한 최근 맥락만 남기세요.",
    "promptStarter": "Bing Chat에서 대화형 AI·고객 응대를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.bing.com/chat",
    "tags": [
      "챗봇",
      "Chatbots"
    ]
  },
  {
    "id": 188,
    "slug": "gemini-188",
    "name": "Gemini",
    "category": "챗봇",
    "sourceCategory": "Chatbots",
    "description": "[reviews](https://altern.ai/product/gemini) - An experimental AI chatbot by Google, powered by the LaMDA model.",
    "useCase": "대화형 AI·고객 응대",
    "tokenTip": "시스템 규칙을 짧게 유지하고 대화 이력은 필요한 최근 맥락만 남기세요.",
    "promptStarter": "Gemini에서 대화형 AI·고객 응대를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://gemini.google.com",
    "tags": [
      "챗봇",
      "Chatbots"
    ]
  },
  {
    "id": 189,
    "slug": "character-ai-189",
    "name": "Character.AI",
    "category": "챗봇",
    "sourceCategory": "Chatbots",
    "description": "[reviews](https://altern.ai/product/character-ai) - Character.AI lets you create characters and chat to them.",
    "useCase": "대화형 AI·고객 응대",
    "tokenTip": "시스템 규칙을 짧게 유지하고 대화 이력은 필요한 최근 맥락만 남기세요.",
    "promptStarter": "Character.AI에서 대화형 AI·고객 응대를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://character.ai/",
    "tags": [
      "챗봇",
      "Chatbots"
    ]
  },
  {
    "id": 190,
    "slug": "chatpdf-190",
    "name": "ChatPDF",
    "category": "챗봇",
    "sourceCategory": "Chatbots",
    "description": "[reviews](https://altern.ai/product/chatpdf) - Chat with any PDF.",
    "useCase": "대화형 AI·고객 응대",
    "tokenTip": "시스템 규칙을 짧게 유지하고 대화 이력은 필요한 최근 맥락만 남기세요.",
    "promptStarter": "ChatPDF에서 대화형 AI·고객 응대를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.chatpdf.com/",
    "tags": [
      "챗봇",
      "Chatbots"
    ]
  },
  {
    "id": 191,
    "slug": "chatsonic-191",
    "name": "ChatSonic",
    "category": "챗봇",
    "sourceCategory": "Chatbots",
    "description": "[reviews](https://altern.ai/product/chatsonic) - An AI-powered assistant that enables text and image creation.",
    "useCase": "대화형 AI·고객 응대",
    "tokenTip": "시스템 규칙을 짧게 유지하고 대화 이력은 필요한 최근 맥락만 남기세요.",
    "promptStarter": "ChatSonic에서 대화형 AI·고객 응대를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://writesonic.com/chat",
    "tags": [
      "챗봇",
      "Chatbots"
    ]
  },
  {
    "id": 192,
    "slug": "phind-192",
    "name": "Phind",
    "category": "챗봇",
    "sourceCategory": "Chatbots",
    "description": "[reviews](https://altern.ai/product/phind) - Phind is an intelligent search engine and assistant for programmers. Phind is smart enough to proactively ask you questions to clarify its assumptions and to browse the web (o",
    "useCase": "대화형 AI·고객 응대",
    "tokenTip": "시스템 규칙을 짧게 유지하고 대화 이력은 필요한 최근 맥락만 남기세요.",
    "promptStarter": "Phind에서 대화형 AI·고객 응대를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.phind.com/",
    "tags": [
      "챗봇",
      "Chatbots"
    ]
  },
  {
    "id": 193,
    "slug": "tiledesk-193",
    "name": "Tiledesk",
    "category": "챗봇",
    "sourceCategory": "Chatbots",
    "description": "[reviews](https://altern.ai/product/tiledesk) - Open-source LLM-enabled no-code chatbot development framework. Design, test and launch your flows on all your channels in minutes.",
    "useCase": "대화형 AI·고객 응대",
    "tokenTip": "시스템 규칙을 짧게 유지하고 대화 이력은 필요한 최근 맥락만 남기세요.",
    "promptStarter": "Tiledesk에서 대화형 AI·고객 응대를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://tiledesk.com/",
    "tags": [
      "챗봇",
      "Chatbots"
    ]
  },
  {
    "id": 194,
    "slug": "aicamp-194",
    "name": "AICamp",
    "category": "챗봇",
    "sourceCategory": "Chatbots",
    "description": "[reviews]() - ChatGPT for Teams",
    "useCase": "대화형 AI·고객 응대",
    "tokenTip": "시스템 규칙을 짧게 유지하고 대화 이력은 필요한 최근 맥락만 남기세요.",
    "promptStarter": "AICamp에서 대화형 AI·고객 응대를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://aicamp.so/",
    "tags": [
      "챗봇",
      "Chatbots"
    ]
  },
  {
    "id": 195,
    "slug": "gali-chat-195",
    "name": "Gali Chat",
    "category": "챗봇",
    "sourceCategory": "Chatbots",
    "description": "[reviews]() - Your 24/7 AI Support Assistant that helps you grow your business!",
    "useCase": "대화형 AI·고객 응대",
    "tokenTip": "시스템 규칙을 짧게 유지하고 대화 이력은 필요한 최근 맥락만 남기세요.",
    "promptStarter": "Gali Chat에서 대화형 AI·고객 응대를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.galichat.com/",
    "tags": [
      "챗봇",
      "Chatbots"
    ]
  },
  {
    "id": 196,
    "slug": "dmwithme-196",
    "name": "dmwithme",
    "category": "챗봇",
    "sourceCategory": "Chatbots",
    "description": "AI companion with realistic emotions that can disagree, get moody, and challenge you.",
    "useCase": "대화형 AI·고객 응대",
    "tokenTip": "시스템 규칙을 짧게 유지하고 대화 이력은 필요한 최근 맥락만 남기세요.",
    "promptStarter": "dmwithme에서 대화형 AI·고객 응대를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://dmwithme.com",
    "tags": [
      "챗봇",
      "Chatbots"
    ]
  },
  {
    "id": 197,
    "slug": "kazimir-ai-197",
    "name": "Kazimir.ai",
    "category": "검색·리서치",
    "sourceCategory": "Search engines",
    "description": "A search engine designed to search AI-generated images.",
    "useCase": "검색·출처 수집·리서치",
    "tokenTip": "질문을 한 문장으로 좁히고 원하는 출처 형식과 기간을 먼저 지정하세요.",
    "promptStarter": "Kazimir.ai에서 검색·출처 수집·리서치를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://kazimir.ai/",
    "tags": [
      "검색·리서치",
      "Search engines"
    ]
  },
  {
    "id": 198,
    "slug": "perplexity-ai-198",
    "name": "Perplexity AI",
    "category": "검색·리서치",
    "sourceCategory": "Search engines",
    "description": "AI powered search tools.",
    "useCase": "검색·출처 수집·리서치",
    "tokenTip": "질문을 한 문장으로 좁히고 원하는 출처 형식과 기간을 먼저 지정하세요.",
    "promptStarter": "Perplexity AI에서 검색·출처 수집·리서치를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.perplexity.ai/",
    "tags": [
      "검색·리서치",
      "Search engines"
    ]
  },
  {
    "id": 199,
    "slug": "metaphor-199",
    "name": "Metaphor",
    "category": "검색·리서치",
    "sourceCategory": "Search engines",
    "description": "Language model powered search.",
    "useCase": "검색·출처 수집·리서치",
    "tokenTip": "질문을 한 문장으로 좁히고 원하는 출처 형식과 기간을 먼저 지정하세요.",
    "promptStarter": "Metaphor에서 검색·출처 수집·리서치를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://metaphor.systems/",
    "tags": [
      "검색·리서치",
      "Search engines"
    ]
  },
  {
    "id": 200,
    "slug": "you-com-200",
    "name": "You.com",
    "category": "검색·리서치",
    "sourceCategory": "Search engines",
    "description": "A search engine built on AI that provides users with a customized search experience while keeping their data 100% private.",
    "useCase": "검색·출처 수집·리서치",
    "tokenTip": "질문을 한 문장으로 좁히고 원하는 출처 형식과 기간을 먼저 지정하세요.",
    "promptStarter": "You.com에서 검색·출처 수집·리서치를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://you.com/",
    "tags": [
      "검색·리서치",
      "Search engines"
    ]
  },
  {
    "id": 201,
    "slug": "komo-ai-201",
    "name": "Komo AI",
    "category": "검색·리서치",
    "sourceCategory": "Search engines",
    "description": "An AI based Search engine which responses quick and short answers.",
    "useCase": "검색·출처 수집·리서치",
    "tokenTip": "질문을 한 문장으로 좁히고 원하는 출처 형식과 기간을 먼저 지정하세요.",
    "promptStarter": "Komo AI에서 검색·출처 수집·리서치를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://komo.ai/",
    "tags": [
      "검색·리서치",
      "Search engines"
    ]
  },
  {
    "id": 202,
    "slug": "telborg-202",
    "name": "Telborg",
    "category": "검색·리서치",
    "sourceCategory": "Search engines",
    "description": "AI for Climate Research, with data exclusively from governments, international institutions and companies.",
    "useCase": "검색·출처 수집·리서치",
    "tokenTip": "질문을 한 문장으로 좁히고 원하는 출처 형식과 기간을 먼저 지정하세요.",
    "promptStarter": "Telborg에서 검색·출처 수집·리서치를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://telborg.com/",
    "tags": [
      "검색·리서치",
      "Search engines"
    ]
  },
  {
    "id": 203,
    "slug": "memfree-203",
    "name": "MemFree",
    "category": "검색·리서치",
    "sourceCategory": "Search engines",
    "description": "Open Source Hybrid AI Search Engine, Instantly Get Accurate Answers from the Internet, Bookmarks, Notes, and Docs",
    "useCase": "검색·출처 수집·리서치",
    "tokenTip": "질문을 한 문장으로 좁히고 원하는 출처 형식과 기간을 먼저 지정하세요.",
    "promptStarter": "MemFree에서 검색·출처 수집·리서치를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/memfreeme/memfree",
    "tags": [
      "검색·리서치",
      "Search engines"
    ]
  },
  {
    "id": 204,
    "slug": "refinder-ai-204",
    "name": "Refinder AI",
    "category": "검색·리서치",
    "sourceCategory": "Search engines",
    "description": "AI-powered universal search and assistant for work",
    "useCase": "검색·출처 수집·리서치",
    "tokenTip": "질문을 한 문장으로 좁히고 원하는 출처 형식과 기간을 먼저 지정하세요.",
    "promptStarter": "Refinder AI에서 검색·출처 수집·리서치를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://refinder.ai/",
    "tags": [
      "검색·리서치",
      "Search engines"
    ]
  },
  {
    "id": 205,
    "slug": "agentset-ai-205",
    "name": "Agentset.ai",
    "category": "검색·리서치",
    "sourceCategory": "Search engines",
    "description": "Open-source local Semantic Search + RAG for your data",
    "useCase": "검색·출처 수집·리서치",
    "tokenTip": "질문을 한 문장으로 좁히고 원하는 출처 형식과 기간을 먼저 지정하세요.",
    "promptStarter": "Agentset.ai에서 검색·출처 수집·리서치를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://agentset.ai/",
    "tags": [
      "검색·리서치",
      "Search engines"
    ]
  },
  {
    "id": 206,
    "slug": "privategpt-206",
    "name": "privateGPT",
    "category": "검색·리서치",
    "sourceCategory": "Local search engines",
    "description": "Ask questions to your documents without an internet connection, using the power of LLMs.",
    "useCase": "로컬·내부 검색",
    "tokenTip": "검색 범위와 반환할 필드 수를 제한해 불필요한 결과를 줄이세요.",
    "promptStarter": "privateGPT에서 로컬·내부 검색를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/imartinez/privateGPT",
    "tags": [
      "검색·리서치",
      "Local search engines"
    ]
  },
  {
    "id": 207,
    "slug": "quivr-207",
    "name": "quivr",
    "category": "검색·리서치",
    "sourceCategory": "Local search engines",
    "description": "Dump all your files and chat with it using your generative AI second brain using LLMs & embeddings.",
    "useCase": "로컬·내부 검색",
    "tokenTip": "검색 범위와 반환할 필드 수를 제한해 불필요한 결과를 줄이세요.",
    "promptStarter": "quivr에서 로컬·내부 검색를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/StanGirard/quivr",
    "tags": [
      "검색·리서치",
      "Local search engines"
    ]
  },
  {
    "id": 208,
    "slug": "jasper-208",
    "name": "Jasper",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "Create content faster with artificial intelligence.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "Jasper에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.jasper.ai/",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 209,
    "slug": "compose-ai-209",
    "name": "Compose AI",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "Compose AI is a free Chrome extension that cuts your writing time by 40% with AI-powered autocompletion.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "Compose AI에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "무료/무료 티어 가능",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.compose.ai/",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 210,
    "slug": "rytr-210",
    "name": "Rytr",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "Rytr is an AI writing assistant that helps you create high-quality content.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "Rytr에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://rytr.me/",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 211,
    "slug": "wordtune-211",
    "name": "wordtune",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "Personal writing assistant.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "wordtune에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.wordtune.com/",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 212,
    "slug": "hyperwrite-212",
    "name": "HyperWrite",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "HyperWrite helps you write with confidence and get your work done faster from idea to final draft.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "HyperWrite에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://hyperwriteai.com/",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 213,
    "slug": "nexus-ai-213",
    "name": "Nexus AI",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "Nexus AI is a generative cutting-edge AI Platform for writing, coding, voiceovers, research, image creation and beyond.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "Nexus AI에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://mynexusai.com/",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 214,
    "slug": "moonbeam-214",
    "name": "Moonbeam",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "Better blogs in a fraction of the time.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "Moonbeam에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.gomoonbeam.com/",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 215,
    "slug": "copy-ai-215",
    "name": "copy.ai",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "Write better marketing copy and content with AI.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "copy.ai에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.copy.ai/",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 216,
    "slug": "anyword-216",
    "name": "Anyword",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "Anyword's AI writing assistant generates effective copy for anyone.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "Anyword에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://anyword.com/",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 217,
    "slug": "contenda-217",
    "name": "Contenda",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "Create the content your audience wants, from content you've already made.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "Contenda에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://contenda.co/",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 218,
    "slug": "hypotenuse-ai-218",
    "name": "Hypotenuse AI",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "Turn a few keywords into original, insightful articles, product descriptions and social media copy.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "Hypotenuse AI에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.hypotenuse.ai/",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 219,
    "slug": "lavender-219",
    "name": "Lavender",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "Lavender email assistant helps you get more replies in less time.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "Lavender에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.lavender.ai/",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 220,
    "slug": "lex-220",
    "name": "Lex",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "A word processor with artificial intelligence baked in, so you can write faster.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "Lex에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://lex.page/",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 221,
    "slug": "jenni-221",
    "name": "Jenni",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "Jenni is the ultimate writing assistant that saves you hours of ideation and writing time.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "Jenni에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://jenni.ai/",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 222,
    "slug": "laika-222",
    "name": "LAIKA",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "LAIKA trains an artificial intelligence on your own writing to create a personalised creative partner-in-crime.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "LAIKA에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.writewithlaika.com/",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 223,
    "slug": "quillbot-223",
    "name": "QuillBot",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "AI-powered paraphrasing tool.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "QuillBot에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://quillbot.com",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 224,
    "slug": "postwise-224",
    "name": "Postwise",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "Write tweets, schedule posts and grow your following using AI.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "Postwise에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://postwise.ai/",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 225,
    "slug": "rapidtextai-225",
    "name": "RapidTextAI",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "Write Advance Articles using Multiple AI Models like GPT4, Gemini, Deepseek and grok.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "RapidTextAI에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://app.rapidtextai.com/",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 226,
    "slug": "copysmith-226",
    "name": "Copysmith",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "AI content creation solution for Enterprise & eCommerce.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "Copysmith에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://copysmith.ai/",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 227,
    "slug": "yomu-227",
    "name": "Yomu",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "AI writing assistant for students and academics.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "Yomu에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.yomu.ai",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 228,
    "slug": "listomatic-228",
    "name": "Listomatic",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "Free and fully configurable real estate listing description generator.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "Listomatic에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "무료/무료 티어 가능",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://listomatic.app",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 229,
    "slug": "quick-creator-229",
    "name": "Quick Creator",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "SEO-Optimized Blog platform powered by AI.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "Quick Creator에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://quickcreator.io",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 230,
    "slug": "trolly-ai-230",
    "name": "Trolly.ai",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "Trolly.ai can help you in creating professional SEO articles, 2x faster. This tool crafts content that search engines love, propelling you up the rankings.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "Trolly.ai에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://trolly.ai/",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 231,
    "slug": "dittto-ai-231",
    "name": "Dittto.ai",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "Fix your hero copy with an AI trained on top SaaS websites.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "Dittto.ai에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://dittto.ai",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 232,
    "slug": "pulsepost-232",
    "name": "PulsePost",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "AI writer that Auto Publishes to your own website",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "PulsePost에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://pulsepost.io/",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 233,
    "slug": "shy-editor-233",
    "name": "Shy Editor",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "A modern AI-assisted writing environment for all types of prose.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "Shy Editor에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.shyeditor.com",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 234,
    "slug": "deepl-write-234",
    "name": "DeepL Write",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "AI writing tool that improves written communication.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "DeepL Write에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.deepl.com/write",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 235,
    "slug": "headlinesai-pro-235",
    "name": "Headlinesai.pro",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "This AI powered tool can help you in generating catchy and optimized headlines based on your content for multiple platforms like Youtube, Medium, Indie Hackers and Reddit.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "Headlinesai.pro에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.headlinesai.pro/",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 236,
    "slug": "gptlocalhost-236",
    "name": "GPTLocalhost",
    "category": "글쓰기",
    "sourceCategory": "Writing assistants",
    "description": "A local Word Add-in for you to use local LLM servers in Microsoft Word. Alternative to \"Copilot in Word\" and completely local.",
    "useCase": "글쓰기·편집·문체 개선",
    "tokenTip": "원문 전체를 반복 전송하지 말고 수정할 문단과 변경 기준만 보내세요.",
    "promptStarter": "GPTLocalhost에서 글쓰기·편집·문체 개선를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://gptlocalhost.com/demo/",
    "tags": [
      "글쓰기",
      "Writing assistants"
    ]
  },
  {
    "id": 237,
    "slug": "gist-ai-237",
    "name": "Gist AI",
    "category": "AI 도구",
    "sourceCategory": "ChatGPT extensions",
    "description": "ChatGPT-powered free Summarizer for Websites, YouTube and PDF.",
    "useCase": "ChatGPT extensions 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Gist AI에서 ChatGPT extensions 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "무료/무료 티어 가능",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.gistai.tech?utm_source=tool_directory&utm_medium=post&utm_campaign=launch",
    "tags": [
      "AI 도구",
      "ChatGPT extensions"
    ]
  },
  {
    "id": 238,
    "slug": "gpt-for-sheets-and-docs-238",
    "name": "GPT for Sheets and Docs",
    "category": "AI 도구",
    "sourceCategory": "ChatGPT extensions",
    "description": "ChatGPT extension for Google Sheets and Google Docs.",
    "useCase": "ChatGPT extensions 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "GPT for Sheets and Docs에서 ChatGPT extensions 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://workspace.google.com/marketplace/app/gpt_for_sheets_and_docs/677318054654",
    "tags": [
      "AI 도구",
      "ChatGPT extensions"
    ]
  },
  {
    "id": 239,
    "slug": "youtube-summary-with-chatgpt-239",
    "name": "YouTube Summary with ChatGPT",
    "category": "AI 도구",
    "sourceCategory": "ChatGPT extensions",
    "description": "Use ChatGPT to summarize YouTube videos.",
    "useCase": "ChatGPT extensions 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "YouTube Summary with ChatGPT에서 ChatGPT extensions 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://chrome.google.com/webstore/detail/youtube-summary-with-chat/nmmicjeknamkfloonkhhcjmomieiodli",
    "tags": [
      "AI 도구",
      "ChatGPT extensions"
    ]
  },
  {
    "id": 240,
    "slug": "chatgpt-for-search-engines-240",
    "name": "ChatGPT for Search Engines",
    "category": "AI 도구",
    "sourceCategory": "ChatGPT extensions",
    "description": "Display ChatGPT response alongside Google, Bing, and DuckDuckGo search results.",
    "useCase": "ChatGPT extensions 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "ChatGPT for Search Engines에서 ChatGPT extensions 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://chrome.google.com/webstore/detail/chatgpt-for-search-engine/feeonheemodpkdckaljcjogdncpiiban",
    "tags": [
      "AI 도구",
      "ChatGPT extensions"
    ]
  },
  {
    "id": 241,
    "slug": "merlin-241",
    "name": "Merlin",
    "category": "AI 도구",
    "sourceCategory": "ChatGPT extensions",
    "description": "ChatGPT Plus extension on all websites.",
    "useCase": "ChatGPT extensions 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Merlin에서 ChatGPT extensions 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://merlin.foyer.work/",
    "tags": [
      "AI 도구",
      "ChatGPT extensions"
    ]
  },
  {
    "id": 242,
    "slug": "chatgpt-writer-242",
    "name": "ChatGPT Writer",
    "category": "AI 도구",
    "sourceCategory": "ChatGPT extensions",
    "description": "Generate entire emails and messages using ChatGPT AI.",
    "useCase": "ChatGPT extensions 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "ChatGPT Writer에서 ChatGPT extensions 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://chatgptwriter.ai/",
    "tags": [
      "AI 도구",
      "ChatGPT extensions"
    ]
  },
  {
    "id": 243,
    "slug": "chatgpt-for-jupyter-243",
    "name": "ChatGPT for Jupyter",
    "category": "AI 도구",
    "sourceCategory": "ChatGPT extensions",
    "description": "Add various helper functions in Jupyter Notebooks and Jupyter Lab, powered by ChatGPT.",
    "useCase": "ChatGPT extensions 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "ChatGPT for Jupyter에서 ChatGPT extensions 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/TiesdeKok/chat-gpt-jupyter-extension",
    "tags": [
      "AI 도구",
      "ChatGPT extensions"
    ]
  },
  {
    "id": 244,
    "slug": "editgpt-244",
    "name": "editGPT",
    "category": "AI 도구",
    "sourceCategory": "ChatGPT extensions",
    "description": "Easily proofread, edit, and track changes to your content in chatGPT.",
    "useCase": "ChatGPT extensions 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "editGPT에서 ChatGPT extensions 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.editgpt.app/",
    "tags": [
      "AI 도구",
      "ChatGPT extensions"
    ]
  },
  {
    "id": 245,
    "slug": "chatbot-ui-245",
    "name": "Chatbot UI",
    "category": "AI 도구",
    "sourceCategory": "ChatGPT extensions",
    "description": "An open source ChatGPT UI. [Source code](https://github.com/mckaywrigley/chatbot-ui).",
    "useCase": "ChatGPT extensions 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Chatbot UI에서 ChatGPT extensions 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.chatbotui.com/",
    "tags": [
      "AI 도구",
      "ChatGPT extensions"
    ]
  },
  {
    "id": 246,
    "slug": "forefront-246",
    "name": "Forefront",
    "category": "AI 도구",
    "sourceCategory": "ChatGPT extensions",
    "description": "A Better ChatGPT Experience.",
    "useCase": "ChatGPT extensions 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Forefront에서 ChatGPT extensions 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.forefront.ai/",
    "tags": [
      "AI 도구",
      "ChatGPT extensions"
    ]
  },
  {
    "id": 247,
    "slug": "ai-character-for-gpt-247",
    "name": "AI Character for GPT",
    "category": "AI 도구",
    "sourceCategory": "ChatGPT extensions",
    "description": "One click to curate AI chatbot, including ChatGPT, Google Bard to improve AI responses.",
    "useCase": "ChatGPT extensions 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "AI Character for GPT에서 ChatGPT extensions 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://chromewebstore.google.com/detail/ai-character-for-gpt/daoeioifimkjegafelcaljboknjkkohh",
    "tags": [
      "AI 도구",
      "ChatGPT extensions"
    ]
  },
  {
    "id": 248,
    "slug": "mem-248",
    "name": "Mem",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Mem is the world's first AI-powered workspace that's personalized to you. Amplify your creativity, automate the mundane, and stay organized automatically.",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Mem에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://mem.ai/",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 249,
    "slug": "nekton-ai-249",
    "name": "Nekton AI",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Automate your workflows with AI. Describe your workflows step by step in plain language.",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Nekton AI에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://nekton.ai",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 250,
    "slug": "elephas-250",
    "name": "Elephas",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Personal AI writing assistant for the Mac.",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Elephas에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://elephas.app/?ref=mahseema-awesome-ai-tools",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 251,
    "slug": "lemmy-251",
    "name": "Lemmy",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Autonomous AI Assistant for Work.",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Lemmy에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://lemmy.co/?ref=mahseema-awesome-ai-tools",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 252,
    "slug": "google-sheets-formula-generator-252",
    "name": "Google Sheets Formula Generator",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Forget about frustrating formulas in Google Sheets.",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Google Sheets Formula Generator에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://bettersheets.co/google-sheets-formula-generator?ref=mahseema-awesome-ai-tools",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 253,
    "slug": "createeasily-253",
    "name": "CreateEasily",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Free speech-to-text tool for content creators that accurately transcribes audio & video files up to 2GB.",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "CreateEasily에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "무료/무료 티어 가능",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://createeasily.com/?ref=mahseema-awesome-ai-tools",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 254,
    "slug": "cosmos-254",
    "name": "Cosmos",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Use AI locally and offline to search your media files by their content, find similar images or video scenes using reference images, and transcribe video.",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Cosmos에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://meetcosmos.com/",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 255,
    "slug": "aipdf-255",
    "name": "aiPDF",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "The most advanced AI document assistant",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "aiPDF에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://aipdf.ai",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 256,
    "slug": "summary-with-ai-256",
    "name": "Summary With AI",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Summarize any long PDF with AI. Comprehensive summaries using information from all pages of a document.",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Summary With AI에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.summarywithai.com/",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 257,
    "slug": "emilio-257",
    "name": "Emilio",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Stop drowning in emails - Emilio prioritizes and automates your email, saving 60% of your time",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Emilio에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://getemil.io?ref=mahseema-awesome-ai-tools",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 258,
    "slug": "pieces-258",
    "name": "Pieces",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "AI-enabled productivity tool designed to supercharge developer efficiency,with an on-device copilot that helps capture, enrich, and reuse useful materials, streamline collaboration, and solve complex problems through a c",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Pieces에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://pieces.app/",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 259,
    "slug": "huntr-ai-resume-builder-259",
    "name": "Huntr AI Resume Builder",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Craft the perfect resume, with a little help from AI. Huntr’s customizable AI Resume Builder will help you craft a well-written, ATS-friendly resume to help you land more interviews.",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Huntr AI Resume Builder에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://huntr.co/product/ai-resume-builder/?ref=mahseema-awesome-ai-tools",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 260,
    "slug": "chat-with-pdf-by-copilot-us-260",
    "name": "Chat With PDF by Copilot.us",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "An AI app that enables dialogue with PDF documents, supporting interactions with multiple files simultaneously through language models.",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Chat With PDF by Copilot.us에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://copilot.us/apps/chat-with-pdf",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 261,
    "slug": "recall-261",
    "name": "Recall",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Summarize Anything, Forget Nothing",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Recall에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.getrecall.ai/",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 262,
    "slug": "talently-ai-262",
    "name": "Talently AI",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "An Al interviewer that conducts live, conversational interviews and gives real-time evaluations to effortlessly identify top performers and scale your recruitment process.",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Talently AI에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://interview.talently.ai/?utm_source=mahseema-awesome-ai-tool&utm_medium=c_and_p&utm_campaign=tool-listing",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 263,
    "slug": "tailortask-263",
    "name": "TailorTask",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Automate any boring and repetitive task, without having to learn a new tool",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "TailorTask에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://wwww.tailortask.ai",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 264,
    "slug": "ankidecks-ai-264",
    "name": "AnkiDecks AI",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Create Flashcards 10x faster. Generate Anki Flashcards from any File or Text with AI.",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "AnkiDecks AI에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://anki-decks.com",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 265,
    "slug": "ai-for-google-slides-265",
    "name": "AI for Google Slides",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "AI presentation maker for Google Slides",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "AI for Google Slides에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.aiforgoogleslides.com/",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 266,
    "slug": "farsite-266",
    "name": "FARSITE",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "AI-powered Compliance Software for U.S. Government Contractors",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "FARSITE에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://far.site/",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 267,
    "slug": "gosh-267",
    "name": "GOSH",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Free AI Price Tracker - Track any price of any product at any store using AI",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "GOSH에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "무료/무료 티어 가능",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://gosh.app",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 268,
    "slug": "brainsoup-268",
    "name": "BrainSoup",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Multi-agent & multi-LLM native client where AIs can remember, react to events, use tools, leverage local and external resources, and work together autonomously.",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "BrainSoup에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.nurgo-software.com/products/brainsoup",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 269,
    "slug": "mindpal-269",
    "name": "MindPal",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Build your AI Second Brain with a team of AI agents and multi-agent workflow",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "MindPal에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://mindpal.space/",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 270,
    "slug": "fabric-270",
    "name": "fabric",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Apply AI to everyday challenges in the comfort of your terminal. Help’s to get better results with tried and tested library of prompt pattern’s.",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "fabric에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/danielmiessler/fabric/",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 271,
    "slug": "riffo-271",
    "name": "Riffo",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "An AI-powered file management tool for bulk renaming and automatic folder organization.",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Riffo에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://riffo.ai/",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 272,
    "slug": "slideswizard-272",
    "name": "SlidesWizard",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Create Presentations 10x faster. Generate PowerPoint and Google Slides presentations about any topic with AI",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "SlidesWizard에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://slideswizard.io",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 273,
    "slug": "transgate-273",
    "name": "Transgate",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "AI Speech to Text",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Transgate에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://transgate.ai/",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 274,
    "slug": "rabbitholes-ai-274",
    "name": "RabbitHoles AI",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Chat with AI on an Infinite Canvas",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "RabbitHoles AI에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.rabbitholes.ai/",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 275,
    "slug": "rember-275",
    "name": "Rember",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "A simple yet powerful spaced repetition system designed to help you remember more.",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Rember에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.rember.com/",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 276,
    "slug": "qurate-276",
    "name": "Qurate",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "AI Quote Companion, which can help in finding relavant quotes according to the context.",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Qurate에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://qurate.appcradle.net/",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 277,
    "slug": "firmos-277",
    "name": "FirmOS",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "AI-Powered Automation for Accounting Firms",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "FirmOS에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.firmos.ai/",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 278,
    "slug": "whisper-api-278",
    "name": "Whisper API",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Whisper API is a Transcription API Powered By OpenAI Whisper model. Get 5 free transcriptions daily (no duration limits) with robust control over the model's parameters like size, temperature, beam size and more.",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Whisper API에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "무료/무료 티어 가능",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://whisper-api.com",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 279,
    "slug": "smmry-279",
    "name": "Smmry",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Summarize Long Content Into Clear Insights",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Smmry에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://smmry.com/",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 280,
    "slug": "nudge-ai-280",
    "name": "Nudge AI",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Ambient AI Scribe for Healthcare",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Nudge AI에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://getnudgeai.com/",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 281,
    "slug": "summara-281",
    "name": "Summara",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "YouTube AI Summary and Transcript widget",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Summara에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://summara.io/",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 282,
    "slug": "mocha-282",
    "name": "Mocha",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "AI app builder",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Mocha에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://getmocha.com",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 283,
    "slug": "marblism-283",
    "name": "Marblism",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "AI Employees for your business",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Marblism에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://marblism.com",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 284,
    "slug": "spell-284",
    "name": "Spell",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Spell is the AI alternative to Google Docs",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Spell에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://spellapp.com",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 285,
    "slug": "kosmik-285",
    "name": "Kosmik",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "AI moodboarding platform",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Kosmik에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.kosmik.app",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 286,
    "slug": "magic-potion-286",
    "name": "Magic Potion",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Visual AI Prompt Editor",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Magic Potion에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.magicpotion.app",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 287,
    "slug": "minusx-287",
    "name": "MinusX",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Have an AI Analyst answer all your data questions reliably on Metabase",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "MinusX에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://minusx.ai/",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 288,
    "slug": "excelmatic-288",
    "name": "Excelmatic",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "AI-Powered Excel Data Analysis and Visualization, Skip the functions—just upload, chat, and watch your data turn into insights and visuals.",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Excelmatic에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://excelmatic.ai",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 289,
    "slug": "langfa-st-289",
    "name": "Langfa.st",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "A fast, no-signup playground to test and share AI prompt templates",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Langfa.st에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://langfa.st/",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 290,
    "slug": "salesagent-chat-290",
    "name": "SalesAgent Chat",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "AI Sales Coach & Copilot for real-time support",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "SalesAgent Chat에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.salesagent.chat",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 291,
    "slug": "rebillion-ai-291",
    "name": "ReBillion.ai",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "AI-powered transaction coordination and workflow automation for real estate professionals",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "ReBillion.ai에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://tc.rebillion.ai/",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 292,
    "slug": "perch-reader-292",
    "name": "Perch Reader",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "Free blog and newsletter aggregator with AI summaries and text-to-speech",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "Perch Reader에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "무료/무료 티어 가능",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://perch.app/",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 293,
    "slug": "x-doc-ai-293",
    "name": "X-doc AI",
    "category": "업무 생산성",
    "sourceCategory": "Productivity",
    "description": "The most accurate AI translator",
    "useCase": "일정·메모·업무 정리",
    "tokenTip": "출력 형식을 고정하고 중복된 배경 설명은 템플릿으로 치환하세요.",
    "promptStarter": "X-doc AI에서 일정·메모·업무 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://x-doc.ai/",
    "tags": [
      "업무 생산성",
      "Productivity"
    ]
  },
  {
    "id": 294,
    "slug": "otter-ai-294",
    "name": "Otter.ai",
    "category": "회의·전사",
    "sourceCategory": "Meeting assistants",
    "description": "A meeting assistant that records audio, writes notes, automatically captures slides, and generates summaries.",
    "useCase": "회의 녹음·전사·요약",
    "tokenTip": "회의 전체보다 결정사항·액션·담당자·기한 필드만 요청하세요.",
    "promptStarter": "Otter.ai에서 회의 녹음·전사·요약를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://otter.ai/",
    "tags": [
      "회의·전사",
      "Meeting assistants"
    ]
  },
  {
    "id": 295,
    "slug": "cogram-295",
    "name": "Cogram",
    "category": "회의·전사",
    "sourceCategory": "Meeting assistants",
    "description": "Cogram takes automatic notes in virtual meetings and identifies action items.",
    "useCase": "회의 녹음·전사·요약",
    "tokenTip": "회의 전체보다 결정사항·액션·담당자·기한 필드만 요청하세요.",
    "promptStarter": "Cogram에서 회의 녹음·전사·요약를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.cogram.com/",
    "tags": [
      "회의·전사",
      "Meeting assistants"
    ]
  },
  {
    "id": 296,
    "slug": "sybill-296",
    "name": "Sybill",
    "category": "회의·전사",
    "sourceCategory": "Meeting assistants",
    "description": "Sybill generates summaries of sales calls, including next steps, pain points and areas of interest, by combining transcript and emotion-based insights.",
    "useCase": "회의 녹음·전사·요약",
    "tokenTip": "회의 전체보다 결정사항·액션·담당자·기한 필드만 요청하세요.",
    "promptStarter": "Sybill에서 회의 녹음·전사·요약를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.sybill.ai/",
    "tags": [
      "회의·전사",
      "Meeting assistants"
    ]
  },
  {
    "id": 297,
    "slug": "loopin-ai-297",
    "name": "Loopin AI",
    "category": "회의·전사",
    "sourceCategory": "Meeting assistants",
    "description": "Loopin is a collaborative meeting workspace that not only enables you to record, transcribe & summaries meetings using AI, but also enables you to auto-organise meeting notes on top of your calendar.",
    "useCase": "회의 녹음·전사·요약",
    "tokenTip": "회의 전체보다 결정사항·액션·담당자·기한 필드만 요청하세요.",
    "promptStarter": "Loopin AI에서 회의 녹음·전사·요약를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.loopinhq.com/",
    "tags": [
      "회의·전사",
      "Meeting assistants"
    ]
  },
  {
    "id": 298,
    "slug": "scribbl-298",
    "name": "Scribbl",
    "category": "회의·전사",
    "sourceCategory": "Meeting assistants",
    "description": "AI Meeting Notes",
    "useCase": "회의 녹음·전사·요약",
    "tokenTip": "회의 전체보다 결정사항·액션·담당자·기한 필드만 요청하세요.",
    "promptStarter": "Scribbl에서 회의 녹음·전사·요약를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.scribbl.co",
    "tags": [
      "회의·전사",
      "Meeting assistants"
    ]
  },
  {
    "id": 299,
    "slug": "elicit-299",
    "name": "Elicit",
    "category": "리서치·문서",
    "sourceCategory": "Academia",
    "description": "Elicit uses language models to help you automate research workflows, like parts of literature review.",
    "useCase": "검색·문서·회의·대화 정리",
    "tokenTip": "질문 범위와 출력 필드를 제한해 불필요한 결과와 반복 요약을 줄이세요.",
    "promptStarter": "Elicit에서 검색·문서·회의·대화 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://elicit.org/",
    "tags": [
      "리서치·문서",
      "Academia"
    ]
  },
  {
    "id": 300,
    "slug": "genei-300",
    "name": "genei",
    "category": "리서치·문서",
    "sourceCategory": "Academia",
    "description": "Summarise academic articles in seconds and save 80% on your research times.",
    "useCase": "검색·문서·회의·대화 정리",
    "tokenTip": "질문 범위와 출력 필드를 제한해 불필요한 결과와 반복 요약을 줄이세요.",
    "promptStarter": "genei에서 검색·문서·회의·대화 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.genei.io/",
    "tags": [
      "리서치·문서",
      "Academia"
    ]
  },
  {
    "id": 301,
    "slug": "explainpaper-301",
    "name": "Explainpaper",
    "category": "리서치·문서",
    "sourceCategory": "Academia",
    "description": "A better way to read academic papers. Upload a paper, highlight confusing text, get an explanation.",
    "useCase": "검색·문서·회의·대화 정리",
    "tokenTip": "질문 범위와 출력 필드를 제한해 불필요한 결과와 반복 요약을 줄이세요.",
    "promptStarter": "Explainpaper에서 검색·문서·회의·대화 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.explainpaper.com/",
    "tags": [
      "리서치·문서",
      "Academia"
    ]
  },
  {
    "id": 302,
    "slug": "galactica-302",
    "name": "Galactica",
    "category": "리서치·문서",
    "sourceCategory": "Academia",
    "description": "A large language model for science. Can summarize academic literature, solve math problems, generate Wiki articles, write scientific code, annotate molecules and proteins, and more. [Model API](https://github.com/papersw",
    "useCase": "검색·문서·회의·대화 정리",
    "tokenTip": "질문 범위와 출력 필드를 제한해 불필요한 결과와 반복 요약을 줄이세요.",
    "promptStarter": "Galactica에서 검색·문서·회의·대화 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://galactica.org/",
    "tags": [
      "리서치·문서",
      "Academia"
    ]
  },
  {
    "id": 303,
    "slug": "consensus-303",
    "name": "Consensus",
    "category": "리서치·문서",
    "sourceCategory": "Academia",
    "description": "Consensus is a search engine that uses AI to find answers in scientific research.",
    "useCase": "검색·문서·회의·대화 정리",
    "tokenTip": "질문 범위와 출력 필드를 제한해 불필요한 결과와 반복 요약을 줄이세요.",
    "promptStarter": "Consensus에서 검색·문서·회의·대화 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://consensus.app/search/",
    "tags": [
      "리서치·문서",
      "Academia"
    ]
  },
  {
    "id": 304,
    "slug": "sourcely-304",
    "name": "Sourcely",
    "category": "리서치·문서",
    "sourceCategory": "Academia",
    "description": "Academic Citation Finding Tool with AI",
    "useCase": "검색·문서·회의·대화 정리",
    "tokenTip": "질문 범위와 출력 필드를 제한해 불필요한 결과와 반복 요약을 줄이세요.",
    "promptStarter": "Sourcely에서 검색·문서·회의·대화 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.sourcely.net/",
    "tags": [
      "리서치·문서",
      "Academia"
    ]
  },
  {
    "id": 305,
    "slug": "scispace-305",
    "name": "SciSpace",
    "category": "리서치·문서",
    "sourceCategory": "Academia",
    "description": "AI Chat for scientific PDFs.",
    "useCase": "검색·문서·회의·대화 정리",
    "tokenTip": "질문 범위와 출력 필드를 제한해 불필요한 결과와 반복 요약을 줄이세요.",
    "promptStarter": "SciSpace에서 검색·문서·회의·대화 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://scispace.com/",
    "tags": [
      "리서치·문서",
      "Academia"
    ]
  },
  {
    "id": 306,
    "slug": "notebooklm-306",
    "name": "NotebookLM",
    "category": "리서치·문서",
    "sourceCategory": "Academia",
    "description": "AI Chat on your own document, link and text resources.",
    "useCase": "검색·문서·회의·대화 정리",
    "tokenTip": "질문 범위와 출력 필드를 제한해 불필요한 결과와 반복 요약을 줄이세요.",
    "promptStarter": "NotebookLM에서 검색·문서·회의·대화 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://notebooklm.google.com/",
    "tags": [
      "리서치·문서",
      "Academia"
    ]
  },
  {
    "id": 307,
    "slug": "mathos-ai-307",
    "name": "Mathos AI",
    "category": "리서치·문서",
    "sourceCategory": "Academia",
    "description": "Best AI math solver, calculator & tutor.",
    "useCase": "검색·문서·회의·대화 정리",
    "tokenTip": "질문 범위와 출력 필드를 제한해 불필요한 결과와 반복 요약을 줄이세요.",
    "promptStarter": "Mathos AI에서 검색·문서·회의·대화 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.mathgptpro.com/",
    "tags": [
      "리서치·문서",
      "Academia"
    ]
  },
  {
    "id": 308,
    "slug": "sitegpt-308",
    "name": "SiteGPT",
    "category": "고객지원",
    "sourceCategory": "Customer Support",
    "description": "Make AI your expert customer support agent.",
    "useCase": "고객 문의·응대 자동화",
    "tokenTip": "FAQ와 답변 형식을 한 번 설정하고 문의별로 질문 본문만 전달하세요.",
    "promptStarter": "SiteGPT에서 고객 문의·응대 자동화를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://sitegpt.ai/?ref=mahseema-awesome-ai-tools",
    "tags": [
      "고객지원",
      "Customer Support"
    ]
  },
  {
    "id": 309,
    "slug": "gpthelp-ai-309",
    "name": "GPTHelp.ai",
    "category": "고객지원",
    "sourceCategory": "Customer Support",
    "description": "ChatGPT for your website / AI customer support chatbot.",
    "useCase": "고객 문의·응대 자동화",
    "tokenTip": "FAQ와 답변 형식을 한 번 설정하고 문의별로 질문 본문만 전달하세요.",
    "promptStarter": "GPTHelp.ai에서 고객 문의·응대 자동화를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://gpthelp.ai/?ref=mahseema-awesome-ai-tools",
    "tags": [
      "고객지원",
      "Customer Support"
    ]
  },
  {
    "id": 310,
    "slug": "sitespeakai-310",
    "name": "SiteSpeakAI",
    "category": "고객지원",
    "sourceCategory": "Customer Support",
    "description": "Automate your customer support with AI.",
    "useCase": "고객 문의·응대 자동화",
    "tokenTip": "FAQ와 답변 형식을 한 번 설정하고 문의별로 질문 본문만 전달하세요.",
    "promptStarter": "SiteSpeakAI에서 고객 문의·응대 자동화를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://sitespeak.ai",
    "tags": [
      "고객지원",
      "Customer Support"
    ]
  },
  {
    "id": 311,
    "slug": "dear-ai-311",
    "name": "Dear AI",
    "category": "고객지원",
    "sourceCategory": "Customer Support",
    "description": "Supercharge Customer Services and boost sales with AI Chatbot.",
    "useCase": "고객 문의·응대 자동화",
    "tokenTip": "FAQ와 답변 형식을 한 번 설정하고 문의별로 질문 본문만 전달하세요.",
    "promptStarter": "Dear AI에서 고객 문의·응대 자동화를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.dearai.online",
    "tags": [
      "고객지원",
      "Customer Support"
    ]
  },
  {
    "id": 312,
    "slug": "inline-help-312",
    "name": "Inline Help",
    "category": "고객지원",
    "sourceCategory": "Customer Support",
    "description": "Answer customer questions before they ask",
    "useCase": "고객 문의·응대 자동화",
    "tokenTip": "FAQ와 답변 형식을 한 번 설정하고 문의별로 질문 본문만 전달하세요.",
    "promptStarter": "Inline Help에서 고객 문의·응대 자동화를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://inlinehelp.com",
    "tags": [
      "고객지원",
      "Customer Support"
    ]
  },
  {
    "id": 313,
    "slug": "aidbase-313",
    "name": "Aidbase",
    "category": "고객지원",
    "sourceCategory": "Customer Support",
    "description": "AI-Powered Support for your SaaS startup.",
    "useCase": "고객 문의·응대 자동화",
    "tokenTip": "FAQ와 답변 형식을 한 번 설정하고 문의별로 질문 본문만 전달하세요.",
    "promptStarter": "Aidbase에서 고객 문의·응대 자동화를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.aidbase.ai",
    "tags": [
      "고객지원",
      "Customer Support"
    ]
  },
  {
    "id": 314,
    "slug": "twig-314",
    "name": "Twig",
    "category": "고객지원",
    "sourceCategory": "Customer Support",
    "description": "Twig is an AI assistant that resolves customer issues instantly, supporting both users and support agents 24/7.",
    "useCase": "고객 문의·응대 자동화",
    "tokenTip": "FAQ와 답변 형식을 한 번 설정하고 문의별로 질문 본문만 전달하세요.",
    "promptStarter": "Twig에서 고객 문의·응대 자동화를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.twig.so/",
    "tags": [
      "고객지원",
      "Customer Support"
    ]
  },
  {
    "id": 315,
    "slug": "emailtriager-315",
    "name": "EmailTriager",
    "category": "리서치·문서",
    "sourceCategory": "Other text generators",
    "description": "Use AI to automatically draft email replies in the background.",
    "useCase": "검색·문서·회의·대화 정리",
    "tokenTip": "질문 범위와 출력 필드를 제한해 불필요한 결과와 반복 요약을 줄이세요.",
    "promptStarter": "EmailTriager에서 검색·문서·회의·대화 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.emailtriager.com/",
    "tags": [
      "리서치·문서",
      "Other text generators"
    ]
  },
  {
    "id": 316,
    "slug": "ai-poem-generator-316",
    "name": "AI Poem Generator",
    "category": "리서치·문서",
    "sourceCategory": "Other text generators",
    "description": "AI Poem Generator writes a beautiful rhyming poem for you on any subject, given a text prompt.",
    "useCase": "검색·문서·회의·대화 정리",
    "tokenTip": "질문 범위와 출력 필드를 제한해 불필요한 결과와 반복 요약을 줄이세요.",
    "promptStarter": "AI Poem Generator에서 검색·문서·회의·대화 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.aipoemgenerator.org",
    "tags": [
      "리서치·문서",
      "Other text generators"
    ]
  },
  {
    "id": 317,
    "slug": "never-jobless-linkedin-message-generator-317",
    "name": "Never Jobless LinkedIn Message Generator",
    "category": "리서치·문서",
    "sourceCategory": "Other text generators",
    "description": "Maximize Your Interview Chances with AI-Powered LinkedIn Messaging.",
    "useCase": "검색·문서·회의·대화 정리",
    "tokenTip": "질문 범위와 출력 필드를 제한해 불필요한 결과와 반복 요약을 줄이세요.",
    "promptStarter": "Never Jobless LinkedIn Message Generator에서 검색·문서·회의·대화 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://neverjobless.com/?ref=mahseema-awesome-ai-tools",
    "tags": [
      "리서치·문서",
      "Other text generators"
    ]
  },
  {
    "id": 318,
    "slug": "co-here-318",
    "name": "co:here",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "Cohere provides access to advanced Large Language Models and NLP tools.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "co:here에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://cohere.ai/",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 319,
    "slug": "haystack-319",
    "name": "Haystack",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "A framework for building NLP applications (e.g. agents, semantic search, question-answering) with language models.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Haystack에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://haystack.deepset.ai/",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 320,
    "slug": "keploy-320",
    "name": "Keploy",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "Open source Tool for converting user traffic to Test Cases and Data Stubs.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Keploy에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://keploy.io/",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 321,
    "slug": "langchain-321",
    "name": "LangChain",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "A framework for developing applications powered by language models.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "LangChain에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://langchain.com/",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 322,
    "slug": "portia-ai-322",
    "name": "Portia AI",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "Open source framework for building agents that pre-express their planned actions, share their progress and can be interrupted by a human. [opensource](https://github.com/portiaAI/portia-sdk-python)",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Portia AI에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.portialabs.ai/",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 323,
    "slug": "gpt4all-323",
    "name": "gpt4all",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "A chatbot trained on a massive collection of clean assistant data including code, stories, and dialogue.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "gpt4all에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/nomic-ai/gpt4all",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 324,
    "slug": "lmql-324",
    "name": "LMQL",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "LMQL is a query language for large language models.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "LMQL에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://lmql.ai/",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 325,
    "slug": "langfuse-325",
    "name": "Langfuse",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "Open-source LLM engineering platform that helps teams collaboratively debug, analyze, and iterate on their LLM applications. [opensource](https://github.com/langfuse/langfuse)",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Langfuse에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://langfuse.com/",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 326,
    "slug": "phoenix-326",
    "name": "Phoenix",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "Open-source tool for ML observability that runs in your notebook environment, by Arize. Monitor and fine-tune LLM, CV, and tabular models.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Phoenix에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://phoenix.arize.com/",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 327,
    "slug": "prediction-guard-327",
    "name": "Prediction Guard",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "Seamlessly integrate private, controlled, and compliant Large Language Models (LLM) functionality.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Prediction Guard에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.predictionguard.com/",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 328,
    "slug": "portkey-328",
    "name": "Portkey",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "Full-stack LLMOps platform to monitor, manage, and improve LLM-based apps.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Portkey에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://portkey.ai/",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 329,
    "slug": "openai-downtime-monitor-329",
    "name": "OpenAI Downtime Monitor",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "Free tool that tracks API uptime and latencies for various OpenAI models and other LLM providers.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "OpenAI Downtime Monitor에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "무료/무료 티어 가능",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://status.portkey.ai/",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 330,
    "slug": "chatwithcloud-330",
    "name": "ChatWithCloud",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "CLI allowing you to interact with AWS Cloud using human language inside your Terminal.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "ChatWithCloud에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://chatwithcloud.ai/",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 331,
    "slug": "singlebasecloud-331",
    "name": "SinglebaseCloud",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "AI-powered backend platform with Vector DB, DocumentDB, Auth, and more to speed up app development.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "SinglebaseCloud에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://singlebase.cloud",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 332,
    "slug": "maxim-ai-332",
    "name": "Maxim AI",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "A generative AI evaluation and observability platform, empowering modern AI teams to ship products with quality, reliability, and speed.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Maxim AI에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.getmaxim.ai/",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 333,
    "slug": "wordware-333",
    "name": "Wordware",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "A web-hosted IDE where non-technical domain experts work with AI Engineers to build task-specific AI agents. It approaches prompting as a new programming language rather than low/no-code blocks.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Wordware에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.wordware.ai",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 334,
    "slug": "coderabbit-334",
    "name": "CodeRabbit",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "An AI-powered code review tool that helps developers improve code quality and productivity.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "CodeRabbit에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://coderabbit.ai/",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 335,
    "slug": "pagerly-335",
    "name": "Pagerly",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "Your Operations Co-pilot on Slack/Teams. It assists and prompts oncall with relevant information to debug issues.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Pagerly에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.pagerly.io",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 336,
    "slug": "hexabot-336",
    "name": "Hexabot",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "A Open-source No-Code tool to build your AI Chatbot / Agent (multi-lingual, multi-channel, LLM, NLU, + ability to develop custom extensions)",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Hexabot에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://hexabot.ai",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 337,
    "slug": "plandex-337",
    "name": "Plandex",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "Open source, terminal-based AI programming engine for complex tasks.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Plandex에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/plandex-ai/plandex",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 338,
    "slug": "ai-ml-api-338",
    "name": "AI/ML API",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "AI/ML API gives developers access to 100+ AI models with one API.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "AI/ML API에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://aimlapi.com/?utm_source=github+of+altern.ai",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 339,
    "slug": "callstack-ai-pr-reviewer-339",
    "name": "Callstack.ai PR Reviewer",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "Automated Code Reviews: Find Bugs, Fix Security Issues, and Speed Up Performance.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Callstack.ai PR Reviewer에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://callstack.ai/pr-reviewer",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 340,
    "slug": "kiln-340",
    "name": "Kiln",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "Intuitive app to build your own AI models. Includes no-code synthetic data generation, fine-tuning, dataset collaboration, and more.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Kiln에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://getkiln.ai",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 341,
    "slug": "calmo-341",
    "name": "Calmo",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "Debug Production x10 Faster with AI.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Calmo에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://getcalmo.com/",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 342,
    "slug": "cleanlab-342",
    "name": "Cleanlab",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "Detect and remediate hallucinations in any LLM application.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Cleanlab에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://help.cleanlab.ai/tlm/",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 343,
    "slug": "amazon-q-developer-cli-343",
    "name": "Amazon Q Developer CLI",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "CLI that provides command completion, command translation using generative AI to translate intent to commands, and a full agentic chat interface with context management that helps you write code.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Amazon Q Developer CLI에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line.html?trk=fd6bb27a-13b0-4286-8269-c7b1cfaa29f0&sc_channel=el",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 344,
    "slug": "agentic-radar-344",
    "name": "Agentic Radar",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "Open-source CLI security scanner for agentic workflows.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Agentic Radar에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/splx-ai/agentic-radar",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 345,
    "slug": "voltagent-345",
    "name": "VoltAgent",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "A TypeScript framework for building and running AI agents with tools, memory, and visibility.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "VoltAgent에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/voltagent/voltagent",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 346,
    "slug": "notte-346",
    "name": "Notte",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "Notte is the fastest, most reliable Browser Using Agents framework",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Notte에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/nottelabs/notte",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 347,
    "slug": "tensorzero-347",
    "name": "TensorZero",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "An open-source framework for building production-grade LLM applications. It unifies an LLM gateway, observability, optimization, evaluations, and experimentation.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "TensorZero에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.tensorzero.com/",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 348,
    "slug": "toolhive-348",
    "name": "ToolHive",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "Find the right MCP server for your task and deploy with one click.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "ToolHive에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/stacklok/toolhive",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 349,
    "slug": "starops-349",
    "name": "StarOps",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "AI Platform Engineer",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "StarOps에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://ingenimax.ai",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 350,
    "slug": "agentdock-350",
    "name": "AgentDock",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "Unified infrastructure for AI agents and automation. One API key for all services instead of managing dozens. Build production-ready agents without operational complexity.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "AgentDock에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://agentdock.ai",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 351,
    "slug": "codeflash-351",
    "name": "Codeflash",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "Ship Blazing-Fast Python Code — Every Time.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Codeflash에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.codeflash.ai/",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 352,
    "slug": "rysa-ai-352",
    "name": "Rysa AI",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "AI GTM Automation Agent",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Rysa AI에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.rysa.ai",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 353,
    "slug": "agenta-353",
    "name": "Agenta",
    "category": "개발·코딩",
    "sourceCategory": "Developer tools",
    "description": "Open-source LLMOps platform for prompt management, LLM evaluation, and observability. Build, evaluate, and monitor production-grade LLM applications. [opensource](https://github.com/agenta-ai/agenta)",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Agenta에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://agenta.ai/",
    "tags": [
      "개발·코딩",
      "Developer tools"
    ]
  },
  {
    "id": 354,
    "slug": "github-copilot-354",
    "name": "GitHub Copilot",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "GitHub Copilot uses the OpenAI Codex to suggest code and entire functions in real-time, right from your editor.",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "GitHub Copilot에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/features/copilot",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 355,
    "slug": "poorcoder-355",
    "name": "poorcoder",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "Lightweight Bash scripts that enhance your terminal coding workflow with web-based AI assistants like Claude or Grok without disrupting your development process.",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "poorcoder에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/vgrichina/poorcoder",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 356,
    "slug": "openai-codex-356",
    "name": "OpenAI Codex",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "An AI system by OpenAI that translates natural language to code.",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "OpenAI Codex에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://platform.openai.com/docs/guides/code/",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 357,
    "slug": "ghostwriter-357",
    "name": "Ghostwriter",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "An AI-powered pair programmer by Replit.",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "Ghostwriter에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://blog.replit.com/ai",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 358,
    "slug": "gocodeo-358",
    "name": "GoCodeo",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "An AI Coding & Testing Agent.",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "GoCodeo에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.gocodeo.com/",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 359,
    "slug": "amazon-codewhisperer-359",
    "name": "Amazon CodeWhisperer",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "Build applications faster with the ML-powered coding companion.",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "Amazon CodeWhisperer에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://aws.amazon.com/codewhisperer/",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 360,
    "slug": "tabnine-360",
    "name": "tabnine",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "Code faster with whole-line & full-function code completions.",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "tabnine에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.tabnine.com/",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 361,
    "slug": "stenography-361",
    "name": "Stenography",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "Automatic code documentation.",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "Stenography에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://stenography.dev/",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 362,
    "slug": "mintlify-362",
    "name": "Mintlify",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "AI powered documentation writer.",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "Mintlify에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://mintlify.com/",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 363,
    "slug": "debuild-363",
    "name": "Debuild",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "AI-powered low-code tool for web apps.",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "Debuild에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://debuild.app/",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 364,
    "slug": "ai2sql-364",
    "name": "AI2sql",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "With AI2sql, engineers and non-engineers can easily write efficient, error-free SQL queries without knowing SQL.",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "AI2sql에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "무료/무료 티어 가능",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.ai2sql.io/",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 365,
    "slug": "codiumai-365",
    "name": "CodiumAI",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "With CodiumAI, you get non-trivial tests suggested right inside your IDE, so you stay confident when you push.",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "CodiumAI에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.codium.ai/",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 366,
    "slug": "pr-agent-366",
    "name": "PR-Agent",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "AI-powered tool for automated PR analysis, feedback, suggestions, and more.",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "PR-Agent에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/Codium-ai/pr-agent",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 367,
    "slug": "mutableai-367",
    "name": "MutableAI",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "AI Accelerated Software Development.",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "MutableAI에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://mutable.ai/",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 368,
    "slug": "turbopilot-368",
    "name": "TurboPilot",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "A self-hosted copilot clone that uses the library behind llama.cpp to run the 6 billion parameter Salesforce Codegen model in 4 GB of RAM.",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "TurboPilot에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/ravenscroftj/turbopilot",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 369,
    "slug": "gpt-code-ui-369",
    "name": "GPT-Code UI",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "An open-source implementation of OpenAI's ChatGPT Code interpreter.",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "GPT-Code UI에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/ricklamers/gpt-code-ui",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 370,
    "slug": "metagpt-370",
    "name": "MetaGPT",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "The Multi-Agent Framework: Given one line Requirement, return PRD, Design, Tasks, Repo",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "MetaGPT에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/geekan/MetaGPT",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 371,
    "slug": "mutahunterai-371",
    "name": "MutahunterAI",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "Accelerate developer productivity and code security with our open-source AI.",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "MutahunterAI에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/codeintegrity-ai/mutahunter",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 372,
    "slug": "ai-kernel-explorer-372",
    "name": "AI Kernel Explorer",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "Explore the Linux kernel source code with AI-generated summaries.",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "AI Kernel Explorer에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/mathiscode/ai-kernel-explorer",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 373,
    "slug": "whodb-373",
    "name": "WhoDB",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "SQL/NoSQL/Graph/Cache/Object data explorer with AI-powered chat + other useful features",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "WhoDB에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/clidey/whodb",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 374,
    "slug": "flexapp-374",
    "name": "FlexApp",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "Build mobile apps with AI, not code",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "FlexApp에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://flexapp.ai/",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 375,
    "slug": "kilo-code-375",
    "name": "Kilo Code",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "Open Source AI coding assistant for planning, building, and fixing code inside VS Code.",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "Kilo Code에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://kilocode.ai",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 376,
    "slug": "capacity-376",
    "name": "Capacity",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "Capacity lets you turn your ideas into fully functional web apps in minutes using AI.",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "Capacity에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://capacity.so",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 377,
    "slug": "runcell-377",
    "name": "Runcell",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "AI Agent Extension for Jupyter Lab, Agent that can code, execute, analysis cell result, etc in Jupyter.",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "Runcell에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://runcell.dev",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 378,
    "slug": "manifest-378",
    "name": "Manifest",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "An alternative to Supabase for AI Code editors and Vibe Coding tools",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "Manifest에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/mnfst/manifest",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 379,
    "slug": "datapup-379",
    "name": "DataPup",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "Database client with AI-powered query assistance to generate context based queries.",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "DataPup에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/DataPupOrg/DataPup",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 380,
    "slug": "gito-380",
    "name": "Gito",
    "category": "개발·코딩",
    "sourceCategory": "Code",
    "description": "AI code reviewer for GitHub Actions or local use, compatible with any LLM and integrated with Jira/Linear.",
    "useCase": "코드 생성·분석·실행",
    "tokenTip": "작은 함수와 테스트 단위로 요청하고 기존 코드를 매번 다시 붙이지 마세요.",
    "promptStarter": "Gito에서 코드 생성·분석·실행를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/Nayjest/Gito",
    "tags": [
      "개발·코딩",
      "Code"
    ]
  },
  {
    "id": 381,
    "slug": "craiyon-381",
    "name": "Craiyon",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "Craiyon, formerly DALL-E mini, is an AI model that can draw images from any text prompt.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "Craiyon에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.craiyon.com/",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 382,
    "slug": "dreamstudio-382",
    "name": "DreamStudio",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "DreamStudio is an easy-to-use interface for creating images using the Stable Diffusion image generation model.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "DreamStudio에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://beta.dreamstudio.ai/",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 383,
    "slug": "artbreeder-383",
    "name": "Artbreeder",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "Artbreeder is a new type of creative tool that empowers users creativity by making it easier to collaborate and explore.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "Artbreeder에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.artbreeder.com/",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 384,
    "slug": "gaugan2-384",
    "name": "GauGAN2",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "GauGAN2 is a robust tool for creating photorealistic art using a combination of words and drawings since it integrates segmentation mapping, inpainting, and text-to-image production in a single model.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "GauGAN2에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "http://gaugan.org/gaugan2/",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 385,
    "slug": "magic-eraser-385",
    "name": "Magic Eraser",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "Remove unwanted things from images in seconds.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "Magic Eraser에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.magiceraser.io/",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 386,
    "slug": "imagine-by-magic-studio-386",
    "name": "Imagine by Magic Studio",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "A tool by Magic Studio that let's you express yourself by just describing what's on your mind.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "Imagine by Magic Studio에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://magicstudio.com/imagine",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 387,
    "slug": "alpaca-387",
    "name": "Alpaca",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "Stable Diffusion Photoshop plugin.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "Alpaca에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.getalpaca.io/",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 388,
    "slug": "patience-ai-388",
    "name": "Patience.ai",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "Patience.ai is an app for creating images with Stable Diffusion, a cutting-edge AI developed by Stability.AI.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "Patience.ai에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.patience.ai/",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 389,
    "slug": "genshare-389",
    "name": "GenShare",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "Generate art in seconds for free. Own and share what you create. A multimedia generative studio, democratizing design and creativity.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "GenShare에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "무료/무료 티어 가능",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.genshare.io/",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 390,
    "slug": "playground-ai-390",
    "name": "Playground AI",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "Playground AI is a free-to-use online AI image creator. Use it to create art, social media posts, presentations, posters, videos, logos and more.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "Playground AI에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "무료/무료 티어 가능",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://playgroundai.com/",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 391,
    "slug": "pixelz-ai-art-generator-391",
    "name": "Pixelz AI Art Generator",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "Pixelz AI Art Generator enables you to create incredible art from text. Stable Diffusion, CLIP Guided Diffusion & PXL·E realistic algorithms available.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "Pixelz AI Art Generator에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://pixelz.ai/",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 392,
    "slug": "modyfi-392",
    "name": "modyfi",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "The image editor you've always wanted. AI-powered creative tools in your browser. Real-time collaboration.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "modyfi에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.modyfi.io/",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 393,
    "slug": "ponzu-393",
    "name": "Ponzu",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "Ponzu is your free AI logo generator. Build your brand with creatively designed logos in seconds, using only your imagination.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "Ponzu에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "무료/무료 티어 가능",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.ponzu.ai/",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 394,
    "slug": "photoroom-394",
    "name": "PhotoRoom",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "Create product and portrait pictures using only your phone. Remove background, change background and showcase products.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "PhotoRoom에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.photoroom.com/",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 395,
    "slug": "photoguruai-395",
    "name": "PhotoGuruAI",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "Create professional AI Headshots in various styles.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "PhotoGuruAI에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://photoguruai.com/",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 396,
    "slug": "avatar-ai-396",
    "name": "Avatar AI",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "Create your own AI-generated avatars.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "Avatar AI에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://avatarai.me/",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 397,
    "slug": "clipdrop-397",
    "name": "ClipDrop",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "Create professional visuals without a photo studio, powered by [stability.ai](https://stability.ai/).",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "ClipDrop에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://clipdrop.co/",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 398,
    "slug": "lensa-398",
    "name": "Lensa",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "An all-in-one image editing app that includes the generation of personalized avatars using Stable Diffusion.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "Lensa에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://prisma-ai.com/lensa",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 399,
    "slug": "rundiffusion-399",
    "name": "RunDiffusion",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "Cloud-based workspace for creating AI-generated art.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "RunDiffusion에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://rundiffusion.com/",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 400,
    "slug": "human-generator-400",
    "name": "Human Generator",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "AI generator or realistic looking photos of humans.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "Human Generator에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://generated.photos/human-generator",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 401,
    "slug": "vectorart-ai-401",
    "name": "VectorArt.ai",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "Create vector images with AI.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "VectorArt.ai에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://vectorart.ai",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 402,
    "slug": "stockphotoai-net-402",
    "name": "StockPhotoAI.net",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "Great stock photos, made for you.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "StockPhotoAI.net에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.stockphotoai.net/?ref=mahseema-awesome-ai-tools",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 403,
    "slug": "room-reinvented-403",
    "name": "Room Reinvented",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "Transform your room effortlessly with Room Reinvented! Upload a photo and let AI create over 30 stunning interior styles. Elevate your space today.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "Room Reinvented에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://roomreinvented.com",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 404,
    "slug": "gensbot-404",
    "name": "Gensbot",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "Gensbot uses AI to craft personalised printed merchandise. One prompt creates one unique product to fit your needs.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "Gensbot에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://gensbot.com",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 405,
    "slug": "plantphotoai-405",
    "name": "PlantPhotoAI",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "free AI-generated plant images",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "PlantPhotoAI에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "무료/무료 티어 가능",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.plantphotoai.com/",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 406,
    "slug": "republiclabs-ai-406",
    "name": "RepublicLabs.AI",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "multi-model simultaneous generation from a single prompt, fully unrestricted and packed with the latest greatest AI models.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "RepublicLabs.AI에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://republiclabs.ai/",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 407,
    "slug": "black-headshots-407",
    "name": "Black Headshots",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "AI headshots generator for black professionals",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "Black Headshots에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.blackheadshots.com",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 408,
    "slug": "pixvify-ai-408",
    "name": "Pixvify AI",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "Free realistic AI photo generator platform",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "Pixvify AI에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "무료/무료 티어 가능",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://pixvify.com/",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 409,
    "slug": "pawtrait-409",
    "name": "Pawtrait",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "AI Pet Portraits",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "Pawtrait에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.pawtrait.art/",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 410,
    "slug": "icoloring-410",
    "name": "iColoring",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "Free AI Coloring Pages Generator",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "iColoring에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "무료/무료 티어 가능",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://icoloring.ai",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 411,
    "slug": "suit-me-up-411",
    "name": "Suit me Up",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "Generate pictures of you wearing a suit with AI.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "Suit me Up에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://suitmeup.pictures/",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 412,
    "slug": "ai-photo-forge-412",
    "name": "AI Photo Forge",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "A Telegram bot to generate AI pictures of you.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "AI Photo Forge에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://aiphotoforge.com/",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 413,
    "slug": "ai-boost-413",
    "name": "AI Boost",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "All-in-one service for creating and editing images with AI: upscale images, swap faces, generate new visuals and avatars, try on outfits, reshape body contours, change backgrounds, retouch faces, and even test out tattoo",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "AI Boost에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://boost.pictures/",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 414,
    "slug": "planttattoosai-414",
    "name": "PlantTattoosAI",
    "category": "AI 서비스",
    "sourceCategory": "Services",
    "description": "Plant and flower tattoos designs generator trained on real botanicals.",
    "useCase": "AI 기반 서비스·API",
    "tokenTip": "요청 필드와 반환 필드만 명시해 불필요한 설명을 줄이세요.",
    "promptStarter": "PlantTattoosAI에서 AI 기반 서비스·API를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.planttattoosai.com/",
    "tags": [
      "AI 서비스",
      "Services"
    ]
  },
  {
    "id": 415,
    "slug": "brandmark-415",
    "name": "Brandmark",
    "category": "디자인·이미지",
    "sourceCategory": "Graphic design",
    "description": "AI-based logo design tool.",
    "useCase": "그래픽·브랜드·레이아웃 제작",
    "tokenTip": "브랜드 규칙은 짧은 토큰으로 저장하고 매 요청에 반복하지 마세요.",
    "promptStarter": "Brandmark에서 그래픽·브랜드·레이아웃 제작를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://brandmark.io/",
    "tags": [
      "디자인·이미지",
      "Graphic design"
    ]
  },
  {
    "id": 416,
    "slug": "gamma-416",
    "name": "Gamma",
    "category": "디자인·이미지",
    "sourceCategory": "Graphic design",
    "description": "Create beautiful presentations and webpages with none of the formatting and design work.",
    "useCase": "그래픽·브랜드·레이아웃 제작",
    "tokenTip": "브랜드 규칙은 짧은 토큰으로 저장하고 매 요청에 반복하지 마세요.",
    "promptStarter": "Gamma에서 그래픽·브랜드·레이아웃 제작를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://gamma.app/",
    "tags": [
      "디자인·이미지",
      "Graphic design"
    ]
  },
  {
    "id": 417,
    "slug": "microsoft-designer-417",
    "name": "Microsoft Designer",
    "category": "디자인·이미지",
    "sourceCategory": "Graphic design",
    "description": "Stunning designs in a flash.",
    "useCase": "그래픽·브랜드·레이아웃 제작",
    "tokenTip": "브랜드 규칙은 짧은 토큰으로 저장하고 매 요청에 반복하지 마세요.",
    "promptStarter": "Microsoft Designer에서 그래픽·브랜드·레이아웃 제작를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://designer.microsoft.com/",
    "tags": [
      "디자인·이미지",
      "Graphic design"
    ]
  },
  {
    "id": 418,
    "slug": "svgstud-io-418",
    "name": "SVGStud.io",
    "category": "디자인·이미지",
    "sourceCategory": "Graphic design",
    "description": "AI-based SVG Generation and Semantic Seach",
    "useCase": "그래픽·브랜드·레이아웃 제작",
    "tokenTip": "브랜드 규칙은 짧은 토큰으로 저장하고 매 요청에 반복하지 마세요.",
    "promptStarter": "SVGStud.io에서 그래픽·브랜드·레이아웃 제작를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://svgstud.io/",
    "tags": [
      "디자인·이미지",
      "Graphic design"
    ]
  },
  {
    "id": 419,
    "slug": "text2infographic-419",
    "name": "Text2Infographic",
    "category": "디자인·이미지",
    "sourceCategory": "Graphic design",
    "description": "AI infographic generator and editor.",
    "useCase": "그래픽·브랜드·레이아웃 제작",
    "tokenTip": "브랜드 규칙은 짧은 토큰으로 저장하고 매 요청에 반복하지 마세요.",
    "promptStarter": "Text2Infographic에서 그래픽·브랜드·레이아웃 제작를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://text2infographic.com/",
    "tags": [
      "디자인·이미지",
      "Graphic design"
    ]
  },
  {
    "id": 420,
    "slug": "seede-ai-420",
    "name": "Seede.ai",
    "category": "디자인·이미지",
    "sourceCategory": "Graphic design",
    "description": "Create a stunning poster in just 1 minute with Seede.",
    "useCase": "그래픽·브랜드·레이아웃 제작",
    "tokenTip": "브랜드 규칙은 짧은 토큰으로 저장하고 매 요청에 반복하지 마세요.",
    "promptStarter": "Seede.ai에서 그래픽·브랜드·레이아웃 제작를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://seede.ai/",
    "tags": [
      "디자인·이미지",
      "Graphic design"
    ]
  },
  {
    "id": 421,
    "slug": "magic-patterns-421",
    "name": "Magic Patterns",
    "category": "디자인·이미지",
    "sourceCategory": "Graphic design",
    "description": "AI-based UI builder with Figma export and React code generation.",
    "useCase": "그래픽·브랜드·레이아웃 제작",
    "tokenTip": "브랜드 규칙은 짧은 토큰으로 저장하고 매 요청에 반복하지 마세요.",
    "promptStarter": "Magic Patterns에서 그래픽·브랜드·레이아웃 제작를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.magicpatterns.com/",
    "tags": [
      "디자인·이미지",
      "Graphic design"
    ]
  },
  {
    "id": 422,
    "slug": "lexica-422",
    "name": "Lexica",
    "category": "디자인·이미지",
    "sourceCategory": "Image libraries",
    "description": "Stable Diffusion search engine.",
    "useCase": "이미지 검색·에셋 관리",
    "tokenTip": "스타일·비율·사용처를 먼저 제한해 후보 수와 재검색을 줄이세요.",
    "promptStarter": "Lexica에서 이미지 검색·에셋 관리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://lexica.art/",
    "tags": [
      "디자인·이미지",
      "Image libraries"
    ]
  },
  {
    "id": 423,
    "slug": "libraire-423",
    "name": "Libraire",
    "category": "디자인·이미지",
    "sourceCategory": "Image libraries",
    "description": "The largest library of AI-generated images.",
    "useCase": "이미지 검색·에셋 관리",
    "tokenTip": "스타일·비율·사용처를 먼저 제한해 후보 수와 재검색을 줄이세요.",
    "promptStarter": "Libraire에서 이미지 검색·에셋 관리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://libraire.ai/",
    "tags": [
      "디자인·이미지",
      "Image libraries"
    ]
  },
  {
    "id": 424,
    "slug": "krea-424",
    "name": "KREA",
    "category": "디자인·이미지",
    "sourceCategory": "Image libraries",
    "description": "Explore millions of AI-generated images and create collections of prompts. Featuring Stable Diffusion generations.",
    "useCase": "이미지 검색·에셋 관리",
    "tokenTip": "스타일·비율·사용처를 먼저 제한해 후보 수와 재검색을 줄이세요.",
    "promptStarter": "KREA에서 이미지 검색·에셋 관리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.krea.ai/",
    "tags": [
      "디자인·이미지",
      "Image libraries"
    ]
  },
  {
    "id": 425,
    "slug": "openart-425",
    "name": "OpenArt",
    "category": "디자인·이미지",
    "sourceCategory": "Image libraries",
    "description": "Search 10M+ of prompts, and generate AI art via Stable Diffusion, DALL·E 2.",
    "useCase": "이미지 검색·에셋 관리",
    "tokenTip": "스타일·비율·사용처를 먼저 제한해 후보 수와 재검색을 줄이세요.",
    "promptStarter": "OpenArt에서 이미지 검색·에셋 관리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://openart.ai/",
    "tags": [
      "디자인·이미지",
      "Image libraries"
    ]
  },
  {
    "id": 426,
    "slug": "phygital-426",
    "name": "Phygital",
    "category": "디자인·이미지",
    "sourceCategory": "Image libraries",
    "description": "Built-in templates for generating or editing any pictures. Moreover, you can create your own design.",
    "useCase": "이미지 검색·에셋 관리",
    "tokenTip": "스타일·비율·사용처를 먼저 제한해 후보 수와 재검색을 줄이세요.",
    "promptStarter": "Phygital에서 이미지 검색·에셋 관리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://app.phygital.plus/",
    "tags": [
      "디자인·이미지",
      "Image libraries"
    ]
  },
  {
    "id": 427,
    "slug": "canva-427",
    "name": "Canva",
    "category": "디자인·이미지",
    "sourceCategory": "Image libraries",
    "description": "Generating AI Images.",
    "useCase": "이미지 검색·에셋 관리",
    "tokenTip": "스타일·비율·사용처를 먼저 제한해 후보 수와 재검색을 줄이세요.",
    "promptStarter": "Canva에서 이미지 검색·에셋 관리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.canva.com/ai-image-generator/",
    "tags": [
      "디자인·이미지",
      "Image libraries"
    ]
  },
  {
    "id": 428,
    "slug": "stable-horde-428",
    "name": "Stable Horde",
    "category": "이미지·디자인",
    "sourceCategory": "Stable Diffusion resources",
    "description": "A crowdsourced distributed cluster of Stable Diffusion workers.",
    "useCase": "이미지·그래픽·에셋 제작",
    "tokenTip": "스타일·비율·사용처를 먼저 고정하고 한 번에 한 변형만 요청하세요.",
    "promptStarter": "Stable Horde에서 이미지·그래픽·에셋 제작를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://stablehorde.net/",
    "tags": [
      "이미지·디자인",
      "Stable Diffusion resources"
    ]
  },
  {
    "id": 429,
    "slug": "publicprompts-429",
    "name": "PublicPrompts",
    "category": "이미지·디자인",
    "sourceCategory": "Stable Diffusion resources",
    "description": "A collection of free prompts for Stable Diffusion.",
    "useCase": "이미지·그래픽·에셋 제작",
    "tokenTip": "스타일·비율·사용처를 먼저 고정하고 한 번에 한 변형만 요청하세요.",
    "promptStarter": "PublicPrompts에서 이미지·그래픽·에셋 제작를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "무료/무료 티어 가능",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://publicprompts.art/",
    "tags": [
      "이미지·디자인",
      "Stable Diffusion resources"
    ]
  },
  {
    "id": 430,
    "slug": "runwayml-430",
    "name": "RunwayML",
    "category": "영상",
    "sourceCategory": "Video",
    "description": "Magical AI tools, realtime collaboration, precision editing, and more. Your next-generation content creation suite.",
    "useCase": "영상 생성·편집·자막 작업",
    "tokenTip": "짧은 컷과 명확한 수정 지시를 사용하세요.",
    "promptStarter": "RunwayML에서 영상 생성·편집·자막 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://runwayml.com/",
    "tags": [
      "영상",
      "Video"
    ]
  },
  {
    "id": 431,
    "slug": "synthesia-431",
    "name": "Synthesia",
    "category": "영상",
    "sourceCategory": "Video",
    "description": "Create videos from plain text in minutes.",
    "useCase": "영상 생성·편집·자막 작업",
    "tokenTip": "짧은 컷과 명확한 수정 지시를 사용하세요.",
    "promptStarter": "Synthesia에서 영상 생성·편집·자막 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.synthesia.io/",
    "tags": [
      "영상",
      "Video"
    ]
  },
  {
    "id": 432,
    "slug": "rephrase-ai-432",
    "name": "Rephrase AI",
    "category": "영상",
    "sourceCategory": "Video",
    "description": "Rephrase's technology enables hyper-personalized video creation at scale that drive engagement and business efficiencies.",
    "useCase": "영상 생성·편집·자막 작업",
    "tokenTip": "짧은 컷과 명확한 수정 지시를 사용하세요.",
    "promptStarter": "Rephrase AI에서 영상 생성·편집·자막 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.rephrase.ai/",
    "tags": [
      "영상",
      "Video"
    ]
  },
  {
    "id": 433,
    "slug": "hour-one-433",
    "name": "Hour One",
    "category": "영상",
    "sourceCategory": "Video",
    "description": "Turn text into video, featuring virtual presenters, automatically.",
    "useCase": "영상 생성·편집·자막 작업",
    "tokenTip": "짧은 컷과 명확한 수정 지시를 사용하세요.",
    "promptStarter": "Hour One에서 영상 생성·편집·자막 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://hourone.ai/",
    "tags": [
      "영상",
      "Video"
    ]
  },
  {
    "id": 434,
    "slug": "d-id-434",
    "name": "D-ID",
    "category": "영상",
    "sourceCategory": "Video",
    "description": "Create and interact with talking avatars at the touch of a button.",
    "useCase": "영상 생성·편집·자막 작업",
    "tokenTip": "짧은 컷과 명확한 수정 지시를 사용하세요.",
    "promptStarter": "D-ID에서 영상 생성·편집·자막 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.d-id.com/",
    "tags": [
      "영상",
      "Video"
    ]
  },
  {
    "id": 435,
    "slug": "shortvideogen-435",
    "name": "ShortVideoGen",
    "category": "영상",
    "sourceCategory": "Video",
    "description": "Create short videos with audio using text prompts.",
    "useCase": "영상 생성·편집·자막 작업",
    "tokenTip": "짧은 컷과 명확한 수정 지시를 사용하세요.",
    "promptStarter": "ShortVideoGen에서 영상 생성·편집·자막 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://shortgen.video/",
    "tags": [
      "영상",
      "Video"
    ]
  },
  {
    "id": 436,
    "slug": "clipwing-436",
    "name": "Clipwing",
    "category": "영상",
    "sourceCategory": "Video",
    "description": "A tool for cutting long videos into dozens of short clips.",
    "useCase": "영상 생성·편집·자막 작업",
    "tokenTip": "짧은 컷과 명확한 수정 지시를 사용하세요.",
    "promptStarter": "Clipwing에서 영상 생성·편집·자막 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://clipwing.pro/",
    "tags": [
      "영상",
      "Video"
    ]
  },
  {
    "id": 437,
    "slug": "recast-studio-437",
    "name": "Recast Studio",
    "category": "영상",
    "sourceCategory": "Video",
    "description": "AI powered podcast marketing assistant.",
    "useCase": "영상 생성·편집·자막 작업",
    "tokenTip": "짧은 컷과 명확한 수정 지시를 사용하세요.",
    "promptStarter": "Recast Studio에서 영상 생성·편집·자막 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://recast.studio",
    "tags": [
      "영상",
      "Video"
    ]
  },
  {
    "id": 438,
    "slug": "based-ai-438",
    "name": "Based AI",
    "category": "영상",
    "sourceCategory": "Video",
    "description": "AI Intuitive Interface for Video creating",
    "useCase": "영상 생성·편집·자막 작업",
    "tokenTip": "짧은 컷과 명확한 수정 지시를 사용하세요.",
    "promptStarter": "Based AI에서 영상 생성·편집·자막 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.basedlabs.ai/",
    "tags": [
      "영상",
      "Video"
    ]
  },
  {
    "id": 439,
    "slug": "klingai-439",
    "name": "klingai",
    "category": "영상",
    "sourceCategory": "Video",
    "description": "AI creative studio boasts AI image and video generation capabilities.",
    "useCase": "영상 생성·편집·자막 작업",
    "tokenTip": "짧은 컷과 명확한 수정 지시를 사용하세요.",
    "promptStarter": "klingai에서 영상 생성·편집·자막 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://app.klingai.com/global/",
    "tags": [
      "영상",
      "Video"
    ]
  },
  {
    "id": 440,
    "slug": "sisif-440",
    "name": "Sisif",
    "category": "영상",
    "sourceCategory": "Video",
    "description": "AI Video Generator: Turn Text into Stunning Videos in Seconds",
    "useCase": "영상 생성·편집·자막 작업",
    "tokenTip": "짧은 컷과 명확한 수정 지시를 사용하세요.",
    "promptStarter": "Sisif에서 영상 생성·편집·자막 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://sisif.ai/",
    "tags": [
      "영상",
      "Video"
    ]
  },
  {
    "id": 441,
    "slug": "descript-overdub-441",
    "name": "Descript Overdub",
    "category": "음성·더빙",
    "sourceCategory": "AI Voice Cloning",
    "description": "[Review](https://theresanai.com/descript-overdub) - Seamlessly integrates with Descript’s transcription and editing tools, ideal for content creators needing quick voiceovers.",
    "useCase": "음성 생성·변환·더빙 작업",
    "tokenTip": "짧은 대본 단위로 생성하고 발음·톤을 나눠 검수하세요.",
    "promptStarter": "Descript Overdub에서 음성 생성·변환·더빙 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.descript.com/overdub",
    "tags": [
      "음성·더빙",
      "AI Voice Cloning"
    ]
  },
  {
    "id": 442,
    "slug": "respeecher-442",
    "name": "Respeecher",
    "category": "음성·더빙",
    "sourceCategory": "AI Voice Cloning",
    "description": "[Review](https://theresanai.com/respeecher) -  A professional tool widely used in the entertainment industry to create emotion-rich, realistic voice clones.",
    "useCase": "음성 생성·변환·더빙 작업",
    "tokenTip": "짧은 대본 단위로 생성하고 발음·톤을 나눠 검수하세요.",
    "promptStarter": "Respeecher에서 음성 생성·변환·더빙 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.respeecher.com/",
    "tags": [
      "음성·더빙",
      "AI Voice Cloning"
    ]
  },
  {
    "id": 443,
    "slug": "elevenlabs-443",
    "name": "ElevenLabs",
    "category": "음성·더빙",
    "sourceCategory": "AI Voice Cloning",
    "description": "[Review](https://theresanai.com/elevenlabs) - Known for ultra-realistic voice cloning and emotion modeling, setting a new standard in AI-driven voice synthesis.",
    "useCase": "음성 생성·변환·더빙 작업",
    "tokenTip": "짧은 대본 단위로 생성하고 발음·톤을 나눠 검수하세요.",
    "promptStarter": "ElevenLabs에서 음성 생성·변환·더빙 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://elevenlabs.io/",
    "tags": [
      "음성·더빙",
      "AI Voice Cloning"
    ]
  },
  {
    "id": 444,
    "slug": "resemble-ai-444",
    "name": "Resemble AI",
    "category": "음성·더빙",
    "sourceCategory": "AI Voice Cloning",
    "description": "[Review](https://theresanai.com/resemble-ai) - Offers real-time voice synthesis with customization options, making it versatile for both developers and creatives.",
    "useCase": "음성 생성·변환·더빙 작업",
    "tokenTip": "짧은 대본 단위로 생성하고 발음·톤을 나눠 검수하세요.",
    "promptStarter": "Resemble AI에서 음성 생성·변환·더빙 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.resemble.ai/",
    "tags": [
      "음성·더빙",
      "AI Voice Cloning"
    ]
  },
  {
    "id": 445,
    "slug": "ispeech-445",
    "name": "iSpeech",
    "category": "음성·더빙",
    "sourceCategory": "AI Voice Cloning",
    "description": "[Review](https://theresanai.com/ispeech) - A versatile solution for corporate applications with support for a wide array of languages and voices.",
    "useCase": "음성 생성·변환·더빙 작업",
    "tokenTip": "짧은 대본 단위로 생성하고 발음·톤을 나눠 검수하세요.",
    "promptStarter": "iSpeech에서 음성 생성·변환·더빙 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.ispeech.org/",
    "tags": [
      "음성·더빙",
      "AI Voice Cloning"
    ]
  },
  {
    "id": 446,
    "slug": "veritone-voice-446",
    "name": "Veritone Voice",
    "category": "음성·더빙",
    "sourceCategory": "AI Voice Cloning",
    "description": "[Review](https://theresanai.com/veritone-voice) - Focuses on maintaining brand consistency with highly customizable voice cloning used in media and entertainment.",
    "useCase": "음성 생성·변환·더빙 작업",
    "tokenTip": "짧은 대본 단위로 생성하고 발음·톤을 나눠 검수하세요.",
    "promptStarter": "Veritone Voice에서 음성 생성·변환·더빙 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.veritone.com/solutions/voice/",
    "tags": [
      "음성·더빙",
      "AI Voice Cloning"
    ]
  },
  {
    "id": 447,
    "slug": "microsoft-azure-neural-tts-447",
    "name": "Microsoft Azure Neural TTS",
    "category": "음성·더빙",
    "sourceCategory": "AI Voice Cloning",
    "description": "Review - Scalable and highly customizable, ideal for integration into enterprise applications.",
    "useCase": "음성 생성·변환·더빙 작업",
    "tokenTip": "짧은 대본 단위로 생성하고 발음·톤을 나눠 검수하세요.",
    "promptStarter": "Microsoft Azure Neural TTS에서 음성 생성·변환·더빙 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://azure.microsoft.com/en-us/services/cognitive-services/text-to-speech/",
    "tags": [
      "음성·더빙",
      "AI Voice Cloning"
    ]
  },
  {
    "id": 448,
    "slug": "wellsaid-labs-448",
    "name": "WellSaid Labs",
    "category": "음성·더빙",
    "sourceCategory": "AI Voice Cloning",
    "description": "[Review](https://theresanai.com/wellsaid-labs) - Gaining traction for its natural-sounding voiceovers, particularly in corporate training and e-learning.",
    "useCase": "음성 생성·변환·더빙 작업",
    "tokenTip": "짧은 대본 단위로 생성하고 발음·톤을 나눠 검수하세요.",
    "promptStarter": "WellSaid Labs에서 음성 생성·변환·더빙 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.wellsaidlabs.com/",
    "tags": [
      "음성·더빙",
      "AI Voice Cloning"
    ]
  },
  {
    "id": 449,
    "slug": "lovo-ai-449",
    "name": "Lovo.ai",
    "category": "음성·더빙",
    "sourceCategory": "AI Voice Cloning",
    "description": "[Review](https://theresanai.com/lovo-ai) - A compelling choice for creative professionals, especially useful in ads and explainer videos.",
    "useCase": "음성 생성·변환·더빙 작업",
    "tokenTip": "짧은 대본 단위로 생성하고 발음·톤을 나눠 검수하세요.",
    "promptStarter": "Lovo.ai에서 음성 생성·변환·더빙 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.lovo.ai/",
    "tags": [
      "음성·더빙",
      "AI Voice Cloning"
    ]
  },
  {
    "id": 450,
    "slug": "zenmic-com-450",
    "name": "Zenmic.com",
    "category": "음성·더빙",
    "sourceCategory": "AI Voice Cloning",
    "description": "An app to generate podcast eposode ( script + Audio ) using AI.",
    "useCase": "음성 생성·변환·더빙 작업",
    "tokenTip": "짧은 대본 단위로 생성하고 발음·톤을 나눠 검수하세요.",
    "promptStarter": "Zenmic.com에서 음성 생성·변환·더빙 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://zenmic.com",
    "tags": [
      "음성·더빙",
      "AI Voice Cloning"
    ]
  },
  {
    "id": 451,
    "slug": "audify-ai-451",
    "name": "Audify AI",
    "category": "음성·더빙",
    "sourceCategory": "AI Voice Cloning",
    "description": "User-friendly platform for voice synthesis with customizable options and instructions, making it versatile for both developers and creatives.",
    "useCase": "음성 생성·변환·더빙 작업",
    "tokenTip": "짧은 대본 단위로 생성하고 발음·톤을 나눠 검수하세요.",
    "promptStarter": "Audify AI에서 음성 생성·변환·더빙 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://audify-ai.ahmedtokyo.com",
    "tags": [
      "음성·더빙",
      "AI Voice Cloning"
    ]
  },
  {
    "id": 452,
    "slug": "tts-webui-452",
    "name": "TTS WebUI",
    "category": "음성·더빙",
    "sourceCategory": "AI Voice Cloning",
    "description": "Open Source generative AI App for voice and music, supporting 15+ TTS models.",
    "useCase": "음성 생성·변환·더빙 작업",
    "tokenTip": "짧은 대본 단위로 생성하고 발음·톤을 나눠 검수하세요.",
    "promptStarter": "TTS WebUI에서 음성 생성·변환·더빙 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/rsxdalv/tts-generation-webui",
    "tags": [
      "음성·더빙",
      "AI Voice Cloning"
    ]
  },
  {
    "id": 453,
    "slug": "ainterview-space-453",
    "name": "AInterview.space",
    "category": "음성·더빙",
    "sourceCategory": "AI Voice Cloning",
    "description": "Create AI-hosted podcast interviews. Choose a topic, and Joe (the AI host) will research, host the interview, and generate your episode as audio or video.",
    "useCase": "음성 생성·변환·더빙 작업",
    "tokenTip": "짧은 대본 단위로 생성하고 발음·톤을 나눠 검수하세요.",
    "promptStarter": "AInterview.space에서 음성 생성·변환·더빙 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://ainterview.space",
    "tags": [
      "음성·더빙",
      "AI Voice Cloning"
    ]
  },
  {
    "id": 454,
    "slug": "splash-pro-454",
    "name": "Splash Pro",
    "category": "음악·사운드",
    "sourceCategory": "AI Music Generators",
    "description": "[Review](https://theresanai.com/splash-pro) - A versatile platform offering intuitive music creation tools for all skill levels.",
    "useCase": "음악·배경음·사운드 제작",
    "tokenTip": "장르·길이·악기·구조를 항목으로 나누세요.",
    "promptStarter": "Splash Pro에서 음악·배경음·사운드 제작를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.splashpro.com",
    "tags": [
      "음악·사운드",
      "AI Music Generators"
    ]
  },
  {
    "id": 455,
    "slug": "aiva-455",
    "name": "AIVA",
    "category": "음악·사운드",
    "sourceCategory": "AI Music Generators",
    "description": "[Review](https://theresanai.com/aiva) - AI composer specializing in classical and cinematic music creation.",
    "useCase": "음악·배경음·사운드 제작",
    "tokenTip": "장르·길이·악기·구조를 항목으로 나누세요.",
    "promptStarter": "AIVA에서 음악·배경음·사운드 제작를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.aiva.ai",
    "tags": [
      "음악·사운드",
      "AI Music Generators"
    ]
  },
  {
    "id": 456,
    "slug": "mubert-456",
    "name": "Mubert",
    "category": "음악·사운드",
    "sourceCategory": "AI Music Generators",
    "description": "[Review](https://theresanai.com/mubert) - Real-time generative music tailored for different use cases.",
    "useCase": "음악·배경음·사운드 제작",
    "tokenTip": "장르·길이·악기·구조를 항목으로 나누세요.",
    "promptStarter": "Mubert에서 음악·배경음·사운드 제작를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.mubert.com",
    "tags": [
      "음악·사운드",
      "AI Music Generators"
    ]
  },
  {
    "id": 457,
    "slug": "soundraw-457",
    "name": "Soundraw",
    "category": "음악·사운드",
    "sourceCategory": "AI Music Generators",
    "description": "[Review](https://theresanai.com/soundraw) - Allows users to customize music compositions based on mood and style.",
    "useCase": "음악·배경음·사운드 제작",
    "tokenTip": "장르·길이·악기·구조를 항목으로 나누세요.",
    "promptStarter": "Soundraw에서 음악·배경음·사운드 제작를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://soundraw.io",
    "tags": [
      "음악·사운드",
      "AI Music Generators"
    ]
  },
  {
    "id": 458,
    "slug": "beatoven-ai-458",
    "name": "Beatoven.ai",
    "category": "음악·사운드",
    "sourceCategory": "AI Music Generators",
    "description": "[Review](https://theresanai.com/beatoven-ai) - AI-driven music generation focused on evoking specific emotions.",
    "useCase": "음악·배경음·사운드 제작",
    "tokenTip": "장르·길이·악기·구조를 항목으로 나누세요.",
    "promptStarter": "Beatoven.ai에서 음악·배경음·사운드 제작를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.beatoven.ai",
    "tags": [
      "음악·사운드",
      "AI Music Generators"
    ]
  },
  {
    "id": 459,
    "slug": "boomy-459",
    "name": "Boomy",
    "category": "음악·사운드",
    "sourceCategory": "AI Music Generators",
    "description": "[Review](https://theresanai.com/boomy) - Democratizes music creation with quick track generation and monetization.",
    "useCase": "음악·배경음·사운드 제작",
    "tokenTip": "장르·길이·악기·구조를 항목으로 나누세요.",
    "promptStarter": "Boomy에서 음악·배경음·사운드 제작를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.boomy.com",
    "tags": [
      "음악·사운드",
      "AI Music Generators"
    ]
  },
  {
    "id": 460,
    "slug": "ecrett-music-460",
    "name": "Ecrett Music",
    "category": "음악·사운드",
    "sourceCategory": "AI Music Generators",
    "description": "[Review](https://theresanai.com/ecrett-music) - Designed for video creators, offering royalty-free music.",
    "useCase": "음악·배경음·사운드 제작",
    "tokenTip": "장르·길이·악기·구조를 항목으로 나누세요.",
    "promptStarter": "Ecrett Music에서 음악·배경음·사운드 제작를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "무료/무료 티어 가능",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.ecrettmusic.com",
    "tags": [
      "음악·사운드",
      "AI Music Generators"
    ]
  },
  {
    "id": 461,
    "slug": "loudly-461",
    "name": "Loudly",
    "category": "음악·사운드",
    "sourceCategory": "AI Music Generators",
    "description": "[Review](https://theresanai.com/loudly) - Combines AI music generation with a social platform for collaboration.",
    "useCase": "음악·배경음·사운드 제작",
    "tokenTip": "장르·길이·악기·구조를 항목으로 나누세요.",
    "promptStarter": "Loudly에서 음악·배경음·사운드 제작를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.loudly.com",
    "tags": [
      "음악·사운드",
      "AI Music Generators"
    ]
  },
  {
    "id": 462,
    "slug": "soundful-462",
    "name": "Soundful",
    "category": "음악·사운드",
    "sourceCategory": "AI Music Generators",
    "description": "[Review](https://theresanai.com/soundful) - High-quality, royalty-free music for content creators.",
    "useCase": "음악·배경음·사운드 제작",
    "tokenTip": "장르·길이·악기·구조를 항목으로 나누세요.",
    "promptStarter": "Soundful에서 음악·배경음·사운드 제작를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "무료/무료 티어 가능",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.soundful.com",
    "tags": [
      "음악·사운드",
      "AI Music Generators"
    ]
  },
  {
    "id": 463,
    "slug": "ai-music-generator-463",
    "name": "AI Music Generator",
    "category": "음악·사운드",
    "sourceCategory": "AI Music Generators",
    "description": "[Review](https://www.producthunt.com/products/ai-song-maker) - Effortlessly Create Songs with AI",
    "useCase": "음악·배경음·사운드 제작",
    "tokenTip": "장르·길이·악기·구조를 항목으로 나누세요.",
    "promptStarter": "AI Music Generator에서 음악·배경음·사운드 제작를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.aisongmaker.io",
    "tags": [
      "음악·사운드",
      "AI Music Generators"
    ]
  },
  {
    "id": 464,
    "slug": "aicaller-io-464",
    "name": "AICaller.io",
    "category": "음성·더빙",
    "sourceCategory": "Phone Calls",
    "description": "AICaller is a simple-to-use automated bulk calling solution that uses the latest Generative AI technology to trigger phone calls for you and get things done. It can do things like lead qualification, data gathering over",
    "useCase": "음성 생성·변환·전사",
    "tokenTip": "화자·구간·출력 형식을 먼저 고정하고 필요한 오디오 구간만 처리하세요.",
    "promptStarter": "AICaller.io에서 음성 생성·변환·전사를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "무료 체험",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://aicaller.io/?ref=v",
    "tags": [
      "음성·더빙",
      "Phone Calls"
    ]
  },
  {
    "id": 465,
    "slug": "ai-voice-agents-465",
    "name": "AI Voice Agents",
    "category": "음성·더빙",
    "sourceCategory": "Phone Calls",
    "description": "— AI Voice Agents for business calls and routine tasks, powered by DialLink cloud phone system.",
    "useCase": "음성 생성·변환·전사",
    "tokenTip": "화자·구간·출력 형식을 먼저 고정하고 필요한 오디오 구간만 처리하세요.",
    "promptStarter": "AI Voice Agents에서 음성 생성·변환·전사를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://diallink.com/",
    "tags": [
      "음성·더빙",
      "Phone Calls"
    ]
  },
  {
    "id": 466,
    "slug": "cald-ai-466",
    "name": "Cald.ai",
    "category": "음성·더빙",
    "sourceCategory": "Phone Calls",
    "description": "AI based calling agents for outbound and inbound phone calls.",
    "useCase": "음성 생성·변환·전사",
    "tokenTip": "화자·구간·출력 형식을 먼저 고정하고 필요한 오디오 구간만 처리하세요.",
    "promptStarter": "Cald.ai에서 음성 생성·변환·전사를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://cald.ai",
    "tags": [
      "음성·더빙",
      "Phone Calls"
    ]
  },
  {
    "id": 467,
    "slug": "rosie-467",
    "name": "Rosie",
    "category": "음성·더빙",
    "sourceCategory": "Phone Calls",
    "description": "AI Phone Answering Service",
    "useCase": "음성 생성·변환·전사",
    "tokenTip": "화자·구간·출력 형식을 먼저 고정하고 필요한 오디오 구간만 처리하세요.",
    "promptStarter": "Rosie에서 음성 생성·변환·전사를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://heyrosie.com/",
    "tags": [
      "음성·더빙",
      "Phone Calls"
    ]
  },
  {
    "id": 468,
    "slug": "eleven-labs-468",
    "name": "Eleven Labs",
    "category": "음성·더빙",
    "sourceCategory": "Speech",
    "description": "AI voice generator.",
    "useCase": "음성 인식·합성·전사",
    "tokenTip": "긴 원문을 한 번에 넣지 말고 화자·구간·출력 형식을 먼저 고정하세요.",
    "promptStarter": "Eleven Labs에서 음성 인식·합성·전사를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://beta.elevenlabs.io/",
    "tags": [
      "음성·더빙",
      "Speech"
    ]
  },
  {
    "id": 469,
    "slug": "wellsaid-469",
    "name": "WellSaid",
    "category": "음성·더빙",
    "sourceCategory": "Speech",
    "description": "Convert text to voice in real time.",
    "useCase": "음성 인식·합성·전사",
    "tokenTip": "긴 원문을 한 번에 넣지 말고 화자·구간·출력 형식을 먼저 고정하세요.",
    "promptStarter": "WellSaid에서 음성 인식·합성·전사를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://wellsaidlabs.com/",
    "tags": [
      "음성·더빙",
      "Speech"
    ]
  },
  {
    "id": 470,
    "slug": "play-ht-470",
    "name": "Play.ht",
    "category": "음성·더빙",
    "sourceCategory": "Speech",
    "description": "AI Voice Generator. Generate realistic Text to Speech voice over online with AI. Convert text to audio.",
    "useCase": "음성 인식·합성·전사",
    "tokenTip": "긴 원문을 한 번에 넣지 말고 화자·구간·출력 형식을 먼저 고정하세요.",
    "promptStarter": "Play.ht에서 음성 인식·합성·전사를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://play.ht/",
    "tags": [
      "음성·더빙",
      "Speech"
    ]
  },
  {
    "id": 471,
    "slug": "coqui-471",
    "name": "Coqui",
    "category": "음성·더빙",
    "sourceCategory": "Speech",
    "description": "Generative AI for Voice.",
    "useCase": "음성 인식·합성·전사",
    "tokenTip": "긴 원문을 한 번에 넣지 말고 화자·구간·출력 형식을 먼저 고정하세요.",
    "promptStarter": "Coqui에서 음성 인식·합성·전사를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://coqui.ai/",
    "tags": [
      "음성·더빙",
      "Speech"
    ]
  },
  {
    "id": 472,
    "slug": "podcast-ai-472",
    "name": "podcast.ai",
    "category": "음성·더빙",
    "sourceCategory": "Speech",
    "description": "A podcast that is entirely generated by artificial intelligence, powered by Play.ht text-to-voice AI.",
    "useCase": "음성 인식·합성·전사",
    "tokenTip": "긴 원문을 한 번에 넣지 말고 화자·구간·출력 형식을 먼저 고정하세요.",
    "promptStarter": "podcast.ai에서 음성 인식·합성·전사를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://podcast.ai/",
    "tags": [
      "음성·더빙",
      "Speech"
    ]
  },
  {
    "id": 473,
    "slug": "vall-e-x-473",
    "name": "VALL-E X",
    "category": "음성·더빙",
    "sourceCategory": "Speech",
    "description": "A cross-lingual neural codec language model for cross-lingual speech synthesis.",
    "useCase": "음성 인식·합성·전사",
    "tokenTip": "긴 원문을 한 번에 넣지 말고 화자·구간·출력 형식을 먼저 고정하세요.",
    "promptStarter": "VALL-E X에서 음성 인식·합성·전사를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://vallex-demo.github.io/",
    "tags": [
      "음성·더빙",
      "Speech"
    ]
  },
  {
    "id": 474,
    "slug": "tortoise-474",
    "name": "TorToiSe",
    "category": "음성·더빙",
    "sourceCategory": "Speech",
    "description": "A multi-voice text-to-speech system trained with an emphasis on quality. opensource",
    "useCase": "음성 인식·합성·전사",
    "tokenTip": "긴 원문을 한 번에 넣지 말고 화자·구간·출력 형식을 먼저 고정하세요.",
    "promptStarter": "TorToiSe에서 음성 인식·합성·전사를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/neonbjb/tortoise-tts",
    "tags": [
      "음성·더빙",
      "Speech"
    ]
  },
  {
    "id": 475,
    "slug": "bark-475",
    "name": "Bark",
    "category": "음성·더빙",
    "sourceCategory": "Speech",
    "description": "A transformer-based text-to-audio model. opensource",
    "useCase": "음성 인식·합성·전사",
    "tokenTip": "긴 원문을 한 번에 넣지 말고 화자·구간·출력 형식을 먼저 고정하세요.",
    "promptStarter": "Bark에서 음성 인식·합성·전사를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/suno-ai/bark",
    "tags": [
      "음성·더빙",
      "Speech"
    ]
  },
  {
    "id": 476,
    "slug": "custompod-io-476",
    "name": "CustomPod.io",
    "category": "음성·더빙",
    "sourceCategory": "Speech",
    "description": "Generate daily news podcasts only on the topics you care about.",
    "useCase": "음성 인식·합성·전사",
    "tokenTip": "긴 원문을 한 번에 넣지 말고 화자·구간·출력 형식을 먼저 고정하세요.",
    "promptStarter": "CustomPod.io에서 음성 인식·합성·전사를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://custompod.io",
    "tags": [
      "음성·더빙",
      "Speech"
    ]
  },
  {
    "id": 477,
    "slug": "ekhos-ai-477",
    "name": "EKHOS AI",
    "category": "음성·더빙",
    "sourceCategory": "Speech",
    "description": "An AI speech-to-text software with powerful proofreading features. Transcribe most audio or video files with real-time recording and transcription.",
    "useCase": "음성 인식·합성·전사",
    "tokenTip": "긴 원문을 한 번에 넣지 말고 화자·구간·출력 형식을 먼저 고정하세요.",
    "promptStarter": "EKHOS AI에서 음성 인식·합성·전사를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://ekhos.ai",
    "tags": [
      "음성·더빙",
      "Speech"
    ]
  },
  {
    "id": 478,
    "slug": "harmonai-478",
    "name": "Harmonai",
    "category": "음악·사운드",
    "sourceCategory": "Music",
    "description": "We are a community-driven organization releasing open-source generative audio tools to make music production more accessible and fun for everyone.",
    "useCase": "음악·배경음·사운드 제작",
    "tokenTip": "장르·길이·악기·구조를 짧은 항목으로 나눠 요청하세요.",
    "promptStarter": "Harmonai에서 음악·배경음·사운드 제작를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.harmonai.org/",
    "tags": [
      "음악·사운드",
      "Music"
    ]
  },
  {
    "id": 479,
    "slug": "musiclm-479",
    "name": "MusicLM",
    "category": "음악·사운드",
    "sourceCategory": "Music",
    "description": "A model by Google Research for generating high-fidelity music from text descriptions.",
    "useCase": "음악·배경음·사운드 제작",
    "tokenTip": "장르·길이·악기·구조를 짧은 항목으로 나눠 요청하세요.",
    "promptStarter": "MusicLM에서 음악·배경음·사운드 제작를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://google-research.github.io/seanet/musiclm/examples/",
    "tags": [
      "음악·사운드",
      "Music"
    ]
  },
  {
    "id": 480,
    "slug": "remusic-480",
    "name": "Remusic",
    "category": "음악·사운드",
    "sourceCategory": "Music",
    "description": "AI Music Generator and Music Learning Platform Online Free.",
    "useCase": "음악·배경음·사운드 제작",
    "tokenTip": "장르·길이·악기·구조를 짧은 항목으로 나눠 요청하세요.",
    "promptStarter": "Remusic에서 음악·배경음·사운드 제작를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "무료/무료 티어 가능",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://remusic.ai/en",
    "tags": [
      "음악·사운드",
      "Music"
    ]
  },
  {
    "id": 481,
    "slug": "taranify-481",
    "name": "Taranify",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Using AI, Taranify finds you Spotify playlists, Netflix shows, Books & Foods you'd enjoy when you don't exactly know what you want.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Taranify에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.taranify.com",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 482,
    "slug": "diagram-482",
    "name": "Diagram",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Magical new ways to design products.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Diagram에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://diagram.com/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 483,
    "slug": "promptbase-483",
    "name": "PromptBase",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "A marketplace for buying and selling quality prompts for DALL·E, GPT-3, Midjourney, Stable Diffusion.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "PromptBase에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://promptbase.com/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 484,
    "slug": "this-image-does-not-exist-484",
    "name": "This Image Does Not Exist",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Test your ability to tell if an image is human or computer generated.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "This Image Does Not Exist에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://thisimagedoesnotexist.com/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 485,
    "slug": "have-i-been-trained-485",
    "name": "Have I Been Trained?",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Check if your image has been used to train popular AI art models.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Have I Been Trained?에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://haveibeentrained.com/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 486,
    "slug": "ai-dungeon-486",
    "name": "AI Dungeon",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "A text-based adventure-story game you direct (and star in) while the AI brings it to life.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "AI Dungeon에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://aidungeon.io/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 487,
    "slug": "clickable-487",
    "name": "Clickable",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Generate ads in seconds with AI. Beautiful, brand-consistent, and highly converting ads for all marketing channels.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Clickable에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.clickable.so/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 488,
    "slug": "scale-spellbook-488",
    "name": "Scale Spellbook",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Build, compare, and deploy large language model apps with Scale Spellbook.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Scale Spellbook에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://scale.com/spellbook",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 489,
    "slug": "scenario-489",
    "name": "Scenario",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "AI-generated gaming assets.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Scenario에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.scenario.com/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 490,
    "slug": "teleprompter-490",
    "name": "Teleprompter",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "An on-device AI for your meetings that listens to you and makes charismatic quote suggestions.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Teleprompter에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/danielgross/teleprompter",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 491,
    "slug": "finchat-491",
    "name": "FinChat",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Using AI, FinChat generates answers to questions about public companies and investors.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "FinChat에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://finchat.io/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 492,
    "slug": "petals-492",
    "name": "Petals",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "BitTorrent style platform for running AI models in a distributed way.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Petals에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/bigscience-workshop/petals",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 493,
    "slug": "shotstack-workflows-493",
    "name": "Shotstack Workflows",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "No-code, automation workflow tool for building Generative AI media applications.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Shotstack Workflows에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://shotstack.io/product/workflows/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 494,
    "slug": "aispect-494",
    "name": "Aispect",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "New way to experience events.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Aispect에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://aispect.io/?ref=mahseema-awesome-ai-tools",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 495,
    "slug": "presspulse-ai-495",
    "name": "PressPulse AI",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Get personalized media coverage leads every morning.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "PressPulse AI에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.presspulse.ai/?ref=mahseema-awesome-ai-tools",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 496,
    "slug": "gummysearch-496",
    "name": "GummySearch",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "AI-based customer research via Reddit. Discover problems to solve, sentiment on current solutions, and people who want to buy your product.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "GummySearch에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://gummysearch.com/?ref=mahseema-awesome-ai-tools",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 497,
    "slug": "taplio-497",
    "name": "Taplio",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "The all-in-one, AI-powered LinkedIn tool.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Taplio에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://taplio.com/?ref=mahseema-awesome-ai-tools",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 498,
    "slug": "promptpal-498",
    "name": "PromptPal",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Search for prompts and bots, then use them with your favorite AI. All in one place.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "PromptPal에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://promptpal.net",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 499,
    "slug": "fairytailai-499",
    "name": "FairyTailAI",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Personalized bedtime story generator",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "FairyTailAI에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://fairytailai.com/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 500,
    "slug": "myriad-500",
    "name": "Myriad",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Scale your content creation and get the best writing from ChatGPT, Copilot, and other AIs. Build and fine-tune prompts for any kind of content, from long-form to ads and email.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Myriad에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "무료/무료 티어 가능",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.namepepper.com/free-tools/ai-content-prompt-tool",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 501,
    "slug": "gradgpt-501",
    "name": "GradGPT",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "AI tools to simplify college applications. Review applications, draft essays, find universities and requirements and more.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "GradGPT에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.gradgpt.com/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 502,
    "slug": "code-to-flow-502",
    "name": "Code to Flow",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Visualize, Analyze, and Understand Your Code flow. Turn Code into Interactive Flowcharts with AI. Simplify Complex Logic Instantly.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Code to Flow에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://codetoflow.com",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 503,
    "slug": "ai-flow-503",
    "name": "AI-Flow",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Connect multiple AI models easily.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "AI-Flow에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://ai-flow.net/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 504,
    "slug": "architecture-helper-504",
    "name": "Architecture Helper",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Analyze any building architecture, and generate your own custom styles, in seconds.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Architecture Helper에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://architecturehelper.com",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 505,
    "slug": "vocalreplica-505",
    "name": "VocalReplica",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "AI-Powered Vocal and Instrumental Isolation for Your Favorite Tracks",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "VocalReplica에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://vocalreplica.com/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 506,
    "slug": "ai-wedding-toast-506",
    "name": "AI Wedding Toast",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Generate a personalized wedding speech with AI",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "AI Wedding Toast에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://aiweddingtoast.com",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 507,
    "slug": "interviews-chat-507",
    "name": "Interviews Chat",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Your Personal Interview Prep & Copilot",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Interviews Chat에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.interviews.chat/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 508,
    "slug": "context-data-508",
    "name": "Context Data",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Data Processing & ETL infrastructure for Generative AI applications",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Context Data에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://contextdata.ai/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 509,
    "slug": "ezjobs-509",
    "name": "ezJobs",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Automated job search and applications",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "ezJobs에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.getezjobs.com/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 510,
    "slug": "compass-510",
    "name": "Compass",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "AI driven answers to SaaS research questions",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Compass에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.getwhys.io/compass",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 511,
    "slug": "adon-ai-511",
    "name": "Adon AI",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "CV screening automation and blind CV generator, AI backed ATS",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Adon AI에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://adon-web.awakast.com/en/recruiter/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 512,
    "slug": "persuva-512",
    "name": "Persuva",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Persuva is the AI-driven platform to create persuasive, high-converting ad copy at scale.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Persuva에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://persuva.ai",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 513,
    "slug": "interview-solver-513",
    "name": "Interview Solver",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Ace your live coding interviews with our AI Copilot",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Interview Solver에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://interviewsolver.com",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 514,
    "slug": "socialsonic-514",
    "name": "Socialsonic",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "AI LinkedIn Coach: Personalized content, trends & scheduling.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Socialsonic에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://socialsonic.com",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 515,
    "slug": "napkin-515",
    "name": "Napkin",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Napkin turns your text into visuals so sharing your ideas is quick and effective.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Napkin에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.napkin.ai/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 516,
    "slug": "exam-samurai-516",
    "name": "Exam Samurai",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "AI Exam Generator",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Exam Samurai에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.examsamur.ai/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 517,
    "slug": "ai-watermark-remover-517",
    "name": "AI Watermark Remover",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Remove watermarks from images and videos.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "AI Watermark Remover에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://aiwatermarkremover.io/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 518,
    "slug": "aisaver-518",
    "name": "AISaver",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Collection of AI Powered Video and Photo Tools",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "AISaver에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://aisaver.io",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 519,
    "slug": "harbor-519",
    "name": "Harbor",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "run LLM backends, APIs, frontends, and services with one command",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Harbor에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/av/harbor",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 520,
    "slug": "langmagic-520",
    "name": "LangMagic",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Learn languages from native content.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "LangMagic에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://easytolearn.io",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 521,
    "slug": "fynk-521",
    "name": "fynk",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "AI powered contract management software",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "fynk에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://fynk.com/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 522,
    "slug": "looksmax-ai-522",
    "name": "LooksMax AI",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Find out how hot you are using AI",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "LooksMax AI에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://looksmax.ai",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 523,
    "slug": "podify-io-523",
    "name": "Podify.io",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Leverage AI and community to grow on LinkedIn",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Podify.io에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://podify.io",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 524,
    "slug": "resumedive-524",
    "name": "ResumeDive",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "A resume boosting service using AI",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "ResumeDive에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://resumedive.com",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 525,
    "slug": "luthor-525",
    "name": "Luthor",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Programmatic content marketing at scale",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Luthor에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://luthor.ai/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 526,
    "slug": "hyperbrowser-526",
    "name": "Hyperbrowser",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Browser infrastructure and automation for AI Agents and Apps with advanced features like proxies, captcha solving, and session recording.",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Hyperbrowser에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://hyperbrowser.ai/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 527,
    "slug": "bricks-527",
    "name": "Bricks",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "The AI Spreadsheet We've All Been Waiting For",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Bricks에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.thebricks.com/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 528,
    "slug": "mindstudio-528",
    "name": "MindStudio",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "— Build powerful AI Agents for yourself, your team, or your enterprise. Powerful, easy to use, visual builder—no coding required, but extensible with code if you need it. Over 100 templates for all kinds of business and",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "MindStudio에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://mindstudio.ai/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 529,
    "slug": "daruy-529",
    "name": "Daruy",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Personalized Gift Idea Generator",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Daruy에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://daruy.space/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 530,
    "slug": "promptly-530",
    "name": "Promptly",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "Discover, create and share powerful prompts",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Promptly에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://searchpromptly.com/",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 531,
    "slug": "melies-531",
    "name": "Melies",
    "category": "AI 도구",
    "sourceCategory": "Other",
    "description": "AI Filmmaking software",
    "useCase": "Other 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Melies에서 Other 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://melies.co",
    "tags": [
      "AI 도구",
      "Other"
    ]
  },
  {
    "id": 532,
    "slug": "learn-prompting-532",
    "name": "Learn Prompting",
    "category": "AI 도구",
    "sourceCategory": "Learning resources",
    "description": "A free, open-source course on communicating with artificial intelligence.",
    "useCase": "Learning resources 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Learn Prompting에서 Learning resources 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "무료/무료 티어 가능",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://learnprompting.org/",
    "tags": [
      "AI 도구",
      "Learning resources"
    ]
  },
  {
    "id": 533,
    "slug": "chatgpt-prompt-engineering-for-developers-533",
    "name": "ChatGPT prompt engineering for developers",
    "category": "AI 도구",
    "sourceCategory": "Learning resources",
    "description": "A short course by Isa Fulford (OpenAI) and Andrew Ng (DeepLearning.AI).",
    "useCase": "Learning resources 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "ChatGPT prompt engineering for developers에서 Learning resources 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/",
    "tags": [
      "AI 도구",
      "Learning resources"
    ]
  },
  {
    "id": 534,
    "slug": "robert-miles-ai-safety-534",
    "name": "Robert Miles AI Safety",
    "category": "AI 도구",
    "sourceCategory": "Learning resources",
    "description": "Youtube channel about AI safety",
    "useCase": "Learning resources 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Robert Miles AI Safety에서 Learning resources 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.youtube.com/@RobertMilesAI",
    "tags": [
      "AI 도구",
      "Learning resources"
    ]
  },
  {
    "id": 535,
    "slug": "geoffrey-hinton-s-neural-networks-for-machine-learning-535",
    "name": "Geoffrey Hinton’s Neural Networks For Machine Learning",
    "category": "AI 도구",
    "sourceCategory": "Deep Learning",
    "description": "it is now removed from cousrea but still check these list",
    "useCase": "Deep Learning 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Geoffrey Hinton’s Neural Networks For Machine Learning에서 Deep Learning 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://medium.com/kaggle-blog",
    "tags": [
      "AI 도구",
      "Deep Learning"
    ]
  },
  {
    "id": 536,
    "slug": "jeremy-howard-s-fast-ai-data-institute-certificates-536",
    "name": "Jeremy Howard’s Fast.ai & Data Institute Certificates",
    "category": "AI 도구",
    "sourceCategory": "Deep Learning",
    "description": "The in-person certificate courses are not free, but all of the content is available on Fast.ai as MOOCs.",
    "useCase": "Deep Learning 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "Jeremy Howard’s Fast.ai & Data Institute Certificates에서 Deep Learning 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "무료/무료 티어 가능",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.fast.ai/",
    "tags": [
      "AI 도구",
      "Deep Learning"
    ]
  },
  {
    "id": 537,
    "slug": "tensorflow-537",
    "name": "tensorflow",
    "category": "AI 도구",
    "sourceCategory": "Deep Learning",
    "description": "all important notes to learn pytorch with all the examples in google colab",
    "useCase": "Deep Learning 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "tensorflow에서 Deep Learning 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/pratham5368/Tecnologies-I-Learn/tree/main/31-pytorch",
    "tags": [
      "AI 도구",
      "Deep Learning"
    ]
  },
  {
    "id": 538,
    "slug": "nvidia-omniverse-ai-animal-explorer-extension-538",
    "name": "NVIDIA Omniverse AI Animal Explorer Extension",
    "category": "AI 도구",
    "sourceCategory": "NVIDIA Platform Extensions",
    "description": "AI Animal Explorer is an Omniverse extension that enables creators to quickly prototype unique 3D animal meshes.",
    "useCase": "NVIDIA Platform Extensions 분야의 AI 도구·서비스",
    "tokenTip": "목표·입력·출력 형식을 짧게 고정하고 필요한 정보만 전달하세요.",
    "promptStarter": "NVIDIA Omniverse AI Animal Explorer Extension에서 NVIDIA Platform Extensions 분야의 AI 도구·서비스를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · mahseema/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://docs.omniverse.nvidia.com/extensions/latest/ext_animal-explorer.html#installation",
    "tags": [
      "AI 도구",
      "NVIDIA Platform Extensions"
    ]
  },
  {
    "id": 539,
    "slug": "insta-text-539",
    "name": "Insta|text",
    "category": "콘텐츠·마케팅",
    "sourceCategory": "Copy Writing",
    "description": "Improves your writing style to sound more professional, casual or whatever you want to achieve.",
    "useCase": "카피·영업·SNS·고객 커뮤니케이션",
    "tokenTip": "브랜드 규칙을 템플릿으로 고정하고 매 요청에 원문 전체를 반복하지 마세요.",
    "promptStarter": "Insta|text에서 카피·영업·SNS·고객 커뮤니케이션를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · nanogiants/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://instatext.io/",
    "tags": [
      "콘텐츠·마케팅",
      "Copy Writing"
    ]
  },
  {
    "id": 540,
    "slug": "seamless-540",
    "name": "Seamless",
    "category": "콘텐츠·마케팅",
    "sourceCategory": "Lead Generation",
    "description": "Connect directly with ideal customers so you can build pipeline, shorten your sales cycle, and close more deals.",
    "useCase": "카피·영업·SNS·고객 커뮤니케이션",
    "tokenTip": "브랜드 규칙을 템플릿으로 고정하고 매 요청에 원문 전체를 반복하지 마세요.",
    "promptStarter": "Seamless에서 카피·영업·SNS·고객 커뮤니케이션를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · nanogiants/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.seamless.ai/",
    "tags": [
      "콘텐츠·마케팅",
      "Lead Generation"
    ]
  },
  {
    "id": 541,
    "slug": "codenet-541",
    "name": "CodeNet",
    "category": "개발·코딩",
    "sourceCategory": "Code Assistant",
    "description": "AI system by IBM that supports the software development process by offering intelligent code search, summarization, completion and code-to-code translation",
    "useCase": "코딩 보조·자동완성",
    "tokenTip": "주석과 함수 시그니처를 먼저 확정해 반복 생성량을 줄이세요.",
    "promptStarter": "CodeNet에서 코딩 보조·자동완성를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · nanogiants/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/IBM/Project_CodeNet",
    "tags": [
      "개발·코딩",
      "Code Assistant"
    ]
  },
  {
    "id": 542,
    "slug": "codex-542",
    "name": "Codex",
    "category": "개발·코딩",
    "sourceCategory": "Code Assistant",
    "description": "AI system by Open AI that tranlsates natural language to code",
    "useCase": "코딩 보조·자동완성",
    "tokenTip": "주석과 함수 시그니처를 먼저 확정해 반복 생성량을 줄이세요.",
    "promptStarter": "Codex에서 코딩 보조·자동완성를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · nanogiants/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://openai.com/blog/openai-codex/",
    "tags": [
      "개발·코딩",
      "Code Assistant"
    ]
  },
  {
    "id": 543,
    "slug": "safurai-543",
    "name": "Safurai",
    "category": "개발·코딩",
    "sourceCategory": "Code Assistant",
    "description": "Safurai is the AI Code Assistant that saves you time in changing, optimizing, and searching code.",
    "useCase": "코딩 보조·자동완성",
    "tokenTip": "주석과 함수 시그니처를 먼저 확정해 반복 생성량을 줄이세요.",
    "promptStarter": "Safurai에서 코딩 보조·자동완성를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · nanogiants/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.safurai.com/",
    "tags": [
      "개발·코딩",
      "Code Assistant"
    ]
  },
  {
    "id": 544,
    "slug": "aihelperbot-544",
    "name": "AIHelperBot",
    "category": "개발·코딩",
    "sourceCategory": "Code Assistant",
    "description": "Build SQL queries using AI",
    "useCase": "코딩 보조·자동완성",
    "tokenTip": "주석과 함수 시그니처를 먼저 확정해 반복 생성량을 줄이세요.",
    "promptStarter": "AIHelperBot에서 코딩 보조·자동완성를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · nanogiants/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://aihelperbot.com/",
    "tags": [
      "개발·코딩",
      "Code Assistant"
    ]
  },
  {
    "id": 545,
    "slug": "gitguardian-545",
    "name": "Gitguardian",
    "category": "개발·코딩",
    "sourceCategory": "Code checking",
    "description": "A tool that monitors public and private repositories for leaked API keys, database credentials, certificates and other security issues.",
    "useCase": "코드 검사·품질 확인",
    "tokenTip": "실패 로그의 핵심 구간과 기대 동작만 전달하세요.",
    "promptStarter": "Gitguardian에서 코드 검사·품질 확인를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · nanogiants/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.gitguardian.com/",
    "tags": [
      "개발·코딩",
      "Code checking"
    ]
  },
  {
    "id": 546,
    "slug": "codota-546",
    "name": "Codota",
    "category": "개발·코딩",
    "sourceCategory": "Code completion",
    "description": "Adds better code completion to various IDEs (e.g. VS Code, Sublime, IntelliJ). Currently focused on Java and Kotlin.",
    "useCase": "코드 자동완성",
    "tokenTip": "현재 파일과 인접 타입만 열어두고 전체 프로젝트 컨텍스트는 필요할 때만 사용하세요.",
    "promptStarter": "Codota에서 코드 자동완성를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · nanogiants/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.codota.com/",
    "tags": [
      "개발·코딩",
      "Code completion"
    ]
  },
  {
    "id": 547,
    "slug": "kite-547",
    "name": "Kite",
    "category": "개발·코딩",
    "sourceCategory": "Code completion",
    "description": "Adds better code completion to various IDEs (e.g. VS Code, Sublime, Jupyter)",
    "useCase": "코드 자동완성",
    "tokenTip": "현재 파일과 인접 타입만 열어두고 전체 프로젝트 컨텍스트는 필요할 때만 사용하세요.",
    "promptStarter": "Kite에서 코드 자동완성를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · nanogiants/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://www.kite.com/",
    "tags": [
      "개발·코딩",
      "Code completion"
    ]
  },
  {
    "id": 548,
    "slug": "sourcegraph-548",
    "name": "Sourcegraph",
    "category": "리서치·문서",
    "sourceCategory": "Searching",
    "description": "AI powered search engine for repositories. Allows not only structured but also contextual search, which is provided by NLP",
    "useCase": "검색·문서·회의·대화 정리",
    "tokenTip": "질문 범위와 출력 필드를 제한해 불필요한 결과와 반복 요약을 줄이세요.",
    "promptStarter": "Sourcegraph에서 검색·문서·회의·대화 정리를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · nanogiants/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://sourcegraph.com/",
    "tags": [
      "리서치·문서",
      "Searching"
    ]
  },
  {
    "id": 549,
    "slug": "helicone-ai-549",
    "name": "Helicone AI",
    "category": "개발·코딩",
    "sourceCategory": "Building AI apps",
    "description": "Open-source LLM observability platform for logging, monitoring, and debugging AI applications.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Helicone AI에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · nanogiants/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/Helicone/helicone",
    "tags": [
      "개발·코딩",
      "Building AI apps"
    ]
  },
  {
    "id": 550,
    "slug": "dify-550",
    "name": "Dify",
    "category": "개발·코딩",
    "sourceCategory": "Building AI apps",
    "description": "One API for plugins and datasets, one interface for prompt engineering and visual operation, all for creating powerful AI applications.",
    "useCase": "개발·테스트·배포 보조",
    "tokenTip": "전체 저장소 대신 관련 파일·에러·완료 조건만 제공하세요.",
    "promptStarter": "Dify에서 개발·테스트·배포 보조를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "GitHub · nanogiants/awesome-ai-tools",
    "verifiedAt": "2026-08-20",
    "url": "https://github.com/langgenius/dify",
    "tags": [
      "개발·코딩",
      "Building AI apps"
    ]
  },
  {
    "id": 551,
    "slug": "turncage-551",
    "name": "TurnCage",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "TurnCage Rated 5 out of 5 ( 1 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "TurnCage에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/turncage",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 552,
    "slug": "hostinger-ai-website-builder-552",
    "name": "Hostinger AI Website Builder",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Hostinger AI Website Builder Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Hostinger AI Website Builder에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/hostinger",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 553,
    "slug": "durable-co-553",
    "name": "Durable.co",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Durable.co Rated 4.333333333333333 out of 5 ( 9 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Durable.co에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/durable-co",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 554,
    "slug": "wix-adi-554",
    "name": "Wix ADI",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Wix ADI Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Wix ADI에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/wix-adi",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 555,
    "slug": "hubspot-aeo-555",
    "name": "HubSpot AEO",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "HubSpot AEO Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "HubSpot AEO에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/hubspot-aeo",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 556,
    "slug": "hootsuite-556",
    "name": "Hootsuite",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Hootsuite Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Hootsuite에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/hootsuite",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 557,
    "slug": "frase-557",
    "name": "Frase",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Frase Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Frase에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/frase",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 558,
    "slug": "hubspot-558",
    "name": "HubSpot",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "HubSpot Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "HubSpot에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/hubspot",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 559,
    "slug": "lido-559",
    "name": "Lido",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Lido Rated 5 out of 5 ( 6 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Lido에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/lido",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 560,
    "slug": "vic-ai-560",
    "name": "Vic.ai",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Vic.ai Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Vic.ai에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/vic-ai",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 561,
    "slug": "booke-ai-561",
    "name": "Booke AI",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Booke AI Rated 3 out of 5 ( 2 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Booke AI에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/booke-ai",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 562,
    "slug": "anaplan-562",
    "name": "Anaplan",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Anaplan Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Anaplan에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/anaplan",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 563,
    "slug": "flash-563",
    "name": "Flash",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Flash Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Flash에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/flash",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 564,
    "slug": "clickup-564",
    "name": "ClickUp",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "ClickUp Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "ClickUp에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/clickup",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 565,
    "slug": "asana-565",
    "name": "Asana",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Asana Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Asana에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/asana",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 566,
    "slug": "trello-566",
    "name": "Trello",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Trello Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Trello에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/trello",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 567,
    "slug": "enso-567",
    "name": "enso",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "enso Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "enso에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/enso",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 568,
    "slug": "sprout-social-568",
    "name": "Sprout Social",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Sprout Social Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Sprout Social에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/sprout-social",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 569,
    "slug": "brandwatch-569",
    "name": "Brandwatch",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Brandwatch Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Brandwatch에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/brandwatch",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 570,
    "slug": "buffer-570",
    "name": "Buffer",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Buffer Rated 5 out of 5 ( 1 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Buffer에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/buffer",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 571,
    "slug": "unreal-speech-571",
    "name": "Unreal Speech",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Unreal Speech Rated 5 out of 5 ( 1 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Unreal Speech에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/unreal-speech",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 572,
    "slug": "grammarly-572",
    "name": "Grammarly",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Grammarly Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Grammarly에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/grammarly",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 573,
    "slug": "duolingo-573",
    "name": "Duolingo",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Duolingo Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Duolingo에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/duolingo",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 574,
    "slug": "aidelly-574",
    "name": "Aidelly",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Aidelly Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Aidelly에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/aidelly",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 575,
    "slug": "drift-575",
    "name": "Drift",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Drift Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Drift에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/drift",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 576,
    "slug": "visenze-576",
    "name": "ViSenze",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "ViSenze Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "ViSenze에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/visenze",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 577,
    "slug": "algolia-577",
    "name": "Algolia",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Algolia Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Algolia에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/algolia",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 578,
    "slug": "semrush-one-578",
    "name": "Semrush One",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Semrush One Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Semrush One에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/semrush-one",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 579,
    "slug": "marketmuse-579",
    "name": "MarketMuse",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "MarketMuse Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "MarketMuse에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/marketmuse",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 580,
    "slug": "clearscope-580",
    "name": "Clearscope",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Clearscope Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Clearscope에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/clearscope",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 581,
    "slug": "customgpt-ai-581",
    "name": "CustomGPT.ai",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "CustomGPT.ai Rated 5 out of 5 ( 10 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "CustomGPT.ai에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/customgpt",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 582,
    "slug": "intercom-582",
    "name": "Intercom",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Intercom Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Intercom에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/intercom",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 583,
    "slug": "ada-583",
    "name": "Ada",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Ada Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Ada에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/ada",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 584,
    "slug": "zendesk-584",
    "name": "Zendesk",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Zendesk Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Zendesk에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/zendesk",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 585,
    "slug": "heymilo-ai-585",
    "name": "HeyMilo AI",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "HeyMilo AI Rated 5 out of 5 ( 2 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "HeyMilo AI에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/heymilo",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 586,
    "slug": "eightfold-586",
    "name": "Eightfold",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Eightfold Rated 5 out of 5 ( 1 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Eightfold에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/eightfold",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 587,
    "slug": "hirevue-587",
    "name": "Hirevue",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Hirevue Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Hirevue에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/hirevue",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 588,
    "slug": "paradox-588",
    "name": "Paradox",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Paradox Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Paradox에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/paradox",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 589,
    "slug": "splutter-ai-589",
    "name": "Splutter AI",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Splutter AI Rated 5 out of 5 ( 1 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Splutter AI에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/splutter-ai",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 590,
    "slug": "gong-590",
    "name": "Gong",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Gong Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Gong에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/gong",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 591,
    "slug": "chorus-591",
    "name": "Chorus",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Chorus Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Chorus에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/chorus",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 592,
    "slug": "outreach-592",
    "name": "Outreach",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Outreach Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Outreach에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/outreach",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 593,
    "slug": "marketalerts-ai-593",
    "name": "MarketAlerts.ai",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "MarketAlerts.ai Rated 5 out of 5 ( 1 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "MarketAlerts.ai에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/marketalerts-ai",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 594,
    "slug": "trade-ideas-594",
    "name": "Trade Ideas",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Trade Ideas Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Trade Ideas에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/trade-ideas",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 595,
    "slug": "danelfin-595",
    "name": "Danelfin",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Danelfin Rated 5 out of 5 ( 1 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Danelfin에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/danelfin",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 596,
    "slug": "trendspider-596",
    "name": "Trendspider",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Trendspider Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Trendspider에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/trendspider",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 597,
    "slug": "cimphony-597",
    "name": "Cimphony",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Cimphony Rated 5 out of 5 ( 1 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Cimphony에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/cimphony",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 598,
    "slug": "casetext-598",
    "name": "Casetext",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Casetext Rated 5 out of 5 ( 1 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Casetext에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/casetext",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 599,
    "slug": "harvey-599",
    "name": "Harvey",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Harvey Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Harvey에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/harvey",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 600,
    "slug": "relativity-600",
    "name": "Relativity",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Relativity Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Relativity에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/relativity",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 601,
    "slug": "sobrief-601",
    "name": "SoBrief",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "SoBrief Rated 5 out of 5 ( 1 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "SoBrief에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/sobrief",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 602,
    "slug": "turnitin-602",
    "name": "Turnitin",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Turnitin Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Turnitin에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/turnitin",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 603,
    "slug": "loom-603",
    "name": "Loom",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Loom Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Loom에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/loom",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 604,
    "slug": "quizlet-604",
    "name": "Quizlet",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Quizlet Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Quizlet에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/quizlet",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 605,
    "slug": "stratup-ai-605",
    "name": "Stratup.ai",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Stratup.ai Rated 5 out of 5 ( 3 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Stratup.ai에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/stratupai",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 606,
    "slug": "gitmind-ai-606",
    "name": "GitMind AI",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "GitMind AI Rated 4 out of 5 ( 2 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "GitMind AI에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/gitmind-ai",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 607,
    "slug": "redactable-607",
    "name": "Redactable",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Redactable Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Redactable에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/redactable",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 608,
    "slug": "smart-targeting-608",
    "name": "Smart Targeting",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Smart Targeting Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Smart Targeting에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/smart-targeting",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 609,
    "slug": "housecanary-609",
    "name": "HouseCanary",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "HouseCanary Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "HouseCanary에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/housecanary",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 610,
    "slug": "offrs-610",
    "name": "Offrs",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Offrs Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Offrs에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/offrs",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 611,
    "slug": "magictrips-611",
    "name": "MagicTrips",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "MagicTrips Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "MagicTrips에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/magictrips",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 612,
    "slug": "monica-612",
    "name": "Monica",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Monica Rated 3.857142857142857 out of 5 ( 7 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Monica에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/monica",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 613,
    "slug": "you-613",
    "name": "You",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "You Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "You에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/you",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 614,
    "slug": "jigso-614",
    "name": "Jigso",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Jigso Rated 4.6 out of 5 ( 5 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Jigso에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/jigso",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 615,
    "slug": "julius-ai-615",
    "name": "Julius AI",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Julius AI Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Julius AI에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/julius",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 616,
    "slug": "scite-616",
    "name": "Scite",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Scite Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Scite에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/scite",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 617,
    "slug": "gigasheet-617",
    "name": "Gigasheet",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Gigasheet Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Gigasheet에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/gigasheet",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 618,
    "slug": "rows-ai-618",
    "name": "Rows AI",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Rows AI Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Rows AI에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/rows-ai",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 619,
    "slug": "zoho-sheet-619",
    "name": "Zoho Sheet",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Zoho Sheet Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Zoho Sheet에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/zoho-sheet",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 620,
    "slug": "deepl-translator-620",
    "name": "DeepL Translator",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "DeepL Translator Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "DeepL Translator에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/deepl-translator",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 621,
    "slug": "google-translate-621",
    "name": "Google Translate",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Google Translate Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Google Translate에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/google-translate",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 622,
    "slug": "microsoft-translator-622",
    "name": "Microsoft Translator",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Microsoft Translator Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Microsoft Translator에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/microsoft-translator",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 623,
    "slug": "plus-ai-623",
    "name": "Plus AI",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Plus AI Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Plus AI에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/plusdocs",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 624,
    "slug": "simplified-624",
    "name": "Simplified",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Simplified Rated 5 out of 5 ( 1 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Simplified에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/simplified",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 625,
    "slug": "powermode-ai-625",
    "name": "PowerMode AI",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "PowerMode AI Rated 3 out of 5 ( 3 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "PowerMode AI에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/powermode-ai",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 626,
    "slug": "storyd-626",
    "name": "STORYD",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "STORYD Rated 4.75 out of 5 ( 4 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "STORYD에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/storyd",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 627,
    "slug": "fellow-627",
    "name": "Fellow",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Fellow Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Fellow에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/fellow",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 628,
    "slug": "superhuman-628",
    "name": "Superhuman",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Superhuman Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Superhuman에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/superhuman",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 629,
    "slug": "shortwave-629",
    "name": "Shortwave",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Shortwave Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Shortwave에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/shortwave",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 630,
    "slug": "quicksearchplus-630",
    "name": "QuickSearchPlus",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "QuickSearchPlus Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "QuickSearchPlus에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/quicksearchplus",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 631,
    "slug": "komo-search-631",
    "name": "Komo Search",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Komo Search Rated 5 out of 5 ( 2 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Komo Search에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/komo-search",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 632,
    "slug": "microsoft-bing-632",
    "name": "Microsoft Bing",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Microsoft Bing Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Microsoft Bing에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/microsoft-bing",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 633,
    "slug": "qodo-633",
    "name": "Qodo",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Qodo Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Qodo에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/qodo",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 634,
    "slug": "windsurf-634",
    "name": "Windsurf",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Windsurf Rated 4.636363636363637 out of 5 ( 11 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Windsurf에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/windsurf",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 635,
    "slug": "rok-solution-635",
    "name": "ROK Solution",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "ROK Solution Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "ROK Solution에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/rok-solution",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 636,
    "slug": "amazon-sage-maker-636",
    "name": "Amazon Sage Maker",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Amazon Sage Maker Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Amazon Sage Maker에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/amazon-sage-maker",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 637,
    "slug": "akkio-637",
    "name": "Akkio",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Akkio Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Akkio에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/akkio",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 638,
    "slug": "browse-ai-638",
    "name": "Browse AI",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Browse AI Rated 4.5 out of 5 ( 4 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Browse AI에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/browse-ai",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 639,
    "slug": "insightbase-639",
    "name": "InsightBase",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "InsightBase Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "InsightBase에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/insightbase",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 640,
    "slug": "blaze-sql-640",
    "name": "Blaze SQL",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Blaze SQL Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Blaze SQL에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/blaze-sql",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 641,
    "slug": "oss-insight-641",
    "name": "OSS Insight",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "OSS Insight Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "OSS Insight에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/oss-insight",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 642,
    "slug": "adobe-firefly-642",
    "name": "Adobe Firefly",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Adobe Firefly Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Adobe Firefly에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/adobe-firefly",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 643,
    "slug": "jasper-art-643",
    "name": "Jasper Art",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Jasper Art Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Jasper Art에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/jasper-art",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 644,
    "slug": "midjourney-644",
    "name": "Midjourney",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Midjourney Rated 4.25 out of 5 ( 4 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Midjourney에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/midjourney",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 645,
    "slug": "looka-645",
    "name": "Looka",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Looka Rated 4 out of 5 ( 6 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Looka에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/looka",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 646,
    "slug": "generor-646",
    "name": "Generor",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Generor Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Generor에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/generor",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 647,
    "slug": "nightcafe-studio-647",
    "name": "NightCafe Studio",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "NightCafe Studio Rated 5 out of 5 ( 1 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "NightCafe Studio에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/nightcafe-studio",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 648,
    "slug": "pizi-648",
    "name": "Pizi",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Pizi Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Pizi에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/pizi",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 649,
    "slug": "adobe-photoshop-649",
    "name": "Adobe Photoshop",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Adobe Photoshop Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Adobe Photoshop에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/adobe-photoshop",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 650,
    "slug": "luminar-neo-650",
    "name": "Luminar Neo",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Luminar Neo Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Luminar Neo에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/luminar-neo",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 651,
    "slug": "topaz-labs-651",
    "name": "Topaz Labs",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Topaz Labs Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Topaz Labs에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/topaz-labs",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 652,
    "slug": "1forall-652",
    "name": "1forAll",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "1forAll Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "1forAll에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/1forall",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 653,
    "slug": "dall-e-3-653",
    "name": "DALL·E 3",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "DALL·E 3 Rated 0 out of 5 ( 0 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "DALL·E 3에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/dall-e-3",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  },
  {
    "id": 654,
    "slug": "stable-diffusion-654",
    "name": "Stable Diffusion",
    "category": "업무·자동화",
    "sourceCategory": "Futurepedia AI tools",
    "description": "Stable Diffusion Rated 5 out of 5 ( 1 )",
    "useCase": "업무 자동화·앱 연결·에이전트 작업",
    "tokenTip": "트리거·입력 필드·액션·예외만 정의하고 불필요한 배경 설명은 줄이세요.",
    "promptStarter": "Stable Diffusion에서 업무 자동화·앱 연결·에이전트 작업를 진행해줘. 목표: [원하는 결과]. 입력: [자료]. 출력: [형식]. 불확실한 정보는 추측하지 말고 확인 질문으로 남겨줘.",
    "pricing": "확인 필요",
    "source": "Futurepedia public directory",
    "verifiedAt": "2026-08-20",
    "url": "https://www.futurepedia.io/tool/stable-diffusion",
    "tags": [
      "업무·자동화",
      "Futurepedia AI tools"
    ]
  }
];

const verifiedPricingUrls: Record<string, string> = { "Jamie AI": "https://www.meetjamie.ai/pricing", "Tactiq": "https://tactiq.io/pricing", "Fathom": "https://fathom.video/pricing", "Dzine AI": "https://www.dzine.ai/pricing", "Captions": "https://www.captions.ai/pricing", "FeedHive": "https://www.feedhive.com/pricing", "Vizard": "https://vizard.ai/pricing", "QuillBot": "https://quillbot.com/premium" };
const aimattersDirectoryTools: DirectoryTool[] = aimattersTools.map((tool, index) => ({
  id: baseDirectoryTools.length + index + 1,
  slug: tool.slug,
  name: tool.name,
  category: tool.category,
  sourceCategory: "AimAtters AI Tool DB",
  description: tool.description,
  useCase: tool.useCase,
  tokenTip: tool.tokenTip,
  promptStarter: tool.promptStarter,
  pricing: tool.pricing,
  source: tool.source,
  verifiedAt: tool.verifiedAt,
  url: tool.url,
  pricingUrl: verifiedPricingUrls[tool.name],
  tags: tool.tags,
}));

const existingDirectoryTools: DirectoryTool[] = [...baseDirectoryTools, ...aimattersDirectoryTools];
const googleLabsByName = new Map(googleLabsTools.map((tool) => [tool.name, tool]));
const mergedExistingDirectoryTools = existingDirectoryTools.map((tool) => {
  const update = googleLabsByName.get(tool.name);
  return update ? { ...tool, ...update, id: tool.id } : tool;
});
const existingDirectoryNames = new Set(existingDirectoryTools.map((tool) => tool.name));
const newGoogleLabsTools = googleLabsTools
  .filter((tool) => !existingDirectoryNames.has(tool.name))
  .map((tool, index) => ({ ...tool, id: existingDirectoryTools.length + index + 1 }));

export const directoryTools = withBilingualFields([...mergedExistingDirectoryTools, ...newGoogleLabsTools]);
export const directoryToolCategories = ['전체', ...Array.from(new Set(directoryTools.map((tool) => tool.category))).sort()];
