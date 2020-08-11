// 인풋값을 관리하는 리듀서 함수
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// 인풋값을 바꾸는 액션 타입 정의
const SET_INPUT_VALUE = 'input/SET_INPUT_VALUE';

// 인풋값을 바꾸는 함수 정의
export const setInputValue = createAction(SET_INPUT_VALUE, data => data);

// initialState
const initialState = {
  name: "",
  phone: ""
};

// 리듀서 함수 : action의 payload 속성으로부터 name과 value 값을 가져와 draft에서 직접 수정해주었다.
// 불변성은 immer에서 보장해줌.
export default handleActions({
  [SET_INPUT_VALUE]: (state, action) =>
    produce(state, draft => {
      const { name, value } = action.payload; 
      draft[name] = value;
    })
}, initialState);