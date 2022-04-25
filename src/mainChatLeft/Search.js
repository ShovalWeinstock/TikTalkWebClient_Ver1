import { useRef } from 'react'

function Search({ doSearch }) {
    // holds the info from the search box
    const searchBox = useRef(null);
    //send the value to the main chat
    const search = function () {
        doSearch(searchBox.current.value);
    }

    return (
        <div className="searchChat">
            <input ref={searchBox} onKeyUp={search} type="text" placeholder="Search Chat" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>
    )
}
export default Search;



