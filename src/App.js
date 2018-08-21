import React, { Component } from 'react';
// import logo from './logo.svg';
import ServerDetails from './ServerDetails';
import './App.css';

//Main component that is passed to DOM
class App extends Component {
  render() {
    return (
      <div>
        {/*Component with a form to take server details and to display them in table*/}
        <ServerDetails />
      </div>
    );
  }
}

export default App;
