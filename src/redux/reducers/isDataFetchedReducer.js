import { SET_DATA_FETCHED } from '../constants/actionTypes';

const initialState = false;

export const isDataFetchedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_FETCHED:
      return true;
    default:
      return state;
  }
};
