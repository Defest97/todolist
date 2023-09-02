import './note.css'

const Note = ({ label, important, liked,importantChange,likeChange,onDelete }) => {
    let classNames = 'd-flex justify-content-between'
    if (important)
        classNames += ' important'
    if (liked)
        classNames += ' liked'

    return (
        <div className={classNames}>
            <p>{label}</p>
            <div>
                <button className="btn star" onClick={importantChange}><i class="bi bi-star-fill"></i></button>
                <button className="btn heart" onClick={likeChange}><i className="bi bi-suit-heart-fill"></i></button>
                <button className="btn" onClick={onDelete}><i class="bi bi-trash-fill"></i></button>
            </div>
        </div>
    )
}
export default Note