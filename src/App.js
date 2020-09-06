import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox}   from './components/search-box/search-box.component';
class App extends React.Component {
  constructor(props) {
    // by passing the props into the ctor,
    // you can access and use them here as well
    super(props);
    console.log(props)
    this.state = {
      monsters: [],
      searchField: '',
      number: this.props.increment
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
onSearchChange = e => this.setState({ searchField: e.target.value });

/*
when wanting to change the state with using the previous value of state, the 
following function argument syntax should be used,
and accessing the state values/objects via prevState/first argument of the 
update method
*/
updateStateUsingPreviousState = () => {
  this.setState((prevState,prevProps) => { 
    return {number: prevState.number + prevProps.increment };
  },
  () => console.log(this.state.number))};

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
      <button onClick={this.updateStateUsingPreviousState}>change num</button>
      <h1>monsters rolodex{this.state.number}</h1>
        <SearchBox
          placeHolder={'search monsters'}
          handleChange={this.onSearchChange}
        />
        <CardList monsters={filteredMonsters} filter={this.state.searchField} />
      </div>
    );
  }

 
}

export default App;
