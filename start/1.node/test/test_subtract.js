import { expect } from "chai";
import subtract from "../subtract.js";

describe("subtract", () => {
  it("shoul subtract 2 from 3", (done) => {
    // arrange
    const x = 3;
    const y = 2;
    const expected = 1;

    // act
    subtract(x, y, (error, actual) => {
      // assert
      expect(actual).to.equal(expected);
      expect(error).to.equal(null);

      done();
    });
  });
});
