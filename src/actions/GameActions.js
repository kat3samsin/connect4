export const initialize = () => {
  return {
    type: 'INIT',
    rows: 6,
    cols: 7,
    cellsToWin: 4
  };
};

export const movePlayer = state => {
  let action = {};
  action.type = 'MOVE';

  action.board = updateBoard(state.board, state.player, state.rows, state.col);
  action.player = state.player === 1 ? 2 : 1;
  return action;
};

export const removePlayer = state => {
  let action = {};
  action.type = 'MOVE';

  if (samePlayerValue(state.board, state.player, state.rows, state.col)) {
    slideDown(state.board, state.rows, state.col);
  }
  action.board = state.board;
  action.player = state.player === 1 ? 2 : 1;
  return action;
}

const samePlayerValue = (board, player, rows, col) => {
  if (board[rows - 1][col] === player) {
    board[rows - 1][col] = 0;
    return true;
  }
}

const slideDown = (board, rows, col) => {
  for (let row = rows - 1; board.length === rows && row >= 1; row--) {
    board[row][col] = board[row - 1][col];
  }
}

export const updateBoard = (board, player, rows, col) => {
  for (let row = rows - 1; board.length === rows && row >= 0; row--) {
    if (!board[row][col]) {
      board[row][col] = player;
      break;
    }
  }
  return board;
};

export const checkWinner = (state) => {
  let winner = hasWinner(state.board, state.cellsToWin);
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

export const hasWinner = (board, cellsToWin) => {
  const checkDiagonal = () => {
    return checkHorizontal(getDiagonal()) ||
           checkHorizontal(getDiagonal(true));
  };

  const getDiagonal = (bottomToTop) => {
    let row = board.length;
    let col = board[0].length;
    let maxLength = Math.max(row, col);
    let diagonal = [];

    for (let i = 0; i <= 2 * (maxLength - 1); ++i) {
      let d = [];
      
      for (let j = row - 1; j >= 0; --j) {
        let k = i - (bottomToTop ? row - j : j);
        if (k >= 0 && k < col) {
          d.push(board[j][k]);
        }
      }

      if (d.length >= cellsToWin) {
        diagonal.push(d);
      }
    }
    return diagonal;
  };

  const checkVertical = () => {
    let winner = 0;
    let boardT = board.map((col, idx) => board.map(row => row[idx]));
    winner = checkHorizontal(boardT);
    return winner;
  };

  const checkHorizontal = (board) => {
    let winner = 0;
    let p1Winner = Array(cellsToWin)
      .fill('1')
      .join('');
    let p2Winner = Array(cellsToWin)
      .fill('2')
      .join('');

    board.some(r => {
      let row = r.join('');
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
  };

  return checkHorizontal(board) || 
         checkVertical() || 
         checkDiagonal();
};
