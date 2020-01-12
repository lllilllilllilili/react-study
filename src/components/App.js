import React from 'react';
import Contact from './Contact';
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    render(){
        return (
          <Contact/>
        );
    }
}

export default App;
