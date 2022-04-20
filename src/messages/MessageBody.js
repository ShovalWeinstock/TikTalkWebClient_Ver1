function MessageBody({ content, type }) {
    if(type == "image") {
        return (<img src={content} className="img"></img>);
      }
      return (<p>{content}</p>);
}
export default MessageBody;