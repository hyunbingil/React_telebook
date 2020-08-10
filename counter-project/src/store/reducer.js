// Actions
const INCREASE = "INCREASE"; // 액션의 type을 상수로 선언
const DECREASE = "DECREASE"; // 액션 타입은 UPPERCASE로 적어야함.

// Action Creators : 액션 생성자, 함수 형태로 export 하기
export const increase = number => ({
    type: INCREASE,
    payload: number
});

export const decrease = number => ({
    type: DECREASE,
    payload: number
});

// Initial State : Store의 초기값을 지정하는 부분이다.
const initialState = {
    number: 0
};

// Reducer : redux에서 가장 중요한 부분.
// 액션타입에 따라 특정 코드를 실행시킴.
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREASE":
            return { number: action.payload };
        case "DECREASE":
            return { number: action.payload };
        default:
            return state;        
    }
};

export default reducer;