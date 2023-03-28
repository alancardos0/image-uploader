import {
  Body,
  Container,
  Title,
  SubContainer,
  SubContainerItem,
  Input,
  Label,
  Button,
} from "./Login-style";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function userLogin(userData) {
    const { name, password } = userData;

    const user = {
      username: name,
      password,
    };

    try {
      const login = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.auth === true) {
            localStorage.setItem("authentication", JSON.stringify(data.token));
            navigate("/home");
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit = (data) => {
    userLogin(data);
    document.getElementById("name").value = "";
    document.getElementById("password").value = "";
  };

  return (
    <Body onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <SubContainer>
          <Title>Login</Title>

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
            Não possui uma conta? <a href="/register">Registre-se aqui</a>
          </span>
          <Button type="submit">Enviar</Button>
        </SubContainer>
      </Container>
    </Body>
  );
}
