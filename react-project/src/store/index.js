import input from './modules/input';
import data from './modules/data';
import { combineReducers } from 'redux';

// redux 라이브러리의 combineReducers 함수 : 여러 개의 리듀서 함수를 하나로 합쳐주는 역할.
export default combineReducers({
  input, data
})