import { type } from "@testing-library/user-event/dist/type";
import Message from "./Message";


//create the chat messages
function MsgLoopCreator({msglis}) {
    const t = msglis.find(({name})=>name === "Sam");
    const messageList = msglis.map((msg, key) => {
        // console.log( msglis);
        return <Message {...msg} key={key} />
    });
    return (
        <div className="list-group rounded-0">
        {messageList}
      </div>
    )
}
export default MsgLoopCreator;
