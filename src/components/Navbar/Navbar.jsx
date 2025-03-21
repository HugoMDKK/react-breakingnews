import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/LogoBN.png";
import { Button, ErrorSpan, ImageLogo, InputSpace, Nav } from "./NavbarStyled";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchSchema = z.object({
  title: z
    .string()
    .nonempty("Campo obrigatório")
    .refine((value) => !/^\s+$/.test(value), {
      message: "Não é permitido espaços em branco",
    }),
});

export function Navbar() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
  });
  const navigate = useNavigate();

  function onSearch(data) {
    const { title } = data;
    navigate(`/search/${title}`);
    reset();
  }
  return (
    <div>
      <Nav>
        <form onSubmit={handleSubmit(onSearch)}>
          <InputSpace>
            <button type="submit">
              <i className="bi bi-search"></i>
            </button>

            <input
              {...register("title")}
              type="text"
              placeholder="Pesquise por um título"
            />
          </InputSpace>
        </form>

        <Link to="/">
          <ImageLogo src={logo} alt="Logo Breaking News" />
        </Link>

        <Button>ENTRAR</Button>
      </Nav>

      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
      <Outlet />
    </div>
  );
}
