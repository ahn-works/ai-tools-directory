import { withBilingualFields } from "./bilingualCatalog";

export type DesignSystemReference = {
  name: string;
  owner: string;
  platform: string;
  tech: string[];
  features: string[];
  url: string;
  companionLinks: Array<{ label: string; url: string }>;
  difficulty: "초급" | "중급" | "고급";
  previewKind: "button" | "form" | "card" | "table";
};

/** Reference index curated from The Component Gallery's design systems directory. */
const baseDesignSystemReferences: DesignSystemReference[] = [
  { name: "Polaris", owner: "Shopify", platform: "Web", difficulty: "중급", previewKind: "card", tech: ["Web Components"], features: ["Code examples", "Usage guidelines", "Accessibility", "Tone of voice"], url: "https://shopify.dev/docs/api/app-home/web-components", companionLinks: [{ label: "Figma", url: "http://figma.com/@shopify" }] },
  { name: "Elastic UI framework", owner: "Elastic", platform: "Web", difficulty: "중급", previewKind: "table", tech: ["React", "CSS-in-JS"], features: ["Code examples", "Open source"], url: "https://eui.elastic.co/", companionLinks: [{ label: "Figma", url: "https://www.figma.com/@elastic" }, { label: "GitHub", url: "https://github.com/elastic/eui" }] },
  { name: "Sainsbury's Design System", owner: "Sainsbury's", platform: "Web", difficulty: "중급", previewKind: "card", tech: ["React", "Sass"], features: ["Usage guidelines", "Code examples", "Tone of voice"], url: "https://design-systems.sainsburys.co.uk/", companionLinks: [{ label: "Storybook", url: "https://sainsburys-tech.github.io/design-systems" }] },
  { name: "Ariakit", owner: "Community", platform: "Web", difficulty: "고급", previewKind: "form", tech: ["React"], features: ["Code examples", "Open source", "Accessibility"], url: "https://ariakit.org/", companionLinks: [{ label: "GitHub", url: "https://github.com/ariakit/ariakit" }] },
  { name: "Web Awesome", owner: "Community", platform: "Web", difficulty: "중급", previewKind: "button", tech: ["Web Components"], features: ["Open source", "Code examples"], url: "https://webawesome.com/", companionLinks: [{ label: "GitHub", url: "https://github.com/shoelace-style/webawesome" }] },
  { name: "Red Hat design system", owner: "Red Hat", platform: "Web", difficulty: "고급", previewKind: "table", tech: ["Web Components"], features: ["Code examples", "Usage guidelines"], url: "https://ux.redhat.com/", companionLinks: [{ label: "GitHub", url: "https://github.com/RedHat-UX/red-hat-design-system/" }] },
  { name: "HeroUI", owner: "Community", platform: "Web", difficulty: "중급", previewKind: "card", tech: ["React", "Tailwind CSS"], features: ["Code examples", "Open source"], url: "https://www.heroui.com/", companionLinks: [{ label: "GitHub", url: "https://github.com/heroui-inc/heroui" }] },
  { name: "Chakra UI", owner: "Community", platform: "Web", difficulty: "초급", previewKind: "button", tech: ["React"], features: ["Code examples", "Open source", "Accessibility"], url: "https://chakra-ui.com/", companionLinks: [{ label: "GitHub", url: "https://github.com/chakra-ui/chakra-ui" }, { label: "Storybook", url: "https://storybook.chakra-ui.com/" }] },
  { name: "Flowbite", owner: "Community", platform: "Web", difficulty: "초급", previewKind: "card", tech: ["Tailwind CSS"], features: ["Code examples", "Open source"], url: "https://flowbite.com/", companionLinks: [{ label: "Figma", url: "https://www.figma.com/community/file/1179442320711977498" }, { label: "GitHub", url: "https://github.com/themesberg/flowbite" }] },
  { name: "PatternFly", owner: "Red Hat", platform: "Web", difficulty: "중급", previewKind: "table", tech: ["React", "Web Components"], features: ["Code examples", "Usage guidelines", "Accessibility"], url: "https://www.patternfly.org/", companionLinks: [{ label: "Figma", url: "https://www.figma.com/@patternfly" }, { label: "GitHub", url: "https://github.com/patternfly/patternfly-react" }] },
  { name: "Headless UI", owner: "Tailwind Labs", platform: "Web", difficulty: "고급", previewKind: "form", tech: ["React", "Vue"], features: ["Accessibility", "Open source"], url: "https://headlessui.com/", companionLinks: [{ label: "GitHub", url: "https://github.com/tailwindlabs/headlessui" }] },
  { name: "Geist Design System", owner: "Vercel", platform: "Web", difficulty: "중급", previewKind: "button", tech: ["React", "CSS"], features: ["Code examples", "Open source"], url: "https://vercel.com/geist", companionLinks: [{ label: "GitHub", url: "https://github.com/vercel/geist" }] },
  { name: "Base Web", owner: "Uber", platform: "Web", difficulty: "고급", previewKind: "table", tech: ["React", "CSS-in-JS"], features: ["Code examples", "Open source", "Accessibility"], url: "https://baseweb.design/", companionLinks: [{ label: "GitHub", url: "https://github.com/uber/baseweb" }] },
  { name: "shadcn/ui", owner: "Community", platform: "Web", difficulty: "중급", previewKind: "form", tech: ["React", "Tailwind CSS"], features: ["Code examples", "Open source", "Accessibility"], url: "https://ui.shadcn.com/", companionLinks: [{ label: "GitHub", url: "https://github.com/shadcn-ui/ui" }] },
  { name: "Primer", owner: "GitHub", platform: "Web", difficulty: "중급", previewKind: "card", tech: ["React", "CSS"], features: ["Code examples", "Usage guidelines", "Accessibility"], url: "https://primer.style/", companionLinks: [{ label: "Figma", url: "https://www.figma.com/@github" }, { label: "GitHub", url: "https://github.com/primer" }, { label: "Storybook", url: "https://primer.style/storybook/" }] },
  { name: "Material Design", owner: "Google", platform: "Web · Android · iOS", difficulty: "초급", previewKind: "button", tech: ["Material Web", "Kotlin", "Swift"], features: ["Usage guidelines", "Accessibility", "Motion"], url: "https://m3.material.io/", companionLinks: [{ label: "Figma", url: "https://www.figma.com/community/file/1035203688168086460" }, { label: "GitHub", url: "https://github.com/material-components" }] },
  { name: "Carbon Design System", owner: "IBM", platform: "Web · React", difficulty: "중급", previewKind: "table", tech: ["React", "Web Components"], features: ["Code examples", "Usage guidelines", "Accessibility"], url: "https://carbondesignsystem.com/", companionLinks: [{ label: "Figma", url: "https://www.figma.com/@carbon" }, { label: "GitHub", url: "https://github.com/carbon-design-system/carbon" }] },
];

export const designSystemReferences = withBilingualFields(baseDesignSystemReferences);
