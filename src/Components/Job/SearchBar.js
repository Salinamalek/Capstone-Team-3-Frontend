import { useState } from "react";
import FilterBar from "./FilterBar";
import { CiSearch } from "react-icons/ci"
import "./SearchBar.css"

function SearchBar() {
    const [search, setSearch] = useState("")

    return (
        <section className="search-component" >
            <input
            className="searchbar"
            type= "text"
            value={search}
            placeholder="Search Jobs..."
            onChange={(event) => setSearch(event.target.value)}
            
            />
            {/* <CiSearch size ={"28px"} color={"#41CDBC"} className="search-bar-icon" /> */}

            <FilterBar />
        </section>
    );
}

export default SearchBar;