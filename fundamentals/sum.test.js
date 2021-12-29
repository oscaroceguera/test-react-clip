const sum = require("./sum");

describe("SUM:", () => {
  test("Adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("Two plus two", () => {
    const value = sum(2, 2);

    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test("Adding floating point numbers", () => {
    const value = sum(0.1, 0.2);

    expect(value).toBeCloseTo(0.3);
  });
});

test("Object assigment", () => {
  const data = { one: 1 };
  data["two"] = 2;

  expect(data).toEqual({ one: 1, two: 2 });
});

describe("Nulling: ", () => {
  const n = null;

  test("[toBeNull]", () => {
    expect(n).toBeNull();
  });
  test("[toBeDefined]", () => {
    expect(n).toBeDefined();
  });
  test("[toBeUndefined]", () => {
    expect(n).not.toBeUndefined();
  });
  test("[toBeTruthy]", () => {
    expect(n).not.toBeTruthy();
  });
  test("[toBeFalsy]", () => {
    expect(n).toBeFalsy();
  });
});

describe("ZERO: ", () => {
  const z = 0;

  test("[not.toBeNull]", () => {
    expect(z).not.toBeNull();
  });
  test("[toBeDefined]", () => {
    expect(z).toBeDefined();
  });
  test("[toBeUndefined]", () => {
    expect(z).not.toBeUndefined();
  });
  test("[not.toBeTruthy]", () => {
    expect(z).not.toBeTruthy();
  });
  test("[toBeFalsy]", () => {
    expect(z).toBeFalsy();
  });
});
