//solution: https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript
export const calcTimeOfContract = (start_data, end_date) => {
  // start_data : "1400-04-17"
  // end_data : "1402-11-21"
  // output : {
  // days:7748, months:57, years:2
  // }
  const date1 = new Date(
    `${start_data?.slice(5, 7)}/${start_data?.slice(8, 10)}/${start_data?.slice(
      0,
      4
    )}`
  );
  const date2 = new Date(
    `${end_date?.slice(5, 7)}/${end_date?.slice(8, 10)}/${end_date?.slice(
      0,
      4
    )}`
  );

  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
  const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30 * 12));

  return {
    year: diffYears,
    month: diffMonths,
    day: diffDays,
  };
};
