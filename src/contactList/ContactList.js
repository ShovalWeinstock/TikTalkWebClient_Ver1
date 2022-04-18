import ContactItem from "../users/ContactItem";

function ContactList({ contactlis, onclick}) {
     
    const contactList = contactlis.map((cont, key) => {
        return <ContactItem {...cont} key={key} onContactClick={onclick}/>
    });
    return (
        <div className="list-group rounded-0">
        {contactList}
      </div>
    )
}
export default ContactList;