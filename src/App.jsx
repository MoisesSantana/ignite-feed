import { Header } from './components/Header/Header'
import style from './App.module.css'
import { useState } from 'react'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Post } from './components/Post/Post'
import { CommentForm } from './components/CommentForm/CommentForm'

function App() {
  const [posts, setPosts] = useState([])

  const submitForm = (commentField) => {
    setPosts((prevState) => [...prevState, { commentField, date: new Date() }])
  }

  return (
    <div className="App">
      <Header />
      <div className={ style.wrapper }>
        <Sidebar />
        <div>
          <CommentForm
            submitForm={ submitForm }
          />
          <h2><hr />Feed<hr /></h2>
          {
            posts.map((postInfo) => (
              <Post
                postInfo={ postInfo }
                key={ `${postInfo.commentField}-${postInfo.date}` } 
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
