import { createStore } from "redux";
import rootReducer from "./Redux/Reducer";

const store = createStore(rootReducer);

export default store;
