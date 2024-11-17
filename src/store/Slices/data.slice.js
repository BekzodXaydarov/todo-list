import { createSlice } from "@reduxjs/toolkit";

const Data = createSlice({
  name: "data",
  initialState: JSON.parse(localStorage.getItem("data")) || {
    todo: [],
    filter: "all",
    search: "",
  },
  reducers: {
    addData: (state, { payload }) => {
      state.todo.push({
        id: state.todo.length + 1,
        text: payload,
        completed: false,
      });
      localStorage.setItem("data", JSON.stringify(state));
      return state;
    },
    removeData: (state, { payload }) => {
      state.todo = state.todo.filter((item) => item != payload.id);      
      localStorage.setItem("data", JSON.stringify(state));
      return state;
    },
    clearData: (state, _) => {
      localStorage.removeItem("data");
      state.todo = [];
      return state;
    },
    toggleTodo: (state, { payload }) => {
      const todo = state.todo.filter((item) => item.id === payload)[0];
      state.todo = state.todo.map((item) => {
        return item.id == todo.id
          ? { ...todo, completed: !todo.completed }
          : item;
      });
      localStorage.setItem("data", JSON.stringify(state));
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
      localStorage.setItem("data", JSON.stringify(state));
      return state;
    },
    setSearch: (state, { payload }) => {
      state.search = payload;
      return state;
    },
  },
});

export const {
  addData,
  removeData,
  clearData,
  toggleTodo,
  setFilter,
  setSearch,
} = Data.actions;
export default Data.reducer;
