import type { ComponentType } from "react";

export type CaseStudyIndex = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  impact: string;
  readingTime: string;
};

export const caseStudies: CaseStudyIndex[] = [
  {
    slug: "enterprise-commerce-modernization",
    title: "Enterprise Commerce Modernization",
    summary:
      "Re-architected a high-traffic commerce frontend to improve reliability, speed, and delivery consistency.",
    role: "Staff Frontend Engineer",
    impact: "18% checkout lift, 42% fewer regressions",
    readingTime: "6 min read",
  },
  {
    slug: "b2b-analytics-replatforming",
    title: "B2B Analytics Platform Re-Platforming",
    summary:
      "Restructured a monolithic analytics interface into maintainable domains with better accessibility and faster delivery.",
    role: "Senior Frontend Engineer",
    impact: "36% faster lead time, accessibility score 98",
    readingTime: "7 min read",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudyStaticParam(study: CaseStudyIndex) {
  return { slug: study.slug };
}

type CaseStudyModule = {
  default: ComponentType;
  metadata?: {
    title?: string;
    description?: string;
  };
};

const caseStudyModules: Record<string, () => Promise<CaseStudyModule>> = {
  "enterprise-commerce-modernization": () =>
    import("../content/case-studies/enterprise-commerce-modernization.mdx"),
  "b2b-analytics-replatforming": () =>
    import("../content/case-studies/b2b-analytics-replatforming.mdx"),
};

export function getCaseStudyModule(slug: string) {
  return caseStudyModules[slug];
}
