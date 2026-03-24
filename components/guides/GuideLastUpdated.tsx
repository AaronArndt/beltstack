export function GuideLastUpdated({ date }: { date: string }) {
  return (
    <p className="text-[#57534E] text-sm mt-2" aria-label="Last updated">
      Last updated: {date}
    </p>
  );
}
