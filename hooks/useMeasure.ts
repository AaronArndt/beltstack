"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useMeasure<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState<{ height: number; width: number }>({ height: 0, width: 0 });
  const [attach, setAttach] = useState(0);

  const setRef = useCallback((node: T | null) => {
    ref.current = node;
    if (node) setAttach((a) => a + 1);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      setSize({ height: el.offsetHeight, width: el.offsetWidth });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [attach]);

  return [setRef, size] as const;
}
