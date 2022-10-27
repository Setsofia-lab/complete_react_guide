import React, { Component } from "react";
import classes from "./App.module.css";
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = {
    persons: [
      { id: "qwerty1", name: "Sam", age: 28 },
      { id: "asdfg1", name: "SamT", age: 38 },
      { id: "zxcvb1", name: "SamS", age: 58 },
    ],
    otherState: "some other value",
    showPersons: false,
  };
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // const person = Object.assign({}, this.state.persons[personIndex])
    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    let persons = null;
    let btnClass = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1> Hi hi hi</h1>
        <p className={assignedClasses.join("")}> It is working!!!!!!!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Person
        </button>

        {persons}
      </div>
    );
  }
}

export default App;

// import UserInput from "./userInput/userInput";
// import UserOutput from "./userOutput/userOutput";

// class App extends Component {
//   state = {
//     username: "SamSet",
//   };

//   usernameChangedHandler = (event) => {
//     this.setState({ username: event.target.value });
//   };
//   render() {
//     return (
//       <div className="App">
//         <UserInput
//           changed={this.usernameChangedHandler}
//           currentName={this.state.username}
//         />
//         <UserOutput userName={this.state.username} />
//         <UserOutput userName={this.state.username} />
//         <UserOutput userName="Samsat" />
//       </div>
//     );
//   }
// }

// export default App;

// import Person from "./Person/Person";

// const App = (props) => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: "Sam", age: 28 },
//       { name: "SamT", age: 38 },
//       { name: "SamS", age: 58 },
//     ],
//   });

//   // const [ otherState, setOtherState] = useState( 'some other value');

//   // console.log(this.state, otherState);

//   const switchNameHandler = (newName) => {
//     //     //console.log("Was clicked");
//     //     // Do not do this this.state.persons[0].name='Sam Set';
//     this.setState({
//       persons: [
//         { name: newName, age: 28 },
//         { name: "SamT", age: 38 },
//         { name: "SamS", age: 88 },
//       ],
//     });
//   };

//   return (
//     <div className="App">
//       <h1> Hi hi hi</h1>
//       <p> It is working!!!!!!!</p>
//       <button onClick={this.switchNameHandler.bind(this,'SamsETT')}> Switch Name</button>
//       <Person
//         name={this.state.persons[0].name}
//         age={this.state.persons[0].age}
//       />
//       <Person
//         name={this.state.persons[1].name}
//         age={this.state.persons[1].age}
//         click={this.switchNameHandler.bind(this, 'Samson')}
//       >
//         Hobbies : Swimming
//       </Person>
//       <Person
//         name={this.state.persons[2].name}
//         age={this.state.persons[2].age}
//       />
//     </div>
//   );
// };

// export default App;
