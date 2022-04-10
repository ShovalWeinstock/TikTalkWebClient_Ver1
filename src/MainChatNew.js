import './MainChatNew.css';
import defauldImg from './defaultImage.jpg';
import AddContactBTN from './buttons/AddContactBTN';
import { useState } from 'react'
import contacts from './contactItem/Contacts';
import ContactListReasults from './contactListResult/ContactListResults';
import Search from './search/Search';

function MainChatNew() {

    const [contactList, setContactList] = useState(contacts);
    const doSearch = function (q) {
      console.log(q);
      setContactList(contacts.filter((contacts) => contacts.name.includes(q)))
    }
    return (
        <div className="container">
            <div className="leftSide">
                <div className='header'>
                    <div className='profilePicture'>
                        <img src={defauldImg} className="cover"></img>
                    </div>
                    <AddContactBTN />
                </div>
                {/*Search Chat*/}
                <Search doSearch={doSearch} />
                {/*Chats list*/}
                <div className="messages-box">
                    <ContactListReasults contactlis={contactList} />
                </div>
            </div>

            <div className="rightSide"></div>
        </div>
    );
}

export default MainChatNew;
