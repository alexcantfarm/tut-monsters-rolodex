import React from 'react';  
//import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list-component';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      users:[]
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( res => res.json())
    .then(users => this.setState({users}));
  }

  render() {
    return (
      <div className="App">
        {
          this.state.users.map(user => <CardList key={user.id} email={user.email}>{user.name}</CardList>)
        }
      </div>
    );
  }
}


export default App;
