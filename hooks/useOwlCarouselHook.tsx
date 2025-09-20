import { useCallback, useEffect, useState } from "react";

export const owlCarouselConfig_one_and_Half_Box = {
  0: {
    items: 1,
    center: true,
    stagePadding: 40,
  },
  576: {
    items: 1,
    center: true,
    stagePadding: 150,
  },
  768: {
    items: 1,
    center: true,
    stagePadding: 150,
  },
  992: {
    items: 1,
    center: true,
    stagePadding: 180,
  },
  1200: {
    items: 1,
    center: true,
    stagePadding: 230,
  },
  1440: {
    items: 1,
    center: false,
    stagePadding: 380,
  },
};

export const owlConfig_two_and_half_box = {
  0: {
    items: 1.1,
  },
  576: {
    items: 1.2,
  },
  768: {
    items: 2.5,
  },
  992: {
    items: 2.5,
  },
};

export default function useOwlCarouselHook(
  configObj: any = owlConfig_two_and_half_box
) {
  const [isReady, setIsReady] = useState(false);
  const [element, setElement] = useState("#carousel-container");

  useEffect(() => {
    // Wait until both scripts are loaded
    if (typeof window !== "undefined" && window.$ && window.$.fn?.owlCarousel) {
      // Only initialize if not already initialized
      if (!window.$(element).hasClass("owl-loaded")) {
        console.log("config >>>>", configObj);

        window.$(element).owlCarousel({
          loop: true,
          margin: 24,
          nav: false,
          dots: false,
          autoplay: true,
          autoplayTimeout: 3000,
          responsive: {
            ...configObj,
          },
        });
      }
      setIsReady(true);
    }

    return () => {
      // Cleanup the carousel on unmount
      if (
        typeof window !== "undefined" &&
        window.$ &&
        window.$.fn?.owlCarousel
      ) {
        window.$(element).owlCarousel("destroy");
      }
    };
  }, [configObj]);

  const handleOwlReadyOne = useCallback((className: string) => {
    if (window.$ && window.$?.fn?.owlCarousel) {
      if (!window.$(className).hasClass("owl-loaded")) {
        window.$(className).owlCarousel({
          loop: true,
          margin: 24,
          nav: false,
          dots: false,
          autoplay: true,
          autoplayTimeout: 3000,
          responsive: {
            ...configObj,
          },
        });
      }
    }
  }, [configObj]);

  return {
    setElement,
    handleOwlReadyOne,
    owlCarouselConfig_one_and_Half_Box,
    owlConfig_two_and_half_box,
    configObj,
  };
}
