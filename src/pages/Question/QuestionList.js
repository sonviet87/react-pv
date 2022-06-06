import React from 'react';
import Button from '../../components/Button';
import FooterText from '../../components/FooterText';
import { StyledQuestionWrap } from '../../components/styles/Question.styled';
import TapCopy from '../../components/TapCopy';
import QuestionItem from './QuestionItem';

const QuestionList = (props) => {

  const renderItem = () => {
    return props.listQuestion.map((item, index) => {
      return <QuestionItem item={item} key={index} index={index + 1} />
    })
  }
  return (
    <>
      <StyledQuestionWrap>
        {renderItem()}
      </StyledQuestionWrap >
      <TapCopy />
      <FooterText />
      <Button />


    </>
  );
};

export default QuestionList;