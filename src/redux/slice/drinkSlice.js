import { createSlice } from '@reduxjs/toolkit'

const drinkSlice = createSlice({
    name: 'drinks',
    initialState: [],
    reducers: {
        addDrinkQty: (state, action) => {
            return state.map(drink => {
                if (drink.id === action.payload) {
                    return { ...drink, quantity: drink.quantity + 1 }
                }

                return drink
            })
        },
        removeDrinkQty: (state, action) => {
            return state.map(drink => {
                if (drink.id === action.payload) {
                    return { ...drink, quantity: drink.quantity - 1 }
                }

                return drink
            })
        },
        setDrinks: (state, action) => {
            console.log(action)
            return action.payload
        }
    }
})

export const { addDrinkQty, removeDrinkQty, setDrinks } = drinkSlice.actions
export default drinkSlice.reducer