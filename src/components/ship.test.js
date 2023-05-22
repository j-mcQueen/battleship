import { destroyer, cruiser, placement, coordBoard } from "./Ship";

test("Expects a destroyer to be of size 2", () => {
  expect(destroyer.length()).toBe(2);
});

test("Expects a cruiser to be of size 3", () => {
  expect(cruiser.length("S")).toBe(3);
});

test("Expects a destroyer to have been hit once", () => {
  expect(destroyer.hit()).toBe(1);
});

test("Expects a cruiser to have been hit thrice", () => {
  expect(cruiser.hit() * 3).toBe(3);
});

test("Expects a cruiser to be sunk", () => {
  expect(cruiser.sunk(3)).toBeTruthy();
});

test("Expects a destroyer to be afloat", () => {
  expect(destroyer.sunk()).toBeFalsy();
});

test("Expects a destroyer of horizontal orientation to have coordinates of [5, 10]", () => {
  expect(placement).toEqual([
    [5, 10],
    [6, 10],
  ]);
});
