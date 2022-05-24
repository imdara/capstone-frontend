import { configureStore } from "@reduxjs/toolkit";
import dressSuggestionsReducer from "./dressSuggestionsSlice";
import messageReducer from "./messageSlice";
import nameReducer from "./nameSlice";
import userReducer from "./userSlice";
import showReducer from "./showSlice";
import tokenReducer from "./tokenSlice";

const store = configureStore({
  reducer: {
    dressSuggestions: dressSuggestionsReducer,
    message: messageReducer,
    name: nameReducer,
    user: userReducer,
    showStatus: showReducer,
    token: tokenReducer,
  },
});

export default store;
