import style from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'

export function Sidebar() {
  return (
    <aside className={ style.sidebar }>
      <img
        className={ style.cover }
        src="https://images.unsplash.com/photo-1506508839781-65d2a514b73a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=30"
      />
      <div className={ style.profile }>
        <Avatar
          user
          src="https://github.com/moisessantana.png"
        />
        <strong>Moisés Santana</strong>
        <span>Instrutor Front End</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={ 20 } />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}