import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : "counter",
    initialState : 0,
    reducers : {
        increament : (state, action)=>{
            return state = state+1;
        },
        increamentby30 : (state, action)=>{

            return state = {
                value : state.value ? state.value + action.payload.value : action.payload.value,
                content : action.payload.content
            }
        },
        decreament : (state, action)=>{
            return state = state-1;

        }
    }
})

export const {increament , decreament , increamentby30} = counterSlice.actions;

export default counterSlice;