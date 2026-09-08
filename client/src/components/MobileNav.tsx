import { useEffect, useRef, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { siteNav, skillCollectionNav } from "@/lib/siteNav";
import { getActiveNavHref } from "@/lib/mobileNavUtils";
import { BRAND_NAME } from "@/lib/brand";

type MobileNavProps = { active?: string };


export default function MobileNav({ active }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const currentHref = getActiveNavHref(location, active);
  const currentLabel = siteNav.find(([, href]) => href === currentHref)?.[0] ?? (currentHref === "/archive" ? "기회·뉴스" : currentHref === "/search" ? "전체 검색" : undefined);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const initialLocationRef = useRef(location);
  const openedRef = useRef(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (initialLocationRef.current !== location) close();
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) {
      if (openedRef.current) triggerRef.current?.focus();
      return;
    }
    openedRef.current = true;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  return <>
    <button ref={triggerRef} type="button" className="mobile-menu-toggle" aria-label={open ? "모바일 메뉴 닫기" : "모바일 메뉴 열기"} aria-expanded={open} aria-controls="mobile-navigation-drawer" onClick={() => setOpen((value) => !value)}>
      {open ? <X size={18} /> : <Menu size={18} />}
    </button>
    {open && <div className="mobile-navigation-layer">
      <button type="button" className="mobile-navigation-scrim" aria-label="메뉴 닫기" onClick={close} />
      <aside id="mobile-navigation-drawer" className="mobile-navigation-drawer" role="dialog" aria-modal="true" aria-label="모바일 주요 메뉴">
        <div className="mobile-navigation-heading"><span>{BRAND_NAME}</span><button type="button" onClick={close} aria-label="모바일 메뉴 닫기"><X size={18} /></button></div>
        <div className="mobile-navigation-current" aria-live="polite"><span>현재 위치</span><strong>{currentLabel ?? (location === "/" ? "홈" : "탐색 중")}</strong></div>
        <p>찾고 싶은 업무나 도구를 선택하세요.</p>
        <Link className="mobile-navigation-search" href="/search" onClick={close}><Search size={16} /><strong>전체 검색</strong><small>도구·스킬·UI·워크플로우</small></Link>
        <nav className="mobile-navigation-links" aria-label="모바일 주요 메뉴">
          {siteNav.map(([label, href], index) => { const isCurrent = currentHref === href; return <Link key={href} href={href} className={isCurrent ? "is-active" : ""} aria-current={isCurrent ? "page" : undefined} onClick={close}><span className={`mobile-navigation-number ${isCurrent ? "is-current" : ""}`}>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong><small>{href === "/workflows" ? "업무 템플릿" : href === "/tools" ? "AI 서비스 탐색" : href === "/ui-guide" ? "디자인 시스템" : href === "/skills" ? "반복 작업 지침" : "안전한 사용법"}</small>{isCurrent && <em>현재 보는 페이지</em>}</Link>; })}
        <a className="is-resource" href={skillCollectionNav.href} target="_blank" rel="noreferrer" onClick={close} aria-label={`${skillCollectionNav.mobileLabel} 공식 GitHub 열기`}><span className="mobile-navigation-number is-resource-mark">↗</span><strong>{skillCollectionNav.mobileLabel}</strong><small>{skillCollectionNav.description}</small></a></nav>
        <Link className="mobile-navigation-home" href="/" onClick={close}>홈으로 돌아가기</Link>
      </aside>
    </div>}
  </>;
}
