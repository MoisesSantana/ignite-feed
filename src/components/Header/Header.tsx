import style from './Header.module.css'
import logo from '../../assets/ignite-logo.svg'

export function Header() {
  return (
    <header className={style.header}>
      <img src={ logo } alt="logo" />
    </header>
  )
}