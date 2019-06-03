// importing modules //
import React, {Component} from "react";
import ReactDOM from "react-dom";

// declaring classes and functions //
class App extends Component {
  render(){
    return (
      <h1>Hello World</h1>
    );
  }
}

// execution //
// rendering app
ReactDOM.render(<App />, document.querySelector("#root"));
