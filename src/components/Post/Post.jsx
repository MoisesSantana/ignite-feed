import style from './Post.module.css'

export function Post() {
  return (
    <article className={ style.post }>
      <header>
        <div className={ style.author }>
          <img src="" alt="" />
          <div className={ style.authorInfo}>
            <strong></strong>
            <span></span>
          </div>
        </div>

        <time dateTime='' title=''></time>
      </header>

      <div className={ style.content }>
        <p></p>
        <p></p>
        <p>
          <a href="#"></a>
        </p>
        <p>
          <a href="#"></a>
        </p>
      </div>
    </article>
  )
}