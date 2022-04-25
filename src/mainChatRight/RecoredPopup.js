// import React, { useState, useRef } from "react";
// import "./UploadPopup.css";

// function RecordPopup({ trigger, type, setTrigger, addMsg }) {

//     const [attachment, setAttachment] = useState('');

//     const sendAttachment = () => {
//         addMsg(type, attachment);
//         // setTrigger(false);
//     }

//     // const stopRecording = () => {
//     //     recorder.stop();
//     //     sendAttachment();
//     //     setTrigger(false);
//     // }

//     // const startRecording = () => {
//     //     var device = navigator.mediaDevices.getUserMedia({ audio: true });
//     //     //container for the data objects
//     //     var items = [];
//     //     //fill the stream with data
//     //     device.then((stream) => {
//     //         recorder = new MediaRecorder(stream);
//     //         recorder.ondataavailable = (e) => {
//     //             items.push(e.data);
//     //             //create an audio player feature
//     //             if (recorder.state == 'inactive') {
//     //                 // blob obj holds the audio obj
//     //                 var blob = new Blob(items, { type: 'audio/webm' });
//     //                 setAttachment(URL.createObjectURL(blob));
//     //             }
//     //         }

//     //         recorder.start();
//     //         // setTimeout( () => { recorder.stop();}, 3000);
//     //         recorder.stop();
//     //         sendAttachment();

//     //         // sendAttachment();
//     //     })



//     /*new --------------------------------------------------------------------*/


//     const [stream, setStream] = useState({
//         access: false,
//         recorder: null,
//         error: ""
//     });

//     const [recording, setRecording] = useState({
//         active: false,
//         available: false,
//         url: ""
//     });

//     const chunks = useRef([]);

//     function getAccess() {
//         navigator.mediaDevices
//             .getUserMedia({ audio: true })
//             .then((mic) => {
//                 let mediaRecorder;

//                 try {
//                     mediaRecorder = new MediaRecorder(mic, {
//                         mimeType: "audio/webm"
//                     });
//                 } catch (err) {
//                     console.log(err);
//                 }

//                 const track = mediaRecorder.stream.getTracks()[0];

//                 mediaRecorder.onstart = function () {
//                     setRecording({
//                         active: true,
//                         available: false,
//                         url: ""
//                     });
//                 };

//                 mediaRecorder.ondataavailable = function (e) {
//                     chunks.current.push(e.data);
//                 };

//                 mediaRecorder.onstop = async function () {
//                     const url = URL.createObjectURL(chunks.current[0]);
//                     chunks.current = [];

//                     setRecording({
//                         active: false,
//                         available: true,
//                         url
//                     });
//                     track.stop();
//                     addMsg(type, url);
//                 };

//                 setStream({
//                     ...stream,
//                     access: true,
//                     recorder: mediaRecorder
//                 });
//             })
//             .catch((error) => {
//                 console.log(error);
//                 setStream({ ...stream, error });
//             });

//         /*new ------------------------------------------------------------*/

//     }

//     if (trigger) {
//         return (
//             <div className="popup">
//                 <div className="popup-inner">
//                     <div className="modal-dialog">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title" id="staticBackdropLabel">Send Audio</h5>
//                                 <button type="button" className="btn-close" onClick={() => { setTrigger(false) }}></button>
//                             </div>
//                             <div className="modal-body">
//                                 <form>
//                                     <div className="mb-3">
//                                         <div className="center">
//                                             {/*<button id="recordBtn" type="button" className="btn btn-success" onClick={startRecording}>Record</button>*/}
//                                             {/*<button id="recordBtn" type="button" className="btn btn-primary" onClick={stopRecording}>Stop</button>*/}


//                                                 {stream.access ? (
//                                                     <div className="audio-container">
//                                                         <button
//                                                             className={recording.active ? "active" : null}
//                                                             onClick={() => !recording.active && stream.recorder.start()}
//                                                         >
//                                                             Start Recording
//                                                         </button>
//                                                         <button onClick={() => stream.recorder.stop()}>Stop Recording</button>
//                                                     </div>
//                                                 ) : (
//                                                     <button onClick={getAccess}>Get Mic Access</button>
//                                                 )}




//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
// export default RecordPopup;













function RecordPopup({ trigger, type, setTrigger, addMsg }) {

    var audioRecorder = {
        /** Stores the recorded audio as Blob objects of audio data as the recording continues*/
        audioBlobs: [], /*of type Blob[]*/
        /** Stores the reference of the MediaRecorder instance that handles the MediaStream when recording starts*/
        mediaRecorder: null, /*of type MediaRecorder*/
        /** Stores the reference to the stream currently capturing the audio*/
        streamBeingCaptured: null, /*of type MediaStream*/
        /** Start recording the audio
          * @returns {Promise} - returns a promise that resolves if audio recording successfully started
          */
        start: function () {
                //Feature Detection
                if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
                    //Feature is not supported in browser
                    //return a custom error
                    return Promise.reject(new Error('mediaDevices API or getUserMedia method is not supported in this browser.'));
                }
                else {
                    //Feature is supported in browser
                     
                    //create an audio stream
                    return navigator.mediaDevices.getUserMedia({ audio: true }/*of type MediaStreamConstraints*/)
                        //returns a promise that resolves to the audio stream
                        .then(stream /*of type MediaStream*/ => {
                             
                            //save the reference of the stream to be able to stop it when necessary
                             audioRecorder.streamBeingCaptured = stream;
     
                            //create a media recorder instance by passing that stream into the MediaRecorder constructor
                            audioRecorder.mediaRecorder = new MediaRecorder(stream); /*the MediaRecorder interface of the MediaStream Recording
                            API provides functionality to easily record media*/
     
                            //clear previously saved audio Blobs, if any
                            audioRecorder.audioBlobs = [];
     
                            //add a dataavailable event listener in order to store the audio data Blobs when recording
                            audioRecorder.mediaRecorder.addEventListener("dataavailable", event => {
                                //store audio Blob object
                                audioRecorder.audioBlobs.push(event.data);
                            });
     
                            //start the recording by calling the start method on the media recorder
                            audioRecorder.mediaRecorder.start();
                    });
     
                /* errors are not handled in the API because if its handled and the promise is chained, the .then after the catch will be executed*/
                }
        },


        /** Stop the started audio recording
          * @returns {Promise} - returns a promise that resolves to the audio as a blob file
          */
         stop: function () {
            //return a promise that would return the blob or URL of the recording
            return new Promise(resolve => {
                //save audio type to pass to set the Blob type
                let mimeType = audioRecorder.mediaRecorder.mimeType;
     
                //listen to the stop event in order to create & return a single Blob object
                audioRecorder.mediaRecorder.addEventListener("stop", () => {
                    //create a single blob object, as we might have gathered a few Blob objects that needs to be joined as one
                    let audioBlob = new Blob(audioRecorder.audioBlobs, { type: mimeType });
     
                    //resolve promise with the single audio blob representing the recorded audio
                    resolve(audioBlob);
                });
     
            //stop the recording feature
            audioRecorder.mediaRecorder.stop();
     
            //stop all the tracks on the active stream in order to stop the stream
            audioRecorder.stopStream();
     
            //reset API properties for next recording
            audioRecorder.resetRecordingProperties();
            });
        },
        /** Stop all the tracks on the active stream in order to stop the stream and remove
         * the red flashing dot showing in the tab
         */
        stopStream: function() {
            //stopping the capturing request by stopping all the tracks on the active stream
            audioRecorder.streamBeingCaptured.getTracks() //get all tracks from the stream
                    .forEach(track /*of type MediaStreamTrack*/ => track.stop()); //stop each one
        },
        /** Reset all the recording properties including the media recorder and stream being captured*/
        resetRecordingProperties: function () {
            audioRecorder.mediaRecorder = null;
            audioRecorder.streamBeingCaptured = null;
     
            /*No need to remove event listeners attached to mediaRecorder as
            If a DOM element which is removed is reference-free (no references pointing to it), the element itself is picked
            up by the garbage collector as well as any event handlers/listeners associated with it.
            getEventListeners(audioRecorder.mediaRecorder) will return an empty array of events.*/
        }
    }

    


    function startAudioRecording() {
        //start recording using the audio recording API
        audioRecorder.start()
            .then(() => { //on success
                console.log("Recording Audio...")    
            })    
            .catch(error => { //on error
                //No Browser Support Error
                if (error.message.includes("mediaDevices API or getUserMedia method is not supported in this browser.")) {       
                    console.log("To record audio, use browsers like Chrome and Firefox.");
                }
            });
    }


    function StopAudioRecording() {
        //stop the recording using the audio recording API
        console.log("Stopping Audio Recording...")
        audioRecorder.stop()
            .then(audioAsblob => { //stopping makes promise resolves to the blob file of the recorded audio
                console.log("stopped with audio Blob:", audioAsblob);
     
                //Do something with the recorded audio
                //...
            })
            .catch(error => {
                //Error handling structure
                switch (error.name) {
                    case 'InvalidStateError': //error from the MediaRecorder.stop
                        console.log("An InvalidStateError has occured.");
                        break;
                    default:
                        console.log("An error occured with the error name " + error.name);
                };
     
            });
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
                                            <button id="recordBtn" type="button" className="btn btn-success" onClick={startAudioRecording}>Record</button>
                                            <button id="recordBtn" type="button" className="btn btn-primary" onClick={StopAudioRecording}>Stop</button>


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

