import { createSlice } from "@reduxjs/toolkit";

const Modal = createSlice({
  name: "modal",
  initialState: false,
  reducers: {
    OpenModal: (state, _) => {
      state = true;
      return state;
    },
    CloseModal: (state, _) => {
      state = false;
      return state;
    },
  },
});

export const { OpenModal, CloseModal } = Modal.actions;
export default Modal.reducer