import React, { useState, useRef } from "react";
import "./UploadPopup.css";
// import "../audioRecorder/audioTry"

function RecordPopup({ trigger, type, setTrigger, addMsg }) {

    const [attachment, setAttachment] = useState('');
    var recorder;

    const sendAttachment = () => {
        addMsg(type, attachment);
        // setTrigger(false);
    }

    // const stopRecording = () => {
    //     recorder.stop();
    //     sendAttachment();
    //     setTrigger(false);
    // }

    // const startRecording = () => {
    //     var device = navigator.mediaDevices.getUserMedia({ audio: true });
    //     //container for the data objects
    //     var items = [];
    //     //fill the stream with data
    //     device.then((stream) => {
    //         recorder = new MediaRecorder(stream);
    //         recorder.ondataavailable = (e) => {
    //             items.push(e.data);
    //             //create an audio player feature
    //             if (recorder.state == 'inactive') {
    //                 // blob obj holds the audio obj
    //                 var blob = new Blob(items, { type: 'audio/webm' });
    //                 setAttachment(URL.createObjectURL(blob));
    //             }
    //         }

    //         recorder.start();
    //         // setTimeout( () => { recorder.stop();}, 3000);
    //         recorder.stop();
    //         sendAttachment();

    //         // sendAttachment();
    //     })



    /*new --------------------------------------------------------------------*/


    const [stream, setStream] = useState({
        access: false,
        recorder: null,
        error: ""
    });

    const [recording, setRecording] = useState({
        active: false,
        available: false,
        url: ""
    });

    const chunks = useRef([]);

    function getAccess() {
        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then((mic) => {
                let mediaRecorder;

                try {
                    mediaRecorder = new MediaRecorder(mic, {
                        mimeType: "audio/webm"
                    });
                } catch (err) {
                    console.log(err);
                }

                const track = mediaRecorder.stream.getTracks()[0];
                track.onended = () => console.log("ended");

                mediaRecorder.onstart = function () {
                    setRecording({
                        active: true,
                        available: false,
                        url: ""
                    });
                };

                mediaRecorder.ondataavailable = function (e) {
                    console.log("data available");
                    chunks.current.push(e.data);
                };

                mediaRecorder.onstop = async function () {
                    console.log("stopped");

                    const url = URL.createObjectURL(chunks.current[0]);
                    chunks.current = [];

                    setRecording({
                        active: false,
                        available: true,
                        url
                    });
                    track.stop();
                };

                setStream({
                    ...stream,
                    access: true,
                    recorder: mediaRecorder
                });
            })
            .catch((error) => {
                console.log(error);
                setStream({ ...stream, error });
            });
            
        /*new ------------------------------------------------------------*/

    }

    if (trigger) {
        return (
            <div className="popup">
                <div className="popup-inner">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Send Audio</h5>
                                <button type="button" className="btn-close" onClick={() => { setTrigger(false) }}></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <div className="center">
                                            {/*<button id="recordBtn" type="button" className="btn btn-success" onClick={startRecording}>Record</button>*/}
                                            {/*<button id="recordBtn" type="button" className="btn btn-primary" onClick={stopRecording}>Stop</button>*/}


                                                {stream.access ? (
                                                    <div className="audio-container">
                                                        <button
                                                            className={recording.active ? "active" : null}
                                                            onClick={() => !recording.active && stream.recorder.start()}
                                                        >
                                                            Start Recording
                                                        </button>
                                                        <button onClick={() => stream.recorder.stop()}>Stop Recording</button>
                                                        {recording.available && <audio controls src={recording.url} />}
                                                    </div>
                                                ) : (
                                                    <button onClick={getAccess}>Get Mic Access</button>
                                                )}




                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default RecordPopup;
