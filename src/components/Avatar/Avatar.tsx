import style from './Avatar.module.css'

interface IAvatarProps {
  user?: boolean,
  src: string
}

export function Avatar({ user, src }: IAvatarProps) {
  return (
    <img
      className={ !!user ? style.userAvatar : style.commentAvatar }
      src={ src }
    />
  )
}