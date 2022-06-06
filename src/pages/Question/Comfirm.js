
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import HeaderText from '../../components/HeaderText';
import { getListConfirmApi } from '../../redux/actions/confirm';
import ComfirmList from './ComfirmList';

const Comfirm = () => {

  const dispath = useDispatch();

  useEffect(() => {
    dispath(getListConfirmApi());
  }, []);

  return (
    <div>
      <HeaderText Text="Confirm Your Seed Phrase" />
      <ComfirmList />
    </div>
  );
};

export default Comfirm;