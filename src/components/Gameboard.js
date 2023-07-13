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
        let row = coords[0][1] - 1;
        let col = coords[i][0] - 1;

        if (board[row][col] !== 0) {
          generateCoords(ship);
        }
      }
    } else {
      // validate for vertical axis
      for (let i = 0; i < coords.length; i++) {
        let row = coords[i][1] - 1;
        let col = coords[0][0] - 1;

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
        let row = coords[0][1] - 1;
        let col = coords[i][0] - 1;

        board[row][col] = ship;
      }
    } else {
      // place a vertical ship
      for (let i = 0; i < coords.length; i++) {
        let row = coords[i][1] - 1;
        let col = coords[0][0] - 1;

        board[row][col] = ship;
      }
    }

    return board;
  };

  const getBoard = () => {
    return board;
  };

  const receiveAttack = (coords) => {
    // when receiveAttack is called, we call getBoard to retrieve the most up to date version of the board
    // once we have the board, we go to that position in the board and check the values
    // if the values are not 0 (empty) or 1 (missed attack), we have hit a ship!
    // the value of those coordinates should show a ship object, so we can call that ship's hit function
    const newestBoard = getBoard();

    // coords will take the shape of [x, y]
    // that means a coords of [3, 5] will be on the 5th row, 3rd column

    // create 3 variables for row, col, and the position of row and col on the board
    // coords[1] will be row
    // coords[0] will be col

    // now that we have row and col,
    // we want to check the values inside newest board
    // if attack is equal to 0, change it to 1
    // if attack is not equal to 0 or 1, it will equal a ship object, so call the hit function on that object

    const row = coords[1] - 1;
    const col = coords[0] - 1;

    const boardValue = newestBoard[row][col];
    if (boardValue === 0) {
      boardValue = 1;
    } else if (boardValue !== 1) {
      // coords correspond to a ship object
      return boardValue.hit();
    }
  };

  // const findMatch = (arr) => {
  //   // does board already contain the generated coordinate pair?
  //   if (board.length === 0) return { bool: false };

  //   for (let i = 0; i < board.length; i++) {
  //     for (let j = 0; j < arr.length; j++) {
  //       // compare array values by converting into strings
  //       if (JSON.stringify(board[i].coords[j]) === JSON.stringify(arr[j]))
  //         return { index: i, bool: true };
  //     }
  //   }
  //   return { bool: false };
  // };

  // const place = (ship) => {
  //   let x, y;
  //   let data = {
  //     ship,
  //     coords: [],
  //   };

  //   const generateCoords = (axis) => {
  //     // let point = Math.floor(Math.random() * 10 - ship.length());
  //     // if (point < 0) point = 0;

  //     if (axis === 0) {
  //       x = 5;
  //       y = 10;
  //       // x = point;
  //       // y = Math.floor(Math.random() * 10);
  //     } else {
  //       // x = Math.floor(Math.random() * 10);
  //       // y = point;
  //     }

  //     pushCoords(x, y, axis);
  //   };

  //   const pushCoords = (x, y, axis) => {
  //     for (let i = 0; i < ship.length(); i++) {
  //       axis === 0
  //         ? data.coords.push([x + i, y])
  //         : data.coords.push([x, y + i]);
  //     }

  //     checkBoard(data.coords);
  //   };

  //   const checkBoard = (coords) => {
  //     let match = findMatch(coords);
  //     return match.bool ? generateCoords() : board.push(data);
  //   };

  //   ship.axis === 0 ? generateCoords(0) : generateCoords(1);
  //   return data;
  // };

  // const receiveAttack = (coords) => {
  //   let match = findMatch(coords); // checks for a matching coordinate

  //   return match.bool;
  //   if (match.bool === true) {
  //     let index = match.index; // if we find a matching coordinate, we need the index inside the board to call hit() on the correct ship
  //     return board[index].ship.hit();
  //   } else {
  //     missed.push(coords);
  //     return missed;
  //   }
  // };

  return { generateCoords, validateCoords, placeShip, getBoard, receiveAttack };
};

const gameboard = Gameboard();
// const board = gb.board;
// gb.place(destroyer);

export { gameboard };
