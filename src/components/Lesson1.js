import React, { useEffect } from 'react';
import { sortArrToMaxNumber } from '../helper/functions';

const Lesson1 = () => {
  useEffect(() => {

    const arr = [0, 10, 1, 99, 9, 8, 79, 91, 22, 32, 12];
    const rs = sortArrToMaxNumber(arr);
    console.log(rs);

  }, [])

  return (
    <div>

    </div>
  );
};

export default Lesson1;