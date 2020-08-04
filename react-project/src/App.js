import React from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import PhoneList from "./components/PhoneList";
// 폴더까지만 경로 설정해놨다면, index.js 파일 먼저 찾음.
// 해당 파일에는 다른 컴포넌트들을 export 하는 코드가 담겨져 있으므로 import 가능.
function App() {
  return (
    <div className="container">
      <InputBox />
      <PhoneList />
    </div>
  );
}

export default App;