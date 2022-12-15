import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import styles from "./PropertyDetailsSlider.module.css";

import h1 from "../../../../assets/Images/Dashboard/house/h1.jpg";
import h2 from "../../../../assets/Images/Dashboard/house/h2.jpg";
import h3 from "../../../../assets/Images/Dashboard/house/h3.jpg";
import h4 from "../../../../assets/Images/Dashboard/house/h4.jpg";
import h5 from "../../../../assets/Images/Dashboard/house/h5.png";
import h6 from "../../../../assets/Images/Dashboard/house/h6.jpeg";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function PropertyDetailsSlider({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // ={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}

  return (
    <>
      <Swiper
        className="mb-6 rounded-lg"
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
        // className={styles.mySwiper2}
      >
        {images.map((img) => {
          return <SwiperSlide className="rounded-lg">
            <img src={URL.createObjectURL(img)} />
          </SwiperSlide>;
        })}

        {/* <SwiperSlide className="rounded-lg">
          <img src={h1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={h3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={h4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={h5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={h6} />
        </SwiperSlide> */}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={8}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-24"
      >
        {images.map((img) => {
          console.log("nowimg", img);
          return <SwiperSlide className="rounded-lg">
            <img src={URL.createObjectURL(img)} />
          </SwiperSlide>;
        })}
        {/* <SwiperSlide>
          <img className="rounded-lg" src={h2} />
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <img className="rounded-lg" src={h1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg" src={h3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg" src={h4} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg" src={h5} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg" src={h6} />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
