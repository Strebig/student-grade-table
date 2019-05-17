import React from 'react';

class Header extends React.Component {

  header() {
    return 'Student Grade Table';
  }

  render() {
    return (
      <h1>{this.header()}</h1>
    );
  }

}

export default Header;
