import { Input } from "../../components/Input/Input.jsx";
import { Button, ErrorSpan } from "../../components/Navbar/NavbarStyled.jsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContainer, Section } from "./AuthenticationStyled.jsx";
import { signinSchema } from "../../schema/SigninSchema.js";
import { signupSchema } from "../../schema/SignupSchema.js";
import { signin, signup } from "../../services/userServices.js";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


export function Authentication() {

  const {
    register: registerSignin,
    handleSubmit: handleSubmitSignin,
    formState: { errors: errorsSignin },
  } = useForm({ resolver: zodResolver(signinSchema) });

  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    formState: { errors: errorsSignup },
  } = useForm({ resolver: zodResolver(signupSchema) });

  async function inHanleSubmit(data) {
    try {
      const response = await signin(data);
      const token = response.data.token;
      Cookies.set("token", token, { expires: 1 });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  const navigate = useNavigate();

  async function upHanleSubmit(data) {
    try {
      const response = await signup(data);
      const token = response.data.token;
      Cookies.set("token", token, { expires: 1 });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  
  return (
    <AuthContainer>
      <Section type="signin">
        <h2>Entrar</h2>
        <form onSubmit={handleSubmitSignin(inHanleSubmit)}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            register={registerSignin}
          />
          {errorsSignin.email && (
            <ErrorSpan>{errorsSignin.email.message}</ErrorSpan>
          )}
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            register={registerSignin}
          />
          {errorsSignin.password && (
            <ErrorSpan>{errorsSignin.password.message}</ErrorSpan>
          )}
          <Button type="submit">Entrar</Button>
        </form>
      </Section>



      <Section type="signup">
        <h2>Criar conta</h2>
        <form onSubmit={handleSubmitSignup(upHanleSubmit)}>
          <Input
            type="text"
            placeholder="Nome"
            name="name"
            register={registerSignup}
          />
          {errorsSignup.name && (
            <ErrorSpan>{errorsSignup.name.message}</ErrorSpan>
          )}
          <Input
            type="email"
            placeholder="Email"
            name="email"
            register={registerSignup}
          />
          {errorsSignup.email && (
            <ErrorSpan>{errorsSignup.email.message}</ErrorSpan>
          )}
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            register={registerSignup}
          />
          {errorsSignup.password && (
            <ErrorSpan>{errorsSignin.password.message}</ErrorSpan>
          )}
          <Input
            type="password"
            placeholder="Confirmar senha"
            name="confirmPassword"
            register={registerSignup}
          />
          {errorsSignup.confirmPassword && (
            <ErrorSpan>{errorsSignup.confirmPassword.message}</ErrorSpan>
          )}
          <Button type="submit">Criar conta</Button>
        </form>
      </Section>
    </AuthContainer>
  );
}
