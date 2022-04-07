import { configureStore } from "@reduxjs/toolkit";
import redux, { createStore } from "redux";
import authSlice from "./authSlice";
import counterSlice from "./counterSlice";

//passing reducers to our store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

//dispatching actions by action creator methods
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

////////////////////////////////////////////////////////////////
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "INCREMENT-5") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "DECREMENT") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "TOGGLE") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };
