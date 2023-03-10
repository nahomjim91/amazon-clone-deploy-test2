import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {

    addToBasket: (state, action) => {
      console.log(state.items.length);
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {},
  },
  extraReducers: (builder)=>{}
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
