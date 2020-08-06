import React, { Component } from "react";
import InputBox from "./components/InputBox";
import PhoneList from "./components/PhoneList";
// 폴더까지만 경로 설정해놨다면, index.js 파일 먼저 찾음.
// 해당 파일에는 다른 컴포넌트들을 export 하는 코드가 담겨져 있으므로 import 가능.
import "./App.css";
import { dummyData, nextId, setNextId } from "./lib/dummyData.js";

class App extends Component {
  state = {
    dummyData,
    name: "",
    phone: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    const { dummyData, name, phone } = this.state;

    if (name === "" || phone === "") {
      return;
    } // 빈 값인지 확인

    this.setState({
      dummyData: {
        ...dummyData, // Spread로 기준에 있던 내용을 모두 넣어주고 추가
        [nextId]: {
          id: nextId,
          name,
          phone
        }
      },
      name: "",
      // 입력 버튼이 눌리면 input 태그의 값을 모두 지워주기 위해 빈 값으로 설정
      phone: ""
    });

    setNextId(); // dummyData.js 파일의 nextId 값에 1더해줌.
  };

  handleRemove = (id) => {
    const { [id]: _, ...dummyData } = this.state.dummyData;
    // 제거하고 싶은 아이템을 _라는 변수에 할당하고,
    // 앞에서 제외한 아이템을 뺀 데이터를 dummyData에 저장한다.
    this.setState({ dummyData }); // dummyData 넘겨주기
  };

  render() {
    const { handleInput, handleSubmit, handleRemove } = this;
    const { dummyData, name, phone } = this.state;
    return (
      <div className="container">
        <InputBox 
          name={name}
          phone={phone}
          onChange={handleInput}
          onSubmit={handleSubmit}
          />
        <PhoneList list={dummyData} deleteItem={handleRemove}/>
      </div>
    );
  }
}

export default App;