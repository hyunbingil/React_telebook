## React Hooks
### useState
: 상태관리를 할 수 있다.
``` js
const [ number, setNumber ] = useState(0);
```
: useState는 상태 값과 상태 값을 변화시키는 함수를 배열 형식으로 반환한다.\
: useState의 인자는 상태 값의 초깃값에 해당한다.\
-> 위의 예시에는 number이 0이 될 것이다.
``` js
<CountButton onClick={() => setNumber(number + 1)} text="+" />
<CountButton onClick={() => setNumber(number - 1)} text="-" />
```
: 이러한 형식으로 useState를 사용한다.

### useEffect
: 총 3개의 LifeCycle API를 구현할 수 있다.
``` js
const App = () => {
  const [ number, setNumber ] = useState(0);

  useEffect(() => { // componentDidMount
    console.log("useEffect -> componentDidMount");

    return () => { // componentWillUnmount
      console.log("useEffect -> componentWillUnmount");
    }
  }, []);

  useEffect(() => { // componentDidUpdate
    console.log(`componentDidUpdate (number) -> ${number}`);
  }, [number]);

  useEffect(() => {
    console.log("useEffect -> componentDidUpdate");
  });

  return (
    <Wrapper>
      <ButtonWrapper>
        <CountButton onClick={() => setNumber(number + 1)} text="+" />
        <CountButton onClick={() => setNumber(number - 1)} text="-" />
      </ButtonWrapper>
      <Number number={number} />
    </Wrapper>
  );
}
```
#### 🚩 componentDidMount
``` js
useEffect(() => { // componentDidMount
console.log("useEffect -> componentDidMount");

return () => { // componentWillUnmount
    console.log("useEffect -> componentWillUnmount");
}
}, []);
```
: 첫 번째 인자를 함수로 받고, 두 번째 인자를 빈 배열로 받았다.
- 첫 번째 인자로 받은 함수\
: 특정 시기에 실행될 함수
- 💡 두 번째 인자로 받은 빈 배열\
: 컴포넌트가 처음 렌더링 될 때만 실행하라는 의미.\
__=> componentDidMount와 같은 기능__ 

#### 🚩 componentWillUnmount
``` js
useEffect(() => { // componentDidMount
console.log("useEffect -> componentDidMount");

return () => { // componentWillUnmount
    console.log("useEffect -> componentWillUnmount");
}
}, []);
```
: return 구문 주목!\
=> 해당 Hooks에서 두 번째 인자값으로 빈배열을 받을 때,\
==> return 구문의 함수는 componentWillUnmount와 동일한 기능.
#### 🚩 componentDidUpdate
``` js
useEffect(() => { // componentDidUpdate
console.log(`componentDidUpdate (number) -> ${number}`);
}, [number]);
```
: 두 번째 인자값으로 비어있지 않은 배열을 받았다.
- 두 번째 인자값으로 받은 배열\
: 배열 안에 state, props 등과 같은 값이 들어올 수 있다.\
__==> 배열안에 변수가 들어 있다면 그 변수값이 변경될 떄마다 함수를 실행시킨다.__

#### 🚩 인자값 없을 경우
``` js
useEffect(() => {
console.log("useEffect -> componentDidUpdate");
});
```
: 두 번째 인자값이 없다는 것은 컴포넌트가 업데이트 될 때마다 실행하라는 의미.
