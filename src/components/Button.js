import React from 'react';
import { StyledButton, StyledLink } from './styles/Button.styled';

const Button = () => {
  return (

    <StyledLink to="/confirm">Next</StyledLink>
  );
};

export const ButtonSubmit = (props) => {

  return (
    <StyledButton onClick={props.onClick} disabled={props.disabled} >{props.text}</StyledButton>
  );
};



export default Button;