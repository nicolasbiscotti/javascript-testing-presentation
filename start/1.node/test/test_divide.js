import { expect } from "chai";
import divide from "../divide.js";

describe("divide", () => {
  it("shoul divide 12 by 3", () => {
    // arrange
    const x = 12;
    const y = 3;
    const expected = 4;

    // act
    const actual = divide(x, y);

    // assert
    expect(actual).to.equal(expected);
  });

  it("can't divide by zero", () => {
    // arrange
    const x = 45;
    const y = 0;
    const expected = 123456;

    // act
    let actual;
    try {
      actual = divide(x, y);
    } catch (error) {
      actual = error.code;
    }
    // assert
    expect(actual).to.equal(expected);
  });
});
