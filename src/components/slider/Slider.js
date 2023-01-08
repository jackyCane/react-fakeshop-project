import { useEffect, useRef, useState } from "react";
import Button from "../../UI/Button";
import Slide from "./Slide";
import styles from "./style/Slider.module.scss";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const Slider = function ({ data }) {
  const slide = useRef();
  const slider = useRef();

  const nextSlide = (e) => {
    const slideScrollLeft = slider.current.scrollLeft;
    const sliderScrollWidth = slider.current.scrollWidth;
    const sliderWidth = slider.current.clientWidth;
    const slideWidth = slide.current.clientWidth;
    if (slideScrollLeft + sliderWidth + slideWidth > sliderScrollWidth) {
      return;
    }
    slider.current.scrollLeft += slide.current.clientWidth;
  };

  const prevSlide = () => {
    slider.current.scrollLeft -= slide.current.clientWidth;
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slider__btns}>
        <Button addClass={styles.slider__btn} onClick={prevSlide}>
          <GrLinkPrevious />
        </Button>
        <Button addClass={styles.slider__btn} onClick={(e) => nextSlide(e)}>
          <GrLinkNext />
        </Button>
      </div>
      <div ref={slider} className={styles.slider__slidesList}>
        {data.map((item) => {
          return <Slide key={item.id} ref={slide} item={item} />;
        })}
      </div>
    </div>
  );
};
export default Slider;
