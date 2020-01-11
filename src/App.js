import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
  );
  
}


class Count extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        value : 0
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
  handleClick(){
    this.setState({
      value : this.state.value+1
    });
  }
  
  render(){
    return (
      <div>
        <h2>{this.state.value}</h2>
        <button onClick = {this.handleClick}>Press Me</button>
      </div>
    )
  }
}
class App extends React.Component {
  render() {
    return (
      <Count/>
    );
  }
};

ReactDOM.render(
  <App></App>,
  document.getElementById("root")
);






export default App;
