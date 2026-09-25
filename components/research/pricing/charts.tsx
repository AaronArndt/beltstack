import { formatUsd, isNumericPublic, type ChartMoneyPoint, type DualScenarioPoint } from "@/lib/research/pricing/publication";

const advertisedBar = "bg-slate-500";
const usableBar = "bg-[#10B981]";
const smallerBar = "bg-[#1A2D48]";
const largerBar = "bg-[#10B981]";

function maxAmount(values: Array<number | null | undefined>): number {
  let max = 0;
  for (const value of values) {
    if (typeof value === "number" && value > max) max = value;
  }
  return max > 0 ? max : 1;
}

function numericOrNull(derived: { amount: number | null; status: string }): number | null {
  return derived.status === "PUBLIC" && derived.amount !== null ? derived.amount : null;
}

function MoneyBar({
  label,
  amount,
  max,
  barClass,
  missingLabel,
}: {
  label: string;
  amount: number | null;
  max: number;
  barClass: string;
  missingLabel?: string;
}) {
  if (amount === null) {
    return (
      <div className="flex items-center gap-2 min-h-[1.35rem]">
        <span className="w-[4.75rem] shrink-0 text-xs text-[#57534E]">{label}</span>
        <span className="text-xs leading-snug text-[#57534E]">{missingLabel ?? "Not published"}</span>
      </div>
    );
  }
  const pct = amount === 0 ? 1.8 : Math.max((amount / max) * 100, 2.5);
  return (
    <div className="flex items-center gap-2 min-h-[1.35rem]">
      <span className="w-[4.75rem] shrink-0 text-xs text-[#57534E]">{label}</span>
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <div className="h-4 min-w-0 flex-1 overflow-hidden rounded-sm bg-stone-100" aria-hidden>
          <div className={`h-full ${barClass}`} style={{ width: `${Math.min(pct, 100)}%` }} />
        </div>
        <span className="w-[4.25rem] shrink-0 text-right text-xs font-semibold tabular-nums text-[#1A2D48]">
          {formatUsd(amount)}
        </span>
      </div>
    </div>
  );
}

function ChartFrame({
  title,
  question,
  axis,
  legend,
  children,
  footnote,
  equivalent,
}: {
  title: string;
  question?: string;
  axis: string;
  legend: React.ReactNode;
  children: React.ReactNode;
  footnote?: React.ReactNode;
  equivalent: React.ReactNode;
}) {
  return (
    <figure className="rounded-md border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <figcaption className="text-[#1A2D48] text-base font-bold sm:text-lg">{title}</figcaption>
      {question ? <p className="mt-1 text-sm leading-relaxed text-[#57534E]">{question}</p> : null}
      <p className="mt-2 text-xs font-medium uppercase tracking-wide text-[#57534E]">{axis}</p>
      <div className="mt-3">{legend}</div>
      <div className="mt-4 space-y-4">{children}</div>
      {footnote ? <div className="mt-4 text-sm leading-relaxed text-[#57534E]">{footnote}</div> : null}
      <div className="sr-only">{equivalent}</div>
    </figure>
  );
}

function Swatch({ className, label }: { className: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-[#57534E]">
      <span className={`h-2.5 w-2.5 rounded-sm ${className}`} aria-hidden />
      {label}
    </span>
  );
}

export function AdvertisedUsableBarChart({
  title,
  question,
  series,
  footnote,
}: {
  title: string;
  question: string;
  series: ChartMoneyPoint[];
  footnote?: React.ReactNode;
}) {
  const max = maxAmount(
    series.flatMap((point) => [numericOrNull(point.advertised), numericOrNull(point.usable)]),
  );
  return (
    <ChartFrame
      title={title}
      question={question}
      axis="Monthly equivalent, USD"
      legend={
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <Swatch className={advertisedBar} label="Advertised entry" />
          <Swatch className={usableBar} label="Usable scenario cost" />
        </div>
      }
      footnote={footnote}
      equivalent={
        <table>
          <caption>{title}</caption>
          <thead>
            <tr>
              <th>Product</th>
              <th>Advertised entry</th>
              <th>Usable scenario cost</th>
            </tr>
          </thead>
          <tbody>
            {series.map((point) => (
              <tr key={point.slug}>
                <td>{point.productName}</td>
                <td>{isNumericPublic(point.advertised) ? formatUsd(point.advertised.amount) : "Not published"}</td>
                <td>
                  {isNumericPublic(point.usable)
                    ? formatUsd(point.usable.amount)
                    : (point.usableUsdUnavailable
                      ? "USD usable price not published"
                      : "Not published")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    >
      {series.map((point) => (
        <div key={point.slug}>
          <p className="text-sm font-semibold text-[#1A2D48]">{point.productName}</p>
          <div className="mt-1 space-y-1">
            <MoneyBar
              label="Advertised"
              amount={numericOrNull(point.advertised)}
              max={max}
              barClass={advertisedBar}
            />
            <MoneyBar
              label="Usable"
              amount={numericOrNull(point.usable)}
              max={max}
              barClass={usableBar}
              missingLabel={point.usableUsdUnavailable ? "USD usable price not published" : "Not published"}
            />
          </div>
        </div>
      ))}
    </ChartFrame>
  );
}

export function DualScenarioBarChart({
  title,
  question,
  series,
  smallerLabel,
  largerLabel,
  footnote,
}: {
  title: string;
  question?: string;
  series: DualScenarioPoint[];
  smallerLabel: string;
  largerLabel: string;
  footnote?: React.ReactNode;
}) {
  const max = maxAmount(
    series.flatMap((point) => [numericOrNull(point.smaller), numericOrNull(point.larger)]),
  );
  return (
    <ChartFrame
      title={title}
      question={question}
      axis="Monthly equivalent, USD"
      legend={
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <Swatch className={smallerBar} label={smallerLabel} />
          <Swatch className={largerBar} label={largerLabel} />
        </div>
      }
      footnote={footnote}
      equivalent={
        <table>
          <caption>{title}</caption>
          <thead>
            <tr>
              <th>Product</th>
              <th>{smallerLabel}</th>
              <th>{largerLabel}</th>
            </tr>
          </thead>
          <tbody>
            {series.map((point) => (
              <tr key={point.slug}>
                <td>{point.productName}</td>
                <td>{isNumericPublic(point.smaller) ? formatUsd(point.smaller.amount) : "Not published"}</td>
                <td>{isNumericPublic(point.larger) ? formatUsd(point.larger.amount) : "Not published"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    >
      {series.map((point) => (
        <div key={point.slug}>
          <p className="text-sm font-semibold text-[#1A2D48]">
            {point.productName}
            {point.annotation ? (
              <span className="ml-2 font-normal text-xs text-[#57534E]">{point.annotation}</span>
            ) : null}
          </p>
          <div className="mt-1 space-y-1">
            <MoneyBar label={smallerLabel} amount={numericOrNull(point.smaller)} max={max} barClass={smallerBar} />
            <MoneyBar label={largerLabel} amount={numericOrNull(point.larger)} max={max} barClass={largerBar} />
          </div>
        </div>
      ))}
    </ChartFrame>
  );
}

export function FsmVisibilityChart({
  title,
  publicN,
  quoteN,
  unavailableN,
  doesntMeetN,
  publicNames,
  quoteNames,
  unavailableNames,
  doesntMeetNames,
}: {
  title: string;
  publicN: number;
  quoteN: number;
  unavailableN: number;
  doesntMeetN: number;
  publicNames: string[];
  quoteNames: string[];
  unavailableNames: string[];
  doesntMeetNames: string[];
}) {
  const total = publicN + quoteN + unavailableN + doesntMeetN;
  const segments = [
    { key: "public", n: publicN, label: "Public usable price", className: "bg-[#10B981]", names: publicNames },
    { key: "quote", n: quoteN, label: "Quote required", className: "bg-[#1A2D48]", pattern: true, names: quoteNames },
    { key: "unavailable", n: unavailableN, label: "Price unavailable / not disclosed", className: "bg-slate-400", names: unavailableNames },
    { key: "na", n: doesntMeetN, label: "Doesn't meet this workflow", className: "bg-stone-300", names: doesntMeetNames },
  ];
  return (
    <ChartFrame
      title={title}
      question="Can a small field-service business get a public usable price?"
      axis={`${total} BeltStack-reviewed field-service products`}
      legend={
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {segments.map((segment) => (
            <Swatch key={segment.key} className={segment.className} label={`${segment.label} (${segment.n})`} />
          ))}
        </div>
      }
      footnote={
        <p>
          Dollar medians in this category use only the {publicN} products with a publicly calculable usable price.
          That is {publicN} of {total}.
        </p>
      }
      equivalent={
        <ul>
          {segments.map((segment) => (
            <li key={segment.key}>
              {segment.label}: {segment.n} — {segment.names.join(", ")}
            </li>
          ))}
        </ul>
      }
    >
      <div className="flex h-8 w-full overflow-hidden rounded-sm border border-slate-200" role="img" aria-label={`${publicN} public, ${quoteN} quote required, ${unavailableN} unavailable, ${doesntMeetN} does not meet workflow`}>
        {segments.map((segment) => (
          <div
            key={segment.key}
            className={`${segment.className} ${segment.pattern ? "bg-[repeating-linear-gradient(135deg,#1A2D48_0_6px,#23405f_6px_12px)]" : ""} flex items-center justify-center text-[11px] font-semibold text-white`}
            style={{ width: `${(segment.n / total) * 100}%` }}
          >
            <span className="px-1 tabular-nums">{segment.n}</span>
          </div>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {segments.map((segment) => (
          <div key={segment.key}>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#1A2D48]">
              {segment.label} · {segment.n}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[#57534E]">{segment.names.join(", ")}</p>
          </div>
        ))}
      </div>
    </ChartFrame>
  );
}
