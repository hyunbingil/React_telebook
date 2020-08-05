## State
: 컴포넌트 내에서 선언하는 데이터.\
: 데이터를 관리와 UI와 관련해서 작업하는 데에도 사용이 가능하다.\
: class components에서만 사용이 가능하다.

### Class Components 선언
``` jsx
import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = { number: 0 }
	}

	render() {
		return (
			<div>Number</div>
		);
	}
}

export default Counter;
```
- super(props)를 작성한 이유?\
: 부모클래스(상속 받은 클래스)의 멤버를 초기화시켜주기 위해서 자식 클래스의 생성자에 부모 클래스의 새성자를 호출해야만 한다.

### Class Fields 문법
: 클래스 블록 내부에서 할당 연산자 (=)를 통해 인스턴스 속성을 지정할 수 있는 문법.
> 인스턴스 속성 : 클래스 내부의 변수.
``` jsx
import React, { Component } from 'react';

class Counter extends Component {
	state = { number: 0 }
	render() {
		return (

			<div>Number</div>
		);
	}
}

export default Counter;
```

## State 활용 방법
``` jsx
import React, { Component } from 'react';

class App extends Component {
    state = { number: 0 }
    
    countUp = () = > {
        this.setState({ number: this.state.number + 1});
    }

    countDown = () = > {
        this.setState({ number: this.state.number - 1});
    }

	render() {
		return (
			<div>
				<div>
          <button>+</button>
          <button>-</button>
        </div>
        {this.state.number}
			</div>
		)
	}
}

export default App;
```
- 🌻 return 구문 안\
: 변수 사용하기 위해서는 중괄호로 둘러싸야한다.
- 🌻 number 출력\
: ```this.state.number```\
=> state는 클래스안에서 선언된 인스턴스 변수이고, 이에 접근하기 위해서는 맨 앞에 this 키워드를 적어줘야 한다.\
=> state는 json 형식의 객체이므로, 객체 내부 number에 접근하기 위해서 ```[변수명].number```과 같은 형식으로 받아와야한다.
- 🌻 setState 함수\
: 전달되는 값만 업데이트해준다.\
: 객체를 깊게 확인하지 못한다.
``` jsx
// state가 아래와 같이 선언되어 있다고 가정
state = {
	user: {
		name: "Hong gil dong",
		phone: "010-0000-0000"
	},
	number: 0
}

// user 객체가 통째로 바뀜 (올바르지 않은 예시)
this.setState({
	user: {
		phone: "010-1111-1111"
	}
});

// user 객체가 통째로 바뀌고 number 값이 변경됨 (올바르지 않은 예시)
this.setState({
	user: {
		phone: "010-1111-1111"
	},
	number: 10
});

// number 값만 변경 (올바른 예시)
this.setState({ number: 10 });

// user 값만 변경 (올바른 예시)
this.setState({
	user: {
		...this.state.user,
		phone: "010-1111-1111"
	}
});

// user와 number값 모두 변경 (올바른 예시)
this.setState({
	user: {
		...this.state.user,
		phone: "010-1111-1111"
	},
	number: 10
})
```

- 🌻 Spread 문법(...어쩌구)\
: 객체 또는 배열의 내용을 풀어주는 기능

- 🌻 onClick 이벤트
: 대소문자 확실히 구분, 이벤트 명은 CamelCase 사용\
: 이벤트에 전달하는 값은 함수여야한다.

## Props
: 부모 컴포넌트에게서 받는 데이터를 말한다.\
: 인자 값으로 받아오고, props는 number가 담긴 객체이기 때문에 저렇게 접근해준다.
- props 받는 파일
``` jsx
const Number = props => {
  return <Count>{props.number}</Count>;
};

// 구조분해문법을 통해 props 안에 있는 number를 가져옴
const Number = ({ number }) => {
  return <Count>{number}</Count>;
};
```

- props 주는 파일 (App.js)
``` jsx
<Number number={number} />
```