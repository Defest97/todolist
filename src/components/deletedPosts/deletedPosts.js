import { useState } from "react";

const DeletedPosts = ({ deletedPosts }) => {
    const [visible,setVisible]=useState(true)
    return (
        <div className="d-flex justify-content-between">
            <div hidden={visible}><ol>
            {deletedPosts&&deletedPosts.map(post=><li>{post.label}</li>)}
            </ol></div>
            <button className="btn btn-warning align-self-start ms-auto p-2" onClick={()=>setVisible(!visible)}>Show Deleted</button>
        </div>
    )
}
export default DeletedPosts;