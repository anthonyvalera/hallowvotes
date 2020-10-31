import React, { useContext, useEffect, useState } from 'react';
import { CarouselContext } from 'pure-react-carousel';

export function useSlideNumber() {
  const carouselContext = useContext(CarouselContext);

  const [currentSlide, setCurrentSlide] = useState(carouselContext.state.currentSlide);
  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide);
    }
    carouselContext.subscribe(onChange);
    return () => carouselContext.unsubscribe(onChange);
  }, [carouselContext]);

  return currentSlide;
}