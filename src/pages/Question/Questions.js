import axios from 'axios';
import React, { useEffect, useState } from 'react'
import HeaderText from '../../components/HeaderText'
import { StyledContainer } from '../../components/styles/Container.styled';
import { urlJson } from '../../configs';
import { createArrayToObject, createListItem } from '../../helper/functions';
import QuestionList from './QuestionList'

const Questions = () => {
  const [question, setQuestion] = useState([])
  useEffect(() => {
    axios.get(urlJson)
      .then(res => {
        const myArray = res.data;
        setQuestion(createArrayToObject(createListItem(myArray)));
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <HeaderText Text="Auto Gen Seed Phrase?" />
      <QuestionList listQuestion={question} />
    </>
  );
};

export default Questions;
