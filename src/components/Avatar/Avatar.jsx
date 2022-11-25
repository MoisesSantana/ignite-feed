import style from './Avatar.module.css'

export function Avatar({ user, src }) {
  return (
    <img
      className={ !!user ? style.userAvatar : style.commentAvatar }
      src={ src }
    />
  )
}