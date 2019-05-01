import store from '../store';

export const initialize = () => {
  return {
    type: "INIT",
    rows: 6, 
    cols: 7,
    cellsToWin: 4
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
  return board;
}

const hasWinner = (board) => {
  let winner = 0;
  winner = checkHorizontal(board) || checkVertical(board) || checkDiagonal(board);
  return winner;
}

const checkDiagonal = (board) => {
  let winner = checkHorizontal(getDiagonal(board));
  winner = winner || checkHorizontal(getDiagonal(board, true));
  return winner;
}

const getDiagonal = (board, bottomToTop) => {
  let cellsToWin = store.getState().cellsToWin;
  let row = board.length;
  let col = board[0].length;
  let maxLength = Math.max(row, col);
  let diagonal = [];

  for (var i = 0; i <= 2 * (maxLength - 1); ++i) {
    var d = [];

    for (let j = row - 1; j >= 0; --j) {
      let k = i - (bottomToTop ? row - j : j);
      if (k >= 0 && k < col) {
          d.push(board[j][k]);
      }
    }

    if(d.length >= cellsToWin) {
      diagonal.push(d);
    }
  }
  return diagonal;
}

const checkHorizontal = (board) => {
  let winner = 0;
  let cellsToWin = store.getState().cellsToWin;
  let p1Winner = Array(cellsToWin).fill('1').join('');
  let p2Winner = Array(cellsToWin).fill('2').join('');

  board.some((r) => {
    var row = r.join('');
    if (row.match(p1Winner)) {
      winner = 1;
      return true;
    } else if (row.match(p2Winner)) {
      winner = 2;
      return true;
    }
    return false;
  });
  return winner;
}

const checkVertical = (board) => {
  let winner = 0;
  let boardT = board.map((col, idx) => board.map(row => row[idx]));
  winner = checkHorizontal(boardT);
  return winner;
}