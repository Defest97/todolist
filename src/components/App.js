import { useState } from 'react';
import AddNote from './addNote';
import Filter from './filter';
import Header from './header';
import Search from './search';
import NotesList from './notesList';
import DeletedPosts from './deletedPosts';


function App() {
  const [posts, setPosts] = useState([
    { id: 1, label: 'Learn React', important: true, liked: true },
    { id: 2, label: 'Learn React1', important: false, liked: false },
    { id: 3, label: 'Learn React12', important: false, liked: false },
  ])
  const [deletedPosts, setDeletedPosts] = useState(null)
  const likeChange = (id) => {
    const postIndex = posts.findIndex(post => post.id === id);
    const first = posts.slice(0, postIndex);
    const last = posts.slice(postIndex + 1);
    const postChanged = { ...posts[postIndex], liked: !posts[postIndex].liked };
    setPosts([...first, postChanged, ...last])
  }
  const importantChange = (id) => {
    const postIndex = posts.findIndex(post => post.id === id);
    const first = posts.slice(0, postIndex);
    const last = posts.slice(postIndex + 1);
    const postChanged = { ...posts[postIndex], important: !posts[postIndex].important };
    setPosts([...first, postChanged, ...last])
  }
  const onDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id))
    if (deletedPosts !== null) {
      setDeletedPosts([...deletedPosts, ...posts.filter(post => post.id === id)]);
      console.log(deletedPosts)
      return;
    }
    setDeletedPosts(posts.filter(post => post.id === id))
  }
  const addNote = (note) => {
    const newPost = { id: posts.length + 1, label: note, important: false, liked: false }
    console.log(newPost)
    setPosts([...posts, newPost])
  }
  const [filterByButtons, setFilterByButtons] = useState('all')
  const filterPostsByButtons = () => {
    if (filterByButtons === 'liked')
      return posts.filter(post => post.liked === true)
    return posts;

  }
  const [searchText, setSearchText] = useState('')
  const filterPosts = (tmpPosts) => {
    if (searchText.length > 0)
      return tmpPosts.filter(post => post.label.includes(searchText))
    return tmpPosts
  }
  const filteredPosts = filterPosts(filterPostsByButtons());
  return (
    <div className="App">
      <Header posts={posts.length} liked={posts.filter(elem => elem.liked === true).length} />
      <div className='d-flex'>
        <div className='flex-grow-1'><Search setSearchText={setSearchText} /></div>
        <div ><Filter setFilterByButtons={setFilterByButtons} /></div>
      </div>
      <NotesList posts={filteredPosts} onDelete={onDelete} likeChange={likeChange} importantChange={importantChange} />
      <AddNote addNote={addNote} />
      <DeletedPosts deletedPosts={deletedPosts} />
    </div>
  );
}

export default App;
