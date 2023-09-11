export const calculateYearsOfEmployment = (date: Date) => {
  const diff = +Date.now() - +new Date(date);
  const gap = new Date(diff);

  return Math.floor(gap.getUTCFullYear() - 1970);
};

export const singularOrPlural = (num: number) => (num > 1 ? "s" : "");

export const toCapitalise = (string: string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const findWidthValue = (inputSize: string) => {
  switch (inputSize) {
    case "sm":
      return "1/4";
    case "md":
      return "1/2";
    case "lg":
      return "full";
  }
};
