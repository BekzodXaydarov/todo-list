import { createSlice } from "@reduxjs/toolkit";

const Toastify = createSlice({
    name: "toastify",
    initialState: { isActive: false, text: "", type: "" },
    reducers: {
        OpenToastify: (state, { payload }) => {
            state = { isActive: true, ...payload }
            return state
        },
        CloseToastify: (state, _) => {
            state = { isActive: false, text: "", type: "" }
            return state
        }
    }
})

export const { OpenToastify, CloseToastify } = Toastify.actions
export default Toastify.reducer