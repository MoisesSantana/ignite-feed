import { useState } from 'react'
import { CommentForm } from '../CommentForm/CommentForm'
import { Comment } from '../Comment/Comment'
import style from './Post.module.css'
import { Avatar } from '../Avatar/Avatar'

export function Post({ postInfo }) {
  const [commentList, setCommentList] = useState([])

  const submitForm = (e, message) => {
    e.preventDefault()
    setCommentList((prevState) => [...prevState, { message, date: new Date().toLocaleString() }])
  }

  const removeComment = (commentInfo) => {
    const filteredComments = commentList.filter((comment) => (
      comment.message !== commentInfo.message || comment.date !== commentInfo.date
    ))

    setCommentList(filteredComments)
  }

  return (
    <article className={ style.post }>
      <header>
        <div className={ style.author }>
          <Avatar
            user
            src="https://github.com/moisessantana.png"
          />
          <div className={ style.authorInfo}>
            <strong>Moisés Santana</strong>
            <span>Instrutor Front End</span>
          </div>
        </div>

        <time dateTime={ postInfo.date }>
          Publicado em<br />
          { postInfo.date }
        </time>
      </header>

      <div className={ style.content }>
        <p>{ postInfo.commentField }</p>
      </div>
      <CommentForm post submitForm={ submitForm } />
      <div className={ style.commentList }>
        {
          commentList.map((commentInfo) => (
            <Comment
              commentInfo={ commentInfo }
              key={ `${commentInfo.message}-${commentInfo.date}` }
              removeComment={ removeComment }
            />
          ))
        }
      </div>
    </article>
  )
}