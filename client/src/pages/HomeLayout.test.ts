import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const homeSource = readFileSync(fileURLToPath(new URL("./Home.tsx", import.meta.url)), "utf8");
const stylesSource = readFileSync(fileURLToPath(new URL("../index.css", import.meta.url)), "utf8");

describe("home directory layout", () => {
  it("does not render the non-functional AI TOOL INDEX rail", () => {
    expect(homeSource).not.toContain('className="index-rail"');
    expect(homeSource).not.toContain("AI TOOL INDEX");
    expect(homeSource).toContain('className="directory-panel"');
    expect(homeSource).toContain("directoryToolCategories");
    expect(homeSource).not.toContain("const aiCategories");
  });

  it("keeps the directory panel in a single full-width column", () => {
    expect(stylesSource).toContain(".content-layout { grid-template-columns:minmax(0,1fr); }");
  });
});
