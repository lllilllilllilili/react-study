import React from 'react';



export default class ContactDetails extends React.Component{
  render(){
    const details = (<div>
      <p>{this.props.contact.name}</p>
      <p>{this.props.contact.phone}</p>
      </div>);
    const blank = (<div>Not Selected</div>);

    return(

      <div>
        <h2>Details</h2>
        {this.props.isSelected ? details : blank }
      </div>
    );
  }
}
//선택을 안했을때 기본값으로 설정하자.
ContactDetails.defaultProps = {
  contact : {
    name : '',
    phone : ''
  }
};
