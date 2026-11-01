import Link from "next/link";

export function RoundupHubLinksBlurb({
  categoryPath,
  categoryLabel,
}: {
  categoryPath: string;
  categoryLabel: string;
}) {
  return (
    <p className="mt-2 text-muted-foreground text-base leading-relaxed max-w-3xl">
      Compare shortlists in our{" "}
      <Link href={`${categoryPath}/compare`} className="font-semibold text-indigo hover:underline">
        {categoryLabel} comparisons
      </Link>
      , explore role-specific picks in{" "}
      <Link href={`${categoryPath}/best-for`} className="font-semibold text-indigo hover:underline">
        best {categoryLabel} pages
      </Link>
      , and use{" "}
      <Link href={`${categoryPath}/guides`} className="font-semibold text-indigo hover:underline">
        {categoryLabel} guides
      </Link>{" "}
      before final vendor demos.
    </p>
  );
}

