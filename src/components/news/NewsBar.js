import { useEffect, useRef, useState } from "react";
import News from "./News";
import styles from "./style/NewsBar.module.scss";

const NewsBar = function ({ news }) {
  const ul = useRef();
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    const length = news.length;
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
    ul.current.style.transform = `translate(${currentSlide * -100}vw)`;
  };

  let slideInterval;

  const autoScroll = function () {
    slideInterval = setInterval(nextSlide, 6000);
  };

  useEffect(() => {
    autoScroll();
    return () => clearInterval(slideInterval);
  }, [currentSlide]);
  return (
    <div className={styles.news}>
      <ul ref={ul} className={styles.news__list}>
        {news.map((slide) => (
          <News
            key={slide.id}
            description={slide.description}
            link={slide.link}
          />
        ))}
      </ul>
    </div>
  );
};
export default NewsBar;
