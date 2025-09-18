"use client";

import { useState, useEffect, useRef } from "react";

/**
 * ✅ Simple intersection observer hook
 */
function useIsInView(ref, options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return isIntersecting;
}

/**
 * ✅ CountingNumber Component
 */
function CountingNumber({ end, duration = 2, suffix = "", className = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useIsInView(ref, { threshold: 0.2 });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (isInView && !started) {
      setStarted(true);
      const startTime = performance.now();
      const total = Number(end);

      const tick = (now) => {
        const progress = Math.min((now - startTime) / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out
        setCount(Math.floor(eased * total));
        if (progress < 1) requestAnimationFrame(tick);
        else setCount(total);
      };
      requestAnimationFrame(tick);
    }
  }, [isInView, started, end, duration]);

  return (
    <div ref={ref} className={className}>
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default CountingNumber;
