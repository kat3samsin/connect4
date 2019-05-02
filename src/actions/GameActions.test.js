import * as actions from './GameActions';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

describe('GameActions', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });

  describe('initialize', () => {
    it('should return the initial state', () => {
      store.dispatch(actions.initialize());
      expect(store.getActions()).toEqual([
        {
          type: 'INIT',
          rows: 6,
          cols: 7,
          cellsToWin: 4
        }
      ]);
    });
  });

  describe('movePlayer', () => {
    it('movePlayer 1 > should set player to 2 and add 1 to last row of col 1', () => {
      store.dispatch(actions.movePlayer({
        board: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
        rows: 3,
        col: 1,
        player: 1
      }));
      expect(store.getActions()).toEqual([
        {
          board: [[0, 0, 0], [0, 0, 0], [0, 1, 0]],
          type: 'MOVE',
          player: 2
        }
      ]);
    });
    it('movePlayer 2 > should set player to 1 and add 2 to last row of col 0', () => {
      store.dispatch(actions.movePlayer({
        board: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
        rows: 3,
        col: 0,
        player: 2
      }));
      expect(store.getActions()).toEqual([
        {
          board: [[0, 0, 0], [0, 0, 0], [2, 0, 0]],
          type: 'MOVE',
          player: 1
        }
      ]);
    });
  });

  describe('checkWinner', () => {
    it('player 1 wins should return ENDGAME and winner is 1', () => {
      store.dispatch(actions.checkWinner({
        board: [[0, 0, 0], [1, 1, 1], [0, 0, 0]],
        cellsToWin: 3
      }));
      expect(store.getActions()).toEqual([
        {
          type: 'ENDGAME',
          winner: 1
        }
      ]);
    });
    it('no winners should return DONOTHING', () => {
      store.dispatch(actions.checkWinner({
        board: [[0, 0, 0], [1, 1, 0], [0, 0, 0]],
        cellsToWin: 3
      }));
      expect(store.getActions()).toEqual([
        {
          type: 'DONOTHING'
        }
      ]);
    });
  });

  describe('hasWinner', () => {
    it('checkHorizontal', () => {
      expect(actions.hasWinner([[2, 2, 0], [1, 1, 1], [2, 2, 0]], 3)).toEqual(1);
      expect(actions.hasWinner([[0, 1, 1], [1, 0, 1], [2, 2, 2]], 3)).toEqual(2);
    });

    it('checkVertical', () => {
      expect(actions.hasWinner([[1, 0, 0], [1, 0, 0], [1, 0, 0]], 3)).toEqual(1);
      expect(actions.hasWinner([[0, 2, 0], [0, 2, 0], [1, 2, 1]], 3)).toEqual(2);
    });

    it('checkDiagonal', () => {
      expect(actions.hasWinner([[1, 0, 2], [2, 1, 0], [2, 1, 1]], 3)).toEqual(1);
      expect(actions.hasWinner([[0, 2, 2], [0, 2, 0], [2, 2, 1]], 3)).toEqual(2);
    });
  });
});
