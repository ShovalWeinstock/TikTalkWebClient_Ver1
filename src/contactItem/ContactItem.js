function ContactItem({name, prevText, date, classType}) {
    return (
        <a href="#" className={classType}>
            <div className="media"><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg"
                alt="user" width="50" className="rounded-circle"></img>
                <div className="media-body ml-4">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <h6 className="mb-0">{name}</h6><small className="small font-weight-bold">{date}</small>
                    </div>
                    <p className="font-italic mb-0 text-small">{prevText}</p>
                </div>
            </div>
        </a>
        
    )
}
export default ContactItem;