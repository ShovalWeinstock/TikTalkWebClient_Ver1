import { useRef } from 'react'

function Search({ doSearch }) {

    const searchBox = useRef(null);

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



