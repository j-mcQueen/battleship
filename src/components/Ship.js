const Ship = (size) => {
  let strikes = 0;
  let axis = 0;
  let sunk = false;
  // let axis = Math.floor(Math.random() * 2); // 0 or 1 -> 0 = horizontal, 1 = vertical

  const getStrikes = () => {
    return strikes;
  };

  const getSunk = () => {
    return sunk;
  };

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

  const isSunk = () => {
    let hits = getStrikes();
    let shipLength = length();

    if (shipLength - hits === 0) {
      sunk = true;
    }
  };

  const hit = () => {
    // receive hit
    // check if ship is already sunk
    // if true, increment strikes and call the function which checks if sunk needs to be updated

    if (getSunk() === false) {
      strikes += 1;
      return isSunk();
    }
  };

  return {
    axis,
    length,
    getStrikes,
    getSunk,
    isSunk,
    hit,
  };
};

export { Ship };
