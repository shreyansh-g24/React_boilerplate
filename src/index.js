// importing modules //
import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./style.sass";

// declaring classes and functions //
class App extends Component {
  render(){
    return (
      <h1 className="title">Hello World!!</h1>
    );
  }
}

// execution //
// rendering app
ReactDOM.render(<App />, document.querySelector("#root"));
