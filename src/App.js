import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import Person from "./Person/Person";

const StyledButton = styled.button`
background-color: ${props => props.alt? 'red':'green'};
color:white;
font: inherit;
border: 1x solid blue;
padding: 8px;
cursor: pointer;
&:hover {
  background-color:${props => props.alt? 'salmon':'lightgreen'};
  color:black;
}
`;
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
    // const style = {
    //   backgroundColor: "green",
    //   font: "inherit",
    //   border: "1x solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   hover:{
    //     backgroundColor:'lightgreen',
    //     color:'black'
    //   }
    // };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      // style.backgroundColor = "red";
      // style.hover = {
      //   backgroundColor: "salmon",
      //   color: "black",
      // };
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1> Hi hi hi</h1>
        <p className={classes.join("")}> It is working!!!!!!!</p>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
          Toggle Person
        </StyledButton>

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
