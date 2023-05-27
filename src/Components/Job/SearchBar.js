import { useState, useEffect } from 'react'
import { useJobProvider } from '../../Providers/JobProvider'
import FilterBar from './FilterBar'
import { handleSearchBar } from '../../Functions/SearchBarFunctions'
import {CiSearch} from  "react-icons/ci"
import "./SearchBar.css"

function SearchBar() {
    const {jobs, setJobs, searchResult, setSearchResult} = useJobProvider()
    const[search, setSearch] = useState("")
    const [searchOptions, setSearchOptions] = useState({
        searchbar: "",
        isRemote: false,
        city: "",
        skills: []
    })
    
    function handleSearch() {
        if(searchOptions.search === "" && !searchOptions.isRemote && searchOptions.dropdown === ""){
            setJobs(searchResult)
        } 
        let filterSearch = searchResult
        if(searchOptions.searchbar){
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
            const cityFilter = filterSearch.filter(({city}) => city.split(",")[0] === searchOptions.city)
            filterSearch = cityFilter
        }
        if(searchOptions.skills.length > 0){
           const skillFilter = filterSearch.filter(obj => {
            let includesAll = true
            for(let i=0; i< searchOptions.skills.length; i++){
                if(!obj["skill_id"].includes(searchOptions.skills[i])){
                   includesAll = false
                   break; 
                }
            }
            if(includesAll){
                return obj
            }
           })
          filterSearch = skillFilter  
        }
        setJobs(filterSearch)
    }

    useEffect(() => {
        handleSearch()
    }, [searchOptions.searchbar, searchOptions.city, searchOptions.isRemote, searchOptions.skills.length])
  

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
            onChange={(event) => handleSearchBar(event, search, setSearch, searchOptions, setSearchOptions )}
            />
            </label>
            <FilterBar 
            searchOptions = {searchOptions}
            setSearchOptions = {setSearchOptions}/>
        </section>
    );
}

export default SearchBar;