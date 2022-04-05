import Message from "./Message";

function MsgLoopCreator({ msglis }) {
    
    const messageList = msglis.map((cont, key) => {
        return <Message {...cont} key={key} />
    });
    return (
        <div class="list-group rounded-0">
        {messageList}
      </div>
    )
}

export default MsgLoopCreator;