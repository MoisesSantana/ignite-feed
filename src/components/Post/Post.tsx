import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CommentForm } from '../CommentForm/CommentForm'
import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar'
import style from './Post.module.css'

interface IPostProps {
  postInfo: {
    date: Date,
    commentField: string,
  }
}

interface ICommentInfo {
  message: string,
  date: string
}

export function Post({ postInfo }: IPostProps) {
  const [commentList, setCommentList] = useState([] as ICommentInfo[])

  const publishedDateFormatted = format(
    postInfo.date,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(
    postInfo.date,
    { locale: ptBR, addSuffix: true }
  )

  const submitForm = (message: string) => {
    setCommentList((prevState) => [...prevState, { message, date: new Date().toLocaleString() }])
  }

  const removeComment = (commentInfo: ICommentInfo) => {
    const filteredComments = commentList.filter((comment: ICommentInfo) => (
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

        <time title={ publishedDateFormatted } dateTime={ postInfo.date.toLocaleString() }>
          { publishedDateRelativeToNow }
        </time>
      </header>

      <div className={ style.content }>
        <p>{ postInfo.commentField }</p>
      </div>
      <CommentForm post submitForm={ submitForm } />
      <div className={ style.commentList }>
        {
          commentList.map((commentInfo: ICommentInfo) => (
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