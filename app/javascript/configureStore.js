import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { GET_THINGS_SUCCESS } from "./components/HelloWorld";

const inititalState = {
  greetings: [
    {
      name: "Hi",
    },
  ],
};

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case GET_THINGS_SUCCESS:
      return { greetings: action.json.greetings };
  }
  return state;
}

export default function configureStore() {
    const store = createStore(rootReducer, inititalState,
    applyMiddleware(thunk));
    return store;
}