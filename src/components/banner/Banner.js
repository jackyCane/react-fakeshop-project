import styles from "./style/Banner.module.scss";
import Video from "./Video";
import Image from "./Image";
import { useState, useEffect } from "react";

const Banner = function ({ bannerData, selectedType }) {
  const [width, setWidth] = useState(0);
  const [videoView, setVideoView] = useState(true);

  useEffect(() => {
    const updateSize = function () {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setVideoView(false);
    }
    if (window.innerWidth > 768) {
      setVideoView(true);
    }
  }, [width]);
  return (
    <div className={styles.banner}>
      <div className={styles.banner__item}>
        {selectedType === "video" ? (
          <Video
            setVideoView={setVideoView}
            videoView={videoView}
            data={bannerData}
          />
        ) : (
          <Image src={videoView ? bannerData.img : bannerData.imgSmallScreen} />
          // <Image src={bannerData.img} />
        )}
      </div>
      <div className={styles.banner__title}>{bannerData.title}</div>
      <div className={styles.banner__dscr}>
        <p>{bannerData.desc}</p>
      </div>
    </div>
  );
};
export default Banner;
