import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import style from './Comment.module.css'

export function Comment({ commentInfo }) {
  const [likes, setLikes] = useState(0)
  return (
    <div className={ style.comment }>
      <img src="https://github.com/moisessantana.png" />
      <div className={ style.commentBox}>
        <div className={ style.commentContent}>
          <header>
            <div className={ style.authorAndTime }>
              <strong>Moisés Santana</strong>
              <time dateTime={ commentInfo.date }>
                Publicado em<br />
                { commentInfo.date }
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={ 20 } />
            </button>
          </header>
          <p>{ commentInfo.message }</p>
        </div>
        <footer>
          <button onClick={ () => setLikes((prevState) => prevState + 1)}>
            <ThumbsUp />
            {`Aplaudir - ${likes}`}
          </button>
        </footer>        
      </div>
    </div>
  )
}