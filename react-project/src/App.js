// 경로 : src/App.js

import React from "react";
import InputBox from "./components/InputBox";
import PhoneList from "./components/PhoneList";
import "./App.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as inputFunc from './store/modules/input';
import * as dataFunc from './store/modules/data';

const App = ({ name, phone, data, inputFunc, dataFunc }) => {
  // 인풋값 관리하는 함수 handleChange
  const handleChange = e => {
    const { name, value } = e.target;
    inputFunc.setInputValue({ name, value }); // name과 value값이 들어있는 객체를 데이터로 받는 액션 함수 사용
  }

  // 경로 : src/App.js (handleSubmit, handleRemove 함수 부분)

  const handleSubmit = () => {
    if (name === "" || phone === "") return;
    
    dataFunc.appendData({
      name, phone
    });
    inputFunc.setInputValue({
      name: 'name',
      value: ''
    });
    inputFunc.setInputValue({
      name: 'phone',
      value: ''
    });
  }

  const handleRemove = id => {
    dataFunc.removeData(id);
  }

  return (
    <div className="container">
      <InputBox
        name={name}
        phone={phone}
        onChange={handleChange}
        onSubmit={handleSubmit}			
      />
      <PhoneList list={data} deleteItem={handleRemove} />
    </div>
  );
}

// connet 함수 : state와 dispatch에 연결된 액션 생성자 함수들을 props로 매핑시켜줌.
export default connect(
  state => ({
    name: state.input.name,
    phone: state.input.phone,
    data: state.data
  }),
  dispatch => ({
    inputFunc: bindActionCreators(inputFunc, dispatch),
    dataFunc: bindActionCreators(dataFunc, dispatch)
  })
)(App); // App 컴포넌트에서 매칭한 state와 props로 받아줌.
// mapStateToProps와 mapDispatchToProps 함수를 connect 함수 내부에 만들어줌.