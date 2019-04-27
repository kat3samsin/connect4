import { createStore } from "redux";
import GameReducer from "./reducers/GameReducer";

const store = createStore(GameReducer);

export default store;