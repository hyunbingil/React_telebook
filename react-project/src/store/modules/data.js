// 전화번호부 데이터를 담는 리듀서 함수
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// 데이터를 추가하고 삭제하는 action들 타입 설정.
const APPEND_DATA = 'data/APPEND_DATA';
const REMOVE_DATA = 'data/REMOVE_DATA';

// appendData 함수 = 이름과 전화번호가 담긴 data 객체를 인자값으로 받는다.
export const appendData = createAction(APPEND_DATA, data => data);
// removeData 함수 = id 값을 인자값으로 받는다.
export const removeData = createAction(REMOVE_DATA, id => id);

// initialState
const initialState = {
  "0": {
    id: "0",
    name: "앵두",
    phone: "010-0000-0000"
  },
  "1": {
    id: "1",
    name: "호두",
    phone: "010-1111-1111"
  },
  "2": {
    id: "2",
    name: "자두",
    phone: "010-2222-2222"
  },
  "3": {
    id: "3",
    name: "블랙핑크",
    phone: "010-3333-3333"
  },
  "4": {
    id: "4",
    name: "뚜두뚜두",
    phone: "010-4444-4444"
  },
  "5": {
    id: "5",
    name: "뚜",
    phone: "010-5555-5555"
  }
};

// netxid
var nextId = Object.keys(initialState).length;

// 리듀서 함수
export default handleActions({
  // APPEND_DATA 타입에 대한 코드 : draft에 새로운 id 값과 액션 함수를 통해 받은 데이터를 함께 추가해줌.
  [APPEND_DATA]: (state, action) =>
    produce(state, draft => {
      draft[nextId] = {
        id: nextId,
        ...action.payload
      };
      nextId++; // nextId의 값을 1만큼 더해준다.
    }),
  // REMOVE_DATA 타입에 대한 코드 : draft에서 특정 key값을 통해 delete 함수로 해당 값을 지워준다.
  // immer를 통해 알아서 불변성 지켜주니 괜춘.
  [REMOVE_DATA]: (state, action) =>
    produce(state, draft => {
      delete draft[action.payload];
    })
}, initialState);