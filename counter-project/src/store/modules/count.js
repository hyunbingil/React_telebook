import { createAction, handleActions } from "redux-actions";
import * as API from "../../lib/api";
import produce from "immer";
import { pender } from "redux-pender";

const GET_NUM = "reducer/GET_NUM";
const SET_NUM = "reducer/SET_NUM";

export const getNum = createAction(GET_NUM, API.getNumber);
export const setNum = createAction(SET_NUM, API.setNumber);

const initialState = {
  number: 0
};

export default handleActions(
  {
    ...pender({
      type: GET_NUM,
      onSuccess: (state, action) =>
        produce(state, draft => {
          draft.number = action.payload.data;
        })
    }),
    ...pender({
      type: SET_NUM,
      onSuccess: (state, action) =>
        produce(state, draft => {
          draft.number = action.payload.data;
        })
    })
  },
  initialState
);