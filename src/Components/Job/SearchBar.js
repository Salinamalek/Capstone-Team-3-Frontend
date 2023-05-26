import { useState, useEffect } from 'react'
import { useJobProvider } from '../../Providers/JobProvider'
import FilterBar from './FilterBar'
import {CiSearch} from  "react-icons/ci"
import "./SearchBar.css"

function SearchBar() {
    const {jobs, setJobs, searchResult, setSearchResult} = useJobProvider()
    const[search, setSearch] = useState("")
      // possibly a state to keep track of all search options selected, then will filter all jobs accordingly???
    const [searchOptions, setSearchOptions] = useState({
        searchbar: "",
        isRemote: false,
        city: "",
    })

    function handleSearchBar(e) {
        const value = e.target.value
        setSearch(value)
        setSearchOptions({...searchOptions, searchbar: value})
    }
    
    function handleSearch() {
        if(searchOptions.search === "" && !searchOptions.isRemote && searchOptions.dropdown === ""){
            setJobs(searchResult)
        } 
        let filterSearch = searchResult
        if(search){
            const textFilter = filterSearch.filter(({title, company, details}) =>{
                const joinSearch = search.replaceAll(" ", "")
                const regex = new RegExp(joinSearch,"gis")
                let joinText = [title.replaceAll(" ", ""), company.replaceAll(" ", ""), details.replaceAll(" ", "")]
                for (let i = 0; i <joinText.length; i++){
                    return joinText[i].match(regex)  
                }  
            })
            filterSearch= textFilter
        }
        if(searchOptions.isRemote){
            const remoteFilter = filterSearch.filter(({full_remote}) => full_remote === true)
            filterSearch = remoteFilter
        }
        if(searchOptions.city){
            console.log(searchOptions.city, "city")
            // const cityFilter = filterSearch.filter(({city}) => {
            //     console.log(city)
            // })
        }
        setJobs(filterSearch)
    }
  


    return (
        <section className="search-component" >
            <label htmlFor={search}>
                 <CiSearch size ={"28px"} color={"#41CDBC"} className="search-bar-icon" />
            <input
            className="searchbar"
            type= "text"
            id = "searchbar"
            value={search}
            placeholder="Search Jobs..."
            onChange={(event) => handleSearchBar(event)}
            />
            </label>
            <FilterBar 
            searchOptions = {searchOptions}
            setSearchOptions = {setSearchOptions}/>
        </section>
    );
}

export default SearchBar;