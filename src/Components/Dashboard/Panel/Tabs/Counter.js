import React, { useEffect } from "react";
import CounterSlide from "./../AddOns/CounterSlide";
import ImageContainerCounter from "./../AddOns/ImageContainerCounter";
export default function Counter() {
  useEffect(() => {
    document.title='سامانه اجاره بها - داشبورد'
  }, []);
  return (
    <>
      <center className="mx-1">
        <CounterSlide />
        <ImageContainerCounter />
      </center>
    </>
  );
}
