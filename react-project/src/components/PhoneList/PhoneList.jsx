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
      {/* <PhoneItem {...list["0"]} />
       {/* <PhoneItem id={list["0"].id} name={list["0"].name}
       phone={list["0"].phone} /> 과 동일 *}
      <PhoneItem {...list["1"]} />
      <PhoneItem {...list["2"]} />
      <PhoneItem {...list["3"]} />
      <PhoneItem {...list["4"]} /> */}
    </PhoneWrapper>
  );
};

export default PhoneList;