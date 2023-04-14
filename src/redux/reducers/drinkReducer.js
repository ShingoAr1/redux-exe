import { createAction, createReducer} from '@reduxjs/toolkit'

import {
  SET_DRINKS,
  ADD_DRINK_QTY,
  REMOVE_DRINK_QTY,
} from "../constants/actionTypes";

const addDrinkQty = createAction(ADD_DRINK_QTY);
const removeDrinkQty = createAction(REMOVE_DRINK_QTY);
const setDrinks = createAction(SET_DRINKS);

const drinkReducer = createReducer([], {
  [addDrinkQty]: (state, action) => {
    return state.map((drink) => {
      if (drink.id === action.payload) {
        return { ...drink, quantity: drink.quantity + 1 };
      }

      return drink;
    });
  },
  [removeDrinkQty]: (state, action) => {
    return state.map((drink) => {
      if (drink.id === action.payload) {
        return { ...drink, quantity: drink.quantity - 1 };
      }

      return drink;
    });
  },
  [setDrinks]: (state, action) => {
    return action.payload;
  }
})

export {
  addDrinkQty,
  removeDrinkQty,
  setDrinks,
  drinkReducer
}