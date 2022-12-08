import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Frame from "./../../../../assets/Images/Dashboard/Frame.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./CounterSlider.module.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import CounterComponent from "./Template/CounterComponent";

export default function CounterSlide() {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className={styles.mySwiper2}
    >
      <SwiperSlide className="rounded-lg">
        {/* <div className="w-full bg-white">
          <div className="bg-white mx-2 flex justify-center flex-col rounded-lg mb-4">
            <p className=""> مسکونی دوبلکس 248 متر در پیروزی</p>
            <div className="flex bg-white w-full">
              <div className="w-3/5 mt-10 p-10 flex flex-col justify-between">
                <div className="border border-warmGray-300  rounded border-12 border-solid flex ">
                  <div className="w-1/2">
                    <p>قیمت رهن : 620,000,000 تومان</p>
                    <hr
                      style={{
                        color: "#D6D3D1",
                        width: "80%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                    <p>قیمت اجاره : 4,500,000 تومان </p>
                  </div>
                  <div className="w-1/2">
                    <p>سال ساخت : 1399</p>
                    <hr
                      style={{
                        color: "#D6D3D1",
                        width: "80%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                    <p>متراژ : 248 متر</p>
                  </div>
                </div>
                <div
                  className="border border-warmGray-300 rounded border-12 border-solid mt-2"
                  dir="ltr"
                >
                  <div class="rental-manager-progress-bar-container">
                    <div class="active">
                      <span className="text-white">1</span>
                      <p className="text-black text-base w-24">درخواست اجاره</p>
                    </div>
                    <div class="active">
                      <span className="text-white">2</span>
                      <p className="text-black text-base w-24">
                        تأیید درخواست توسط مؤجر
                      </p>
                    </div>
                    <div>
                      <span className="text-white">3</span>
                      <p className="text-black text-base w-24">
                        امضای قرارداد توسط طرفین
                      </p>
                    </div>
                    <div>
                      <span className="text-white">4</span>
                      <p className="text-black text-base w-24">
                        تأیید قرارداد و اجاره
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border border-warmGray-300 rounded border-12 border-solid mt-10 flex gap-5">
                  <p>وضعیت :تایید توسط موجر</p>
                  <p>منتظر امضای قرارداد توسط شما</p>
                </div>
              </div>
              <div className="w-2/5 p-10 my-2">
                <img src={Frame} alt="" />
                <div className="w-full flex gap-1 mt-2">
                  <button className="w-1/2 text-main-600 border border-12 border-main-500 rounded-lg">
                    مشاهده آگهی
                  </button>
                  <button className="w-1/2 text-white bg-main-500 rounded-lg">
                    امضای قرارداد
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <CounterComponent
          Title="مسکونی دوبلکس 248 متر در پیروزی"
          btnText="امضای قرارداد"
          MortgagePrice="620,000,000 تومان"
          RentalPrice="4,500,000 تومان"
          YearOfConstruction="1399"
          Meterage="248 متر"
        />
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full bg-white">
          <div className="bg-white mx-2 flex justify-center flex-col rounded-lg mb-4">
            <p className=""> مسکونی دوبلکس 248 متر در پیروزی</p>
            <div className="flex bg-white w-full">
              <div className="w-3/5 mt-10 p-10">
                <div className="border border-warmGray-300  rounded border-12 border-solid flex">
                  <div className="w-1/2">
                    <p>قیمت رهن : 620,000,000 تومان</p>
                    <hr
                      style={{
                        color: "#D6D3D1",
                        width: "80%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                    <p>قیمت اجاره : 4,500,000 تومان </p>
                  </div>
                  <div className="w-1/2">
                    <p>سال ساخت : 1399</p>
                    <hr
                      style={{
                        color: "#D6D3D1",
                        width: "80%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                    <p>متراژ : 248 متر</p>
                  </div>
                </div>
                <div
                  className="border border-warmGray-300 rounded border-12 border-solid mt-2"
                  dir="ltr"
                >
                  <div class="rental-manager-progress-bar-container">
                    <div class="active">
                      <span className="text-white">1</span>
                      <p className="text-black text-base w-24">درخواست اجاره</p>
                    </div>
                    <div class="active">
                      <span className="text-white">2</span>
                      <p className="text-black text-base w-24">
                        تأیید درخواست توسط مؤجر
                      </p>
                    </div>
                    <div>
                      <span className="text-white">3</span>
                      <p className="text-black text-base w-24">
                        امضای قرارداد توسط طرفین
                      </p>
                    </div>
                    <div>
                      <span className="text-white">4</span>
                      <p className="text-black text-base w-24">
                        تأیید قرارداد و اجاره
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border border-warmGray-300 rounded border-12 border-solid mt-10 flex gap-5">
                  <p>وضعیت :تایید توسط موجر</p>
                  <p>منتظر امضای قرارداد توسط شما</p>
                </div>
              </div>
              <div className="w-2/5 p-10 my-2">
                <img src={Frame} alt="" />
                <div className="w-full flex gap-1 mt-2">
                  <button className="w-1/2 text-main-600 border border-12 border-main-500 rounded-lg">
                    مشاهده آگهی
                  </button>
                  <button className="w-1/2 text-white bg-main-500 rounded-lg">
                    امضای قرارداد
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full bg-white">
          <div className="bg-white mx-2 flex justify-center flex-col rounded-lg mb-4">
            <p className=""> مسکونی دوبلکس 248 متر در پیروزی</p>
            <div className="flex bg-white w-full">
              <div className="w-3/5 mt-10 p-10">
                <div className="border border-warmGray-300  rounded border-12 border-solid flex">
                  <div className="w-1/2">
                    <p>قیمت رهن : 620,000,000 تومان</p>
                    <hr
                      style={{
                        color: "#D6D3D1",
                        width: "80%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                    <p>قیمت اجاره : 4,500,000 تومان </p>
                  </div>
                  <div className="w-1/2">
                    <p>سال ساخت : 1399</p>
                    <hr
                      style={{
                        color: "#D6D3D1",
                        width: "80%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                    <p>متراژ : 248 متر</p>
                  </div>
                </div>
                <div
                  className="border border-warmGray-300 rounded border-12 border-solid mt-2"
                  dir="ltr"
                >
                  <div class="rental-manager-progress-bar-container">
                    <div class="active">
                      <span className="text-white">1</span>
                      <p className="text-black text-base w-24">درخواست اجاره</p>
                    </div>
                    <div class="active">
                      <span className="text-white">2</span>
                      <p className="text-black text-base w-24">
                        تأیید درخواست توسط مؤجر
                      </p>
                    </div>
                    <div>
                      <span className="text-white">3</span>
                      <p className="text-black text-base w-24">
                        امضای قرارداد توسط طرفین
                      </p>
                    </div>
                    <div>
                      <span className="text-white">4</span>
                      <p className="text-black text-base w-24">
                        تأیید قرارداد و اجاره
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border border-warmGray-300 rounded border-12 border-solid mt-10 flex gap-5">
                  <p>وضعیت :تایید توسط موجر</p>
                  <p>منتظر امضای قرارداد توسط شما</p>
                </div>
              </div>
              <div className="w-2/5 p-10 my-2">
                <img src={Frame} alt="" />
                <div className="w-full flex gap-1 mt-2">
                  <button className="w-1/2 text-main-600 border border-12 border-main-500 rounded-lg">
                    مشاهده آگهی
                  </button>
                  <button className="w-1/2 text-white bg-main-500 rounded-lg">
                    امضای قرارداد
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
