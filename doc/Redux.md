## Redux를 왜 사용할까?
: 컴포넌트 간 통신이 복잡한 상황을 위해 Redux를 사용한다.
<img src="https://grm-project-template-bucket.s3.ap-northeast-2.amazonaws.com/lesson/les_lWxxs_1574159449327/6ebd9d70ae215e753d371e1f561b9c045489cf5e5779d0aa4f17cde5fcaeef0d.PNG">

: redux를 사용한다면 상태를 관리해주는 스토어를 컴포넌트 구조와 분리해서 복잡하게 코드를 구성할 필요가 없어짐.
1. E 컴포넌트에서 스토어를 구독(Subscribe)\
=> 인자값으로 함수를 받는다.
2. G 컴포넌트에서 상태가 변경될 때마다 인자값으로 넣어준 함수가 실행된다.\
=> 상태 변경할 때 Dispatch 함수가 사용된다.

## Redux 용어 정리
### 1. State (상태)
: Redux 애플리케이션의 전체 상태를나타내는 단어이고, 보통 store에 의해 관리된다.

### 2. Store (스토어)
: 애플리케이션 상태 트리를 가지고 있는 객체이다.\
__=> Redux 앱에서는 단 하나의 스토어만 가지고 있어야한다.__

### 3. Action (액션)
: 상태를 변화시키려는 것을 표현하는 객체.\
=> 상태 변화를 위해서는 액션을 생성해야함.\
==> 액션은 스토어에 데이터를 넣는 유일한 방법.\
: __type 필드__ 를 꼭 가지고 있어야하고, 그 뒤에 사용자가 넣고 싶은 데이터를 자유롭게 넣을 수 있음.
``` js
{
    type: "counter/INCREASE", // 필수
    value: 1,
}
```
### 4. Action Creator (액션 생성자)
: 액션 생성자는 액션을 만드는 함수.\
=> 만들기만 할 뿐 스토어에 실제 요청 X.
``` js
const increase = value => ({
    type: "counter/INCREASE",
    value,
})
```
### 5. Dispatch (디스패치 함수)
: Dispatch 함수는 액션을 인자값으로 받는 함수이다.\
=> 그 다음 인자값으로 받은 액션을 스토어에 보내 상태 관리를 요청한다.\
=> 스토어에서 요청을 받으면 해당 액션을 처리하는 로직을 실행시킨다.
``` js
store.dispatch(increase(10))
```
=> 액션 생성자를 넣어 INCREASE 액션을 발생시킴으로써 상태 관리를 요청함.
### 6. Reducer (리듀서)
: 실제 상태 변화가 발생하는 함수이고, Dispatch를 통한 요청을 받으면 실행되는 함수.\
=> 해당 액션 객체의 type 값에 따라 특정 함수를 실행시키고 새로운 상태를 만들어 반환한다.

## Redux의 3가지 원칙
### 1. Single source of truth
: 애플리케이션의 모든 상태는 하나의 스토어 안에 하나의 객체 트리 구조로 저장된다.\
=> 애플리케이션 디버깅을 용이하게 만듦.
### 2. State is read-only
: 상태를 변화시키는 유일한 방법은 상태 변화를 나타내는 액션 객체를 전달하는 방법뿐이다.\
: 모든 상태 변화는 중앙에서 관리되고, 엄격한 순서에 의해 하나하나 실행되기 때문에 기록을 남길 수 있고, 저장할 수 있으며, 테스트나 디버깅을 위해 특정 액션을 재현하는 것도 가능하다.
### 3. Changes are made with pure functions
: 액션에 의해 상태 트리가 어떻게 변화하는지를 지정하기 위해 순수한 리듀서를 작성해야 한다.
1) 액션을 가지고 상태를 변경해주고
2) 이전의 상태는 건들지 않고 새로운 상태를 만들어 반환한다.
3) 똑같은 파라미터를 받아 실행된 리듀서는 언제나 똑같은 결과값을 반환해야 한다.

=> 이 말은 곧 리듀서 함수 내부에서 네트워크 및 데이터베이스 접근, Math와 Date같은 순수하지 않은 API를 호출하는 코드가 있으면 안 된다는 말이다.\
==> 이러한 작업은 리듀서 바깥에서 처리해줘야 하고, 이를 위해 보통 미들웨어를 사용합니다.

## Redux 사용하기
#### Redux 사용할 수 있게 해주는 라이브러리
- redux
- react-redux
#### Redux를 더 쉽게 사용해주는 라이브러리
- redux-actions\
: 액션 생성자아 리듀서 함수를 더 쉽게 만들어주는 라이브러리
- immer\
: 스토어의 불변성 관리를 위해 사용하는 라이브러리\
=> State와 마찬가지로 Redux에서 불변성을 지키지 않는다면\
컴포넌트 리렌더링을 보장받지 못하고, 최적화를 할 수 없기 때문에 꼭 불변성을 보장해줘야 한다.

### 1. Redux 다운로드
```
yarn add redux react-redux redux-actions immer
```

### 2. 프로젝트에 redux 관련 파일 추가하기
: src 폴더안에 store 폴더를 만들어주고 그 폴더안에 reducer.js 파일을 만들어주자.
```
- src
    - (생략)
    - store
        - index.js
        - reducer.js
```

### 3. ```reducer.js``` 파일 작성하기
: redux 공식 홈페이지에서 사용한 패턴은 액션 관련 부분과 리듀서 관련 부분을 분리하는 것이다.\
: 하지만 우리는 하나의 파일에 모두 작성하는 __Ducks 패턴으로__ 해보자.

``` js
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
```
#### Ducks 패턴을 사용할 때 지켜야하는 룰 4가지
- MUST export default a function called reducer()\
: 리듀서 함수는 반드시 default export 해야 한다.
- MUST export its action creators as functions\
: 액션 생성자는 반드시 함수로 export 해야 합니다.
- MUST have action types in the form npm-module-or-app/reducer/ACTION_TYPE\
: 액션 타입의 형식은 반드시 npm-module-or-app/reducer/ACTION_TYPE 과 같은 형태를 따라야 합니다.
> 위의 코드는 이것을 위반했지만, 리듀서 함수가 많을 때 액션 객체를 구별하기 위함이므로 위의 코드에는 리듀서 함수가 하나이기 때문에 괜찮다.
- MAY export its action types as UPPER_SNAKE_CASE, if an external reducer needs to listen for them, or if it is a published reusable library\
: 액션 타입들을 UPPER_SNAKE_CASE로 export 할 수도 있습니다.

### 4. ```index.js``` 파일 작성하기
: 리듀서 함수들을 모아 스토어를 만들고 반환하는 역할.
``` js
import reducer from './reducer';

export default reducer;
```
> 미들웨어 적용 X, 리듀서 함수 여러개 X여서 코드량이 적음.

### 5. Redux 디버깅 또는 테스팅 확장 프로그램 연결
``` js
// src/index.js
// 스토어 생성 (리듀서 함수 연결 및 Redux Devtools Extension 연결)
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
```
: Redux 탭을 눌러서 @@INIT이라는 텍스트가 존재하는것을 확인했다면 스토어를 성공적으로 프로젝트에 적용한 것.

### 6. 해당 컴포넌트에 store 연결하기(connect 함수)
: connect 함수는 react-redux 라이브러리에 있는 함수로, 복잡한 store 구독 과정을 알아서 처리해주는 함수이다.
- connect 함수 사용
``` js
export default connect(mapStateToProps, mapDispatchToProps)(App);
```
- mapStateToProps
: 스토어의 상태 값을 Props로 매핑하는 함수.\
: state를 인자값으로 받아와 props로 넘겨줄 값을 json 형태로 반환한다.
``` js
const mapStateProps = state => ({
    number: state.number
});
```
- mapDispatchToProps
: 액션 생성자를 Props로 매핑하는 함수.\
: dispatch 함수를 인자값으로 받아와 props로 넘겨줄 값을 json 형태로 반환한다.
``` js
const mapDispatchToProps = dispatch => ({
  increase: number => dispatch(increase(number)),
  decrease: number => dispatch(decrease(number)),
});

// 위의 코드를 더 간단하게 표현한 방식
// props로 counterAction을 받아 counterActions.increase 와 같은 형식으로 함수 사용 가능
// bindActionCreators는 redux 라이브러리에서 제공
const mapDispatchToProps = dispatch => ({
  counterActions: bindActionCreators(counterActions, dispatch)
});
```

### 7. ```App.js```에 적용하기
``` js
// 경로 : src/App.js

import React from "react";
import CountButton from "./components/CountButton";
import Number from "./components/Number";
import styled from "styled-components";
import { connect } from "react-redux";
import * as counter from "./store/reducer";
import { bindActionCreators } from "redux";

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  margin-top: 100px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const App = ({ number, counter }) => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <CountButton onClick={() => counter.increase(number + 1)} text="+" />
        <CountButton onClick={() => counter.decrease(number - 1)} text="-" />
      </ButtonWrapper>
      <Number number={number} />
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  number: state.number
});

const mapDispatchToProps = dispatch => ({
  counter: bindActionCreators(counter, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
```
- bindActionCreators 함수\
: 쉽게 여러 액션 생성자 함수를 dispatch에 연결 가능.

### 8. 더 나아가서(```reducer.js```)
: redux-actions 라이브러리를 통해 redux 코드를 줄여보자.\
+) Immer 라이브러리 활용해서 불변성을 지켜보자.
#### createAction
: 간편하게 액션 생성자를 만들어주는 함수.\
: 인자값으로 2가지를 넘겼는데, 하나는 액션 타입이고 다른 하나는 payloadCreator이다.\
: 액션 타입은 위에서 정의했던 액션 타입 상수를 넣었고, payloadCreator는 함수의 형태로 넘겨주었다.
> 어떤 데이터를 받는다는 것을 명시하기 위해 넣어줌.
>> payloadCreator는 생략 가능.
``` js
export const increase = createAction(INCREASE, number => number);
export const decrease = createAction(DECREASE, number => number);
```
#### handleActions
: Redux의 핵심 부분인 리듀서 부분을 더 간편하게 만들어주는 함수이다.\
: 인자값으로 2가지를 넘겼는데, 하나는 리듀서이고 다른 하나는 initialState 값이다.\
: 작동 방식은 스위치문으로 앞에서 작성된 리듀서와 동일하다.
``` js
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
```
- reducer.js
``` js
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
```

## Immer 라이브러리
: 불변성을 신경 쓰지 않는 것처럼 코드를 짜도 알아서 관리해줌.
<img src="https://grm-project-template-bucket.s3.ap-northeast-2.amazonaws.com/lesson/les_QDgwi_1574828974581/0d032f613a7ad424d27b021420821a6fd7392a992bb2a6c595909b940cd360e6.PNG">

1. 현재 상태를 임시적인 Draft에 적용하고, 사용자는 이 Draft를 수정하게된다.
2. 수정이 완료되면 Draft를 통해 새로운 상태를 만들어 반환.

=> 실제로는 불변성이 잘 지켜지고 있는 것.