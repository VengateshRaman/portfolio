import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "../../../components/Container";
import {
  caseStudies,
  getCaseStudyBySlug,
  getCaseStudyModule,
  getCaseStudyStaticParam,
} from "../../../lib/caseStudies";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map(getCaseStudyStaticParam);
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  const loadModule = getCaseStudyModule(slug);

  if (!study || !loadModule) {
    return {};
  }

  const mdxModule = await loadModule();
  const title = mdxModule.metadata?.title ?? study.title;
  const description = mdxModule.metadata?.description ?? study.summary;
  const url = `https://vengatesh-raman.dev/case-studies/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/case-studies/${slug}`,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  const loadModule = getCaseStudyModule(slug);

  if (!study || !loadModule) {
    notFound();
  }

  const mdxModule = await loadModule();
  const Content = mdxModule.default;

  return (
    <main>
      <Container className="py-20">
        <p className="text-sm font-medium uppercase text-muted">
          Case Study
        </p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight text-heading sm:text-5xl">
          {study.title}
        </h1>
        <p className="mt-6 max-w-2xl text-body">{study.summary}</p>
        <p className="mt-4 text-sm text-muted">
          {study.role} · {study.impact} · {study.readingTime}
        </p>
      </Container>

      <Container>
        <article className="mdx-content border-t border-zinc-200 py-20">
          <Content />
        </article>
      </Container>

      <Container className="border-t border-zinc-200 py-20">
        <Link href="/" className="link-body text-sm">
          Back to portfolio
        </Link>
      </Container>
    </main>
  );
}
