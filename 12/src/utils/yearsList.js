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
