import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import styles from "./PropertyDetailsSlider.module.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function PropertyDetailsSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // ={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.mySwiper2}
      >
        <SwiperSlide>
          <img src="https://s101.divarcdn.com/static/pictures/1670589264/gY4H-uGO.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s101.divarcdn.com/static/pictures/1670589264/gY4H-uGO.1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s101.divarcdn.com/static/pictures/1670589264/gY4H-uGO.2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s101.divarcdn.com/static/pictures/1670589264/gY4H-uGO.3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s101.divarcdn.com/static/pictures/1670589264/gY4H-uGO.4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s101.divarcdn.com/static/pictures/1670589264/gY4H-uGO.5.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper "
      >
        <SwiperSlide>
          <img src="https://s101.divarcdn.com/static/pictures/1670589264/gY4H-uGO.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s101.divarcdn.com/static/pictures/1670589264/gY4H-uGO.1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s101.divarcdn.com/static/pictures/1670589264/gY4H-uGO.2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s101.divarcdn.com/static/pictures/1670589264/gY4H-uGO.3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s101.divarcdn.com/static/pictures/1670589264/gY4H-uGO.4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s101.divarcdn.com/static/pictures/1670589264/gY4H-uGO.5.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
