import {
  SET_DRINKS,
  ADD_DRINK_QTY,
  REMOVE_DRINK_QTY,
} from "../constants/actionTypes";

export const drinkReducer = (drinks = [], action) => {
  switch (action.type) {
    case ADD_DRINK_QTY:
      return drinks.map((drink) => {
        if (drink.id === action.payload) {
          return { ...drink, quantity: drink.quantity + 1 };
        }

        return drink;
      });

    case REMOVE_DRINK_QTY:
      return drinks.map((drink) => {
        if (drink.id === action.payload) {
          return { ...drink, quantity: drink.quantity - 1 };
        }

        return drink;
      });
    case SET_DRINKS:
      return action.payload;
  }

  return drinks;
};
