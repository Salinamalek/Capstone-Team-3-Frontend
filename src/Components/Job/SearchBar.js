import { useState } from 'react'
import { useJobProvider } from '../../Providers/JobProvider'
import FilterBar from './FilterBar'
import "./SearchBar.css"

function SearchBar() {
    const {jobs, setJobs, searchResult, setSearchResult} = useJobProvider()
    const[search, setSearch] = useState("")
    
    function handleSearchBar(e) {
        const value = e.target.value
        setSearch(value)
        const filt = searchResult.filter(({title}) =>{
            const regex = new RegExp(search,"gi")
            return title.match(regex)
        } )
        setJobs(filt)

        
    }

    return (
        <section className="search-component" >
            <input
            className="searchbar"
            type= "text"
            value={search}
            placeholder="Search Jobs..."
            onChange={(event) => handleSearchBar(event)}
            
            />
            {/* <CiSearch size ={"28px"} color={"#41CDBC"} className="search-bar-icon" /> */}

            <FilterBar />
        </section>
    );
}

export default SearchBar;