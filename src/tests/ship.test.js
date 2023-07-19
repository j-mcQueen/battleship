import { Ship } from "../components/Ship";

test("Expects a destroyer to have been hit once", () => {
  const ship = Ship("XS");
  ship.hit();
  expect(ship.getStrikes()).toBe(1);
});

test("Expects a ship to be sunk after x hits", () => {
  const sizes = ["XS", "S", "M", "L"];
  const index = Math.floor(Math.random() * 4);
  const ship = Ship(sizes[index]);

  expect(ship.getSunk()).toEqual(false);
  for (let i = 0; i < ship.length(); i++) {
    ship.hit();
    expect(ship.getStrikes()).toEqual(i + 1);
  }
  expect(ship.getSunk()).toEqual(true);
});
