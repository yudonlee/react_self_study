import React, { Component } from 'react';
import ScrollBox from './ScrollBox'
// import logo from './logo.svg';
// import ValidationSample from './ValidationSample';
class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref= {(ref) => this.scrollbox=ref}/>
        <buton onClick={() => this.scrollbox.scrollToBottom()}>
          맨밑으로!
        </buton>
      </div>
      // <ValidationSample/>
    );
  }
}
export default App;
