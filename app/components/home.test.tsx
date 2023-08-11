import { HomePage } from "./home";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

// it("render links",async()=>{
//     render(<HomePage />);
//     expect(screen.getByTestId("barcelona")).toBeInTheDocument()
// })

const adder = (...number: number[]) =>
  number.reduce((acc, cur) => acc + cur, 0);

test("test add three number", () => {
  expect(adder(2, 3, 8)).toBe(13);
});

test("test add four number", () => {
  expect(adder(2, 3, 8, 1)).not.toBe(1);
});

test("object assignment", () => {
  const data: { [key: string]: number } = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("testing float number", () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
});

const fetcher = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 1000);
  });

 ;
};

test.only("testing async", async () => {
  const data = await fetcher();
  console.log(data);
  expect(data).toBe("success");
});
