function Message({msgStyle1, msgStyle2, msgStyle3, content}) {

    return (
            <div class={msgStyle1}><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg"
              alt="user" width="50" class="rounded-circle"></img>
              <div class="media-body ml-3">
                <div class={msgStyle2}>
                  <p class={msgStyle3}>{content}</p>
                </div>
                <p class="small text-muted">12:00 PM | Aug 13</p>
              </div>
            </div>
    )
}
export default Message;

