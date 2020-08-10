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
  // bindActionCreators 함수를 사용하면 쉽게 여러 액션 생성자 함수를 dispatch에 연결 가능.
});

export default connect(mapStateToProps, mapDispatchToProps)(App);