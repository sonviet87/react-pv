import React, { useEffect } from 'react';
import axios from 'axios';
import { createArray6Item, createArrayToObject, createListItem } from '../helper/functions';
import { urlJson } from "../configs";
const Lesson2 = () => {
  useEffect(() => {
    axios.get(urlJson)
      .then(res => {
        const myArray = res.data;

        const arrItems24 = createArrayToObject(createListItem(myArray));

        console.log(arrItems24);

        const arrItem18 = createListItem(arrItems24, 18);
        console.log(arrItem18);


        let newArrPush6 = createArray6Item(arrItem18);
        console.log(newArrPush6);

      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>

    </div>
  );
};

export default Lesson2;