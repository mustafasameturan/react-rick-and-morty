import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./stores/character";

export default configureStore({
    reducer: {
        character: characterReducer
    }
})