import { Header } from './components/Header/Header'
import style from './App.module.css'
import { useState } from 'react'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Post } from './components/Post/Post'
import { CommentForm } from './components/CommentForm/CommentForm'

function App() {
  const [posts, setPosts] = useState([])

  return (
    <div className="App">
      <Header />
      <div className={ style.wrapper }>
        <Sidebar />
        <>
          <CommentForm />
          {
            posts.map(() => <Post />)
          }
        </>
      </div>
    </div>
  )
}

export default App
