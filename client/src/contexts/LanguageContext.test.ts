import { describe, expect, it } from "vitest";
import { readStoredLanguage, translateUiText } from "./LanguageContext";

describe("translateUiText", () => {
  it("translates exact Korean UI labels to English and back", () => {
    expect(translateUiText("업무 찾기", "en")).toBe("Find workflows");
    expect(translateUiText("Find workflows", "ko")).toBe("업무 찾기");
  });

  it("restores the selected language from storage after a route remount", () => {
    expect(readStoredLanguage(() => "ko")).toBe("ko");
    expect(readStoredLanguage(() => "en")).toBe("en");
    expect(readStoredLanguage(() => null)).toBe("ko");
  });

  it("translates mixed labels without losing surrounding whitespace", () => {
    expect(translateUiText("업무 영역: 전체", "en")).toBe("Work area: All");
    expect(translateUiText("  조건 지우기  ", "en")).toBe("  Clear filters  ");
  });

  it("leaves long catalog copy untouched", () => {
    const source = "이 문장은 도구 카탈로그의 원문 설명입니다. " + "원문을 유지해야 하는 콘텐츠입니다. ".repeat(8);
    expect(translateUiText(source, "en")).toBe(source);
  });
});
