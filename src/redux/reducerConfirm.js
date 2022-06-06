import { CHECK_ERRORS, GET_LIST_CONFIRM, TOGGLE_CONFIRM_BOARD, UPDATE_SELECTED_CONFIRM } from "./actions/confirm"


const initialState = {
    listConfirm: [],
    error: false,
    isSubmitting: false,
    isBtnDisable: false
}

export default (state = initialState, actions) => {
    switch (actions.type) {

        case GET_LIST_CONFIRM:
            state.listConfirm = actions.list;
            return { ...state }

        case UPDATE_SELECTED_CONFIRM:
            state.listConfirm.map((item) => {
                if (item.list.includes(actions.name)) {
                    item.indexSeleted = 1;
                }
                return item;

            });
            return { ...state }

        case CHECK_ERRORS:
            let flag = false;
            state.listConfirm.forEach((item) => {
                if (item.indexSeleted === -1) {
                    flag = true;
                }

                return item;

            });
            state.error = flag;
            if (!state.error) {
                state.isSubmitting = true;
            }


            return { ...state }

        case TOGGLE_CONFIRM_BOARD:
            state.isSubmitting = !state.isSubmitting
            return { ...state }

        default:
            return state
    }
}
