import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../Avatar/Avatar'
import style from './Comment.module.css'

export function Comment({ commentInfo }) {
  const [likes, setLikes] = useState(0)
  return (
    <div className={ style.comment }>
      <Avatar
        src="https://github.com/moisessantana.png"
      />
      <div className={ style.commentBox}>
        <div className={ style.commentContent}>
          <header>
            <div className={ style.authorAndTime }>
              <strong>Moisés Santana</strong>
              <time dateTime={ commentInfo.date }>
                { commentInfo.date }
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={ 24 } />
            </button>
          </header>
          <p>{ commentInfo.message }</p>
        </div>
        <footer>
          <button onClick={ () => setLikes((prevState) => prevState + 1)}>
            <ThumbsUp />
            Aplaudir
            <span>{likes}</span>
          </button>
        </footer>        
      </div>
    </div>
  )
}