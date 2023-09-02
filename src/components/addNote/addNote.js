import { useState } from "react";

const AddNote=({addNote})=>{
    const [note,setNote]=useState('')
    return(
        <div className="d-flex">
            <input type='text' className="form-control" value={note} onChange={(e)=>setNote(e.target.value)}/>
            <button className="btn btn-secondary" onClick={()=>{addNote(note);setNote('')}}>Add</button>
        </div>
    );
}

export default AddNote;