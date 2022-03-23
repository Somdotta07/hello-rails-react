import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import HelloWorld from './HelloWorld'
import configureStore from "../configureStore";

const store = configureStore();

class App extends React.Component {
  render () {
    return (
     <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/hello" render={() => <HelloWorld greeting="Friend" />} />
          </Routes>
        </Router>
     </Provider>
    );
  }
}

export default App
