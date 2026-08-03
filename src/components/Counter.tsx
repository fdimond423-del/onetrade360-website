import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export function Counter({
  value,
  end,
  direction = "up",
  delay = 0,
  suffix = "",
  prefix = "",
  className = ""
}: {
  value?: number;
  end?: number;
  direction?: "up" | "down";
  delay?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const targetValue = value ?? end ?? 0;
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? targetValue : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : targetValue);
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, targetValue, direction]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current && !isNaN(latest)) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.round(latest));
      }
    });
  }, [springValue]);

  return (
    <span className={className}>
      {prefix}
      <span ref={ref}>{targetValue}</span>
      {suffix}
    </span>
  );
}
