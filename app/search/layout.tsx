import type { Metadata } from "next";

/** Internal search results; thin/duplicate vs destination pages — keep out of the index. */
export const metadata: Metadata = {
  title: "Search | BeltStack",
  robots: { index: false, follow: false },
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
