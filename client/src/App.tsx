/* Paper + Pixel Atlas: public directory shell with a single search-first route. */
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
const Home = lazy(() => import("./pages/Home"));
const WorkflowsPage = lazy(() => import("./pages/WorkflowsPage"));
const WorkflowDetailPage = lazy(() => import("./pages/WorkflowDetailPage"));
const ToolsPage = lazy(() => import("./pages/ToolsPage"));
const UiGuidePage = lazy(() => import("./pages/UiGuidePage").then((module) => ({ default: module.UiGuidePage })));
const SkillsPage = lazy(() => import("./pages/SkillsPage").then((module) => ({ default: module.SkillsPage })));
const PathPage = lazy(() => import("./pages/PathPage").then((module) => ({ default: module.PathPage })));
const PrinciplesPage = lazy(() => import("./pages/PrinciplesPage").then((module) => ({ default: module.PrinciplesPage })));
const GlobalSearchPage = lazy(() => import("./pages/GlobalSearchPage").then((module) => ({ default: module.GlobalSearchPage })));
const BeginnerGuidePage = lazy(() => import("./pages/BeginnerGuidePage").then((module) => ({ default: module.BeginnerGuidePage })));

function Router() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return <WouterRouter base={base}><Suspense fallback={<div className="route-loading" role="status"><span>AI 활용 가이드 / LOADING</span><strong>잠시만요, 화면을 펼치는 중입니다.</strong></div>}><Switch><Route path="/" component={Home} /><Route path="/workflows" component={WorkflowsPage} /><Route path="/tools" component={ToolsPage} /><Route path="/workflows/:id" component={WorkflowDetailPage} /><Route path="/ui-guide" component={UiGuidePage} /><Route path="/skills" component={SkillsPage} /><Route path="/path" component={PathPage} /><Route path="/principles" component={PrinciplesPage} /><Route path="/beginner-guide" component={BeginnerGuidePage} /><Route path="/search" component={GlobalSearchPage} /><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch></Suspense></WouterRouter>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><LanguageProvider><TooltipProvider><Toaster /><Router /></TooltipProvider></LanguageProvider></ThemeProvider></ErrorBoundary>;
}
