import { useState } from 'react'
import { CommentForm } from '../CommentForm/CommentForm'
import style from './Post.module.css'

export function Post({ postInfo }) {
  const [commentList, setCommentList] = useState([])

  const submitForm = (e, commentField) => {
    e.preventDefault()
    setCommentList((prevState) => [...prevState, commentField])
  }

  return (
    <article className={ style.post }>
      <header>
        <div className={ style.author }>
          <img src="https://github.com/moisessantana.png" />
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
    </article>
  )
}