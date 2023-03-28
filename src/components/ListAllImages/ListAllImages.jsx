import { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Button } from "react-bootstrap";

import "./style.css";
import "/public/spinner.css";
export default function ListAllImages() {
  const [data, setData] = useState(null);
  const [spinner, setSpinnerTrue] = useState(true);

  async function getAllImages() {
    const getImages = await fetch("http://localhost:3000/picture/getAll")
      .then((resp) => resp.json())
      .then((data) => setData(data));
    setSpinnerTrue(false);
  }
  useEffect(() => {
    getAllImages();
  }, []);
  console.log(data);
  async function deleteImageById(imageId) {
    const deleteImage = await fetch(
      `http://localhost:3000/picture/deleteImage/${imageId}`,
      {
        method: "DELETE",
      }
    )
      .then((resp) => resp.json())
      .then((data) => getAllImages());
  }
  if (data != null) {
    return (
      <div>
        <Header title="Listagem de Imagens " isListImage="true" />
        <section className="section__masonry">
          <div className="section__masonry-wrapper">
            {data.map((item) => (
              <div className="section__masonry-wrapper__item" key={item._id}>
                <span>
                  <img
                    key={item._id}
                    src={item.file}
                    alt=""
                    className="section__masonry-wrapper__item-img"
                  />
                  <Button
                    onClick={() => deleteImageById(item._id)}
                    style={{ width: "100%" }}
                    variant="danger"
                  >
                    Excluir
                  </Button>
                </span>
              </div>
            ))}
          </div>
        </section>
        {data.length === 0 ? (
          <h1 style={{ textAlign: "center" }}>Nada para mostrar</h1>
        ) : (
          ""
        )}
      </div>
    );
  } else {
    return (
      <div>
        <Header title="Listagem de Imagens " isListImage="true" />
        <div
          style={{ display: "flex", justifyContent: "center", margin: "100px" }}
        >
          {spinner && (
            <div className="spinner-container">
              <div className="loading-spinner"></div>
            </div>
          )}
        </div>
        {!spinner && (
          <h1 style={{ textAlign: "center" }}>Nada para mostrar!</h1>
        )}
      </div>
    );
  }
}
