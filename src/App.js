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

class Codelab extends React.Component{
  render(){
    let text = "Hi I am codelab"
    let style = {
      backgroundColor:'pink'
    }
   return(
    <div style={style}>{text}</div>
   );
  }
}
class test extends React.Component{
  render(){
    return(
      <Codelab/>
    ); 
  }
}




export default App;

ReactDOM.render(<test/>,document.getElementById('root'));
