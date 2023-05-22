const Ship = (size) => {
  let strikes = 0;
  // let axis = 0;
  let axis = Math.floor(Math.random() * 2); // 0 or 1 -> 0 = horizontal, 1 = vertical

  const length = () => {
    return size === "XS"
      ? 2
      : size === "S"
      ? 3
      : size === "M"
      ? 4
      : size === "L"
      ? 5
      : null;
  };

  const hit = () => {
    strikes++;
    sunk(strikes);
    return strikes;
  };

  const sunk = (strikes) => {
    let shipLength = length(size);
    return shipLength - strikes === 0;
  };

  return { axis, length, hit, sunk };
};

const Gameboard = () => {
  let board = [[5, 10]]; // contains all occupied positons

  const place = (ship) => {
    let x, y;
    let coords = [];

    const generateCoords = (axis) => {
      let point = Math.floor(Math.random() * 10 - ship.length());
      if (point < 0) point = 0;

      if (axis === 0) {
        x = point;
        y = Math.floor(Math.random() * 10);
      } else {
        x = Math.floor(Math.random() * 10);
        y = point;
      }

      pushCoords(x, y, axis);
    };

    const pushCoords = (x, y, axis) => {
      for (let i = 0; i < ship.length(); i++) {
        axis === 0 ? coords.push([x + i, y]) : coords.push([x, y + i]);
      }

      checkBoard(coords);
    };

    const findMatch = (arr) => {
      // does board already contain the generated coordinate pair?
      return board.some((item) => item.every((num) => arr.includes(num)));
    };

    const checkBoard = (coords) => {
      for (let i = 0; i < coords.length; i++) {
        let match = findMatch(coords[i]);
        return match ? generateCoords() : board.push(coords);
      }
    };

    ship.axis === 0 ? generateCoords(0) : generateCoords(1);
    return coords;
  };

  return { place };
};

const board = Gameboard();
const destroyer = Ship("XS");
const cruiser = Ship("S");
const placement = board.place(destroyer);

export { destroyer, cruiser, placement };
