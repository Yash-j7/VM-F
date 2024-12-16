import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedCounter = ({ start = 0, end = 1000, duration = 2000 }) => {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures it triggers only once
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      const startTime = performance.now();
      const step = (timestamp) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1); // Clamp to [0, 1]
        const current = Math.floor(start + progress * (end - start));

        setCount(current);

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  }, [inView, start, end, duration, hasAnimated]);

  return (
    <div
      ref={ref}
      className="text-5xl md:text-7xl font-mono font-bold text-center"
    >
      {count.toLocaleString()}K+
    </div>
  );
};

export default AnimatedCounter;
