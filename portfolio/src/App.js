import React, { Component } from "react";
import Projects from "./Projects";

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    const bio = this.state.displayBio ? (
      <div>
        <button onClick={this.toggleDisplayBio}>Read Less</button>
        <p>I live in Irvine, CA, and code every day.</p>
        <p>I think React.js is awesome.</p>
        <p>Besides coding, I also love to cook and eat awesome food.</p>
      </div>
    ) : (
      <div>
        <button onClick={this.toggleDisplayBio}>Read More</button>
      </div>
    );
    return (
      <div>
        <h1>Hello!</h1>
        <p>My name is Stephen. I'm a software engineer.</p>
        <p>I'm always looking forward to working on meaningful projects.</p>
        {bio}
        <hr />
        <Projects />
      </div>
    );
  }
}

export default App;
