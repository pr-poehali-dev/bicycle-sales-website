
import { useState, useRef, useEffect } from "react";

export const useReviewCarousel = (reviewsCount: number) => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const nextReview = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % reviewsCount);
  };

  const prevReview = () => {
    setDirection(-1);
    setActive((prev) => (prev === 0 ? reviewsCount - 1 : prev - 1));
  };

  const goToReview = (index: number, dir: number) => {
    setDirection(dir);
    setActive(index);
  };

  const resetAutoplayTimer = () => {
    if (autoplayTimerRef.current) {
      clearTimeout(autoplayTimerRef.current);
    }
    autoplayTimerRef.current = setTimeout(() => {
      nextReview();
    }, 5000);
  };

  const pauseAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearTimeout(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  };

  useEffect(() => {
    resetAutoplayTimer();
    return () => {
      if (autoplayTimerRef.current) {
        clearTimeout(autoplayTimerRef.current);
      }
    };
  }, [active]);

  return {
    active,
    direction,
    containerRef,
    nextReview,
    prevReview,
    goToReview,
    resetAutoplayTimer,
    pauseAutoplay
  };
};
