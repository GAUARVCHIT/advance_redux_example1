import {createSlice} from '@reduxjs/toolkit';

const initialState ={showCart: true};
const uiSlice = createSlice({
    name: 'ui-slice',
    initialState,
    reducers: {
        toggler(state){
            state.showCart=!state.showCart;
        }
    }
})

export const uiActions = uiSlice.actions;
export const uiReducer= uiSlice.reducer;
export default uiSlice;