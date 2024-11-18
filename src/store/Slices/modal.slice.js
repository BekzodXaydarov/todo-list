import { createSlice } from "@reduxjs/toolkit";

const Modal = createSlice({
  name: "modal",
  initialState: { isActive: false, update: {} },
  reducers: {
    OpenModal: (state, _) => {
      state.isActive = true;
      return state;
    },
    CloseModal: (state, _) => {
      state.isActive = false;
      return state;
    },
    setUpdate: (state, { payload }) => {
      state.update = { ...payload, isUpdate: true }
      return state
    }
  },
});

export const { OpenModal, CloseModal, setUpdate } = Modal.actions;
export default Modal.reducer