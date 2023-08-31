import { useEffect, useRef, useState } from "react";
import { scrollElement } from "../utils/scroll";

interface UseCarouselProps {
  screensAmount: number;
}

export const useCarousel = ({ screensAmount }: UseCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [currentScreen, setCurrentScreen] = useState<number>(0);

  const handleScrollRight = () => scrollElement(carouselRef.current, "right");
  const handleScrollLeft = () => scrollElement(carouselRef.current, "left");

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const maxScrollLeft =
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth + 1;

        setCurrentScreen(
          Math.floor(
            carouselRef.current.scrollLeft / (maxScrollLeft / screensAmount)
          )
        );
      }
    };

    if (carouselRef.current) {
      carouselRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [carouselRef]);

  return {
    carouselRef,
    currentScreen,
    handleScrollLeft,
    handleScrollRight,
  };
};
