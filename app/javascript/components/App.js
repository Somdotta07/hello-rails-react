import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HelloWorld from './HelloWorld'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Router>
          <Routes>
          <Route exact path="/" render={() => ("Home!")} />
            <Route path="/hello" render={() => <HelloWorld greeting="Friend" />} />
            </Routes>
        </Router>
      </React.Fragment>
    );
  }
}

export default App
