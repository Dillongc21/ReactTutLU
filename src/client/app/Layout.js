import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router'

class Layout extends React.Component {
  render() {
    <div className="layout">
      <h1>Select Tutorial</h1>
      <Link to='contact-index'><button>Contact List Tutorial</button></Link>
      {this.props.children}
    </div>
  }
}

export default Layout;
