import { searchIndex, type SearchIndexItem } from "./searchIndex";

export type SearchResult = SearchIndexItem & { score: number };

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

export function searchContent(query: string): SearchResult[] {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return [];

  const words = normalizedQuery.split(/\s+/).filter(Boolean);

  const results: SearchResult[] = searchIndex
    .map((item) => {
      const title = normalize(item.title);
      const entity = item.entity ? normalize(item.entity) : "";
      const keywords = item.keywords.map(normalize);

      let score = 0;

      // 1) Exact title match
      if (title === normalizedQuery) {
        score += 100;
      }

      // 2) Entity match
      if (entity) {
        if (entity === normalizedQuery) {
          score += 80;
        } else if (words.includes(entity)) {
          score += 70;
        } else if (words.some((w) => entity.includes(w))) {
          score += 50;
        }
      }

      // 3) Exact keyword match
      if (keywords.some((k) => k === normalizedQuery)) {
        score += 75;
      }

      // 4) Partial title match
      if (title.includes(normalizedQuery)) {
        score += 60;
      } else if (words.some((w) => title.includes(w))) {
        score += 40;
      }

      // 5) Partial keyword match
      if (keywords.some((k) => words.some((w) => k.includes(w)))) {
        score += 30;
      }

      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.title.localeCompare(b.title);
    })
    .slice(0, 20);

  return results;
}

