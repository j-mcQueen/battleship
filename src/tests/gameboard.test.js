import { gameboard } from "../components/Gameboard";
import { destroyer } from "../components/Ship";

test("Expects the placeShip function to return a board with place ships at two coordinates", () => {
  let board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, destroyer, destroyer, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  expect(
    gameboard.placeShip(
      [
        [3, 6],
        [4, 6],
      ],
      destroyer
    )
  ).toEqual(board);

  expect(gameboard.getBoard()).toEqual(board);
});

// test("Expects the provided coordinates in the board to reveal a ship object", () => {
//   // create a variable which holds the board with a ships at specified positions
//   // check if the value inside this board at the provided coordinates is the same as what is returned from receiveAttack
//   let board = gameboard.placeShip(
//     [
//       [3, 6],
//       [4, 6],
//     ],
//     destroyer
//   );
//   expect(gameboard.receiveAttack([3, 6])).toEqual(board[5][2]);
// });

// test("Expects the matcher function to return true", () => {
//   const board = [
//     {
//       ship: {},
//       coords: [
//         [5, 10],
//         [6, 10],
//       ],
//     },
//   ];

//   const findMatch = (arr) => {
//     // does board already contain the generated coordinate pair?
//     if (board.length === 0) return false;

//     for (let i = 0; i < board.length; i++) {
//       for (let j = 0; j < arr.length; j++) {
//         if (JSON.stringify(board[i].coords[j]) === JSON.stringify(arr[j]))
//           return true;
//       }
//     }
//     return false;
//   };

//   expect(
//     findMatch([
//       [5, 10],
//       [6, 10],
//     ])
//   ).toEqual(true);
// });

// test("Expects the receiveAttack function to return a number", () => {
//   expect(gb.receiveAttack([5, 10])).toEqual(1);
//   // expect(gb.receiveAttack([6, 10])).toEqual(2);
// });
