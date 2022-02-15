describe("add", () => {
  const expect = chai.expect;

  it("shoul add 2 + 3", () => {
    // arrange
    const x = 2;
    const y = 3;
    const expected = 5;

    // act
    const actual = add(x, y);

    // assert
    expect(actual).to.equal(expected);
  });

  it("shoul add a + b", () => {
    // arrange
    const x = "a";
    const y = "b";
    const expected = "ab";

    // act
    const actual = add(x, y);

    // assert
    expect(actual).to.equal(expected);
  });
});
