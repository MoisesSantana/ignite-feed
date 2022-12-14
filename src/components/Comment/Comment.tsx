import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../Avatar/Avatar'
import style from './Comment.module.css'

interface ICommentInfo {
  date: string,
  message: string
}

interface ICommentProps {
  commentInfo: ICommentInfo
  removeComment: (commentInfo: ICommentInfo) => void
}

export function Comment({ commentInfo, removeComment }: ICommentProps) {
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

            <button
              title="Deletar comentário"
              onClick={ () => removeComment(commentInfo) }
            >
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