import React, { useState, useEffect } from "react";
import CountButton from "./components/CountButton";
import CountInput from "./components/CountInput";
import Number from "./components/Number";
import styled from "styled-components";
import { connect } from "react-redux";
import * as countFunc from "./store/modules/count";
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

const App = ({ number, countFunc }) => {
  const [count, setCount] = useState(1);

  const handleCount = e => {
    const value = e.target.value;

    setCount(parseInt(value));
  };

  return (
    <Wrapper>
      <CountInput count={count} onChange={handleCount} />
      <ButtonWrapper>
        <CountButton onClick={() => null} text="+" />
        <CountButton onClick={() => null} text="-" />
      </ButtonWrapper>
      <Number number={number} />
    </Wrapper>
  );
};

export default connect(
  state => ({
    number: state.count.number
  }),
  dispatch => ({
    countFunc: bindActionCreators(countFunc, dispatch)
  })
)(App);