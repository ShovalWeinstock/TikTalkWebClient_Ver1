import { CURRENT_CONTACT } from "./Contacts";

// function ContactItem({ name, prevText, date }) {
function ContactItem({ name1, prevWin }) {

    const updateCurrContact = () => {
        CURRENT_CONTACT={name1};
          // reload the message in the chat again
        //   refreshChat();
        alert("update");
        }
    return (

        <div className="contact" onClick={updateCurrContact}>

            <div className='profilePicture'>
                <img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" className="cover"></img>
            </div>

            <div className="contactDetails">

                <div className="contactItemHeader">
                    <h6>{name1}</h6>
                    <p className="time">{prevWin.date}</p>
                </div>

                <div className="lastMessage">
                    <p className="lastMessege">{prevWin.prevText}</p>
                </div>

            </div>
        </div>
    )
}
export default ContactItem;