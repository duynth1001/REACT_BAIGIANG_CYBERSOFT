import "./Style.css"
import style from "./Style.module.css";
export const StyleComponent = () => {
  return (
    <div className="container mt-3">
      <h1>StyleComponent</h1>
      <p className="title">Title</p>
      <p className={style['subTitle']}>Sub Title</p>
    </div>
  )
}

