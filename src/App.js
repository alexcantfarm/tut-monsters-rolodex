import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox}   from './components/search-box/search-box.component';
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    /*this is old verbose way to bind methods execution context to the syntactic context
    this.handleChange = this.handleChange.bind(this);
    */

  }
/*
the 'old' verbose way which requires bind(this) calls in constructor to work
  handleChange(e) {
    this.setState({ searchField: e.target.value });
  }
*/

/*
this will create closure with this refering to syntactic context, so this will point to App.js context
search arrow function and execution context

binds 'this' to its lexucal scope
*/
handleChange = e => this.setState({ searchField: e.target.value });

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(monsters => this.setState({monsters}));
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
      <h1>monsters rolodex</h1>
        <SearchBox
          placeHolder={'search monsters'}
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} filter={this.state.searchField} />
      </div>
    );
  }

 
}

export default App;
