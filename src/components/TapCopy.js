import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleClipBoard } from '../redux/actions/questions';
import { StyledTapCopy } from './styles/TapCopy.styled';

const TapCopy = () => {
  const dispath = useDispatch();
  return (
    <StyledTapCopy>
      <p>Tap to Copy or Carefully write down your seed phrase and store it in a safe place</p>
      <img src="./images/copy.png" alt='' onClick={() => {
        dispath(toggleClipBoard());
      }} />
    </StyledTapCopy>
  );
};

export default TapCopy;