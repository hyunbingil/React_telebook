import { useState } from 'react';

// hooks는 파일 이름에 use를 붙이는것이 관례. => 파일 이름 useInput
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  // useState를 사용하여 상태 값과 그 값을 바꿔주는 함수 선언.

  const onChange = e => { // input 값이 바뀌었을 경우 실행 해줌.
		// Destructing Assignment
    const { target: { value } } = e;
    setValue(value);
  }

  return [ value, setValue, onChange ];
  // 상태값, 그 값을 바꾸어주는 함수, input 값이 변경되었을 때 실행시켜줄 함수 반환.
}

export default useInput;