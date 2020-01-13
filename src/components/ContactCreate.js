import React from 'react';

export default class ContactCreate extends React.Component{
  constructor(props){
    super(props);
    this.state ={
        name : '',
        phone : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

  }

  //전달해줘야 하는 인자가 2개 일때
  handleChange(e){
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }
  handleClick(){
    const contact = {
      name : this.state.name,
      phone : this.state.phone
    };
    //onCreate 로 contact를 보낸다.
    this.props.onCreate(contact);

    this.setState({
      name : '',
      phone : ''
    });
    //ref 를 쓸때는 구현할 기능이 다른 방법으로 구현할 수 있는지 체크해 봐야 한다. 
    this.nameInput.focus();

  }
  //event 객체 parameter로 갖음
  handleKeyPress(e){
    if(e.charCode === 13){ //endter 다. == 13
      this.handleClick();
    }
  }

  render(){
    return (
      <div>
        <h2>Create Contact</h2>
        <p>
          <input type ="text"
                 name ="name"
                 placeholder ="name"
                 value ={this.state.name}
                 onChange = {this.handleChange}
                 ref = {(ref) => {this.nameInput = ref}}
                 />
          <input type ="text"
                 name ="phone"
                 placeholder ="phone"
                 value ={this.state.phone}
                 onChange = {this.handleChange}
                 onKeyPress = {this.handleKeyPress}
                  ref = {(ref) => {this.nameInput = ref}}
                 />
        </p>
        <button onClick={this.handleClick}>Create</button>
      </div>

    )
  }
}
ContactCreate.propTypes = {
    onCreate: React.PropTypes.func
};

ContactCreate.defaultProps = {
  onCreate: () =>{console.error('onCreate not defined')}
}
