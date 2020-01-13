import React from 'react';



export default class ContactDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isEdit : false,
      name : '',
      phone : ''
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleToggle(){
    //Edit : false
    if(!this.state.isEdit){
      this.setState({
        name : this.props.contact.name,
        phone : this.props.contact.phone,

      });

    }else{
      //OK : True
      this.handleEdit();
    }
    //비동기
    this.setState({
      //toggle 기능
      isEdit: !this.state.isEdit
    });
  }

  handleChange(e){
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleEdit(){
    this.props.onEdit(this.state.name, this.state.phonee);

  }
  render(){
    const details = (<div>
      <p>{this.props.contact.name}</p>
      <p>{this.props.contact.phone}</p>
      </div>);

    //JSX 라서 edit 안에 <div> 빠지면 에러 난다.
    const edit = (
      <div>
        <p><input type ="text"
               name ="name"
               placeholder ="name"
               value ={this.state.name}
               onChange = {this.handleChange}
               /></p>
        <p><input type ="text"
               name ="phone"
               placeholder ="phone"
               value ={this.state.phone}
               onChange = {this.handleChange}
               /></p>
      </div>
    )
    const view = this.state.isEdit ? edit : details;
    const blank = (<div>Not Selected</div>);

    return(

      <div>
        <h2>Details</h2>
        {this.props.isSelected ? view : blank }
        <p>
        <button onClick={this.handleToggle}>
          {this.state.isEdit ? 'OK' : 'Edit'}
        </button>
        <button onClick={this.props.onRemove}>Remove</button>
        </p>
    </div>
    );
  }
}
//선택을 안했을때 기본값으로 설정하자.
ContactDetails.defaultProps = {
  contact : {
    name : '',
    phone : ''
  },
  //기본 에러 값 반영
  onRemove: () => {
    console.error('onRemove not defined');
  },
  onEdit : () => {
    console.log('onEdit not defined');
  }
};

ContactDetails.propTypes = {
  contact : React.PropTypes.object,
  onRemove : React.PropTypes.func,
  onEdit : React.PropTypes.func
}
