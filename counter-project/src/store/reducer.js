// 경로 : src/store/reducer.js

import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

export const increase = createAction(INCREASE, number => number);
export const decrease = createAction(DECREASE, number => number);

const initialState = {
  number: 0
};

export default handleActions({
  [INCREASE]: (state, action) => 
    produce(state, draft => {
      draft.number = action.payload
    }),
  [DECREASE]: (state, action) => 
    produce(state, draft => {
      draft.number = action.payload
    })
}, initialState);