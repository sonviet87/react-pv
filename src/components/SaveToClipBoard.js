import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleClipBoard } from '../redux/actions/questions';
import { StyledCircleClipBoard, StyledIconClipBoard, StyledIconCloseClipBoard, StyledWrapClipBoard, StyledWrapperFadeClipBoard } from './styles/SaveToclipBoard.styled';

const SaveToClipBoard = () => {
  const dispath = useDispatch();
  const [count, setCount] = useState(1)
  useEffect(() => {
    let timeOut = setTimeout(() => {
      dispath(toggleClipBoard());
    }, 2000);

    let intervalCount = setInterval(() => { setCount((c) => c + 1); }, 1000)
    return () => {
      clearTimeout(timeOut);
      clearInterval(intervalCount);
    }
  }, [])

  return (
    <>
      <StyledWrapClipBoard>
        <StyledIconCloseClipBoard src="./images/down.png" alt="" onClick={() => {
          dispath(toggleClipBoard());
        }} />
        <StyledIconClipBoard><img src="./images/copy-white.png" alt="" /></StyledIconClipBoard>
        <p>Saved to clipboard</p>
        <StyledCircleClipBoard>{count}s</StyledCircleClipBoard>
      </StyledWrapClipBoard>
      <StyledWrapperFadeClipBoard></StyledWrapperFadeClipBoard>
    </>
  );
};

export default SaveToClipBoard;