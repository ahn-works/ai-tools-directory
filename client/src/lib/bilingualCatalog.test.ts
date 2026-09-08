import { describe, expect, it } from "vitest";
import { directoryTools } from "./toolCatalog";
import { skills } from "./skills";
import { skills300 } from "./skills300";
import { uiCatalog350 } from "./uiCatalog350";
import { workflowPrompts } from "./workflows";
import { extraWorkflowPrompts } from "./workflowsExtra";
import { designSystemReferences } from "./designSystems";
import { archiveSeed } from "./archiveSeed";
import { globalSearchRecords } from "./globalSearch";

function expectBilingualRecords(name: string, records: Array<{ i18n?: Record<string, { ko: string; en: string }> }>) {
  expect(records.length, name).toBeGreaterThan(0);
  for (const record of records) {
    expect(record.i18n).toBeDefined();
    expect(Object.keys(record.i18n ?? {}).length).toBeGreaterThan(0);
    for (const value of Object.values(record.i18n ?? {})) {
      expect(value.ko).toEqual(expect.any(String));
      expect(value.en).toEqual(expect.any(String));
    }
  }
}

describe("bilingual catalog fields", () => {
  it("adds Korean and English fields to every public catalog record", () => {
    expectBilingualRecords("directoryTools", directoryTools);
    expectBilingualRecords("skills", skills);
    expectBilingualRecords("skills300", skills300);
    expectBilingualRecords("uiCatalog350", uiCatalog350);
    expectBilingualRecords("workflowPrompts", workflowPrompts);
    expectBilingualRecords("extraWorkflowPrompts", extraWorkflowPrompts);
    expectBilingualRecords("designSystemReferences", designSystemReferences);
    expectBilingualRecords("archiveSeed", archiveSeed);
    expectBilingualRecords("globalSearchRecords", globalSearchRecords);
  });
});
