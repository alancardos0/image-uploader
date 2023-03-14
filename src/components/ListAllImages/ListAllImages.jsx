import { useEffect, useState } from 'react'
import Header from '../Header/Header'
import './style.css'
import '../../../public/spinner.css'
export default function ListAllImages() {
  const [data, setData] = useState(null);
  const [spinner, setSpinnerTrue] = useState(true);
  useEffect(() => {
    async function getAllImages() {
      const getImages = await fetch('http://localhost:3000/picture/getAll').then(resp => resp.json()).then(data => setData(data))
      setSpinnerTrue(false)
    }
    getAllImages();
  }, [])
  if (data != null) {
    return (
      <div>
        <Header title="Listagem de Imagens " isListImage='true' />
        <section className="section__masonry">
          <div className="section__masonry-wrapper">
            {data.map((item) =>
            (

              <div className="section__masonry-wrapper__item" key={item._id}>
                <img key={item._id} src={item.file} alt=""
                  className="section__masonry-wrapper__item-img" />
              </div>
            )
            )
            }
          </div>
        </section>
        {data.length === 0 ? <h1 style={{ textAlign: 'center' }}>Nada para mostrar</h1> : ""}
      </div>
    )
  } else {
    return (
      <div>
        <Header title="Listagem de Imagens " isListImage='true' />
        <div style={{ display: 'flex', justifyContent: 'center', margin: '100px' }}>
          {spinner && <div className="spinner-container">
            <div className="loading-spinner">
            </div>
          </div>}
        </div>
      </div>
    )
  }

}