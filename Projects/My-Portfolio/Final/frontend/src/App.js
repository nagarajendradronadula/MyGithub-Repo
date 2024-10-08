import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component() {
  constructor(props){
    super(props);
    this.state={apiResponse: ""};
  }

  callApi(){
    fetch("http://localhost:3050/testApi")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}))
  }

  compnentWillMount(){
    this.callApi();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <p>{this.state.apiResponse}</p>
        </header>
      </div>
    );
  }
}


export default App;
