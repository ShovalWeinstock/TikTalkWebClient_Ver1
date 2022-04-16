import './MainChat.css';
import './contactItem/ContactItem'
import contacts from './contactItem/Contacts';
import { useState } from 'react'
import Search from './search/Search';
import ContactListReasults from './contactListResult/ContactListResults';
import AddContactBTN from './buttons/AddContactBTN';
import messages from './message/Messages';
import MsgLoopCreator from './message/MsgLoopCreator';
import TypingArea from './typingArea/TypingArea';
import React from 'react'
import { render } from 'react-dom'


function MainChat() {


  // const [msgList, setMsgList] = useState(messages);

  const [contactList, setContactList] = useState(contacts);
  const doSearch = function (q) {
    console.log("search" + q);
    setContactList(contacts.filter((contacts) => contacts.name.includes(q)));
  }
  const [m, setMsgList] = useState(messages);
  const addMsg = function(msg) {
    console.log("before " + messages);
    setMsgList(
    messages.concat([{msgStyle1: "media w-50 ml-auto mb-3", msgStyle2: "bg-primary rounded py-2 px-3 mb-2", msgStyle3: "text-small mb-0 text-white", content: msg}]))
    console.log("after " + messages);
  }

return (
  <div className="container py-5 px-4">
    <div className="row rounded-lg overflow-hidden shadow">
      {/* Users box */}
      <div className="col-5 px-0">
        <div className="bg-white">
          <div className="bg-gray px-4 py-2 bg-light">
            <span className="h5 mb-0 py-1">Recent</span>
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
          <MsgLoopCreator msglis={m} />
        </div>
        <TypingArea f={addMsg} />
        {/* <link rel="stylesheet" href="/path/to/manage-audio.css"></link> */}

        <div class="audio-record">
          <button id="recordButton">Start Recording</button>
          <button id="stopButton" class="inactive">Stop</button>
          <div class="download">
            <button class="hidden" id="downloadContainer">
              <a href="" download="" id="downloadButton">Download Audio</a>
            </button>
            <div class="playback">
              <audio src="" controls id="audio-playback" class="hidden"></audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default MainChat;
