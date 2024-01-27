import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalAmount: 0,
    },
    reducers: {
        addItem: (state, action) => {
            //mutating the state here
            state.items.push(action.payload);
            state.totalAmount += action.payload.card?.info?.defaultPrice / 100 || action.payload.card?.info?.price / 100;
            console.log(state.totalAmount);
        },
        removeItem: (state, action) => {
            // state.items.pop();
            console.log(action.payload);
            const idx = state.items.findIndex(data => data.card?.info?.id === action.payload.card?.info?.id);
            if (idx !== -1) {
                state.items.splice(idx, 1);
                state.totalAmount -= action.payload.card?.info?.defaultPrice / 100 || action.payload.card?.info?.price / 100
            }

        },
        clearCart: (state) => {
            state.items.length = 0; //[]
            state.totalAmount = 0;
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;