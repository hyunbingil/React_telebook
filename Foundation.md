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

