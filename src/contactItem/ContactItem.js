function ContactItem({name, prevText, date, classType}) {
    return (
        <a href="#" class={classType}>
            <div class="media"><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg"
                alt="user" width="50" class="rounded-circle"></img>
                <div class="media-body ml-4">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                        <h6 class="mb-0">{name}</h6><small class="small font-weight-bold">{date}</small>
                    </div>
                    <p class="font-italic mb-0 text-small">{prevText}</p>
                </div>
            </div>
        </a>
        
    )
}
export default ContactItem;