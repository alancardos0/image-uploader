import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
display: flex;
justify-content: center;
align-content: center;
width: 100%;
align-items: center;
`
const Box = styled.div`
background: #FFFFFF;
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
border-radius: 12px;
text-align: center;
padding: 36px;
width: 20%;
`
const Paragraph = styled.p`
background: #FFFFFF;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
margin-bottom: ${props => props.typeImage ? "29px" : ""};
font-size: ${props => props.typeImage ? "12px" : "18px"};
line-height: 27px;
color: ${props => props.typeImage ? '#828282' : '#4F4F4F'};
`

const Label = styled.label`
  background: #2F80ED;
  border-radius: 8px;
  display: inline-block;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.035em;
  padding:6px 10px;
  color: #FFFFFF;
  margin-top: 15px ;
  font-family: Noto Sans;
  cursor: pointer;
`

const BotaoPulsar = styled.button`
  border: none;
  background-color: #fff;
  font-size: 18px;
  font-weight: 600;
  font-family: Noto Sans;
  animation: pulsate 2s ease-out;
  animation-iteration-count: infinite;
  @keyframes pulsate {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`


const Input = styled.input`
  display: none;
`

export { Container, Box, Paragraph, Label, Input, BotaoPulsar }