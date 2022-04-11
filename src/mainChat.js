// import './MainChat.css';
import './users/ContactItem'
import contacts from './users/Contacts';
import { useState } from 'react'
import Search from './search/Search';
import ContactListReasults from './contactListResult/ContactListResults';
import AddContactBTN from './buttons/AddContactBTN';
import TypingArea from './typingArea/TypingArea';
import messages from './message/Messages';
import MsgLoopCreator from './message/MsgLoopCreator';



function MainChat() {

  const [msgList, setMsgList] = useState(messages);
  const addMsg = function (msg) {
    // const newMsg = {content: msg};
    const newMsg = [{msgStyle1:"media w-50 ml-auto mb-3", msgStyle2:"bg-primary rounded py-2 px-3 mb-2", msgStyle3:"text-small mb-0 text-white",  content: msg}];
    // messages.push(newMsg);
    setMsgList(messages.concat(newMsg));
  }
  
  const [contactList, setContactList] = useState(contacts);
  const doSearch = function (q) {
    console.log(q);
    setContactList(contacts.filter((contacts) => contacts.name.includes(q)))
  }

  return (
    <div className="container py-5 px-4">
      <div className="row rounded-lg overflow-hidden shadow">
        {/* Users box */}
        <div className="col-5 px-0">
          <div className="bg-white">
            <div className="bg-gray px-4 py-2 bg-light">
              {/*<span className="h5 mb-0 py-1">Chats </span>*/}
              <AddContactBTN />
              <Search doSearch={doSearch} />
            </div>
            <div className="messages-box">
              <ContactListReasults contactlis={contactList} />
            </div>
          </div>
        </div>
        {/* Chat Box */}
        <div className="col-7 px-0">
          <div className="px-4 py-5 chat-box bg-white">
            <MsgLoopCreator msglis={msgList} />
          </div>
          <TypingArea />
          <button id="button-addon2" type="submit" className="btn btn-primary" onClick={addMsg}> send</button>
        </div>
      </div>
    </div>
  );
}

export default MainChat;
