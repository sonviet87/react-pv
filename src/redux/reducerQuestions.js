import { TOGGLE_CLIP_BOARD } from "./actions/questions"

const initialState = {
  openClipBoard: false
}

export default (state = initialState, actions) => {
  switch (actions.type) {

    case TOGGLE_CLIP_BOARD:
      state.openClipBoard = !state.openClipBoard
      return { ...state }

    default:
      return state
  }
}
