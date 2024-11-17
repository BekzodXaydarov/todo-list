import { configureStore } from "@reduxjs/toolkit";
import Data from "./Slices/data.slice"
import Modal from "./Slices/modal.slice"

export const store = configureStore({
    reducer: {
        data:Data,
        modal:Modal
    }
})