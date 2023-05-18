import FilterBar from "./FilterBar";
import { CiSearch } from "react-icons/ci"
import "./SearchBar.css"

function SearchBar() {
    return (
        <section className="search-component" >
            <input
            type= "text"
            className="searchbar">
            </input>
            {/* <CiSearch size ={"28px"} color={"#41CDBC"} className="search-bar-icon" /> */}

            <FilterBar />
        </section>
    );
}

export default SearchBar;