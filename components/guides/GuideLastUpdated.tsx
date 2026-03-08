export function GuideLastUpdated({ date }: { date: string }) {
  return (
    <p className="text-[#6E6E6E] text-sm mt-2" aria-label="Last updated">
      Last updated: {date}
    </p>
  );
}
