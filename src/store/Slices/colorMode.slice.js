import { createSlice } from "@reduxjs/toolkit";

const ColorMode = createSlice({
  name: "ColorMode",
  initialState: JSON.parse(localStorage.getItem("colorMode")) || false,
  reducers: {
    setColorMode: (state, _) => {
      if (state) {
        state = false;
      } else {
        state = true;
      }
      localStorage.setItem("colorMode", JSON.stringify(state));
      return state;
    },
  },
});

export const { setColorMode } = ColorMode.actions;
export default ColorMode.reducer;
