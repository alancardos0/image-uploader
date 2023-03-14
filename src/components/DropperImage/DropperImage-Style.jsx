import React from "react";
import styled from 'styled-components'


const Container = styled.div`
  background: #F6F8FB;
  border: ${props => props.borderNone ? "none" : "1px dashed #97BEF4"} ;
  border-radius: 12px;
  height: 50%;
`

const Paragraph = styled.p`
background: #F6F8FB;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;
color: #BDBDBD;
margin: 39px 80px;
`

const Img = styled.img`
  width: 100%;
  border-radius: 12px;
`

export { Container, Paragraph, Img }