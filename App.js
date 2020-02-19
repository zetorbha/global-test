import React, { Component } from 'react';
import './App.css';
import Person from "./Person/person"

// function App() {
//   return (
//     <div className="App">
//      <h1>Hi</h1>
//     </div>
//   );
// }
class App extends Component {

  state = {
    people: [
      { name: "Akshit", age: 28 },
      { name: "Shila", age: 28 },
      { name: "Sougata", age: 24 }
    ],
    other: 'some value'
  }

  switchNameHandler = () => {
    //  this.state.people[0].name="Abhijit"
    this.setState({
      people: [
        { name: "Rohon", age: 28 },
        { name: "Abhijit", age: 28 },
        { name: "Shila", age: 24 }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hello!!</h1>
        <p>This isWorking</p>
        <Person name={this.state.people[0].name} age={this.state.people[0].age} />
        <Person name={this.state.people[1].name} age={this.state.people[0].age}> My hobby is Eating  </Person>
        <Person name={this.state.people[2].name} age={this.state.people[0].age} />
        {/* <Person name="Sougata" age="24" /> */}
        <Person name={this.state.other} age={this.state.people[0].age} />

        <button onClick={this.switchNameHandler}>Switch</button>
      </div>
    )
    //return React.createElement('div', {className:'App'}, React.createElement('h1',null, 'hii!!!'));
  }
}

export default App;
