import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Sam", age: 28 },
      { name: "SamT", age: 38 },
      { name: "SamS", age: 58 },
    ],
    otherState: "some other value",
  };

  switchNameHandler = (newName) => {
    //console.log("Was clicked");
    // Do not do this this.state.persons[0].name='Sam Set';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "SamT", age: 38 },
        { name: "SamS", age: 88 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "sese", age: 28 },
        { name: event.target.value, age: 38 },
        { name: "SamS", age: 98 },
      ],
    });
  };
  togglePersonsHandler =() =>{
    
  }
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    return (
      <div className="App">
        <h1> Hi hi hi</h1>
        <p> It is working!!!!!!!</p>
        <button style={style} 
        onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "SAMSON")}
            changed={this.nameChangedHandler}
          >
            Hobbies : Swimming
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
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
