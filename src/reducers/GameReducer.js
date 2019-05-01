const initialState = {
  board: [],
  rows: 6,
  cols: 7,
  player: 1,
  winner: 0,
  cellsToWin: 4
};

const GameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT':
      let board = initBoard(action.rows, action.cols);
      return Object.assign({}, state, {
        board: board,
        rows: action.rows,
        cols: action.cols,
        cellsToWin: action.cellsToWin,
        player: 1,
        winner: 0
      });
    case 'MOVE':
      return Object.assign({}, state, {
        player: action.player,
        board: action.board
      });
    case 'ENDGAME':
      return Object.assign({}, state, {
        winner: action.winner
      });
    default:
      return state;
  }
};
export default GameReducer;

export function initBoard(rows, cols) {
  let board = [];
  for (let i = 0; i < rows; i++) {
    let col = Array(cols).fill(0);
    board.push(col);
  }
  return board;
}