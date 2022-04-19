import ContactItem from "../users/ContactItem";

function ContactList({ contactlis }) {
    
    const contactList = contactlis.map((cont, key) => {
        return <ContactItem {...cont} key={key} />
    });
    return (
        <div className="list-group rounded-0">
        {contactList}
      </div>
    )
}
export default ContactList;