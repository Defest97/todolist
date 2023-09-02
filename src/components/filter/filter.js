const Filter=({setFilterByButtons})=>{
    return(
        <div>
            <button className="btn btn-primary" onClick={()=>setFilterByButtons('all')}>All</button>
            <button className="btn btn-danger" onClick={()=>setFilterByButtons('liked')}>Liked</button>
        </div>
    )
}
export default Filter;