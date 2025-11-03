import { useEffect, useCallback, useRef } from "react";

export function useParallaxEffectHook(
  className: string = ".dac-parralex-effect"
) {
  const tickingRef = useRef(false);
  let vh = 0;
  if (typeof window !== "undefined") {
    vh = window.innerHeight;
  }

  const updateParallax = useCallback(() => {
    const imgs = document.querySelectorAll<HTMLImageElement>(className);
    imgs.forEach((img) => {
      const rect = img.parentElement?.getBoundingClientRect();
      if (!rect) return;

      if (rect.bottom <= 0 || rect.top >= vh) return;

      const progress = rect.top / vh;
      const yOffset = progress * -100; // adjust speed
      img.style.transform = `translate3d(0, ${yOffset}px, 0)`;
    });

    tickingRef.current = false;
  }, [className, vh]);

  const handleScroll = useCallback(() => {
    if (!tickingRef.current) {
      requestAnimationFrame(updateParallax);
      tickingRef.current = true;
    }
  }, [updateParallax]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateParallax);
    updateParallax(); // run once on mount

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", updateParallax);
        tickingRef.current = false;
      }
    };
  }, [handleScroll, updateParallax]);
}
