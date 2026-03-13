import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BestForTemplate, type BestForTemplateProps } from "@/components/best/BestForTemplate";
import {
  FREELANCERS_PAGE_PROPS,
  SMALL_BUSINESS_PAGE_PROPS,
  STARTUPS_PAGE_PROPS,
  AGENCIES_PAGE_PROPS,
  GLOBAL_TEAMS_PAGE_PROPS,
} from "@/lib/data/hrBestFor";

const PAGE_MAP: Record<string, BestForTemplateProps> = {
  freelancers: FREELANCERS_PAGE_PROPS,
  "small-business": SMALL_BUSINESS_PAGE_PROPS,
  startups: STARTUPS_PAGE_PROPS,
  agencies: AGENCIES_PAGE_PROPS,
  "global-teams": GLOBAL_TEAMS_PAGE_PROPS,
};

type Props = { params: Promise<{ scenario: string }> };

export default async function HrBestForScenarioPage({ params }: Props) {
  const { scenario } = await params;
  const pageProps = PAGE_MAP[scenario];

  if (!pageProps) {
    notFound();
  }

  return <BestForTemplate {...pageProps} />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { scenario } = await params;
  const pageProps = PAGE_MAP[scenario];

  if (!pageProps) {
    return {
      title: "Best HR Software by Use Case | BeltStack",
      description: "Browse the best HR software by use case, including freelancers, small businesses, startups, agencies, and global teams.",
    };
  }

  return {
    title: `${pageProps.title} | BeltStack`,
    description: pageProps.subtitle,
  };
}

export function generateStaticParams() {
  return Object.keys(PAGE_MAP).map((scenario) => ({ scenario }));
}

