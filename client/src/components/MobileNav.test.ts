import { describe, expect, it } from "vitest";
import { siteNav, skillCollectionNav } from "@/lib/siteNav";
import { getActiveNavHref } from "@/lib/mobileNavUtils";

describe("mobile navigation contract", () => {
  it("keeps every primary destination available to the mobile menu", () => {
    expect(siteNav.map(([label]) => label)).toEqual([
      "업무 찾기",
      "도구 찾기",
      "UI 참고",
      "스킬 라이브러리",
      "학습 경로",
      "사용 원칙",
      "초보자 가이드",
    ]);
  });

  it("exposes the official Korean skill collection as an external resource", () => {
    expect(skillCollectionNav).toMatchObject({
      label: "한국형 스킬",
      mobileLabel: "한국형 스킬 모음집",
      description: "SRT·KTX·정부서비스 등",
      href: "https://github.com/NomaDamas/k-skill",
    });
  });

  it("does not expose duplicate destinations", () => {
    const routes = siteNav.map(([, href]) => href);
    expect(new Set(routes).size).toBe(routes.length);
  });

  it("marks nested routes as belonging to the matching primary menu", () => {
    expect(getActiveNavHref("/tools/123")).toBe("/tools");
    expect(getActiveNavHref("/skills/automation?view=all")).toBe("/skills");
    expect(getActiveNavHref("/unknown")).toBeUndefined();
  });

  it("prefers the explicit active route supplied by a page frame", () => {
    expect(getActiveNavHref("/tools/123", "/skills")).toBe("/skills");
  });
});
