import { Container, Box, Paragraph, Label, Input, BotaoPulsar } from "./ImageUploader-Style"
import { DropperImage } from "../DropperImage/DropperImage"
import { useEffect, useState } from "react"
import Header from "../Header/Header"

function ImageUploader() {

  return (
    <div >
      <Header title="Subir Imagem" uploadImage="true" />

      <Container>
        <Box>
          <BotaoPulsar>Upload Your Image</BotaoPulsar>
          <Paragraph typeImage>File should be Jpeg, Png,...</Paragraph>
          <DropperImage />
          <Paragraph style={{ color: "#BDBDBD", marginTop: "19px" }}>Or</Paragraph>
          <Label htmlFor="selecao-arquivo" >Escolher Arquivo</Label>
          <Input id="selecao-arquivo" type="file" />
        </Box>
      </Container>
    </div>
  )
}

export default ImageUploader 