import React, { useEffect, useState, MutableRefObject } from "react";

export const useElementOnscreen = (
  containerRef: MutableRefObject<HTMLElement | null>,
  option = {}
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, option]);
  return isVisible;
};
