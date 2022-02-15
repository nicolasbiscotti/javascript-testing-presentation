describe("findMaxValue", () => {
  const expect = chai.expect;

  it("shoul find max value in array", () => {
    // arrange
    const values = [2, 1, 8, 4, 2, 9, 6];
    const expected = 9;

    // act
    const actual = findMaxValue({ values });

    // assert
    expect(actual).to.equal(expected);
  });
});
