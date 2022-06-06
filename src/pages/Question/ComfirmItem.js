import React from 'react';
import { StyledNumberCircle, StyledWrapperConfirmItem } from "../../components/styles/Comfirm.styled";
import ItemConfirm from './ItemConfirm';


const ComfirmItem = (props) => {
  const [btn1, btn2, btn3] = [...props.item.list];
  return (
    <StyledWrapperConfirmItem>
      <StyledNumberCircle>{props.item.primary + 1}</StyledNumberCircle> <ItemConfirm lable={btn1} name={btn1} /> <ItemConfirm lable={btn2} name={btn1} /> <ItemConfirm lable={btn3} name={btn1} />
    </StyledWrapperConfirmItem>
  );
};

export default ComfirmItem;