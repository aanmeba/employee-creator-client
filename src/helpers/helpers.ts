export const calcualteYearsOfEmployment = (date: Date) => {
  const newDate = new Date(date);
  const diff = +Date.now() - +newDate;
  const gap = new Date(diff);

  return Math.abs(gap.getUTCFullYear() - 1970);
};
