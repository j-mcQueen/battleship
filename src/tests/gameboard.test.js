import { Ship } from "../components/Ship";
import { Gameboard } from "../components/Gameboard";

const gameboard = Gameboard();

const placeShip = (coords, ship, board) => {
  // place a horizontal ship
  for (let i = 0; i < coords.length; i++) {
    let row = coords[0][1];
    let col = coords[i][0];

    board[row][col] = ship;
  }

  return board;
};

test("Expects a horizontal destroyer placed at coords [[0,0], [1,0]] to produce a board that matches the expected board", () => {
  const destroyer = Ship("XS");

  let freshBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  let expectedBoard = [
    [destroyer, destroyer, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  expect(
    placeShip(
      [
        [0, 0],
        [1, 0],
      ],
      destroyer,
      freshBoard
    )
  ).toEqual(expectedBoard);
});

test("Expects a horizontal destroyer placed at random coords [[3,4], [4,4]] to produce a board that matches the expected board", () => {
  const destroyer = Ship("XS");

  let freshBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  let expectedBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, destroyer, destroyer, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  expect(
    placeShip(
      [
        [3, 4],
        [4, 4],
      ],
      destroyer,
      freshBoard
    )
  ).toEqual(expectedBoard);
});

test.skip("Expects a vertical destroyer placed at coords [[0,0], [0,1] to produce a board that matches the expected board", () => {
  // to get working, go into Ship.js and change the axis value to 1
  const destroyer = Ship("XS");

  let freshBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  let expectedBoard = [
    [destroyer, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [destroyer, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  expect(
    placeShip(
      [
        [0, 0],
        [0, 1],
      ],
      destroyer,
      freshBoard
    )
  ).toEqual(expectedBoard);
});

test.skip("Expects a vertical destroyer placed at random coords [[3,4], [3,5] to produce a board that matches the expected board", () => {
  // to get working, go into Ship.js and change the axis value to 1
  const destroyer = Ship("XS");

  let freshBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  let expectedBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, destroyer, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, destroyer, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  expect(
    placeShip(
      [
        [0, 0],
        [0, 1],
      ],
      destroyer,
      freshBoard
    )
  ).toEqual(expectedBoard);
});

test("When hit, expect all destroyer coords to return the same number of strikes", () => {
  const destroyer = Ship("XS");

  let newestBoard = [
    [destroyer, destroyer, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  const receiveAttack = (coords) => {
    const row = coords[1];
    const col = coords[0];

    const boardValue = newestBoard[row][col];
    if (boardValue === 0) {
      newestBoard[row][col] = 1;
      return newestBoard;
    } else if (boardValue !== 1) {
      // coords correspond to a ship object
      boardValue.hit();
    }
  };

  // call receiveAttack on a coordinate you know contains a destroyer
  receiveAttack([0, 0]);
  receiveAttack([1, 0]);
  expect(newestBoard[0][0].getStrikes()).toEqual(2);
  expect(newestBoard[0][1].getStrikes()).toEqual(2);

  expect(newestBoard[0][0].getSunk()).toEqual(true);
  expect(newestBoard[0][1].getSunk()).toEqual(true);

  receiveAttack([3, 4]);
  expect(newestBoard[4][3]).toEqual(1);
  expect(newestBoard[3][4]).toEqual(0);
});

test("After initialization, expect board to contain placed ships", () => {
  const destroyer = Ship("XS");
  const submarine = Ship("S");
  const battleship = Ship("M");
  const carrier = Ship("L");

  let freshBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  let expectedBoard1 = [
    [destroyer, destroyer, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  let expectedBoard2 = [
    [destroyer, destroyer, 0, 0, 0, 0, 0, 0, 0, 0],
    [submarine, submarine, submarine, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  let expectedBoard3 = [
    [destroyer, destroyer, 0, 0, 0, 0, 0, 0, 0, 0],
    [submarine, submarine, submarine, 0, 0, 0, 0, 0, 0, 0],
    [battleship, battleship, battleship, battleship, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  let expectedBoard4 = [
    [destroyer, destroyer, 0, 0, 0, 0, 0, 0, 0, 0],
    [submarine, submarine, submarine, 0, 0, 0, 0, 0, 0, 0],
    [battleship, battleship, battleship, battleship, 0, 0, 0, 0, 0, 0],
    [carrier, carrier, carrier, carrier, carrier, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  expect(
    placeShip(
      [
        [0, 0],
        [1, 0],
      ],
      destroyer,
      freshBoard
    )
  ).toEqual(expectedBoard1);

  expect(
    placeShip(
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      submarine,
      expectedBoard1
    )
  ).toEqual(expectedBoard2);

  expect(
    placeShip(
      [
        [0, 2],
        [1, 2],
        [2, 2],
        [3, 2],
      ],
      battleship,
      expectedBoard2
    )
  ).toEqual(expectedBoard3);

  expect(
    placeShip(
      [
        [0, 3],
        [1, 3],
        [2, 3],
        [3, 3],
        [4, 3],
      ],
      carrier,
      expectedBoard3
    )
  ).toEqual(expectedBoard4);
});

test("Expect a gameboard to initially contain ships which are all afloat", () => {
  const destroyer = Ship("XS");
  const submarine = Ship("S");
  const battleship = Ship("M");
  const carrier = Ship("L");
  const ships = [destroyer, submarine, battleship, carrier];

  expect(gameboard.allSunk(ships)).toEqual(false);
});

test("Expect a gameboard to contain ships which are all sunk", () => {
  const destroyer = Ship("XS");
  const submarine = Ship("S");
  const battleship = Ship("M");
  const carrier = Ship("L");
  const ships = [destroyer, submarine, battleship, carrier];

  for (let i = 0; i < ships.length; i++) {
    for (let j = 0; j < ships[i].length(); j++) {
      ships[i].hit();
    }
  }

  expect(gameboard.allSunk(ships)).toEqual(true);
});

test("Expect a gameboard to contain ships which are mostly sunk", () => {
  const destroyer = Ship("XS");
  const submarine = Ship("S");
  const battleship = Ship("M");
  const carrier = Ship("L");
  const ships = [destroyer, submarine, battleship, carrier];

  for (let i = 0; i < ships.length - 1; i++) {
    // loops will end before carrier is hit
    for (let j = 0; j < ships[i].length(); j++) {
      ships[i].hit();
    }
  }

  expect(gameboard.allSunk(ships)).toEqual(false);
});
