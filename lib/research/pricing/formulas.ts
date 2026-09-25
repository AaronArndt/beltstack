import type {
  AmountStatus,
  Cadence,
  PricingResearchRow,
  ScenarioId,
  TransparencyClass,
} from "./types";

export type DerivedAmount = {
  amount: number | null;
  status: AmountStatus;
};

export function scenarioHeadcount(scenarioId: ScenarioId): number {
  switch (scenarioId) {
    case "crm-5":
    case "fsm-1-4":
    case "payroll-5":
    case "inv-5":
    case "sched-5":
    case "tt-5":
      return 5;
    case "crm-10":
    case "fsm-2-8":
    case "payroll-10":
    case "tt-10":
      return 10;
  }
}

export function billableUnits(row: PricingResearchRow): number {
  const n = scenarioHeadcount(row.scenarioId);
  const minimum = row.minimumSeats ?? 0;
  return Math.max(n, minimum);
}

export function annualMonthlyEquivalent(amount: number, cadence: Cadence): number {
  if (cadence === "ANNUAL") return amount / 12;
  return amount;
}

export function annualCashCommitment(ame: number): number {
  return ame * 12;
}

function blockedUsable(row: PricingResearchRow): DerivedAmount | null {
  if (row.usableStatus === "QUOTE_REQUIRED") {
    return { amount: null, status: "QUOTE_REQUIRED" };
  }
  if (row.usableStatus === "UNKNOWN" || row.usableStatus === "SOURCE_CONFLICT") {
    return { amount: null, status: "UNKNOWN" };
  }
  if (row.usableStatus === "NOT_DISCLOSED") {
    return { amount: null, status: "NOT_DISCLOSED" };
  }
  if (row.usableStatus === "NOT_APPLICABLE") {
    return { amount: null, status: "NOT_APPLICABLE" };
  }
  return null;
}

function addRequiredAddon(base: number, row: PricingResearchRow): DerivedAmount {
  if (row.requiredAddonAmountStatus === "QUOTE_REQUIRED") {
    return { amount: null, status: "QUOTE_REQUIRED" };
  }
  if (row.requiredAddonAmountStatus === "UNKNOWN" || row.requiredAddonAmountStatus === "SOURCE_CONFLICT") {
    return { amount: null, status: "UNKNOWN" };
  }
  if (row.requiredAddonAmountStatus === "NOT_DISCLOSED") {
    return { amount: null, status: "NOT_DISCLOSED" };
  }
  const addon =
    row.requiredAddonAmountStatus === "PUBLIC" ? (row.requiredAddonAmount ?? 0) : 0;
  return { amount: base + addon, status: "PUBLIC" };
}

/** Recurring scenario cost in the row's usable cadence (not converted). */
export function scenarioCostNative(row: PricingResearchRow): DerivedAmount {
  const blocked = blockedUsable(row);
  if (blocked) return blocked;

  if (row.usableCadence === "FREE") {
    return addRequiredAddon(0, row);
  }

  if (row.usableBaseAmount === null) {
    return { amount: null, status: row.usableStatus };
  }

  const n = billableUnits(row);
  let base: number;

  switch (row.usableUnit) {
    case "USER":
    case "STAFF_CALENDAR":
    case "EMPLOYEE":
    case "WORKER":
      base = row.usableBaseAmount * n;
      break;
    case "BASE_PLUS_UNIT": {
      if (row.extraSeatAmountStatus !== "PUBLIC" || row.extraSeatAmount === null) {
        return { amount: null, status: row.extraSeatAmountStatus };
      }
      base = row.usableBaseAmount + row.extraSeatAmount * n;
      break;
    }
    case "INCLUDED_CAP": {
      if (row.includedSeats === null) {
        return { amount: null, status: "UNKNOWN" };
      }
      if (n <= row.includedSeats) {
        base = row.usableBaseAmount;
        break;
      }
      if (row.extraSeatAmountStatus !== "PUBLIC" || row.extraSeatAmount === null) {
        return { amount: null, status: row.extraSeatAmountStatus };
      }
      base = row.usableBaseAmount + row.extraSeatAmount * (n - row.includedSeats);
      break;
    }
    case "COMPANY":
    case "FREE":
      base = row.usableBaseAmount;
      break;
    case "QUOTE":
      return { amount: null, status: "QUOTE_REQUIRED" };
    case "NOT_APPLICABLE":
      return { amount: null, status: "NOT_APPLICABLE" };
  }

  return addRequiredAddon(base, row);
}

export function scenarioCostAme(row: PricingResearchRow): DerivedAmount {
  const native = scenarioCostNative(row);
  if (native.amount === null) return native;
  if (!row.usableCadence) return { amount: null, status: "UNKNOWN" };
  if (row.usableCadence === "FREE") return { amount: 0, status: "PUBLIC" };
  return {
    amount: annualMonthlyEquivalent(native.amount, row.usableCadence),
    status: "PUBLIC",
  };
}

export function scenarioAnnualCash(row: PricingResearchRow): DerivedAmount {
  const ame = scenarioCostAme(row);
  if (ame.amount === null) return ame;
  return { amount: annualCashCommitment(ame.amount), status: "PUBLIC" };
}

export function year1Cost(row: PricingResearchRow): DerivedAmount {
  const cash = scenarioAnnualCash(row);
  if (cash.amount === null) return cash;
  if (row.onboardingAmountStatus === "QUOTE_REQUIRED") {
    return { amount: null, status: "QUOTE_REQUIRED" };
  }
  if (row.onboardingAmountStatus === "UNKNOWN" || row.onboardingAmountStatus === "SOURCE_CONFLICT") {
    return { amount: null, status: "UNKNOWN" };
  }
  if (row.onboardingAmountStatus === "NOT_DISCLOSED") {
    return { amount: null, status: "NOT_DISCLOSED" };
  }
  const setup = row.onboardingAmountStatus === "PUBLIC" ? (row.onboardingAmount ?? 0) : 0;
  return { amount: cash.amount + setup, status: "PUBLIC" };
}

export function costDelta(fromRow: PricingResearchRow, toRow: PricingResearchRow): DerivedAmount {
  if (fromRow.slug !== toRow.slug || fromRow.category !== toRow.category) {
    return { amount: null, status: "NOT_APPLICABLE" };
  }
  const a = scenarioCostAme(fromRow);
  const b = scenarioCostAme(toRow);
  if (a.amount === null) return { amount: null, status: a.status };
  if (b.amount === null) return { amount: null, status: b.status };
  return { amount: b.amount - a.amount, status: "PUBLIC" };
}

export function deriveTransparency(row: PricingResearchRow): TransparencyClass {
  if (row.usableStatus === "QUOTE_REQUIRED" || row.advertisedStatus === "QUOTE_REQUIRED") {
    if (row.usableStatus === "QUOTE_REQUIRED") return "QUOTE_REQUIRED";
  }
  const usable = scenarioCostAme(row);
  const advertisedComplete =
    row.advertisedStatus === "PUBLIC" &&
    row.advertisedCadence !== null &&
    (row.advertisedAmount !== null || row.advertisedCadence === "FREE");
  const usableComplete = usable.status === "PUBLIC" && usable.amount !== null;
  if (advertisedComplete && usableComplete) return "HIGH";
  return "PARTIAL";
}

export function median(values: number[]): number | null {
  if (values.length === 0) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
  return sorted[mid];
}
