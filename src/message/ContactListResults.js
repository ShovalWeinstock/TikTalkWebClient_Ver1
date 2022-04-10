import ContactItem from "../contactItem/ContactItem";
function ContactListReasults({ contactlis }) {
    
    const contactList = contactlis.map((cont, key) => {
        return <ContactItem {...cont} key={key} />
    });
    return (
        <div className="list-group rounded-0">
        {contactList}
      </div>
    )
}
export default ContactListReasults;