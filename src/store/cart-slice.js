import { createSlice } from "@reduxjs/toolkit";

const initialState ={counter: 0};

const cart=createSlice({
    name: 'cart-slice',
    initialState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        }
    }
})

export const cartReducer=cart.reducer;
export const cartAction=cart.actions;

export default cart;
