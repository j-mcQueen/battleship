import { destroyer } from "./Ship";

const Gameboard = () => {
  let board = [
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

  const generateCoords = (ship) => {
    let x, y;
    let sub = [];
    let start = Math.floor(Math.random() * 10 - ship.length()); // generate a random number between 10 - the ship's length to ensure no boundaries are crossed
    if (start < 0) start = 0; // edge case covering where the ships length is greater than the number generated leading to a negative integer

    if (ship.axis === 0) {
      // if axis is horizontal
      x = start;
      y = Math.floor(Math.random() * 10);

      // on each iteration, add i to coordinate and add into subarray
      for (let i = 0; i < ship.length(); i++) {
        sub.push([x + i, y]);
      }
    } else {
      // if axis is vertical
      x = Math.floor(Math.random() * 10);
      y = start;

      for (let i = 0; i < ship.length(); i++) {
        sub.push([x, y + i]);
      }
    }
    validateCoords(sub, ship);
  };

  const validateCoords = (coords, ship) => {
    if (ship.axis === 0) {
      // validate for horizontal axis
      for (let i = 0; i < coords.length; i++) {
        let row = coords[0][1];
        let col = coords[i][0];

        if (board[row][col] !== 0) {
          generateCoords(ship);
        }
      }
    } else {
      // validate for vertical axis
      for (let i = 0; i < coords.length; i++) {
        let row = coords[i][1];
        let col = coords[0][0];

        if (board[row][col] !== 0) {
          generateCoords(ship);
        }
      }
    }

    // if loop completes, all generated coords are valid, so we can place the ship
    placeShip(coords, ship);
  };

  const placeShip = (coords, ship) => {
    if (ship.axis === 0) {
      // place a horizontal ship
      for (let i = 0; i < coords.length; i++) {
        let row = coords[0][1];
        let col = coords[i][0];

        board[row][col] = ship;
      }
    } else {
      // place a vertical ship
      for (let i = 0; i < coords.length; i++) {
        let row = coords[i][1];
        let col = coords[0][0];

        board[row][col] = ship;
      }
    }

    return board;
  };

  const getBoard = () => {
    return board;
  };

  const receiveAttack = (coords) => {
    const newestBoard = getBoard();

    const row = coords[1];
    const col = coords[0];

    const boardValue = newestBoard[row][col];
    if (boardValue === 0) {
      board[row][col] = 1;
      return board;
    } else if (boardValue !== 1) {
      // coords correspond to a ship object
      boardValue.hit();
      // return boardValue.getStrikes();
    }
  };

  return { generateCoords, validateCoords, placeShip, getBoard, receiveAttack };
};

const gameboard = Gameboard();
// const board = gb.board;
// gb.place(destroyer);

export { gameboard };
