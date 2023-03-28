import {
  Body,
  Container,
  Title,
  SubContainer,
  SubContainerItem,
  Input,
  Label,
  Button,
} from "./Register-style";
import { useForm } from "react-hook-form";
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  async function registerUser(userData) {
    const { name, password } = userData;

    const user = {
      username: name,
      password,
    };

    try {
      const register = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((resp) => resp.json())
        .then((data) => console.log(data));
    } catch (error) {
      console.log(error);
    }
  }
  const onSubmit = (data) => {
    registerUser(data);
    document.getElementById("name").value = "";
    document.getElementById("password").value = "";
  };

  return (
    <Body onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <SubContainer>
          <Title>Registre-se</Title>

          <SubContainerItem>
            <Label htmlFor="name">Nome</Label>
            <Input
              {...register("name", { required: true })}
              type="text"
              name="name"
              id="name"
              required
            />
            {errors.name && (
              <span style={{ color: "#DC3545" }}>
                Esse campo é obrigatório!
              </span>
            )}
          </SubContainerItem>
          <SubContainerItem>
            <Label htmlFor="password">Senha</Label>
            <Input
              type="password"
              name="password"
              id="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span style={{ color: "#DC3545" }}>
                Esse campo é obrigatório!
              </span>
            )}
          </SubContainerItem>
          <span style={{ marginBottom: "35px", fontSize: "12px" }}>
            Já possui uma conta? <a href="/login">Entre Aqui</a>
          </span>
          <Button type="submit">Enviar</Button>
        </SubContainer>
      </Container>
    </Body>
  );
}
