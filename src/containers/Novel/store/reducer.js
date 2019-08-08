import { CHANGE_LIST } from './constants';

const defaultState = {
  novelList: []
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_LIST:
      return {
        ...state,
        novelList: action.list
      }
    default:
      return state
  }
}