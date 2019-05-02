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

  // describe('movePlayer', () => {
  //   it('movePlayer 1 > should set player to 2', () => {
  //     jest.spyOn(actions, 'updateBoard').mockImplementation(() => {
  //       return [];
  //     });
  //     store.dispatch(actions.movePlayer({}));
  //     expect(store.getActions()).toEqual([
  //       {
  //         type: 'MOVE',
  //         player: 2
  //       }
  //     ]);
  //   });
  //   it('movePlayer 2 > should set player to 1', () => {
  //     store.dispatch(actions.movePlayer({}));
  //     expect(store.getActions()).toEqual([
  //       {
  //         type: 'MOVE',
  //         player: 1
  //       }
  //     ]);
  //   });
  // });
});
