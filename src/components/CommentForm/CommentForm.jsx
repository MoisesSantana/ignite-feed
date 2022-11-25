import { useState } from 'react'
import style from './CommentForm.module.css'

export function CommentForm({ post, submitForm }) {
  const [commentField, setCommentField] = useState();

  return (
    <form
      onSubmit={ (e) => {
        submitForm(e, commentField)
        setCommentField('')
       }}
      className={
        !!post ? style.commentFormInPost : style.commentFormInHome
      }
    >
      { !!post && <strong>Deixe seu comentário</strong> }
      { !!post || <strong>Faça seu post</strong> }
      <textarea
        name="commentField"
        value={ commentField }
        onChange={ ({ target }) => setCommentField(target.value) }
        placeholder={ !!post ? 'Deixe seu comentário' : 'Faça seu post'}
      />
      <footer>
        <button type="submit">
          Publicar
        </button>
      </footer>
    </form>
  )
}