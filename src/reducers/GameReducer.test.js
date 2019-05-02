import reducer, { initBoard } from "./GameReducer";

describe("GameReducer", () => {
  describe("state is undefined", () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual({
        board: [],
        rows: 6,
        cols: 7,
        player: 1,
        winner: 0,
        cellsToWin: 4,
        player: 1,
        winner: 0
      })
    });
  });

  describe("action.type is INIT", () => {
    it('should return the initial state', () => {
      expect(reducer({}, {type: 'INIT', rows: 3, cols: 3, cellsToWin: 3})).toEqual({
        board: initBoard(3, 3),
        rows: 3,
        cols: 3,
        player: 1,
        winner: 0,
        cellsToWin: 3,
        player: 1,
        winner: 0
      })
    });
  });

  describe("action.type is MOVE", () => {
    it('should return board and player', () => {
      expect(reducer({}, {type: 'MOVE', board: [], player: 2})).toEqual({
        board:[],
        player: 2
      })
    });
  });

  describe("action.type is ENDGAME", () => {
    it('should return winner', () => {
      expect(reducer({}, {type: 'ENDGAME', winner: 1})).toEqual({
        winner: 1
      })
    });
  });

  describe("action.type is SOMETHINGELSE", () => {
    it('should return the state', () => {
      expect(reducer({
        board: [],
        rows: 6,
        cols: 7,
        player: 1,
        winner: 0,
        cellsToWin: 4,
        player: 1,
        winner: 0
      }, {})).toEqual({
        board: [],
        rows: 6,
        cols: 7,
        player: 1,
        winner: 0,
        cellsToWin: 4,
        player: 1,
        winner: 0
      })
    });
  });

  describe("initBoard", () => {
    it('3 x 3 board size initialized with 0', () => {
      var expected = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
      expect(initBoard(3, 3)).toEqual(expected);
    });

    it('3 x 4 board size initialized with 0', () => {
      var expected = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
      expect(initBoard(3, 4)).toEqual(expected);
    });
  });
});
