import { useState } from "react";
import contacts from "../dataBase/Contacts";
import users from "../dataBase/users"
import messages from "../dataBase/Chats";

function AddContact({ refreshList, refreshChatList }) {

  const [username, setUsername] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    // Clear errors
    document.getElementById("addContactError").innerHTML = "";
    // Clear input
    setUsername("")
  }

  const addCont = () => {
    var found = false;
    const usersNum = users.length;
    var i;
    for (i = 0; i < usersNum; i++) {
      if (users[i].username == username) {
        found = true;
        var newContact = { picture: users[i].profilePic, nickname: users[i].nickname };
        contacts.push(newContact);
        var placeholderChat = [{ type: "text", sentBy: "sentByOther", content: "", currTime: "" }];
        messages.push({nickname: users[i].nickname, chats: placeholderChat });
        refreshList();
        window.$('#staticBackdrop').modal('hide')
        break;
      }
    }
    refreshChatList();
    if (!found) {
      document.getElementById("addContactError").innerHTML = "Username doesn't exist";
    }
  }


  return (
    <span>
      {/* Button trigger modal */}
      <button type="button" className="btn btn-primary" id="addContact" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
          <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
        </svg>
      </button>

      {/* Modal */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Add New Contact</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Username:</label>
                  <input type="text" className="form-control" id="recipient-name"
                    value={username} onChange={(e) => setUsername(e.target.value)}></input>
                  <p id="addContactError" className="errorMessege"></p>
                </div>

              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success" onClick={addCont}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </span>
  )
}
export default AddContact;

