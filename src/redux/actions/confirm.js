import axios from "axios";
import { urlJson } from "../../configs";
import { createArray6Item, createArrayToObject, createListItem } from "../../helper/functions";

export const GET_LIST_CONFIRM = 'GET_LIST_CONFIRM';
export const UPDATE_SELECTED_CONFIRM = 'UPDATE_SELECTED_CONFIRM';
export const CHECK_ERRORS = 'CHECK_ERRORS';
export const TOGGLE_CONFIRM_BOARD = 'TOGGLE_CONFIRM_BOARD';

export const getListConfirmApi = (list) => {
    return dispatch => {
        axios.get(urlJson)
            .then(res => {
                const myArray = res.data;
                const arrItems24 = createArrayToObject(createListItem(myArray));
                const arrItem18 = createListItem(arrItems24, 18);
                let newArrPush6 = createArray6Item(arrItem18);
                dispatch({
                    type: GET_LIST_CONFIRM,
                    list: newArrPush6
                })

            })
            .catch(error => console.log(error));
    };
}

export const updateSelected = (name) => {
    return {
        type: UPDATE_SELECTED_CONFIRM,
        name
    };
}

export const checkErrors = () => {
    return {
        type: CHECK_ERRORS,

    };
}

export const toggleConfirmBoard = () => {
    return {
        type: TOGGLE_CONFIRM_BOARD,
    };
}