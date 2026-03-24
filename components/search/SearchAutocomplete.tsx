"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { searchContent } from "@/lib/search/search";
import type { SearchResult } from "@/lib/search/search";

type Props = {
  initialQuery?: string;
  placeholder?: string;
  hintText?: string;
  autoNavigateToResults?: boolean;
  maxSuggestions?: number;
  onSubmitQuery?: (query: string) => void;
};

const typeBadgeClass =
  "inline-flex items-center rounded-md bg-[#10B981]/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#10B981] border border-[#10B981]/20";

function highlightMatch(text: string, query: string) {
  const normalizedQuery = query.trim();
  if (!normalizedQuery) return text;

  const index = text.toLowerCase().indexOf(normalizedQuery.toLowerCase());
  if (index === -1) return text;

  const before = text.slice(0, index);
  const match = text.slice(index, index + normalizedQuery.length);
  const after = text.slice(index + normalizedQuery.length);

  return (
    <>
      {before}
      <mark className="bg-yellow-100 text-inherit">{match}</mark>
      {after}
    </>
  );
}

export function SearchAutocomplete({
  initialQuery = "",
  placeholder = "Search software or category...",
  hintText = "",
  autoNavigateToResults = false,
  maxSuggestions = 8,
  onSubmitQuery,
}: Props) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [isFocused, setIsFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const suggestions: SearchResult[] = useMemo(() => {
    const trimmed = query.trim();
    if (trimmed.length < 2) return [];
    return searchContent(trimmed).slice(0, maxSuggestions);
  }, [query, maxSuggestions]);

  const hasSuggestions = isFocused && suggestions.length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = query.trim();
    if (!trimmed) return;

    if (activeIndex != null && suggestions[activeIndex]) {
      router.push(suggestions[activeIndex].href);
      return;
    }

    if (onSubmitQuery) {
      onSubmitQuery(trimmed);
      return;
    }

    if (autoNavigateToResults) {
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!hasSuggestions) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => {
        const next = prev == null ? 0 : prev + 1;
        return next >= suggestions.length ? 0 : next;
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => {
        const next = prev == null ? suggestions.length - 1 : prev - 1;
        return next < 0 ? suggestions.length - 1 : next;
      });
    } else if (e.key === "Escape") {
      setActiveIndex(null);
    }
  };

  return (
    <div className="relative mx-auto mt-8 max-w-2xl">
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="global-search" className="sr-only">
          Search software or category
        </label>
        <div className="searchContainer flex flex-col gap-3 sm:flex-row sm:rounded-lg border border-stone-200 bg-white transition-all duration-150 focus-within:border-[#10B981] sm:shadow-sm">
          <input
            id="global-search"
            name="beltstack-search-input"
            type="search"
            placeholder={placeholder}
            autoComplete="off"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(null);
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              // Small timeout so click events on suggestions still fire.
              setTimeout(() => setIsFocused(false), 100);
            }}
            onKeyDown={handleKeyDown}
            className="searchInput min-w-0 flex-1 rounded-lg border-0 bg-transparent px-4 py-3.5 text-[#1A2D48] placeholder:text-[#57534E] focus:outline-none focus:ring-0 focus:shadow-none sm:rounded-none"
            aria-autocomplete="list"
            aria-controls="global-search-suggestions"
            aria-expanded={hasSuggestions}
          />
          <button
            type="submit"
            className="searchButton rounded-lg border-l border-transparent bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus:ring-0 sm:rounded-none sm:mx-1 sm:my-1 sm:shrink-0"
          >
            Search
          </button>
        </div>
      </form>
      {hintText && (
        <p className="mt-2 text-center text-[#57534E] text-sm">
          {hintText}
        </p>
      )}
      {hasSuggestions && (
        <div
          id="global-search-suggestions"
          className="absolute z-50 mt-2 w-full overflow-hidden rounded-lg border border-stone-200 bg-white shadow-lg"
        >
          <ul className="max-h-80 divide-y divide-stone-100 overflow-y-auto">
            {suggestions.map((item, index) => (
              <li key={`${item.href}-${index}`}>
                <button
                  type="button"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    setQuery(item.title);
                    setActiveIndex(index);
                    router.push(item.href);
                  }}
                  className={`flex w-full flex-col items-start px-4 py-2.5 text-left text-sm transition-colors ${
                    index === activeIndex ? "bg-background" : "hover:bg-stone-50"
                  }`}
                >
                  <span className="text-[#1A2D48] font-semibold">
                    {highlightMatch(item.title, query)}
                  </span>
                  <span className="mt-0.5 flex items-center gap-2 text-[11px] text-[#57534E]">
                    <span className={typeBadgeClass}>{item.type}</span>
                    <span>{item.category}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

