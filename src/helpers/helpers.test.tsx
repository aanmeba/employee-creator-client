import {
  calculateYearsOfEmployment,
  findWidthValue,
  singularOrPlural,
  toCapitalise,
} from "./helpers";

// class MockDate extends Date {
//   constructor(arg: string) {
//     super(arg || 1);
//   }
// }

// beforeAll(() => {
//   global.Date = MockDate as DateConstructor;
// });

describe("calculateYearsOfEmployment()", () => {
  const testDate = new Date("2021-05-05");
  test("type of return value", () => {
    const result = calculateYearsOfEmployment(testDate);
    expect(typeof result).toBe("number");
  });

  test("if input value is today, return 0", () => {
    const testDate = new Date();
    const result = calculateYearsOfEmployment(testDate);
    expect(result).toBe(0);
  });

  // test("returns the correct value", () => {
  //   global.Date = MockDate as DateConstructor;
  //   const today = new Date("2020-01-01");
  // });

  // test("if input value is future, return null");
});

describe("singularOrPlural()", () => {
  test("if input is greater than 1, return s", () => {
    const result = singularOrPlural(2);
    expect(result).toBe("s");
  });
  test("if input is equal to 1 or less than 1, return empty string", () => {
    const result = singularOrPlural(1);
    expect(result).toBe("");

    const zero = singularOrPlural(0);
    expect(zero).toBe("");
  });
});

describe("toCapitalise()", () => {
  test("returns capitalised string", () => {
    const result = toCapitalise("hello world");
    expect(result).toBe("Hello world");
  });

  test("returns empty string if the input is empty string", () => {
    const result = toCapitalise("");
    expect(result).toBe("");
  });
});

describe("findWidthValue()", () => {
  test("returns the intended value depending on the input", () => {
    const widthSm = findWidthValue("sm");
    expect(widthSm).toBe("1/5");
    const widthMd = findWidthValue("md");
    expect(widthMd).toBe("1/2");
    const widthLg = findWidthValue("lg");
    expect(widthLg).toBe("full");
  });
});
