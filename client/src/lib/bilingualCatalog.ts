import { translateUiText, type Language } from "@/contexts/LanguageContext";

export type BilingualValue = { ko: string; en: string };
export type BilingualFields<T> = {
  i18n: Partial<Record<keyof T, BilingualValue>>;
};

function containsKorean(value: string) {
  return /[가-힣]/.test(value);
}

export function bilingualValue(value: string): BilingualValue {
  if (containsKorean(value)) {
    return { ko: value, en: translateUiText(value, "en") };
  }
  return { ko: translateUiText(value, "ko"), en: value };
}

export function withBilingualFields<T extends Record<string, unknown>>(records: T[]): Array<T & BilingualFields<T>> {
  return records.map((record) => {
    const i18n: Partial<Record<keyof T, BilingualValue>> = {};
    for (const [key, value] of Object.entries(record)) {
      if (typeof value === "string" && value.trim()) {
        i18n[key as keyof T] = bilingualValue(value);
      }
    }
    return { ...record, i18n } as T & BilingualFields<T>;
  });
}

export function getBilingualText<T extends Record<string, unknown>>(record: T & Partial<BilingualFields<T>>, field: keyof T, language: Language): string {
  const value = record.i18n?.[field];
  if (value) return value[language];
  const raw = record[field];
  return typeof raw === "string" ? raw : "";
}
