import React from "react";
import styled from "styled-components";

const Body = styled.form`
  background-color: #fff;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: 100%;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f6f8fb;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 36px;
  width: 25%;
`;

const Title = styled.h1`
  text-align: center;
  font-family: "Poppins";
  font-size: 24px;
  font-weight: 600;
`;

const SubContainerItem = styled.div`
  margin: 10px 0;
`;

const Label = styled.label`
  font-size: 18px;
  font-family: "Poppins";
`;

const Input = styled.input`
  width: 100%;
  padding: 5px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #bdbdbd;
  outline: none;
  border-radius: 20px;
  :focus {
    border-bottom: 1px solid;
  }
`;

const Button = styled.button`
  border-radius: 20px;
  border: none;
  background: #2f80ed;
  text-align: center;
  font-family: Poppins;
  color: #fff;
  font-size: 18px;
  padding: 5px;
  :hover {
    background: #4b97fc;
  }
`;

export {
  Body,
  Container,
  Title,
  SubContainer,
  SubContainerItem,
  Input,
  Label,
  Button,
};
