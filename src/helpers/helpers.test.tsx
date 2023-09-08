import { calculateYearsOfEmployment } from "./helpers";

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
