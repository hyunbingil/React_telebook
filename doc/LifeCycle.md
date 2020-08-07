## Component Mount LifeCycle API
: 컴포넌트 마운트와 관련된 API

### 1. 🚀 Constructor()
: React 컴포넌트의 생성자이다.\
: 생성자는 해당 컴포넌트가 마운트되기 전에 호출된다.
- 사용 목적
    - this.state에 객체를 할당해 state 초기화
    - 인스턴스에 이벤트 처리 메서드 바인딩
    ``` js
    // Example
    constructor(props) {
        super(props);

        // this.state에 객체를 할당하여 state 초기화
        this.state = { number: 0 };
        // 인스턴스에 이벤트 처리 메서드 바인딩
        this.countUp = this.countUp.bind(this);
    }
    ```
- 다른 방법
    - ```this.state = { number: 0 };```\
    : Class Fields 문법을 통해 간단하게 state를 초기화 할 수 있다.
    - ```this.countUp = this.countUp.bind(this);```\
    : 화살표 함수 문법으로 정의하면 알아서 바인딩 된다.
=> 위의 예시와 같은 형태는 많이 사용 안함.
__==> but 생성자는 가장 먼저 호출된다는 사실 알아두기.__

### 2. static getDerivedStateFromProps()
: 시간의 흐름에 따라 변하는 props을 state로 동기화하는 작업이 필요한 경우 사용된다.\
: state를 갱신하기 위한 객체를 반환하거나, null을 반환해 갱신 작업을 하지 않을 수 있다.\
=> 이 API는 컴포넌트 인스턴스 접근이 불가능함.
``` js
static getDerivedStateFromProps(props, state) {

}
```

### 🚀 3. render()
: 반드시 클래스 컴포넌트에서 구현해야한다.\
: __컴포넌트의 state를 변경하지 않고, 호출될 때마다 동일한 결과를 반환해야 하며, 브라우저와 직접적인 상호작용을 하지 않아야한다.__

``` js
render() {

}
```

### 🚀 4. componentDidMount()
: 컴포넌트가 마운트된 직후에 호출.\
: 이 메소드는 DOM을 사용해야 하는 라이브러리를 불러와 초기화를 한다거나,\
: 외부에서 데이터를 불러오기 위해 네트워크 요청을 보내는 등의 작업이 필요할 때 사용한다.
``` js
componentDidMount() {

}
```

## Component Update LifeCycle API
: 컴포넌트 업데이트와 관련된 API

### 1. static getDerivedStateFromProps()
: 앞에서 설명

### 🚀 2. shouldComponentUpdate()
: props 또는 state가 새로운 값으로 갱신되어서 렌더링이 발생하기 직전에 호출.\
: 기본적으로 true를 반환하지만, 따로 작성해주어 특정 조건에 따라 false를 반환하면 render 함수를 실행 X.\
=> 이 메소드는 성능 최적화가 필요할 때 유용하게 사용된다.
> 불필요한 리렌더링을 막아 자원 낭비를 줄일 수 있다.

``` js
shouldComponentUpdate(nextProps, nextState) {

}
```

### 🚀 3. render()
: 앞에서 설명

### 4. getSnapshotBeforeUpdate()
: DOM 변화가 일어나기 직전의 상태를 가져올 수 있고, 반환 값은 componentDidUpdate 메소드의 인자로 전달된다.\
ex) 채팅 화면과 같이 스크롤의 위치를 따로 처리하는 작업이 필요한 경우.
``` js
class ScrollingList extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Are we adding new items to the list?
    // Capture the scroll position so we can adjust scroll later.
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // If we have a snapshot value, we've just added new items.
    // Adjust scroll so these new items don't push the old ones out of view.
    // (snapshot here is the value returned from getSnapshotBeforeUpdate)
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  render() {
    return (
      <div ref={this.listRef}>{/* ...contents... */}</div>
    );
  }
}
```
### 🚀 5. componentDidUpdate()
: render 메소드가 호출되고 난 다음에 발생한다.\
: 컴포넌트가 갱신되었을 때 DOM을 조작하는 경우 사용할 수 있고,\
: props의 변경 여부를 파악해 특정 함수를 실행되게 하는 작업도 가능하다.
``` js
omponentDidUpdate(prevProps, prevState, snapshot) {

}
```

## Component Unmount LifeCycle API
: 컴포넌트 마운트와 관련된 API이다.\
=> 1개 밖에 없음

### 🚀 1. componentWillUnmount()
: 컴포넌트가 제거될 때 호출된다.\
=> 해당 메소드를 통해 컴포넌트 내의 setTimeout, setInterval 제거, 네트워크 요청 취소, 데이터 구독 해제 등의 작업을 수행할 수 있다.\
: 이 컴포넌트가 호출되었다는 말은 곧 컴포넌트가 리렌더링되지 않을 거라는 말이므로 해당 메소드 내에서는 절대 setState를 호출하면 안 된다.
``` js
componentWillUnmount() {
    
}
```