import React from 'react';

class Header extends React.Component {

  header() {
    return 'Student Grade Table';
  }

  render() {
    return (
      <div className="container">
        <div className='row'>
          <h1 className='col-8'>{this.header()}</h1>
          <h3 className='col-4'>Average Grade <span className="badge badge-secondary">{this.props.avg}</span></h3>
        </div>
      </div>
    );
  }

}

export default Header;
