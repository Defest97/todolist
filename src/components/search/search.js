const Search=({setSearchText})=>{
    return(
        <div>
            <input type='text' className="form-control" onChange={(e)=>setSearchText(e.target.value)}/>
        </div>
    )
}
export default Search;