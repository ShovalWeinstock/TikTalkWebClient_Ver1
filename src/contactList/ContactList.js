import ContactItem from "../users/ContactItem";

function ContactList({ contactlis, onContactClick }) {
    
    const contactList = contactlis.map((cont, key) => {
        return <ContactItem {...cont} key={key} onclick={onContactClick}/>
    });
    return (
        <div className="list-group rounded-0">
        {contactList}
      </div>
    )
}
export default ContactList;