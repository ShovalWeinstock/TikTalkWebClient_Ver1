import { useState } from "react";
import "./UploadPopup.css";

function UploadPopup( {trigger, type, setTrigger, addMsg}) {

    const [attachment, setAttachment] = useState('');


    const uploadAttachment = (e) => {
        setAttachment(URL.createObjectURL(e.target.files[0]));
    }

    const sendAttachment = () => {
        addMsg(type, attachment);
        setTrigger(false);
    }

    if (trigger) {
        return (
            <div className="popup">
                <div className="popup-inner">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Upload {type}</h5>
                                <button type="button" className="btn-close" onClick={() => { setTrigger(false) }}></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <input className="form-control" type="file" id="formFile" accept={(type) + "/*"} onChange={uploadAttachment} ></input>
                                        <p id="addContactError" className="errorMessege"></p>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { setTrigger(false) }}>Close</button>
                                <button type="button" className="btn btn-success" onClick={sendAttachment}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            // <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            // <div className="modal-dialog">
            //         <div className="modal-content">
            //             <div className="modal-header">
            //                 <h5 className="modal-title" id="staticBackdropLabel">Upload {props.type}</h5>
            //                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            //             </div>
            //             <div className="modal-body">
            //                 <form>
            //                     <div className="mb-3">
            //                         <input className="form-control" type="file" id="formFile" accept={(props.type) + "/*"} onChange={uploadAttachment} ></input>
            //                         <p id="addContactError" className="errorMessege"></p>
            //                     </div>

            //                 </form>
            //             </div>
            //             <div className="modal-footer">
            //                 <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
            //                 <button type="button" className="btn btn-success" onClick={() => { props.sendMsg(props.type, attachment) }}>Send</button>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        );

    }
    return ("");
}
export default UploadPopup;
