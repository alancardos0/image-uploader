import './style.css'
import { Link } from "react-router-dom";

export default function Header(props) {

  return (
    <header className='container'>
      <h1 className='title'>{props.title}</h1>
      <ul className='person-icon'>


        {props.uploadImage && <li><Link to={'/imagens'}>Minhas Imagens</Link></li>}
        {props.isListImage && <li ><Link to={'/upload'}>Subir Imagem</Link></li>}
        <li>
          <span className="material-symbols-outlined">
            person
          </span>
        </li>
      </ul>
    </header>
  )
}