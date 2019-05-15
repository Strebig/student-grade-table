import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  header() {
    let header = 'Student Grade Table';
    return header;
  }
  render() {
    return (
      <h1>{this.header()}</h1>
    );
  }
}

export default App;
