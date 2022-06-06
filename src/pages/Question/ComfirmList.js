import React from 'react';
import { ButtonSubmit } from '../../components/Button';
import FooterText from '../../components/FooterText';
import ComfirmItem from './ComfirmItem';
import { StyledWrapperConfirm } from "../../components/styles/Comfirm.styled";
import { useDispatch, useSelector } from 'react-redux';
import Errors from '../../components/Errors';
import { checkErrors } from '../../redux/actions/confirm';


const ComfirmList = (props) => {
  const listCf = useSelector(state => state.reducerConfirm.listConfirm);
  const errors = useSelector(state => state.reducerConfirm.error);
  const dispath = useDispatch();

  const renderItem = () => {
    return listCf.map((item, index) => {
      return <ComfirmItem item={item} key={index} />
    })
  }
  const handleOnClick = () => {
    dispath(checkErrors());
  }
  return (
    <>
      <StyledWrapperConfirm>
        {renderItem()}
      </StyledWrapperConfirm>
      {errors ? <Errors /> : ""}
      <FooterText />
      <ButtonSubmit onClick={handleOnClick} text="Submit" />
    </>

  );
};

export default ComfirmList;