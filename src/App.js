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

class Contact extends React.Component{
  constructor(props){
     super(props);
     this.state ={
       contactData : [
         {name:'Abet',phone:'010-0000-0001'},
         {name:'Abet2',phone:'010-0000-0001'},
         {name:'Abe3t',phone:'010-0000-0001'},
         {name:'Ab4et',phone:'010-0000-0001'}
       ]
     }
   }

 render(){
   const mapToComponent = (data) =>{
     return data.map((contact,i)=>{
       return (<ContactInfo contact={contact} key ={i}/>)
     });
   };
   return(
     <div>
      {mapToComponent(this.state.contactData)}
     </div>
   )
 }
}

class ContactInfo extends React.Component{
 render(){
   return(
     <div>{this.props.contact.name}
       {this.props.contact.phone}
     </div>
   )
 }
}


class App extends React.Component {
 render() {
   return (
     <Contact/>
   );
 }
};

ReactDOM.render(
 <App></App>,
 document.getElementById("root")
);


export default App;

