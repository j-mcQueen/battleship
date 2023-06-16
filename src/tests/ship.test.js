import { destroyer } from "../components/Ship";

test("Expects a destroyer to be of size 2", () => {
  expect(destroyer.length()).toBe(2);
});

test("Expects a destroyer to have been hit once", () => {
  expect(destroyer.hit()).toBe(1);
});

test("Expects a destroyer to be sunk", () => {
  expect(destroyer.sunk(2)).toEqual(true);
});
