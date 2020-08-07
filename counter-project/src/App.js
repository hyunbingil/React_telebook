import React, { Component } from "react";
import CountButton from "./components/CountButton";
import Number from "./components/Number";
import styled from "styled-components";

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

class App extends Component {
  state = {
    number: 0
  };

  constructor(props) {
    super(props);
    console.log("constructor 호출");
  }

  componentDidMount() {
    console.log("componentDidMount 호출");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate 호출");
    if (nextState.number % 3 === 0) return false;
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate 호출");
  }

  // 1. state를 업데이트하는 함수를 전달
  countUp = () => {
    this.setState(({ number }) => ({
      number: number + 1
    }));
  };

  // 2. setState 함수 앞에서 값을 받고 이를 전달
  countDown = () => {
    const { number } = this.state;
    this.setState({ number: number - 1 });
  };

  render() {
    // Destructing Assignment 문법을 사용한 방식
    const { countUp, countDown } = this;
    const { number } = this.state;

    console.log("render 호출");

    return (
      <Wrapper>
        <ButtonWrapper>
          <CountButton onClick={countUp} text="+" />
          <CountButton onClick={countDown} text="-" />
        </ButtonWrapper>
        <Number number={number} />
      </Wrapper>
    );
  }
}

export default App;