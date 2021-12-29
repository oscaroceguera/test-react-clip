const shoppingList = ["milk", "paper", "kleenex", "trash bags"];

test("the shoinig list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});
