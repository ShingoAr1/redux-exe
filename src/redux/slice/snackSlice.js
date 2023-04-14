import { createSlice } from '@reduxjs/toolkit'

const snackSlice = createSlice({
    name: 'snacks',
    initialState: [],
    reducers: {
        addSnackQty: (state, action) => {
            return state.map(snack => {
                if (snack.id === action.payload) {
                    return { ...snack, quantity: snack.quantity + 1 }
                }

                return snack
            })
        },
        removeSnackQty: (state, action) => {
            return state.map(snack => {
                if (snack.id === action.payload) {
                    return { ...snack, quantity: snack.quantity - 1 }
                }

                return snack
            })
        },
        setSnacks: (state, action) => action.payload
    }
})

export const { addSnackQty, removeSnackQty, setSnacks } = snackSlice.actions
export default snackSlice.reducer