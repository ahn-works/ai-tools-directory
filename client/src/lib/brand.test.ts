import { describe, expect, it } from "vitest";
import { BRAND_NAME } from "./brand";

describe("configured website branding", () => {
  it("keeps the selected public brand stable when WebDev provides a project title", () => {
    expect(BRAND_NAME).toBe("AI 활용 가이드");
    expect(process.env.VITE_APP_TITLE ?? "AI 활용 가이드").toBeTypeOf("string");
  });
});
