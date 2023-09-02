const Header = ({posts,liked}) => {
    return (
        <div className="d-flex justify-content-between">
            <h2>Name LastName</h2>
            <h2>{posts} notes {liked} liked</h2>
        </div>
    )
}
export default Header;