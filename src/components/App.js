import React, { Component } from "react";
import SearhBar from "./SearchBar";

class App extends Component {
  onSearch = term => {
    console.log(term);
  };
  render() {
    return (
      <div className="ui container">
        <SearhBar onSubmit={this.onSearch} />
      </div>
    );
  }
}

export default App;
