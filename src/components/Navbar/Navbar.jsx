import { Outlet } from "react-router-dom";
import logo from "../../images/LogoBN.png";
import { Button, ImageLogo, InputSpace, Nav } from "./NavbarStyled";

export function Navbar() {
  return (
    <div>
      <Nav>
        <InputSpace>
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Pesquise por um título" />
        </InputSpace>

        <ImageLogo src={logo} alt="Logo Breaking News" />

        <Button>ENTRAR</Button>
      </Nav>
      <Outlet />
    </div>
  );
}
