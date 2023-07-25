import { Player } from "../components/Player";

test.skip("Expect the primary user to perform two missed attacks", () => {
  // because of the randomized nature of ship placement after a player is created, this test will only pass when the computer does not have a ship at coordinates [0,0] and [9,9]
  const user = Player(0);
  const computer = Player(1);

  user.attack(computer, [0, 0]);
  user.attack(computer, [9, 9]);
  const computerBoard = computer.board.getBoard();

  expect(computerBoard[0][0]).toEqual(1);
  expect(computerBoard[9][9]).toEqual(1);
});

test("Expects the computer to identify an illegal move", () => {
  // Again, because of the randomized nature of ship placement after a player is created, if a ship has been placed at [0, 0], the test will not pass because target !== 1
  const mockComputerAttack = (opponent, coords) => {
    const target = opponent.board.receiveAttack(coords);
    if (target === 1) return "You can't attack here!";
  };

  const user = Player(0);
  mockComputerAttack(user, [0, 0]);
  expect(mockComputerAttack(user, [0, 0])).toEqual("You can't attack here!");
});
