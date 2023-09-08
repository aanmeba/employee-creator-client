export const calculateYearsOfEmployment = (date: Date) => {
  const diff = +Date.now() - +date;
  const gap = new Date(diff);

  return Math.abs(gap.getUTCFullYear() - 1970);
};
