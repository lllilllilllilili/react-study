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
   return(
     <div>
       <h1>Hello {this.props.name}</h1>
       <h2>{this.props.number}</h2>
       <div>{this.props.children}</div>
     </div>
   );
  }
}

Codelab.propTypes = {
  name:React.PropTypes.string,
  number:React.PropTypes.number.isRequired
};

Codelab.defaultProps = {
  name:'UnKnown'
};

class App extends React.Component{
  render(){
    return(
      <Codelab name={this.props.name} number = {this.props.number}>{this.props.children}</Codelab>
    ); 
  }
}






export default App;

ReactDOM.render(<App number={5}>asd</App>,document.getElementById('root'));
