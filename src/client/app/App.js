import React from 'react';
import {render} from 'react-dom';
import ContactsList from './ContactsList'

let contacts = [{
  id: 1,
  name: 'Dillon',
  phone: '555 333 5555'
}, {
  id: 2,
  name: 'Brian',
  phone: '444 333 5555'
}, {
  id: 3,
  name: 'Alice',
  phone: '555 333 7777'
}, {
  id: 4,
  name: 'Hank',
  phone: '111 333 5555'
}]

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Contacts List</h1>
        <ContactsList contacts={this.props.contacts} />
      </div>
    )
  }
}

render(<App contacts={contacts} />, document.getElementById('app'));
