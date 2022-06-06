import React from 'react'
import { StyledTextHeader } from './styles/Text.styled'

const HeaderText = (props) => {
  return (
    <>
      <StyledTextHeader>{props.Text ? props.Text : ''}</StyledTextHeader>
    </>
  );
};


export default HeaderText;
