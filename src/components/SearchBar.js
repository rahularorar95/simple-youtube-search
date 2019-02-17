import React, { Component } from "react";

export default class SearhBar extends Component {
  state = { term: "" };
  onSearch = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSearch}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
