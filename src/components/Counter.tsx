import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

export function Counter({
  value,
  direction = "up",
  delay = 0,
  suffix = "",
  prefix = "",
  className = ""
}: {
  value: number;
  direction?: "up" | "down";
  delay?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(latest.toFixed(0));
      }
    });
  }, [springValue]);

  return (
    <span className={className}>
      {prefix}
      <span ref={ref} />
      {suffix}
    </span>
  );
}
