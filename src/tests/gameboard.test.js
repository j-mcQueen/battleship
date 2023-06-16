import { gb, board } from "../components/Gameboard";

test("Expects the matcher function to return true", () => {
  const board = [
    {
      ship: {},
      coords: [
        [5, 10],
        [6, 10],
      ],
    },
  ];

  const findMatch = (arr) => {
    // does board already contain the generated coordinate pair?
    if (board.length === 0) return false;

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (JSON.stringify(board[i].coords[j]) === JSON.stringify(arr[j]))
          return true;
      }
    }
    return false;
  };

  expect(
    findMatch([
      [5, 10],
      [6, 10],
    ])
  ).toEqual(true);
});

test("Expects the receiveAttack function to return a number", () => {
  expect(gb.receiveAttack([5, 10])).toEqual(1);
  // expect(gb.receiveAttack([6, 10])).toEqual(2);
});
