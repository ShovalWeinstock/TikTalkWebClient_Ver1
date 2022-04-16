import { type } from "@testing-library/user-event/dist/type";
import Message from "./Message";



function MsgLoopCreator({ msglis}) {
    console.log( msglis instanceof Array);
    console.log(msglis);
    const messageList = msglis.map((msg, key) => {
        return <Message {...msg} key={key} />
    });
    return (
        <div className="list-group rounded-0">
        {messageList}
      </div>
    )
}
export default MsgLoopCreator;
