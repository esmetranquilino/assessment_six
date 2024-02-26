const shuffle = require("../src/shuffle");

const array = [1,2,3,4,5,6,7,8]

describe("shuffle should...", () => {
  // CODE HERE
  // test to check if it returns an array
  test("test to check if it returns an array", () => {
    expect(shuffle(array)).toBeInstanceOf(Array)
  });
  test("test to check that it returns an array of the same length as the argument sent in", () => {
    expect(shuffle(array)).toHaveLength(array.length)
  });
  test("test to check that the items have been shuffled around", () => {
    expect(shuffle(array)).not.toBe(array)
  })
});

