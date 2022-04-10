import { useRef } from 'react'

function Search({ doSearch }) {

    const searchBox = useRef(null);

    const search = function () {
        doSearch(searchBox.current.value);
    }
    
    return (
        // <div className="input-group mb-3">
        //     {/*<span className="input-group-text" id="basic-addon1">@</span>*/}
        //     <input ref={searchBox} onKeyUp={search} type="text" className="form-control" placeholder="Search Chat" aria-label="Username" aria-describedby="basic-addon1"></input>
        // </div>
        <div className="searchChat">
            <input ref={searchBox} onKeyUp={search} type="text" placeholder="Search Chat" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>
    )
}
export default Search;



