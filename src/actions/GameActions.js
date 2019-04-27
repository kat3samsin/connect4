import store from '../store';
import { WSASERVICE_NOT_FOUND } from 'constants';

export const initialize = () => {
  return {
    type: "INIT"
  };
};

export const movePlayer = position => {
  let state = store.getState();
  let action = {};
  action.type = "MOVE";
  action.board = updateBoard(state, position.col);
  action.player = state.player === 1 ? 2 : 1;
  return action;
};

export const checkWinner = () => {
  let state = store.getState();
  let winner = hasWinner(state.board);
  if (winner) {
    return {
      type: 'ENDGAME',
      winner: winner
    };
  } else {
    return {
      type: 'DONOTHING'
    };
  }
};

const updateBoard = (state, col) => {
  var board = state.board;
  for (let row = state.rows - 1; row >= 0; row--) {
    if (!board[row][col]) {
      board[row][col] = state.player;
      break;
    }
  }
  // console.log(board);
  return board;
}

const hasWinner = (board) => {
  let winner = 0;
  winner = checkHorizontal(board) || checkVertical(board) || checkDiagonal(board);
  return winner;
}

const checkDiagonal = (board) => {
  
}

const checkHorizontal = (board) => {
  var winner = 0;
  board.some((r) => {
    var row = r.join('')
    if (row.match(/1111/)) {
      winner = 1;
      return true;
    } else if (row.match(/2222/)) {
      winner = 2;
      return true;
    }
    return false;
  });
  return winner;
}

const checkVertical = (board) => {
  var winner = 0;
  var boardT = board.map((col, idx) => board.map(row => row[idx]));
  winner = checkHorizontal(boardT);
  return winner;
}