import Link from "next/link";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Section from "../components/Section";
import { caseStudies, type CaseStudyIndex } from "../lib/caseStudies";

function renderCaseStudyPreview(study: CaseStudyIndex) {
  return (
    <article
      key={study.slug}
      className="border-t border-zinc-200 py-10 first:mt-10 first:border-t-0 first:pt-0 last:pb-0"
    >
      <Heading level={3}>
        <Link href={`/case-studies/${study.slug}`} className="link-body text-heading">
          {study.title}
        </Link>
      </Heading>
      <p className="mt-4 max-w-2xl">{study.summary}</p>
      <p className="mt-4 text-sm text-muted">
        {study.role} · {study.impact} · {study.readingTime}
      </p>
      <Link href={`/case-studies/${study.slug}`} className="link-body mt-6 inline-block">
        Read full case study
      </Link>
    </article>
  );
}

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to main content
      </a>

      <main id="main-content">
        <section id="hero" aria-labelledby="hero-title" className="py-20">
          <Container as="header">
            <p className="text-sm font-medium uppercase text-muted">
              Senior Frontend Engineer
            </p>
            <Heading id="hero-title" level={1} className="mt-6">
              Vengatesh Raman
            </Heading>
            <p className="mt-8 max-w-2xl text-base">
              I build product-grade interfaces and platforms with React and
              Next.js. Across 13+ years, I have focused on turning complex
              business flows into reliable, high-performing user experiences for
              global teams.
            </p>
            <p className="mt-6 max-w-2xl text-base text-muted">
              Senior frontend engineer focused on product systems, performance,
              and reliability.
            </p>
          </Container>
        </section>

        <Container>
          <Section id="engineering-philosophy" ariaLabelledBy="philosophy-title">
            <Heading id="philosophy-title">Engineering Philosophy</Heading>
            <p className="mt-10">
              Strong frontend engineering starts with constraints: define
              latency budgets, accessibility requirements, and business goals
              first, then design systems that remain understandable under scale.
            </p>
            <p className="mt-6">
              I prioritize server-first rendering, progressive enhancement, and
              architecture that favors clarity over novelty. Teams move faster
              when the baseline implementation is easy to reason about, easy to
              test, and easy to extend.
            </p>
            <p className="mt-6">
              My default approach combines product empathy, measurable quality
              gates, and calm execution in high-ambiguity contexts.
            </p>
          </Section>

          <Section id="case-studies" ariaLabelledBy="case-studies-title">
            <Heading id="case-studies-title">Case Studies</Heading>
            {caseStudies.map(renderCaseStudyPreview)}
          </Section>

          <Section id="reference-architecture" ariaLabelledBy="reference-architecture-title">
            <Heading id="reference-architecture-title">Reference Architecture (High-Level)</Heading>
            <pre
              aria-label="High-level reference architecture flow"
              className="architecture-diagram mt-10"
            >
              {`                User
                  |
                  v
      Next.js App Router
                  |
                  v
             API Layer
                  |
                  v
Caching Layer (TanStack Query / HTTP caching)
                  |
                  v
        Backend Services`}
            </pre>
          </Section>

          <Section id="system-design-thinking" ariaLabelledBy="system-design-thinking-title">
            <Heading id="system-design-thinking-title">System Design Thinking</Heading>
            <ul className="list-body mt-10 list-disc space-y-4 pl-5">
              <li>
                I set server and client boundaries early in App Router, defaulting to server
                rendering unless interaction requires client code.
              </li>
              <li>
                I choose SSR, SSG, streaming, and caching per route based on freshness, latency,
                and reliability needs.
              </li>
              <li>
                I set budgets for JavaScript, render time, and network cost, and treat drift as a
                design issue, not a late optimization task.
              </li>
              <li>
                I keep state local by default and move only shared cross-cutting concerns to
                global state.
              </li>
              <li>
                I control bundle size with server-first components, route-level splitting,
                dependency review, and CI bundle checks.
              </li>
              <li>
                I structure folders by domain and ownership so teams can evolve features without
                coupling unrelated concerns.
              </li>
              <li>
                I enforce CI/CD gates for types, linting, accessibility, performance, and
                production build checks before merge.
              </li>
              <li>
                I use AI to test architecture options and edge cases, while final decisions stay
                grounded in product context, runtime evidence, and engineering judgment.
              </li>
            </ul>
          </Section>

          <Section id="ai-augmented-engineering" ariaLabelledBy="ai-title">
            <Heading id="ai-title">AI-Augmented Engineering</Heading>
            <p className="mt-10">
              I use AI for exploration, edge-case discovery, and test planning,
              then validate decisions through code review and runtime evidence.
            </p>
            <p className="mt-6">
              It improves throughput when paired with strict quality gates and
              clear ownership.
            </p>
          </Section>
        </Container>
      </main>

      <footer className="border-t border-zinc-200 py-20">
        <Container className="flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Vengatesh Raman</p>
          <nav aria-label="Social links">
            <ul className="list-body text-muted flex gap-4">
              <li>
                <a href="mailto:r.rvengatesh@gmail.com" className="link-body text-muted">
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/vengatesh-raman-7b57b646/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-body text-muted"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/VengateshRaman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-body text-muted"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </Container>
      </footer>
    </>
  );
}
