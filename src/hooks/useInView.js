import { useEffect, useState, useRef } from "react";

export default function useInView(
  options = { root: null, rootMargin: "0px", threshold: 0.2 },
) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setInView(true);
      });
    }, options);

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [options.root, options.rootMargin, options.threshold]);

  return [ref, inView];
}
