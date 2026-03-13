"use client";

import { ReviewTemplate } from "@/components/reviews/ReviewTemplate";
import type { ReviewTemplateProps } from "@/components/reviews/ReviewTemplate";

export function ReviewPageClient(props: ReviewTemplateProps) {
  return <ReviewTemplate {...props} />;
}

