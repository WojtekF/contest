import { createStore } from "redux";
import combined from "./todoReducers";

const store = createStore(combined);

export default store;
