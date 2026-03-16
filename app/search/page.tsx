"use client";

import { Suspense, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { searchContent } from "@/lib/search/search";
import type { SearchResult } from "@/lib/search/search";
import { SearchResultCard } from "@/components/search/SearchResultCard";
import { SearchAutocomplete } from "@/components/search/SearchAutocomplete";

const sectionOrder = ["Review", "Comparison", "Alternatives", "Best Software", "Best For", "Guide", "Category"] as const;

function SearchPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") ?? "";

  const results = useMemo<SearchResult[]>(() => {
    return searchContent(query);
  }, [query]);

  const grouped = useMemo(() => {
    const map = new Map<string, SearchResult[]>();
    for (const item of results) {
      const key = item.type;
      const existing = map.get(key) ?? [];
      existing.push(item);
      map.set(key, existing);
    }
    return map;
  }, [results]);

  const handleSubmitQuery = (value: string) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set("q", value);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <>
      <section className="border-b border-slate-200 bg-[#F8FAFC]">
          <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <h1 className="text-center text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Search Results
            </h1>
            <p className="mt-2 text-center text-[#6E6E6E] text-sm sm:text-base">
              {query ? (
                <>
                  Results for <span className="font-semibold text-[#1A2D48]">"{query}"</span>
                </>
              ) : (
                "Type to search reviews, comparisons, roundups, and guides."
              )}
            </p>
            <SearchAutocomplete
              initialQuery={query}
              autoNavigateToResults={false}
              onSubmitQuery={handleSubmitQuery}
            />
          </div>
        </section>

        <section className="py-8 sm:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {query && results.length === 0 && (
              <p className="text-center text-[#6E6E6E] text-sm">
                No results found. Try searching for a software name or category.
              </p>
            )}
            {!query && (
              <p className="text-center text-[#6E6E6E] text-sm">
                Start by searching for a software name, category, or use case.
              </p>
            )}
            {sectionOrder.map((sectionType) => {
              const items = grouped.get(sectionType);
              if (!items || items.length === 0) return null;
              return (
                <div key={sectionType} className="mt-8 first:mt-0">
                  <h2 className="text-[#1A2D48] text-xl font-bold sm:text-2xl">{sectionType}s</h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                      <SearchResultCard key={`${item.href}-${item.title}`} item={item} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
    </>
  );
}

function SearchPageFallback() {
  return (
    <>
      <section className="border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <h1 className="text-center text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Search Results
          </h1>
          <p className="mt-2 text-center text-[#6E6E6E] text-sm sm:text-base">
            Type to search reviews, comparisons, roundups, and guides.
          </p>
          <SearchAutocomplete initialQuery="" autoNavigateToResults={false} onSubmitQuery={() => {}} />
        </div>
      </section>
      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[#6E6E6E] text-sm">
            Start by searching for a software name, category, or use case.
          </p>
        </div>
      </section>
    </>
  );
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <main>
        <Suspense fallback={<SearchPageFallback />}>
          <SearchPageContent />
        </Suspense>
      </main>
    </div>
  );
}

