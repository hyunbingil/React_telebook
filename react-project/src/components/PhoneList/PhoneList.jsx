// 경로 : src/components/PhoneList/PhoneList.js

import React from "react";
import PhoneItem from "../PhoneItem";
import styled from "styled-components";

const PhoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`;

const PhoneList = ({ list, deleteItem }) => {
  return (
    <PhoneWrapper>
      {Object.values(list).map(item => {
        return <PhoneItem {...item} key={item.id} onClick={deleteItem} />;
      })}
    </PhoneWrapper>
  );
};

export default PhoneList;