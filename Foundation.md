### React 기초 문법
#### className
: class가 아니라 className이라는 속성을 사용해서 클래스명을 지정함.
#### ```<>```
: React Component에서 반환하는 HTML 코드에서의 최상위 Element는 단 한개여야한다.\
=> div로 묶어줘도 상관없지만 쓸모없는 div가 생긴다.\
==> __빈 태그를 사용할 수 있음__
``` jsx
import React from "react";
import "./App.css";

function App() {
  return (
        <>
            <div className="container1">abc</div>
            <div className="container2">abc</div>
        </>
  );
}

export default App;
```
> html에서 빈 태그는 없는 것으로 나와서 태그 남용을 줄일 수 있음.

---

## React Components
### Class Component
: 예전에는 중요한 역할을 맡았지만, hooks에 대한 기능이 추가되어 많이 사용하지 않음.
> LifeCycle API와 state
``` jsx
import React, { Component } from 'react';
// react 라이브러리에서 함수 또는 클래스를 import 함.
// export 된 다른 파일의 함수 또는 클래스를 불러와 사용 가능.
class Component1 extends Component {
    // render()는 react.component의 하위 class에서 반드시 정의해야하는 메서드.
    // => 리액트에서 사용하는 컴포넌트 생성
    render() {
        return (<div>Hello World!</div>);
    } // 컴포넌트를 만들기 위한 html 반환.
}

export default Component1;
```

### Functional Component
: 예전에는 단순히 부모 컴포넌트로 받은 값을 출력만 해주는 컴포넌트 였지만, 업데이트 이후로 state와 LifeCycle API 사용이 가능해졌다.
``` jsx
import React from 'react';

const Component2 = () => {
  return (
    <div>Hello World!</div>
  );
}

export default Component2;
```
#### 화살표 함수
```
[변수선언부] [함수명] = ([함수인자값]) => {
    [함수 내부 코드]
}
```
``` jsx
const func1 = () => "Hello World!";
const func2 = num => num * 2;
```

---

### Component Styling
### 1) CSS
: 중복되는 클래스명이 있으면 안된다.
- CSS Selector 활용\
: 특정 클래스명을 가진 요소 안의 것만 스타일이 적용되도록 제한 걸기.
``` css
.input_boxes .input_box {
  padding: 10px 0;
}

.input_boxes .input_box_name {
  margin-bottom: 3px;
}
```

- CSS Module
: css 클래스를 불러올 때 ```[파일이름]_[클래스이름]_[해쉬값]```으로 고유한 클래스명을 부여하여 동일한 클래스명이 생기지 않게 만드는 기술.\
=> css 파일을 ```[파일이름].module.css```로 저장해야함.
``` css
/* 경로 : src/components/InputBox/InputBox.module.css (원본 : InputBox.css) */

.input_boxes {
  margin: 50px 0;
  display: flex;
  flex-direction: column;
}

.input_box {
  padding: 10px 0;
}

.input_box_name {
  margin-bottom: 3px;
}
```
- 모듈화한 스타일 파일\
: 객체로 받아와서 ```className={styles.클래스명}```과 같은 형식을 className 지정.
``` js
// 경로 : src/components/InputBox/InputBox.js

import React from "react";
import styles from "./InputBox.module.css";

const InputBox = () => {
  return (
    <div className={styles.input_boxes}>
      <div className={styles.input_box}>
        <div className={styles.input_box_name}>이름</div>
        <input
          type="text"
          placeholder="이름"
          name="name"
          className={styles.input_box_input}
        />
      </div>
      <div className="input_box">
        <div className={styles.input_box_name}>전화번호</div>
        <input
          type="text"
          placeholder="전화번호"
          name="phone"
          className={styles.input_box_input}
        />
      </div>
      <button className={styles.input_box_button}>저장</button>
    </div>
  );
};

export default InputBox;
```

### 2) Sass를 활용한 스타일링
: css 코드를 획기적으로 줄여줄 수 있다.\
: 코드 재사용성이 뛰어나고, 복잡한 작업을 쉽게 할 수 있고, 가독성도 좋다.\
: 두 가지의 확장자(.sass, .scss)를 지원하는데, 두 파일의 문법이 다름.
``` t
yarn add node-sass # 설치하기
``` 
``` scss
/* 경로 : src/components/PhoneItem/PhoneItem.scss (원본 : PhoneItem.css) */

.phone_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #495057;
  padding: 20px;

	/* .phone_item > .phone_item_right > button */
  .phone_item_right button {
    color: #fa5252;
    font-size: 15px;
    font-weight: bold;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }

	/* .phone_item + .phone_item */
  & + & {
    margin-top: 15px;
  }
}
```
- 모듈화도 가능.\
: 파일명 바꿔주고 js 파일도 변경해주자.

### 3) styled-components 라이브러리를 활용한 스타일링
: css 코드를 javascript 코드 내에 작성하는 형태의 스타일링 방법이다.\
=> 하나의 파일 안에서 스타일까지 모두 설정이 가능하다는 것이 장점.\
: styled-components는 CSS-in-JS 라이브러리 중에서 가장 많이 사용되는 라이브러리이다.

: styled-components는 ```styled.[태그명]```을 통해 스타일링 된 컴포넌트를 생성한다.
> ES6의 Template Literal이라는 문법을 사용한다.
``` jsx
const PhoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
```
- Template Literal 문법\
: 특정 상태에 따라 다른 스타일을 적용하기 위해서 사용한다.
``` jsx
// 기존 방식
const func1 = name => {
	return "Hello " + name + "!";
}

// ES6의 Template Literal을 사용한 방식
const func2 = name => {
	return `Hello ${name}!`;
}
```
