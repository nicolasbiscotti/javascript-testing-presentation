describe("subtract", () => {
  const expect = chai.expect;

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

  it("shoul return an error when subtract 3 from 2", (done) => {
    // arrange
    const x = 2;
    const y = 3;
    const expected = 12345;

    // act
    subtract(x, y, (error, actual) => {
      // assert
      expect(actual).to.equal(null);
      expect(error.code).to.equal(expected);

      done();
    });
  });
});
