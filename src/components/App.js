import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    render(){
        return (
            <div>
                <h1>Hello React Skeleton!!!@!!!</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => { this.setState({value: this.state.value + 1}) }}>눌러 보시오.</button>
            </div>
        );
    }
}

export default App;
