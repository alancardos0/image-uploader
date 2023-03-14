import { AiFillPicture } from "react-icons/ai"
import { Container, Paragraph, Img } from "./DropperImage-Style"
import { useDropzone } from 'react-dropzone'
import { useCallback, useState } from "react"
function DropperImage() {
  const [data, setData] = useState(null);


  const onDrop = useCallback(async ([image]) => {
    const reader = new FileReader()
    reader.onload = async function (e) {
      let imgBase64 = e.target.result
      await sendFileTobackend(image, imgBase64)
    }
    reader.readAsDataURL(image)
  }, [])

  async function sendFileTobackend(image, imgBase64) {
    const path = image.path
    const img = image.type.split('image/')
    const IMG_TYPE = img[1]
    await postImage(path, IMG_TYPE, imgBase64)
  }

  async function postImage(path, imgType, imageBase64) {
    const body = {
      path,
      imgType,
      file: imageBase64
    }
    await fetch('http://localhost:3000/picture', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }).then(() => getImage()).catch(error => console.error(error))
  }
  async function getImage() {
    const getImage = await fetch('http://localhost:3000/picture').then(resp => resp.json()).then(data => setData(data.file))
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  return (
    <Container {...getRootProps()} borderNone={data != null ? "true" : "false"}>
      <input {...getInputProps()} />
      {data === null ? <AiFillPicture style={{ width: "30%", height: "100px", color: "#828282" }} /> : <Img src={data} />}
    </Container>
  )
}

export { DropperImage }

