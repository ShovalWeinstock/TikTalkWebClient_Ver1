import './MainChat.css';
import './contactItem/ContactItem'
import ContactItem from './contactItem/ContactItem';
import contacts from './contactItem/Contacts';
import { useState } from 'react'
import Search from './search/Search';
import ContactListReasults from './contactListResult/ContactListResults';
import AddContactBTN from './buttons/AddContactBTN';
import TypingArea from './typingArea/TypingArea';
function MainChat() {


  const [contactList, setContactList] = useState(contacts);
  const doSearch = function (q) {
    setContactList(contacts.filter((contacts) => contacts.name.includes(q)))
  }

  return (
    <div class="container py-5 px-4">
      <div class="row rounded-lg overflow-hidden shadow">
        {/* Users box */}

        <div class="col-5 px-0">
          <div class="bg-white">
            <div class="bg-gray px-4 py-2 bg-light">
              <span class="h5 mb-0 py-1">Recent</span>
              <AddContactBTN />

              <Search doSearch={doSearch} />
            </div>

            <div class="messages-box">
              <ContactListReasults contactlis={contactList} />
            </div>
          </div>
        </div>
        {/* Chat Box */}
        <div class="col-7 px-0">
          <div class="px-4 py-5 chat-box bg-white">
            {/* Sender Message */}
            <div class="media w-50 mb-3"><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg"
              alt="user" width="50" class="rounded-circle"></img>
              <div class="media-body ml-3">
                <div class="bg-light rounded py-2 px-3 mb-2">
                  <p class="text-small mb-0 text-muted">Test which is a new approach all solutions</p>
                </div>
                <p class="small text-muted">12:00 PM | Aug 13</p>
              </div>
            </div>

            {/* Reciever Message */}
            <div class="media w-50 ml-auto mb-3">
              <div class="media-body">
                <div class="bg-primary rounded py-2 px-3 mb-2">
                  <p class="text-small mb-0 text-white">Test which is a new approach to have all solutions</p>
                </div>
                <p class="small text-muted">12:00 PM | Aug 13</p>
              </div>
            </div>
          </div>
          <TypingArea />
        </div>
      </div>
    </div>
  );
}

export default MainChat;
