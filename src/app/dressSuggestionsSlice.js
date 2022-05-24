import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const dressSuggestionsSlice = createSlice({
  name: "dressSuggestions",
  initialState,
  reducers: {
    setDressSuggestions: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDressSuggestions } = dressSuggestionsSlice.actions;

export default dressSuggestionsSlice.reducer;
