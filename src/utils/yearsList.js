export const arrayOfYears = function (count) {
  const nowYear = new Date().toLocaleString("fa-IR-u-nu-latn", {
    year: "numeric",
  });
  let x = +nowYear;
  // count = 3
  // output = [1401,1400,1399]
  let final = [nowYear];
  for (let index = 1; index < count; index++) {
    x = x - 1;
    final.push(x);
  }
  return final;
};

export const arrayOfMonths = [
  { label: "فروردین", value: "01" },
  { label: "اردیبهشت", value: "02" },
  { label: "خرداد", value: "03" },
  { label: "تیر", value: "04" },
  { label: "مرداد", value: "05" },
  { label: "شهریور", value: "06" },
  { label: "مهر", value: "07" },
  { label: "آبان", value: "08" },
  { label: "آذر", value: "09" },
  { label: "دی", value: "10" },
  { label: "بهمن", value: "11" },
  { label: "اسفند", value: "12" },
];

export const arrayOfDays = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
];
