import Note from "../note/note";

const NotesList=({posts,likeChange,importantChange,onDelete})=>{
    return(
        posts.map(post=><Note key={post.id} {...post} onDelete={()=>onDelete(post.id)} likeChange={()=>likeChange(post.id)} importantChange={()=>importantChange(post.id)}/>)
    )
}

export default NotesList;