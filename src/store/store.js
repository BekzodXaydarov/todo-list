import { configureStore } from "@reduxjs/toolkit";
import Data from "./Slices/data.slice"
import Modal from "./Slices/modal.slice"
import Toastify from "./Slices/toastify.slice";

export const store = configureStore({
    reducer: {
        data:Data,
        modal:Modal,
        toastify:Toastify
    }
})