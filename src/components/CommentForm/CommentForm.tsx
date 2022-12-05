import { FormEvent, useEffect, useState } from 'react'
import style from './CommentForm.module.css'

interface ICommentFormProps {
  post?: boolean,
  submitForm: (commentField: string) => void
}

export function CommentForm({ post, submitForm }: ICommentFormProps) {
  const [commentField, setCommentField] = useState('');
  const [isDisable, setIsDisable] = useState(true)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    submitForm(commentField)
    setCommentField('')
  }

  useEffect(() => {
    setIsDisable(commentField.length === 0)
  }, [commentField])

  return (
    <form
      onSubmit={ (e) => handleSubmit(e) }
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
        <button
          type="submit"
          disabled={ isDisable }
        >
          Publicar
        </button>
      </footer>
    </form>
  )
}