
import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import update from 'react-addons-update';
import ContactCreate from './ContactCreate';
export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedKey : -1,
            keyword : '',
            contactData: [{
                name: 'Abet',
                phone: '010-0000-0001'
            }, {
                name: 'Betty',
                phone: '010-0000-0002'
            }, {
                name: 'Charlie',
                phone: '010-0000-0003'
            }, {
                name: 'David',
                phone: '010-0000-0004'
            }]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleCreate = this.handleCreate.bind(this); //추가
        this.handleRemove = this.handleRemove.bind(this); //제거
        this.handleEdit = this.handleEdit.bind(this); //수정

    }

    //임의 함수는 this - bind 해줘야 한다.
    handleChange(e){
      this.setState({
          keyword: e.target.value
      });
    }

    handleClick(key){
      this.setState({
        selectedKey :  key
      });
      console.log(key,'is selected');
    }

    handleCreate(contact){
      this.setState({
        contactData: update(this.state.contactData, {
          $push: [contact]
        })
      });
    }//아이템 하나 전달하는것도 배열 형태로 해야한다.

    handleRemove(){
      this.setState({
          contactData: update(this.state.contactData,
            {$splice:[[this.state.selectedKey,1]]}
          ),
          selectedKey: -1
      });
    }

    handleEdit(name, phone){
      //이름과 전화번호를 수정한다.
      this.setState({
        contactData: update(this.state.contactData,
          {
              [this.state.selectedKey] : {
                name : {$set: name},
                phone : {$set: phone}
              }//~번째 아이템을 수정하겠다.
          }
        )
      });
    }

    render() {
        const mapToComponents = (data) => {
            data.sort();
            data = data.filter(
              (contact) => {
                return contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) > -1;
              }
            )
            return data.map((contact, i) => {
                return (<ContactInfo

                  contact={contact} key={i}
                  onClick={()=> this.handleClick(i)}
                  />);
            });
        };



        return (
            <div>
                <h1>Contacts</h1>
                <input
                  name ="keyword"
                  placeholder ="Search"
                  value = {this.state.keyword}
                  onChange={this.handleChange}
                />
                <div>{mapToComponents(this.state.contactData)}</div>
                <ContactDetails
                isSelected={this.state.selectedKey != -1}
                contact = {this.state.contactData[this.state.selectedKey]}
                />
                <ContactCreate
                  onCreate={this.handleCreate}
                  />
                //this.state.selectedKey -1 이 아니라면 true 를 전달하도록 한다.
            </div>
        );
        console.log('a');
    }
}
