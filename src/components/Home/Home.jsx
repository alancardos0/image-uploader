import { Link } from "react-router-dom";
import { Ul } from './Home-style'
export default function Home() {
  return (
    <Ul>
      <li><Link to="upload">Subir Imagem</Link></li>
      <li><Link to="imagens">Minhas Imagens</Link></li>
    </Ul>
  )
}