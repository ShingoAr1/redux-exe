import { createSlice } from '@reduxjs/toolkit';
//action type
// export const UPDATE_MOOD = "UPDATE_MOOD";

const URL = "https://gist.githubusercontent.com/andasan/4f4976c373654f73b0a465a2441c2c91/raw/1b3c99936426b59ba4a92c7afe12fc109e4dbdcd/moods.json"

// action creator
// export const updateMood = (payload) => {
//     return {
//         type: UPDATE_MOOD,
//         payload,
//     };
// }

// const updateCatMood = createAction(UPDATE_MOOD);

export const MOODS = {
    SAD: "sad",
    HAPPY: "happy",
    SHOCKED: "shocked",
    BLISSFUL: "blissful",
    EXCITED: "excited",
    KO: "ko",
    LOVESTRUCK: "lovestruck",
}

//initial state
 export const INITIAL_STATE = { mood: MOODS.SAD, size:320, color: '#ffffff' };

// export const moodReducer = createReducer(INITIAL_STATE, {
//     [updateCatMood]: (state, action) =>
//         ({ ...state, mood: action.payload })
// })

const catSlice = createSlice({
  name:'cat',
  initialState:INITIAL_STATE,
  reducers: { 
    updateCatMood:(state,action) =>{
     state.mood = action.payload
    },
    updateColor: (state, action) =>{
      state.color = action.payload
    },
    sizeMakeSmall:(state)=>({...state, size: state.size-10}),
    sizeMakeBig:(state) =>({...state, size: state.size+10}),
  }
})


export const { updateCatMood,updateColor,sizeMakeSmall,sizeMakeBig } = catSlice.actions
export const moodReducer = catSlice.reducer
