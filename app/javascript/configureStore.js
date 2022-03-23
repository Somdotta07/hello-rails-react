import { createStore } from "redux"

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
        default:
            return state
    }
}

export default function configureStore() {
    const store = createStore(rootReducer, inititalState);
    return store;
}