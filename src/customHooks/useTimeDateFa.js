import React, { useEffect, useState } from "react";

const useTimeDateFa = () => {
  const [dateState, setDateState] = useState(new Date());
  const [output, setOutput] = useState({
    year: 1401,
    month: "آذر",
    monthDigit: 9,
    day: 20,
    hour: 10,
    minute: 36,
  });
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 60000);
  }, []);
  useEffect(() => {
    setOutput({
      year: dateState.toLocaleString("fa-IR-u-nu-latn", {
        year: "numeric",
      }),
      month: dateState.toLocaleString("fa-IR-u-nu-latn", {
        month: "short",
      }),
      monthDigit: dateState.toLocaleString("fa-IR-u-nu-latn", {
        month: "numeric",
      }),
      day: dateState.toLocaleString("fa-IR-u-nu-latn", {
        day: "numeric",
      }),
      hour: dateState.toLocaleString("fa-IR-u-nu-latn", {
        hour: "numeric",
        hour12: false,
      }),
      minute: dateState.toLocaleString("fa-IR-u-nu-latn", {
        minute: "numeric",
      }),
    });
  }, [dateState]);
  return [output];
};
export default useTimeDateFa;
