// 경로 : src/components/PhoneItem/PhoneItem.js

import React from "react";
import styles from "./PhoneItem.module.scss";

const PhoneItem = ({ id, name, phone, onClick }) => {
  return (
    <div className={styles.phone_item}>
      <div className={styles.phone_item_left}>
        <div className={styles.phone_item_name}>{name}</div>
        <div className={styles.phone_item_phone}>{phone}</div>
      </div>
      <div className={styles.phone_item_right}>
        <button onClick={() => onClick(id)}>삭제</button>
      </div>
    </div>
  );
};

export default PhoneItem;
{/* onClick과 같은 이벤트 속성에 핸들러를 전달할 때에는 소괄호를 제외하고 보낸다.
하지만, 여기서는 id 파라미터를 받기 때문에 화살표 함수로 새롭게 함수를 만들어 전달한다.*/}