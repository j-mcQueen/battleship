import { Gameboard } from "./Gameboard";

const Player = (player) => {
  // what do players do?
  // they choose coordinates to attack an enemies gameboard
  // they choose the placement of their ships (later)

  // a player has their own gameboard
  const board = Gameboard();

  const attack = (opponent, coords) => {
    if (player === 1) {
      // player is the computer
      const randomCoords = [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
      ];
      const target = opponent.board.receiveAttack(randomCoords);
      if (target === 1) return "You can't attack here!";
      // in practice we may not even need to validate the target if it contains one since the DOM component of the gameboard will likely disable the button if it has been clicked and does not contain a ship
    } else {
      return opponent.board.receiveAttack(coords);
    }
  };
  return { attack, board };
};

export { Player };
