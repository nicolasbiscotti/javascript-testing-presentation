describe("multiply", () => {
  const expect = chai.expect;

  it("shoul multiply 2 and 3", (done) => {
    // arrange
    const x = 2;
    const y = 3;
    const expected = 6;

    // act
    multiply(x, y).then((actual) => {
      // assert
      expect(actual).to.equal(expected);

      done();
    });
  });

  it("shoul multiply 4 and 3", () => {
    // arrange
    const x = 4;
    const y = 3;
    const expected = 12;

    // act
    return multiply(x, y).then((actual) => {
      // assert
      expect(actual).to.equal(expected);
    });
  });

  it("shoul multiply 4 and 5", async () => {
    // arrange
    const x = 4;
    const y = 5;
    const expected = 20;

    // act
    const actual = await multiply(x, y);

    // assert
    expect(actual).to.equal(expected);
  });
});
