import style from './Avatar.module.css'

export function Avatar({ user, src }) {
  console.log(src)
  return (
    <img
      className={ !!user ? style.userAvatar : style.commentAvatar }
      src={ src }
    />
  )
}