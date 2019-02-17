import React, { Component } from "react";
import SearhBar from "./SearchBar";
import VideoList from "./VideoList";
import axios from "../api/youtube";
import VideoDetail from "./VideoDetail";

class App extends Component {
  state = { videos: [], selectedVideo: null };
  onSearch = term => {
    console.log(term);
    axios
      .get("/search", {
        params: {
          q: term
        }
      })
      .then(response => {
        this.setState({
          videos: response.data.items,
          selectedVideo: response.data.items[0]
        });
      });
  };

  componentDidMount(){
    this.onSearch('React Redux')
  }
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearhBar onSubmit={this.onSearch} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
