import './TypingArea.css';
import addMsg from '../MainChat'
function TypingArea({ doSearch }) {

    return (

        // <input type="text" placeholder="Type a message" aria-describedby="button-addon2"
        //             className="form-control rounded-0 border-0 py-4 bg-light"></input>

        // <div className="input-group">
        //     <div className='chatInput'>
        //         <input type="text" placeholder="Type A Message"></input>
        //     </div>
        // </div>



// <div class="btn-group dropup">
// <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//   Dropup
// </button>
// <ul class="dropdown-menu">
//   <!-- Dropdown menu links -->
// </ul>
// </div>

        <div class="input-group">
            <input type="text" class="form-control" aria-label="Text input with segmented dropdown button"></input>
                <button type="button" class="btn btn-outline-secondary">Action</button>
                <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
        </div>

    )
}
export default TypingArea;



