import { SET_SNACKS, ADD_SNACK_QTY, REMOVE_SNACK_QTY } from '../constants/actionTypes'

export const snackReducer = (snacks = [], action) => {
  switch (action.type) {
    case ADD_SNACK_QTY:
      return snacks.map(snack => {
        if(snack.id === action.payload){
          return {...snack, quantity: snack.quantity + 1}
        }

        return snack
      })

    case REMOVE_SNACK_QTY:
      return snacks.map(snack => {
        if(snack.id === action.payload){
          return {...snack, quantity: snack.quantity - 1}
        }

        return snack
      })

    case SET_SNACKS:
      return action.payload

  }

  return snacks
}