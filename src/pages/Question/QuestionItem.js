import React from 'react';
import { StyledQuestionItem } from '../../components/styles/Question.styled';

const QuestionItem = (props) => {
  return (
    <StyledQuestionItem >
      <span>{props.index}</span> {props.item.name}
    </StyledQuestionItem>
  );
};

export default QuestionItem;