import { createSlice } from "@reduxjs/toolkit";

const characterSlice = createSlice({
    name: 'characters',
    initialState: [],
    reducers: {
        add(state, {payload}){
            state.push(payload)
        },
        del(state, { payload }){
            state.splice(state.indexOf(payload), 1);
        }
    }
})

export const { add, del } = characterSlice.actions
export default characterSlice.reducer