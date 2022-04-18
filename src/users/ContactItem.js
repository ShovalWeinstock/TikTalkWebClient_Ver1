import { CURRENT_CONTACT, setcontact } from "./Contacts";

// function ContactItem({ name, prevText, date }) {
function ContactItem({ name1, prevWin, onContactClick }) {

    // const updateCurrContact = () => {
    //     setcontact(name1);
    //       // reload the message in the chat again
    //     refreshChat();
    //     alert(CURRENT_CONTACT);
    //     }
    const showContactChat = () => {
          onContactClick(name1);
        }
    return (

        <div className="contact" onClick={showContactChat}>

            <div className='profilePicture'>
            <pre>{JSON.stringify(CURRENT_CONTACT,undefined,2)}</pre>
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