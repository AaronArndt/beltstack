export function GuideLastUpdated({ date }: { date: string }) {
  return (
    <p className="text-muted-foreground text-sm mt-2" aria-label="Last updated">
      Last updated: {date}
    </p>
  );
}
